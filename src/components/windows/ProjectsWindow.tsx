import React, { useState } from "react";
import { cvData, Project } from "@/data/cvData";
import { ProjectsFolderIcon } from "@/components/PixelIcons";

export const ProjectsWindow: React.FC = () => {
  const { projects } = cvData;
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0].id);

  const selectedProject: Project =
    projects.find((p) => p.id === selectedProjectId) || projects[0];

  return (
    <div className="p-3 text-black font-sans selectable-text text-[13px] max-w-[720px]">
      {/* Explorer Path Toolbar */}
      <div className="flex items-center gap-2 mb-2 p-1.5 win98-bevel-out bg-[#c0c0c0] text-[11px]">
        <span className="text-[#606060] font-bold">Address:</span>
        <div className="flex-1 win98-bevel-in bg-white px-2 py-0.5 font-mono text-[11px] text-[#000080]">
          C:\Rio\Projects\{selectedProject.id}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 min-h-[380px]">
        {/* Left pane: Project Tree / List */}
        <div className="win98-expand-panel md:col-span-5 win98-bevel-in bg-white p-2 max-h-[420px] overflow-y-auto">
          <div className="text-[11px] font-bold text-[#606060] pb-1 mb-1 border-b border-[#dfdfdf]">
            Daftar Portofolio & Proyek ({projects.length})
          </div>
          <div className="space-y-1">
            {projects.map((proj) => {
              const isSelected = proj.id === selectedProjectId;
              return (
                <button
                  key={proj.id}
                  onClick={() => setSelectedProjectId(proj.id)}
                  className={`w-full text-left p-1.5 flex items-start gap-2 border outline-none cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-[#000080] text-white border-[#000080]"
                      : "bg-transparent text-black border-transparent hover:bg-[#e0e8f0]"
                  }`}
                  type="button"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <ProjectsFolderIcon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-[12px] truncate">
                      {proj.title}
                    </div>
                    <div
                      className={`text-[10px] truncate ${
                        isSelected ? "text-[#dfdfdf]" : "text-[#606060]"
                      }`}
                    >
                      {proj.organization} ({proj.period})
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right pane: Project Detailed Inspection */}
        <div className="win98-expand-panel md:col-span-7 win98-bevel-in bg-white p-3 max-h-[420px] overflow-y-auto">
          <div className="border-b border-[#dfdfdf] pb-2 mb-3">
            <div className="inline-block px-1.5 py-0.5 text-[10px] font-bold bg-[#000080] text-white mb-1">
              {selectedProject.category}
            </div>
            <h2 className="text-base font-bold text-[#000080] leading-snug">
              {selectedProject.title}
            </h2>
            <div className="text-[11px] text-[#606060]">
              🏢 {selectedProject.organization} &bull; ⏱️ {selectedProject.period}
            </div>
            <div className="text-[11px] font-bold text-[#b03000] mt-0.5">
              Peran: {selectedProject.role}
            </div>
          </div>

          <div className="mb-3">
            <h4 className="font-bold text-[11px] text-[#404040] mb-1">
              Deskripsi Proyek:
            </h4>
            <p className="text-[12px] leading-relaxed text-[#222222] bg-[#f9f9f9] p-2 border-l-2 border-[#000080]">
              {selectedProject.description}
            </p>
          </div>

          <div className="mb-3">
            <h4 className="font-bold text-[11px] text-[#404040] mb-1">
              Implementasi & Hasil:
            </h4>
            <ul className="list-disc list-inside text-[11px] text-[#333333] space-y-1.5 bg-[#fafafa] p-2 border border-[#eaeaea]">
              {selectedProject.impact.map((imp, idx) => (
                <li key={idx} className="leading-relaxed">
                  {imp}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[11px] text-[#404040] mb-1">
              Teknologi & Stack:
            </h4>
            <div className="flex flex-wrap gap-1">
              {selectedProject.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-[11px] win98-bevel-out bg-[#dfdfdf] font-mono text-[#000080] font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 win98-bevel-in-gray p-1 text-[11px] text-[#333333] flex justify-between">
        <span>Status: Proyek terverifikasi sesuai riwayat kerja CV</span>
        <span>1 object selected</span>
      </div>
    </div>
  );
};
