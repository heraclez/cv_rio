import React from "react";
import Image from "next/image";
import { cvData } from "@/data/cvData";
import { ResumeIcon, ContactIcon, DownloadFloppyIcon } from "@/components/PixelIcons";

interface AboutWindowProps {
  onOpenWindow: (id: string) => void;
}

export const AboutWindow: React.FC<AboutWindowProps> = ({ onOpenWindow }) => {
  const { personal, experience } = cvData;
  const latestExp = experience[0];

  return (
    <div className="p-3 text-black font-sans selectable-text text-[13px] max-w-[620px]">
      {/* Banner / Header Box */}
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start p-3 bg-white win98-bevel-in mb-3">
        <div className="relative w-28 h-32 flex-shrink-0 win98-bevel-out bg-[#c0c0c0] p-1 flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden win98-bevel-in bg-black">
            <Image
              src={personal.avatarUrl}
              alt={personal.name}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <div className="inline-block px-2 py-0.5 bg-[#000080] text-white text-[11px] font-bold mb-1">
            PERSONAL PROFILE
          </div>
          <h1 className="text-xl font-bold tracking-tight text-[#000080]">
            {personal.name}
          </h1>
          <p className="text-[12px] font-bold text-[#404040] mb-1">
            {personal.title}
          </p>
          <p className="text-[11px] text-[#606060] mb-2 flex items-center justify-center sm:justify-start gap-1">
            <span>📍</span> {personal.location}
          </p>
        </div>
      </div>

      {/* Ringkasan Profil */}
      <fieldset className="border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] p-3 mb-3 bg-[#c0c0c0]">
        <legend className="px-1 font-bold text-[12px] text-[#000080]">
          Ringkasan Profesional
        </legend>
        <p className="text-[12px] leading-relaxed text-black">
          {personal.summaryId}
        </p>
      </fieldset>

      {/* Status & Pengalaman Terkini */}
      <fieldset className="border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] p-3 mb-3 bg-[#c0c0c0]">
        <legend className="px-1 font-bold text-[12px] text-[#000080]">
          Posisi & Pengalaman Terkini
        </legend>
        <div className="win98-bevel-in bg-white p-2.5 text-[12px]">
          <div className="flex justify-between items-start font-bold text-[#000080]">
            <span>{latestExp.company}</span>
            <span className="text-[11px] text-[#404040] bg-[#dfdfdf] px-1 win98-bevel-thin-out">
              {latestExp.period}
            </span>
          </div>
          <div className="font-semibold text-black mb-1">{latestExp.role}</div>
          <p className="text-[11px] text-[#333333] mb-2">{latestExp.description}</p>
          <ul className="list-disc list-inside text-[11px] text-[#404040] space-y-0.5">
            {latestExp.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      </fieldset>

      {/* Tombol Akses Cepat */}
      <div className="flex flex-wrap gap-2 justify-end pt-1">
        <button
          onClick={() => onOpenWindow("resume")}
          className="win98-btn"
          type="button"
        >
          <ResumeIcon size={16} />
          <span>Lihat Resume Lengkap</span>
        </button>
        <button
          onClick={() => onOpenWindow("contact")}
          className="win98-btn"
          type="button"
        >
          <ContactIcon size={16} />
          <span>Hubungi Rio</span>
        </button>
        <button
          onClick={() => onOpenWindow("download")}
          className="win98-btn font-bold text-[#000080]"
          type="button"
        >
          <DownloadFloppyIcon size={16} />
          <span>Unduh CV (PDF)</span>
        </button>
      </div>
    </div>
  );
};
