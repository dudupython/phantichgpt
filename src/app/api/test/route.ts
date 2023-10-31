import OpenAI from 'openai';
import { NextResponse } from 'next/server'
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { kv } from '@vercel/kv'
import { Ratelimit } from '@upstash/ratelimit'
// import { currentUser } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs';
// import { checkSubscription, checkUserLimit, incrementUserLimit } from "@/lib/user-limit";
import { checkUserLimit, incrementUserLimit } from "@/lib/user-limit";

export const runtime = 'edge';
const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"]
});

// export async function POST(req: Request) {
//     const { messages } = await req.json();
//     console.log('format', messages)
//     //worked
// //     const params: OpenAI.Chat.ChatCompletionCreateParams = {
// //         // messages: [{ role: 'user', content: 'this is test message' }],
// //         messages,
// //         model: 'gpt-3.5-turbo',
// //     };
// //   const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
// //   return NextResponse.json(chatCompletion.choices[0])

//     const response = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         messages: [
//             // {"role": "system", "content": `Generate 2 professional linkedin profile with no hashtags and clearly labeled "1." and "2.".
//             // Make sure each generated biography is less than 160 characters, has short sentences that are found in Linkedin bios `},
//             // messages[0],
//             // {"role": "user", "content": messages[0].content},
//             {'role': 'user', 'content': `Generate 2 professional linkedin profile with no hashtags and clearly labeled "1." and "2.".
//              Make sure each generated biography is less than 160 characters, has short sentences that are found in Linkedin bios 
//              ${messages[0].content}`
//         },
//         ],
//         });
//     const responseMessage = response//.choices[0].message;
//     return NextResponse.json(responseMessage)
// }

export async function POST(req: Request) {
  //TA add
  // const user = await currentUser();
  const { userId } : { userId: string | null } = auth();
  
  if(!userId){
    return new Response("Unauthorized", { status: 401 });
  }

  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    const ip = req.headers.get('x-forwarded-for')
    const ratelimit = new Ratelimit({
      redis: kv,
      // rate limit to 5 requests per 10 seconds
      limiter: Ratelimit.slidingWindow(2, '10 s'),
      analytics: true,
    })
    // Or use a userID, apiKey or ip address for individual limits.
    // const identifier = "api";

    const { success, limit, reset, remaining } = await ratelimit.limit(
      `ratelimit_${ip}`
      // identifier
    )

    // limit user=5
    const reachToLimit = await checkUserLimit();
    // const isPro = await checkSubscription();

    if (!reachToLimit) { // && !isPro
      return  NextResponse.json({ message: "You are reach to limit. Please upgrade to higher plan.", status: 403 }, { status: 403 });
    }
    


    if (!success) {
      return new Response('You have reached your request limit for the day.', {
        status: 429,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString()
        }
      })
    }
  }
    // Extract the `prompt` from the body of the request
    const { prompt } = await req.json();
   
    // Request the OpenAI API for the response based on the prompt
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      // a precise prompt is important for the AI to reply with the correct tokens
      messages: [
        {
          role: 'user',
          content: `Generate 2 professional linkedin profile with no hashtags and clearly labeled "1." and "2.".
          //              Make sure each generated biography is less than 160 characters, has short sentences that are found in Linkedin bios:
        ${prompt}
                
        Output:\n`,
        },
      ],
      max_tokens: 300,
      temperature: 0, // you want absolute certainty for spell check
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1,
    });
   
    const stream = OpenAIStream(response, {
      onCompletion: async () => {
        await incrementUserLimit();
      }
    });
   
    return new StreamingTextResponse(stream);
  }