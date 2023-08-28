"use client";

import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import UploadButton from "./gallery/upload-button";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex gap-64">
        <h1 className="text-4xl font-bold">
          Welcome to Huraira Photos Cloud App
        </h1>

        <CldUploadButton
          onUpload={(result: UploadResult) => {
            setImageId(result.info.public_id);
          }}
          uploadPreset="jwsyej1h"
          className="flex-shrink-0 text-white bg-black border-0 py-2 px-4 focus:outline-none  rounded text-lg "
        />
      </div>

      {imageId && (
        <CldImage
          width="500"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="image"
        />
      )}
    </main>
  );
}
