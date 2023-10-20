import OpenAI from 'openai';
// import { NextResponse } from 'next/server'
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
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
   
    const stream = OpenAIStream(response);
   
    return new StreamingTextResponse(stream);
  }