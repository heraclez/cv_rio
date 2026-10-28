import React, { useState } from "react";
import { cvData } from "@/data/cvData";

export const ResumeWindow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const { experience, education } = cvData;

  return (
    <div className="p-3 text-black font-sans selectable-text text-[13px] max-w-[680px]">
      {/* Windows 98 Tabstrip */}
      <div className="flex gap-1 pl-1 border-b-2 border-[#808080]">
        <button
          onClick={() => setActiveTab("experience")}
          className={`px-3 py-1.5 text-[12px] font-bold border-t-2 border-l-2 border-r-2 outline-none cursor-pointer ${
            activeTab === "experience"
              ? "bg-[#c0c0c0] border-t-white border-l-white border-r-[#808080] -mb-[2px] pb-2 z-10"
              : "bg-[#b0b0b0] border-t-white border-l-white border-r-[#808080] text-[#404040]"
          }`}
          type="button"
        >
          💼 Pengalaman Kerja ({experience.length})
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`px-3 py-1.5 text-[12px] font-bold border-t-2 border-l-2 border-r-2 outline-none cursor-pointer ${
            activeTab === "education"
              ? "bg-[#c0c0c0] border-t-white border-l-white border-r-[#808080] -mb-[2px] pb-2 z-10"
              : "bg-[#b0b0b0] border-t-white border-l-white border-r-[#808080] text-[#404040]"
          }`}
          type="button"
        >
          🎓 Pendidikan ({education.length})
        </button>
      </div>

      {/* Tab Content Panel */}
      <div className="win98-bevel-in bg-white p-3 min-h-[360px] max-h-[460px] overflow-y-auto">
        {activeTab === "experience" ? (
          <div className="space-y-4">
            {experience.map((item, idx) => (
              <div
                key={idx}
                className="border border-[#c0c0c0] p-3 bg-[#fafafa] hover:bg-[#f0f4f8] transition-colors"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 mb-1 pb-1 border-b border-[#dfdfdf]">
                  <h3 className="font-bold text-[14px] text-[#000080]">
                    {item.company}
                  </h3>
                  <span className="inline-block px-2 py-0.5 win98-bevel-out bg-[#c0c0c0] font-mono text-[11px] font-bold text-black self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>

                <div className="text-[12px] font-bold text-[#b03000] mb-2">
                  {item.role} &bull; <span className="font-normal text-[#606060]">{item.type}</span>
                </div>

                <p className="text-[12px] text-[#222222] mb-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="mb-2">
                  <span className="text-[11px] font-bold text-[#404040] block mb-1">
                    Tanggung Jawab & Pencapaian:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-[#333333] space-y-1 pl-1">
                    {item.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-1.5 py-0.5 text-[10px] win98-bevel-thin-out bg-[#e8e8e8] font-mono text-[#000080]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="border border-[#c0c0c0] p-3 bg-[#fafafa]"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 mb-1 pb-1 border-b border-[#dfdfdf]">
                  <h3 className="font-bold text-[14px] text-[#000080]">
                    {edu.institution}
                  </h3>
                  <span className="inline-block px-2 py-0.5 win98-bevel-out bg-[#c0c0c0] font-mono text-[11px] font-bold text-black self-start sm:self-auto">
                    {edu.period}
                  </span>
                </div>

                <div className="text-[12px] font-bold text-[#b03000] mb-1">
                  {edu.degreeOrLevel}
                </div>
                <div className="text-[11px] text-[#606060] mb-2">
                  📍 {edu.location}
                </div>

                {edu.details && (
                  <p className="text-[12px] text-[#333333] italic bg-[#f4f4f4] p-2 border-l-2 border-[#000080]">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}

            <div className="p-3 bg-[#ffffdd] border border-[#d0c080] text-[11px] text-[#554400]">
              ℹ️ Catatan: Riwayat pendidikan tercantum sesuai dengan dokumen resmi CV asli Reunard Rio E.K.
            </div>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="mt-2 text-[11px] text-[#555555] flex justify-between items-center px-1">
        <span>Menampilkan {activeTab === "experience" ? "Pengalaman Kerja" : "Riwayat Pendidikan"}</span>
        <span>Windows 98 Resume Explorer</span>
      </div>
    </div>
  );
};
