"use client";

import Image from "next/image";
// import "@uploadthing/react/styles.css";

import { UploadDropzone } from "@/lib/uploadthing";
import { useState } from "react";
import { roomType, rooms, themeType, themes } from "@/utils/dropdownTypes";
import Link from "next/link";


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
        <div className="max-w-2xl p-8">
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

            {imageUrl && (
                <div>
                    <div className="relative aspect-video mt-2">
                        <Image
                            alt="Upload"
                            fill
                            className="object-cover rounded-md"
                            src={imageUrl}
                        />
                    </div>
                </div>
            )}

              {restoredImage && (
                <div>
                  Here is your remodeled <b>{room.toLowerCase()}</b> in the{" "}
                  <b>{theme.toLowerCase()}</b> theme!{" "}
                </div>
              )}
              {restoredImage && (
                <div className="sm:mt-0 mt-8">
                  <h2 className="mb-1 font-medium text-lg">Generated Room</h2>
                    
                    <Image
                      alt="restored photo"
                      src={restoredImage}
                      className="rounded-md relative sm:mt-0 mt-2 cursor-zoom-in w-full h-96"
                      width={475}
                      height={475}
                      onLoad={() => setRestoredLoaded(true)}
                    />
                    
                </div>)}
        </div>
    );
}