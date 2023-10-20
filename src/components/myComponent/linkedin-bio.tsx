 
'use client';
// import { useChat } from 'ai/react';
import { useCompletion } from 'ai/react';
import Image from 'next/image';
import { useRef, useState , useCallback } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import DropDown, { VibeType } from '@/components/myComponent/DropDown';
import LoadingDots from '../qr/loadingdots';
import { Textarea } from "@/components/ui/textarea"

// export type VibeType = "Professional" | "Casual" | "Funny";
type BioType = string
// interface DropDownProps {
//   vibe: VibeType;
//   setVibe: (vibe: VibeType) => void;
// }

// let vibes: VibeType[] = ["Professional", "Casual", "Funny"];

// interface DropDownProps {
//   vibe: VibeType;
//   setVibe: (vibe: VibeType) => void;
// }
export default function Page() {
    const [bio, setBio] = useState<BioType>('');
    const [vibe, setVibe] = useState<VibeType>('Professional');
    // const bioRef = useRef<null | HTMLDivElement>(null);
  
    // const scrollToBios = () => {
    //   if (bioRef.current !== null) {
    //     bioRef.current.scrollIntoView({ behavior: 'smooth' });
    //   }
    // };
    //messages, handleInputChange, 
    const {handleSubmit, isLoading, completion, complete  } = useCompletion({
        body: {
          vibe,
          bio,
        },
        api: '/api/bio',
        
        // onResponse() {
        //   scrollToBios();
        // },
      });
  
    // const onSubmit = (e: any) => {
    //   setBio(input);
    //   handleSubmit(e);
    // };
  
    // const lastMessage = messages[messages.length - 1];
    // const generatedBios = completion // lastMessage?.role === "assistant" ? lastMessage.content : null;
    const checkAndPublish = useCallback(
      async (c: any) => {
        const completion = await complete(c);
        if (!completion) throw new Error('Failed to check typos');
        
        // const typos = JSON.parse(completion);
        // // you should more validation here to make sure the response is valid
        // if (typos?.length && !window.confirm('Typos found… continue?')) return;
        // else alert('Post published');
      },
      [complete],
    );

    return (
      <div className="flex max-w-5xl mx-auto flex-col items-center justify-center ">
        
        {/* <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20"> */}
         
          <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
            Generate your next Linkedin profile
          </h1>
          <p className="text-slate-500 mt-5">Generate linkedin profile in seconds</p>
          {/* <form className="max-w-xl w-full" onSubmit={handleSubmit}> */}
            <div className="max-w-xl w-full">
            <div className="flex mt-10 items-center space-x-3">
              <Image
                src="/1-black.png"
                width={30}
                height={30}
                alt="1 icon"
                className="mb-5 sm:mb-0"
              />
              <p className="text-left font-medium">
                Copy your current bio{' '}
                <span className="text-slate-500">
                  (or write a few sentences about yourself)
                </span>
                .
              </p>
            </div>
            <Textarea
              value={bio}
              onChange={e =>  setBio(e.target.value)} //{handleInputChange}
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
              placeholder={
                'e.g. Senior Data Scientist @vingroup. Discussing about data product, AI, web development, and Investment'
              }
            />
            <div className="flex mb-5 items-center space-x-3">
              <Image src="/2-black.png" width={30} height={30} alt="1 icon" />
              <p className="text-left font-medium">Select your vibe.</p>
            </div>
            <div className="block">
              <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
            </div>
  
            {!isLoading && (
              <button onClick={() => checkAndPublish({bio, vibe})}
                className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
                type="submit"
              >
                Generate your bio &rarr;
              </button>
            )}

            {isLoading && (
              <button
                className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
                disabled
              >
                    <LoadingDots color="white" /></button> 
            )}
         
         



            
            </div>
          {/* </form> */}
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{ duration: 2000 }}
          />
          <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
          
          <output className="space-y-10 my-10">
            {completion}
            {/* {completion && (
              <>
                <div>
                  <h2
                    className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                    ref={bioRef}
                  >
                    Your generated bios
                  </h2>
                </div>
                <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                  {completion
                    .substring(completion.indexOf('1') + 3)
                    .split('2.')
                    .map((generatedBio) => {
                      return (
                        <div
                          className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                          onClick={() => {
                            navigator.clipboard.writeText(generatedBio);
                            toast('Bio copied to clipboard', {
                              icon: '✂️',
                            });
                          }}
                          key={generatedBio}
                        >
                          <p>{generatedBio}</p>
                        </div>
                      );
                    })}
                </div>
              </>
            )} */}
          </output>


       
      </div>
    );
  }