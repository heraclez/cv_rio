import React, { useState } from "react";
import { cvData } from "@/data/cvData";

export const ContactWindow: React.FC = () => {
  const { personal } = cvData;
  const [subject, setSubject] = useState<string>("Peluang Kerja / Kolaborasi untuk Rio");
  const [senderName, setSenderName] = useState<string>("");
  const [message, setMessage] = useState<string>(
    "Halo Mas Rio,\n\nSaya melihat CV dan desktop profil Anda dan tertarik untuk berdiskusi mengenai peluang kerja / proyek..."
  );
  const [copied, setCopied] = useState<boolean>(false);

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `${message}\n\nPengirim: ${senderName || "Calon Rekruter/Klien"}`
    )}`;
    window.open(mailtoUrl, "_blank");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="p-3 text-black font-sans selectable-text text-[13px] max-w-[640px]">
      {/* Outlook Express Toolbar */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 mb-2 win98-bevel-out bg-[#c0c0c0] text-[11px]">
        <button
          onClick={handleSendMail}
          className="win98-btn font-bold text-[#000080]"
          type="button"
        >
          <span>📨</span> Kirim Email
        </button>
        <button
          onClick={handleCopyEmail}
          className="win98-btn"
          type="button"
        >
          <span>📋</span> {copied ? "Tersalin!" : "Salin Alamat"}
        </button>
        <a
          href={personal.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="win98-btn text-[#008000] font-bold no-underline"
        >
          <span>💬</span> Chat WhatsApp
        </a>
        <a
          href={personal.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="win98-btn no-underline"
        >
          <span>🐙</span> GitHub Rio
        </a>
      </div>

      {/* Message Composition Form */}
      <form onSubmit={handleSendMail} className="win98-bevel-in bg-white p-3 space-y-2">
        {/* Recipient */}
        <div className="flex items-center gap-2 text-[12px]">
          <label className="w-16 font-bold text-[#000080] text-right">Kepada:</label>
          <div className="flex-1 p-1 bg-[#f4f4f4] border border-[#c0c0c0] font-mono text-[12px] flex justify-between items-center">
            <span>{personal.name} &lt;{personal.email}&gt;</span>
            <span className="text-[10px] text-[#606060] font-sans">Verified</span>
          </div>
        </div>

        {/* Sender Name */}
        <div className="flex items-center gap-2 text-[12px]">
          <label htmlFor="sender-name" className="w-16 font-bold text-[#404040] text-right">Nama Anda:</label>
          <input
            id="sender-name"
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Nama atau Perusahaan Anda"
            className="flex-1 p-1 border border-[#808080] text-[12px] outline-none win98-bevel-thin-in font-sans"
          />
        </div>

        {/* Subject */}
        <div className="flex items-center gap-2 text-[12px]">
          <label htmlFor="subject-input" className="w-16 font-bold text-[#404040] text-right">Subjek:</label>
          <input
            id="subject-input"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="flex-1 p-1 border border-[#808080] text-[12px] outline-none win98-bevel-thin-in font-sans"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-[#dfdfdf] my-1" />

        {/* Message body */}
        <div>
          <label htmlFor="message-body" className="block text-[11px] font-bold text-[#404040] mb-1">
            Pesan untuk Rio:
          </label>
          <textarea
            id="message-body"
            rows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-[#808080] text-[12px] outline-none win98-bevel-thin-in font-sans leading-relaxed resize-y"
          />
        </div>

        {/* Info Box */}
        <div className="bg-[#f0f4f8] p-2 border border-[#d0e0f0] text-[11px] text-[#334466] flex items-center justify-between">
          <span>📍 Lokasi: <strong>{personal.location}</strong></span>
          <span>📞 Telepon: <strong>{personal.phone}</strong></span>
        </div>
      </form>

      {/* Window Status Bar */}
      <div className="mt-2 win98-bevel-in-gray p-1 text-[11px] text-[#333333] flex justify-between">
        <span>Outlook Express &bull; Message Composition</span>
        <span>Online</span>
      </div>
    </div>
  );
};
