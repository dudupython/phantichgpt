import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
//   const { messages } = await req.json();
  const { vibe, bio } = await req.json();
  console.log(vibe, bio)
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [ //{'role': 'system', 'content': 'you are expert hiring manager with 10 year of experiences, you will help generate linkedin profile when user input their activities below'},
        {
            role: 'user',
            content: `Generate 2 ${vibe} linkedin profile with no hashtags and clearly labeled "1." and "2.". ${
              vibe === 'Funny'
                ? "Make sure there is a joke in there and it's a little ridiculous."
                : null
            }
              Make sure each generated biography is less than 160 characters, has short sentences that are found in Twitter bios, and base them on this context: ${bio}${
              bio.slice(-1) === '.' ? '' : '.'
            }`,
          },
    ],
    max_tokens: 200,
    temperature: 0, // you want absolute certainty for spell check
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}