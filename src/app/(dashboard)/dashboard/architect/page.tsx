"use client";

import Image from "next/image";
import { Suspense } from 'react';
import { CardSkeleton } from '@/components/skeletons';

import { UploadDropzone } from "@/lib/uploadthing";
import { useState } from "react";
import { roomType, rooms, themeType, themes } from "@/utils/dropdownTypes";
import Link from "next/link";
import Resizer from "react-image-file-resizer";
import LoadingDots from "@/components/qr/loadingdots";


export default function Page() {
    const [imageUrl, setImageUrl] = useState("");
    //TA
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [theme, setTheme] = useState<themeType>("Modern");
    const [room, setRoom] = useState<roomType>("Living Room");
    const [restoredImage, setRestoredImage] = useState("") //<string | null>(null);
    const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
  
    //

    async function generatePhoto(fileUrl: string) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setLoading(true);
      const res = await fetch("/api/gen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl: fileUrl, theme, room }),
      });
    
      let newPhoto = await res.json();
      if (res.status !== 200) {
        setError(newPhoto);
      } else {
        setRestoredImage(newPhoto[1]);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1300);
    }


    return (
        <div className="max-w-3xl container items-center justify-center ">
            <UploadDropzone
                endpoint={"image"}
                onClientUploadComplete={(res) => {
                    if (res?.[0].url) {
                        console.log("Good job!. We did it!", res?.[0].url);
                        setImageUrl(res?.[0].url);

                        //TA add
                        // setPhotoName(imageName);
                        // setOriginalPhoto(imageUrl);
                        console.log(res?.[0].url, '-------')
                        generatePhoto(res?.[0].url);
                    }
                }}
                onUploadError={(error: Error) => {
                    console.error("Ooops something is wrong", error);
                }}
            />
            <div className="text-xs text-muted-foreground mt-4">
                16:9 aspect ratio recommended
            </div>
            {loading && (
              
              <span className="pt-4">
                <LoadingDots color="black" />
              </span>
           
          )}

            {imageUrl && (
                <div>
                    <div className="relative aspect-video mt-2">
                        <Image
                            alt="Upload"
                            fill
                            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover rounded-md"
                            src={imageUrl}
                        />
                    </div>
                </div>
            )}
            {/* <Suspense fallback={<CardSkeleton />}> */}
            
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mt-8"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              {restoredImage && (
                <div className="text-xs text-muted-foreground mt-4">
                  Here is your remodeled <b>{room.toLowerCase()}</b> in the{" "}
                  <b>{theme.toLowerCase()}</b> theme!{" "}
                </div>
              )}

              {restoredImage && (
                <div className="mt-0 mt-8">
                    <a href={restoredImage} target="_blank" rel="noreferrer">
                    <Image
                      alt="restored photo"
                      src={restoredImage}
                      className="rounded-md relative sm:mt-0 mt-2 cursor-zoom-in w-full h-96"
                      width={500}
                      height={200}
                      object-fit='cover'
                      onLoad={() => setRestoredLoaded(true)}
                    /></a>
                    
                </div>)}
                {/* </Suspense> */}
        </div>
    );
}