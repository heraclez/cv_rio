import React, { useState } from "react";
import Image from "next/image";
import { cvData } from "@/data/cvData";

export const CertificatesWindow: React.FC = () => {
  const [viewMode, setViewMode] = useState<"details" | "scan">("details");
  const cert = cvData.certificates[0];

  return (
    <div className="p-3 text-black font-sans selectable-text text-[13px] max-w-[680px]">
      {/* Top Toggle Tabs */}
      <div className="flex gap-1 pl-1 border-b-2 border-[#808080] mb-2">
        <button
          onClick={() => setViewMode("details")}
          className={`px-3 py-1 text-[12px] font-bold border-t-2 border-l-2 border-r-2 outline-none cursor-pointer ${
            viewMode === "details"
              ? "bg-[#c0c0c0] border-t-white border-l-white border-r-[#808080] -mb-[2px] pb-1.5 z-10"
              : "bg-[#b0b0b0] border-t-white border-l-white border-r-[#808080] text-[#404040]"
          }`}
          type="button"
        >
          📜 Detail Kompetensi
        </button>
        <button
          onClick={() => setViewMode("scan")}
          className={`px-3 py-1 text-[12px] font-bold border-t-2 border-l-2 border-r-2 outline-none cursor-pointer ${
            viewMode === "scan"
              ? "bg-[#c0c0c0] border-t-white border-l-white border-r-[#808080] -mb-[2px] pb-1.5 z-10"
              : "bg-[#b0b0b0] border-t-white border-l-white border-r-[#808080] text-[#404040]"
          }`}
          type="button"
        >
          🔍 Scan Dokumen Asli
        </button>
      </div>

      <div className="win98-expand-panel win98-bevel-in bg-white p-3 max-h-[460px] overflow-y-auto">
        {viewMode === "details" ? (
          <div>
            {/* Header info */}
            <div className="bg-[#fff9e6] border border-[#e6d080] p-3 mb-3">
              <div className="text-[11px] font-bold text-[#b03000] uppercase tracking-wider mb-0.5">
                Sertifikat Kompetensi Resmi
              </div>
              <h2 className="text-base font-bold text-[#000080]">
                {cert.cluster}
              </h2>
              <div className="text-[12px] text-[#333333] font-medium mt-1">
                {cert.organization}
              </div>
              <div className="text-[11px] text-[#606060] mt-1 flex flex-wrap gap-x-4 gap-y-1">
                <span>📍 Dikeluarkan di: {cert.issuerLocation}</span>
                <span>📅 Tanggal: {cert.issueDate}</span>
                <span>✍️ Pemegang: {cert.holderName}</span>
                <span>👤 Manajer Sertifikasi: {cert.manager}</span>
              </div>
            </div>

            {/* Competency units table */}
            <h3 className="font-bold text-[12px] text-[#000080] mb-1.5">
              Daftar Unit Kompetensi (List of Units of Competency):
            </h3>

            <div className="win98-bevel-in bg-white overflow-x-auto">
              <table className="w-full text-left text-[12px] border-collapse">
                <thead>
                  <tr className="bg-[#dfdfdf] border-b border-[#808080] text-[#000000]">
                    <th className="p-2 border-r border-[#c0c0c0] w-10 text-center font-bold">
                      No
                    </th>
                    <th className="p-2 border-r border-[#c0c0c0] w-36 font-bold">
                      Kode Unit Kompetensi
                    </th>
                    <th className="p-2 font-bold">
                      Judul Unit Kompetensi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cert.units.map((u, i) => (
                    <tr
                      key={u.code}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"}
                    >
                      <td className="p-2 border-t border-r border-[#e0e0e0] text-center font-mono">
                        {i + 1}
                      </td>
                      <td className="p-2 border-t border-r border-[#e0e0e0] font-mono text-[#000080] font-bold text-[11px]">
                        {u.code}
                      </td>
                      <td className="p-2 border-t border-[#e0e0e0] text-[#222222]">
                        {u.title}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-3 text-[11px] text-[#555555] italic bg-[#f0f0f0] p-2 border-l-2 border-[#000080]">
              * Data kompetensi diambil langsung dari lampiran sertifikat resmi Badan Nasional Sertifikasi Profesi (BNSP) melalui LSP Telematika.
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-[11px] text-[#606060] mb-2">
              Pratinjau scan halaman sertifikat asli (LSP Telematika):
            </div>
            <div className="relative w-full max-w-[480px] h-[640px] win98-bevel-out bg-[#c0c0c0] p-1">
              <div className="relative w-full h-full win98-bevel-in bg-white overflow-hidden">
                <Image
                  src="/certificate-page.png"
                  alt="Scan Sertifikat LSP Telematika"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-2 win98-bevel-in-gray p-1 text-[11px] text-[#333333] flex justify-between">
        <span>Unit Kompetensi: 5/5 Terpenuhi</span>
        <span>LSP Telematika Indonesia</span>
      </div>
    </div>
  );
};
