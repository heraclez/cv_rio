import React from "react";
import { SettingsIcon } from "@/components/PixelIcons";

interface SettingsWindowProps {
  soundEnabled: boolean;
  onToggleSound: (enabled: boolean) => void;
  crtEnabled: boolean;
  onToggleCrt: (enabled: boolean) => void;
  desktopBg: string;
  onChangeBg: (color: string) => void;
}

export const SettingsWindow: React.FC<SettingsWindowProps> = ({
  soundEnabled,
  onToggleSound,
  crtEnabled,
  onToggleCrt,
  desktopBg,
  onChangeBg,
}) => {
  const bgOptions = [
    { label: "Teal Khas Win98 (Default)", value: "#008080" },
    { label: "Classic Navy Blue", value: "#000080" },
    { label: "Dark Slate Retro", value: "#1e393b" },
    { label: "Windows Platinum Gray", value: "#4a5568" },
  ];

  return (
    <div className="p-3 text-black font-sans selectable-text text-[13px] max-w-[480px]">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#dfdfdf]">
        <SettingsIcon size={24} />
        <div>
          <h3 className="font-bold text-[13px] text-[#000080]">
            Display & System Properties
          </h3>
          <p className="text-[11px] text-[#606060]">
            Kustomisasi tampilan nostalgia desktop Windows 98
          </p>
        </div>
      </div>

      {/* Sound Settings */}
      <fieldset className="border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] p-3 mb-3 bg-[#c0c0c0]">
        <legend className="px-1 font-bold text-[12px] text-[#000080]">
          Pengaturan Audio (Web Audio API)
        </legend>
        <label className="flex items-center gap-2 cursor-pointer text-[12px]">
          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={(e) => onToggleSound(e.target.checked)}
            className="cursor-pointer"
          />
          <span>Aktifkan Efek Suara Retro (Klik, Jendela Buka, Notifikasi)</span>
        </label>
        <p className="text-[11px] text-[#606060] mt-1 pl-5">
          * Default dimatikan agar mematuhi aturan kenyamanan pengguna (no autoplay).
        </p>
      </fieldset>

      {/* CRT Scanlines */}
      <fieldset className="border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] p-3 mb-3 bg-[#c0c0c0]">
        <legend className="px-1 font-bold text-[12px] text-[#000080]">
          Efek Layar Monitor CRT Retro
        </legend>
        <label className="flex items-center gap-2 cursor-pointer text-[12px]">
          <input
            type="checkbox"
            checked={crtEnabled}
            onChange={(e) => onToggleCrt(e.target.checked)}
            className="cursor-pointer"
          />
          <span>Aktifkan Efek Garis Pindai (Scanlines & Phosphor CRT)</span>
        </label>
        <p className="text-[11px] text-[#606060] mt-1 pl-5">
          * Memberikan nuansa tabung monitor CRT komputer tahun 1998.
        </p>
      </fieldset>

      {/* Desktop Background */}
      <fieldset className="border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] p-3 mb-3 bg-[#c0c0c0]">
        <legend className="px-1 font-bold text-[12px] text-[#000080]">
          Warna Desktop Windows 98
        </legend>
        <div className="space-y-1.5 mt-1">
          {bgOptions.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 cursor-pointer text-[12px]"
            >
              <input
                type="radio"
                name="desktop-bg"
                checked={desktopBg === opt.value}
                onChange={() => onChangeBg(opt.value)}
                className="cursor-pointer"
              />
              <span
                className="w-4 h-4 win98-bevel-thin-in inline-block flex-shrink-0"
                style={{ backgroundColor: opt.value }}
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-2 win98-bevel-in-gray p-1 text-[11px] text-[#333333] flex justify-between">
        <span>Settings Panel</span>
        <span>Windows 98 &bull; Personal Desktop</span>
      </div>
    </div>
  );
};
