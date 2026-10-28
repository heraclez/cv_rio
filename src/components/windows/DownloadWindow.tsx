import React, { useState } from "react";
import { DownloadFloppyIcon } from "@/components/PixelIcons";
import { cvData } from "@/data/cvData";

interface DownloadWindowProps {
  onClose: () => void;
}

export const DownloadWindow: React.FC<DownloadWindowProps> = ({ onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  const startDownload = () => {
    setDownloading(true);
    setProgress(15);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          setFinished(true);
          // Trigger actual browser download
          const link = document.createElement("a");
          link.href = cvData.personal.pdfDownloadUrl;
          link.download = "CV_Reunard_Rio_EK.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return 100;
        }
        return prev + 25;
      });
    }, 200);
  };

  const openDirectly = () => {
    window.open(cvData.personal.pdfDownloadUrl, "_blank");
  };

  return (
    <div className="p-3 text-black font-sans selectable-text text-[13px] max-w-[460px]">
      <div className="flex gap-3 items-start mb-3">
        <div className="win98-bevel-out p-1 bg-[#c0c0c0] flex-shrink-0">
          <DownloadFloppyIcon size={36} />
        </div>
        <div>
          <h3 className="font-bold text-[13px] text-[#000080] mb-1">
            File Download: CV Asli Reunard Rio E.K
          </h3>
          <p className="text-[12px] text-[#333333] leading-snug">
            Anda akan mengunduh berkas Curriculum Vitae resmi dalam format PDF (ukuran 567 KB).
          </p>
        </div>
      </div>

      <div className="win98-bevel-in bg-white p-3 mb-3 text-[11px] space-y-1">
        <div className="flex justify-between">
          <span className="text-[#606060]">Nama Berkas:</span>
          <span className="font-bold text-black">CV_Reunard_Rio_EK.pdf</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#606060]">Tipe Berkas:</span>
          <span>Adobe Acrobat Document (.pdf)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#606060]">Ukuran:</span>
          <span>567 KB</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#606060]">Sumber:</span>
          <span className="font-mono text-[#000080]">c:\project\cv_rio\public</span>
        </div>
      </div>

      {downloading && (
        <div className="mb-3">
          <div className="flex justify-between text-[11px] mb-1">
            <span>Proses Mengunduh:</span>
            <span className="font-mono font-bold">{progress}%</span>
          </div>
          {/* Windows 98 Progress Bar */}
          <div className="h-5 win98-bevel-in bg-white p-0.5 overflow-hidden flex">
            <div
              className="h-full bg-[#000080] transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          {finished && (
            <p className="text-[11px] text-[#008000] font-bold mt-1 text-center">
              ✓ Berkas berhasil diunduh ke komputer Anda!
            </p>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-end gap-2 pt-1 border-t border-[#dfdfdf]">
        <button
          onClick={openDirectly}
          className="win98-btn text-[12px]"
          type="button"
        >
          <span>👁️</span> Buka di Tab Baru
        </button>
        <button
          onClick={startDownload}
          disabled={downloading && !finished}
          className="win98-btn font-bold text-[#000080] text-[12px]"
          type="button"
        >
          <span>💾</span> Simpan Berkas
        </button>
        <button
          onClick={onClose}
          className="win98-btn text-[12px]"
          type="button"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};
