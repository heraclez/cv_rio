import React, { useState } from "react";
import { ShutdownIcon } from "@/components/PixelIcons";

interface ShutdownDialogProps {
  onClose: () => void;
  onConfirmShutdown: () => void;
}

export const ShutdownDialog: React.FC<ShutdownDialogProps> = ({
  onClose,
  onConfirmShutdown,
}) => {
  const [action, setAction] = useState<"shutdown" | "restart" | "standby">("shutdown");

  const handleOk = () => {
    if (action === "shutdown" || action === "standby") {
      onConfirmShutdown();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="p-3 text-black font-sans selectable-text text-[13px] max-w-[420px]">
      <div className="flex gap-3 items-start mb-3">
        <div className="win98-bevel-out p-1.5 bg-[#c0c0c0] flex-shrink-0">
          <ShutdownIcon size={28} />
        </div>
        <div>
          <h3 className="font-bold text-[13px] text-[#000080] mb-1">
            Shut Down Windows
          </h3>
          <p className="text-[12px] text-[#222222]">
            What do you want the computer to do?
          </p>
        </div>
      </div>

      <div className="win98-bevel-in bg-white p-3 mb-3 space-y-2 text-[12px]">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="shutdown-action"
            checked={action === "shutdown"}
            onChange={() => setAction("shutdown")}
            className="cursor-pointer"
          />
          <span>Shut down (Tampilkan layar nostalgia matikan komputer)</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="shutdown-action"
            checked={action === "restart"}
            onChange={() => setAction("restart")}
            className="cursor-pointer"
          />
          <span>Restart (Muat ulang desktop Windows 98)</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="shutdown-action"
            checked={action === "standby"}
            onChange={() => setAction("standby")}
            className="cursor-pointer"
          />
          <span>Stand by (Mode hemat daya)</span>
        </label>
      </div>

      <div className="flex justify-end gap-2 pt-1 border-t border-[#dfdfdf]">
        <button
          onClick={handleOk}
          className="win98-btn font-bold text-[#000080]"
          type="button"
        >
          OK
        </button>
        <button
          onClick={onClose}
          className="win98-btn"
          type="button"
        >
          Cancel
        </button>
        <button
          onClick={() => alert("Windows 98 Personal Desktop by Reunard Rio E.K")}
          className="win98-btn"
          type="button"
        >
          Help
        </button>
      </div>
    </div>
  );
};
