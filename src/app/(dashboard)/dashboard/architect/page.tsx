"use client";

import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";
import { useState } from "react";
import { roomType, rooms, themeType, themes } from "@/utils/dropdownTypes";


export default function Page() {
    const [imageUrl, setImageUrl] = useState("");
    //TA
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [theme, setTheme] = useState<themeType>("Modern");
    const [room, setRoom] = useState<roomType>("Living Room");
    const [restoredImage, setRestoredImage] = useState<string | null>(null);
    //

    async function generatePhoto(fileUrl: string) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setLoading(true);
      const res = await fetch("/generate", {
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
        <div className={"max-w-2xl p-8"}>
            <UploadDropzone
                endpoint={"image"}
                onClientUploadComplete={(res) => {
                    if (res?.[0].url) {
                        console.log("Good job!. We did it!", res?.[0].url);
                        setImageUrl(res?.[0].url);
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
        </div>
    );
}