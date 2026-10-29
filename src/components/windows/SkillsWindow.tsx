import React from "react";
import { cvData } from "@/data/cvData";

export const SkillsWindow: React.FC = () => {
  const { skillCategories } = cvData;

  return (
    <div className="p-3 text-black font-sans selectable-text text-[13px] max-w-[680px]">
      <div className="p-2 mb-3 bg-[#ffffdd] border border-[#d0c080] text-[11px] text-[#554400]">
        ℹ️ <strong>Keahlian Teknis & Operasional</strong> dikelompokkan berdasarkan pengalaman nyata web core banking, administrasi sistem Linux, dan sertifikasi database LSP Telematika.
      </div>

      <div className="win98-expand-panel win98-bevel-in bg-white p-3 max-h-[460px] overflow-y-auto space-y-4">
        {skillCategories.map((cat, idx) => (
          <fieldset
            key={idx}
            className="border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white p-3 bg-[#fafafa]"
          >
            <legend className="px-2 font-bold text-[12px] text-[#000080] bg-white border border-[#c0c0c0] win98-bevel-out">
              {cat.category}
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-2 win98-bevel-out bg-[#dfdfdf] flex flex-col justify-between"
                >
                  <div className="font-bold text-[12px] text-[#000080] mb-0.5 flex items-center gap-1.5">
                    <span className="text-[10px] text-[#b03000]">▪</span>
                    <span>{skill.name}</span>
                  </div>
                  <p className="text-[11px] text-[#333333] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-2 win98-bevel-in-gray p-1 text-[11px] text-[#333333] flex justify-between">
        <span>Total: 4 Kategori Keahlian Terverifikasi</span>
        <span>Control Panel Style</span>
      </div>
    </div>
  );
};
