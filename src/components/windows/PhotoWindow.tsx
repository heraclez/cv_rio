import React from "react";
import Image from "next/image";
import { cvData } from "@/data/cvData";

export const PhotoWindow: React.FC = () => {
  const { personal } = cvData;

  return (
    <div className="p-3 text-black font-sans text-[12px]">
      <div className="win98-bevel-in bg-white p-2 flex justify-center">
        <Image
          src={personal.fullPhotoUrl}
          alt={`Foto ${personal.name}`}
          width={576}
          height={1024}
          className="w-auto h-auto max-h-[58vh] max-w-full"
          priority
        />
      </div>
      <div className="mt-2 win98-bevel-in-gray p-1 text-[11px] flex justify-between">
        <span>{personal.fullPhotoFileName}</span>
        <span>576 x 1024 piksel</span>
      </div>
    </div>
  );
};
