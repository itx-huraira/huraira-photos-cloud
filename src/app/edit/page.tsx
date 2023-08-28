"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "bg-remove"
  >();

  const [pendingPrompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>

        <div className="flex gap-4">
          <Button
            className="flex-shrink-0 text-white bg-black border-0 py-2 px-4 focus:outline-none  rounded text-lg"
            variant="ghost"
            onClick={() => setTransformation(undefined)}
          >
            Clear All
          </Button>

          <div className="flex flex-col gap-4">
            <Button
              className="flex-shrink-0 text-white bg-black border-0 py-2 px-4 focus:outline-none  rounded text-lg"
              onClick={() => {
                setTransformation("generative-fill");
                setPrompt(pendingPrompt);
              }}
            >
              Apply Generative Fill
            </Button>
            <div className="flex flex-col gap-2">
              <Label className="font-bold">Prompt</Label>
              <Input
                value={pendingPrompt}
                onChange={(e) => setPendingPrompt(e.currentTarget.value)}
              />
            </div>
          </div>

          <Button
            className="flex-shrink-0 text-white bg-black border-0 py-2 px-4 focus:outline-none  rounded text-lg"
            onClick={() => setTransformation("blur")}
          >
            Apply Blur
          </Button>
          <Button
            className="flex-shrink-0 text-white bg-black border-0 py-2 px-4 focus:outline-none  rounded text-lg"
            onClick={() => setTransformation("grayscale")}
          >
            Convert to Gray
          </Button>
          <Button
            className="flex-shrink-0 text-white bg-black border-0 py-2 px-4 focus:outline-none  rounded text-lg"
            onClick={() => setTransformation("pixelate")}
          >
            Pixelate
          </Button>

          <Button
            className="flex-shrink-0 text-white bg-black border-0 py-2 px-4 focus:outline-none  rounded text-lg"
            onClick={() => setTransformation("bg-remove")}
          >
            Remove Background
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <CldImage src={publicId} width="400" height="300" alt="some image" />

          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              width="1400"
              height="900"
              alt="some image"
              crop="pad"
              fillBackground={{
                prompt,
              }}
            />
          )}

          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              blur
              alt="some image"
            />
          )}

          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              grayscale
              alt="some image"
            />
          )}

          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              pixelate
              alt="some image"
            />
          )}

          {transformation === "bg-remove" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              removeBackground
              alt="some image"
            />
          )}
        </div>
      </div>
    </section>
  );
}
