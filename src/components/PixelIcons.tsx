import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

// Classic Windows 98 Desktop & System Icons rendered with crisp SVGs

export const WindowsLogoIcon: React.FC<IconProps> = ({ size = 16, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    {/* Red tile */}
    <rect x="2" y="2" width="5" height="5" fill="#FF0000" />
    {/* Green tile */}
    <rect x="8" y="2" width="6" height="5" fill="#00AA00" />
    {/* Blue tile */}
    <rect x="2" y="8" width="5" height="6" fill="#0000AA" />
    {/* Yellow tile */}
    <rect x="8" y="8" width="6" height="6" fill="#FFAA00" />
    {/* Highlights and shadows */}
    <path d="M2 2H7V3H3V7H2V2Z" fill="#FFAAAA" />
    <path d="M8 2H14V3H9V7H8V2Z" fill="#AAFFAA" />
    <path d="M2 8H7V9H3V14H2V8Z" fill="#AAAAFF" />
    <path d="M8 8H14V9H9V14H8V8Z" fill="#FFFFAA" />
    <path d="M6 3H7V7H3V6H6V3Z" fill="#880000" />
    <path d="M13 3H14V7H9V6H13V3Z" fill="#005500" />
    <path d="M6 9H7V14H3V13H6V9Z" fill="#000055" />
    <path d="M13 9H14V14H9V13H13V9Z" fill="#AA5500" />
  </svg>
);

export const MyComputerIcon: React.FC<IconProps> = ({ size = 32, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    {/* Monitor body */}
    <rect x="4" y="3" width="24" height="18" fill="#C0C0C0" stroke="#000000" strokeWidth="1" />
    <rect x="5" y="4" width="22" height="1" fill="#FFFFFF" />
    <rect x="5" y="4" width="1" height="16" fill="#FFFFFF" />
    <rect x="26" y="4" width="1" height="16" fill="#808080" />
    <rect x="5" y="20" width="22" height="1" fill="#808080" />
    {/* Screen */}
    <rect x="7" y="6" width="18" height="12" fill="#000080" stroke="#000000" strokeWidth="1" />
    <rect x="8" y="7" width="16" height="1" fill="#008080" />
    <rect x="8" y="8" width="1" height="9" fill="#008080" />
    {/* Stand */}
    <rect x="13" y="22" width="6" height="3" fill="#C0C0C0" stroke="#000000" strokeWidth="1" />
    <rect x="10" y="25" width="12" height="3" fill="#C0C0C0" stroke="#000000" strokeWidth="1" />
    <rect x="11" y="25" width="10" height="1" fill="#FFFFFF" />
    <rect x="10" y="27" width="12" height="1" fill="#808080" />
    {/* Power LED */}
    <rect x="22" y="19" width="2" height="1" fill="#00FF00" />
  </svg>
);

export const ResumeIcon: React.FC<IconProps> = ({ size = 32, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    {/* Paper body */}
    <path
      d="M6 3H20L26 9V29H6V3Z"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="1"
    />
    {/* Fold corner */}
    <path d="M20 3V9H26" fill="#C0C0C0" stroke="#000000" strokeWidth="1" />
    {/* Text lines */}
    <rect x="9" y="12" width="14" height="2" fill="#000080" />
    <rect x="9" y="16" width="14" height="1" fill="#808080" />
    <rect x="9" y="19" width="14" height="1" fill="#808080" />
    <rect x="9" y="22" width="10" height="1" fill="#808080" />
    <rect x="9" y="25" width="12" height="1" fill="#008080" />
  </svg>
);

export const ProjectsFolderIcon: React.FC<IconProps> = ({ size = 32, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    {/* Folder back tab */}
    <path d="M3 7H13L16 10H29V25H3V7Z" fill="#C39B22" stroke="#000000" strokeWidth="1" />
    {/* White sheet inside */}
    <rect x="6" y="10" width="20" height="8" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
    <rect x="8" y="12" width="8" height="1" fill="#000080" />
    <rect x="8" y="14" width="12" height="1" fill="#808080" />
    {/* Folder front flap */}
    <path
      d="M2 13H30L27 27H2L2 13Z"
      fill="#FFD700"
      stroke="#000000"
      strokeWidth="1"
    />
    <path d="M3 14L28 14" stroke="#FFF59D" strokeWidth="1" />
    {/* Small gear / tool badge */}
    <rect x="18" y="18" width="8" height="6" fill="#000080" />
    <rect x="19" y="19" width="6" height="4" fill="#008080" />
    <rect x="21" y="20" width="2" height="2" fill="#FFFFFF" />
  </svg>
);

export const SkillsIcon: React.FC<IconProps> = ({ size = 32, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    {/* Control Panel / Tool window */}
    <rect x="4" y="4" width="24" height="24" fill="#C0C0C0" stroke="#000000" strokeWidth="1" />
    <rect x="5" y="5" width="22" height="4" fill="#000080" />
    <rect x="5" y="5" width="22" height="1" fill="#008080" />
    {/* Sliders / knobs */}
    <rect x="7" y="12" width="18" height="2" fill="#808080" stroke="#000000" strokeWidth="1" />
    <rect x="11" y="10" width="4" height="6" fill="#C0C0C0" stroke="#000000" strokeWidth="1" />
    <rect x="12" y="11" width="2" height="4" fill="#FFFFFF" />

    <rect x="7" y="19" width="18" height="2" fill="#808080" stroke="#000000" strokeWidth="1" />
    <rect x="18" y="17" width="4" height="6" fill="#C0C0C0" stroke="#000000" strokeWidth="1" />
    <rect x="19" y="18" width="2" height="4" fill="#FFFFFF" />

    <rect x="8" y="24" width="3" height="3" fill="#00AA00" stroke="#000000" strokeWidth="1" />
    <rect x="14" y="24" width="3" height="3" fill="#FF0000" stroke="#000000" strokeWidth="1" />
    <rect x="20" y="24" width="3" height="3" fill="#FFAA00" stroke="#000000" strokeWidth="1" />
  </svg>
);

export const CertificateIcon: React.FC<IconProps> = ({ size = 32, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    {/* Certificate parchment */}
    <rect x="4" y="4" width="24" height="24" fill="#FFFFE0" stroke="#000000" strokeWidth="1" />
    {/* Inner decorative border */}
    <rect x="6" y="6" width="20" height="20" fill="none" stroke="#C09000" strokeWidth="1" />
    {/* Header text line */}
    <rect x="9" y="9" width="14" height="2" fill="#800000" />
    {/* Sub text lines */}
    <rect x="9" y="13" width="14" height="1" fill="#404040" />
    <rect x="9" y="16" width="14" height="1" fill="#404040" />
    <rect x="9" y="19" width="8" height="1" fill="#404040" />
    {/* Gold / Red seal */}
    <circle cx="21" cy="21" r="4" fill="#FF0000" stroke="#800000" strokeWidth="1" />
    <circle cx="21" cy="21" r="2.5" fill="#FFD700" />
    {/* Ribbon tails */}
    <path d="M19 24L18 27L20 26L21 27L21 24" fill="#FF0000" />
  </svg>
);

export const ContactIcon: React.FC<IconProps> = ({ size = 32, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    {/* Envelope body */}
    <rect x="3" y="8" width="26" height="16" fill="#FFFFE0" stroke="#000000" strokeWidth="1" />
    {/* Envelope fold flap */}
    <path d="M3 8L16 18L29 8" stroke="#808080" strokeWidth="1" fill="none" />
    <path d="M4 9L16 19L28 9" stroke="#000000" strokeWidth="1" fill="none" />
    {/* Stamp */}
    <rect x="23" y="10" width="4" height="5" fill="#0000AA" stroke="#000000" strokeWidth="0.5" />
    <rect x="24" y="11" width="2" height="3" fill="#FFFFFF" />
    {/* Lightning bolt / speed lines */}
    <path d="M16 4L12 11H16L14 17L20 9H16L19 4H16Z" fill="#FFAA00" stroke="#804000" strokeWidth="0.5" />
  </svg>
);

export const DownloadFloppyIcon: React.FC<IconProps> = ({ size = 32, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    {/* Floppy 3.5" body with cut corner */}
    <path
      d="M4 4H24L28 8V28H4V4Z"
      fill="#204060"
      stroke="#000000"
      strokeWidth="1"
    />
    {/* Metal slider shutter top */}
    <rect x="8" y="4" width="14" height="10" fill="#C0C0C0" stroke="#000000" strokeWidth="1" />
    <rect x="11" y="6" width="3" height="6" fill="#204060" />
    {/* White label bottom */}
    <rect x="7" y="16" width="18" height="11" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
    <rect x="9" y="18" width="14" height="2" fill="#FF0000" />
    <rect x="9" y="22" width="14" height="1" fill="#808080" />
    <rect x="9" y="24" width="10" height="1" fill="#808080" />
  </svg>
);

export const RecycleBinIcon: React.FC<IconProps> = ({ size = 32, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    {/* Bin rim */}
    <ellipse cx="16" cy="7" rx="9" ry="3" fill="#808080" stroke="#000000" strokeWidth="1" />
    <ellipse cx="16" cy="6" rx="8" ry="2" fill="#000080" />
    {/* Body */}
    <path
      d="M7 7L10 26H22L25 7H7Z"
      fill="#0000AA"
      stroke="#000000"
      strokeWidth="1"
    />
    <path d="M9 8L11 25H21L23 8" fill="#5555FF" />
    {/* Paper sticking out */}
    <path d="M12 4L15 8L11 8Z" fill="#FFFFFF" stroke="#000000" strokeWidth="0.5" />
    <path d="M16 3L20 8L15 8Z" fill="#FFFFFF" stroke="#000000" strokeWidth="0.5" />
    {/* Recycling symbol */}
    <path d="M14 14L16 11L18 14H14Z" fill="#00FF00" />
    <rect x="15" y="14" width="2" height="4" fill="#00FF00" />
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ size = 16, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    {/* Gear shape */}
    <rect x="6" y="1" width="4" height="14" fill="#808080" />
    <rect x="1" y="6" width="14" height="4" fill="#808080" />
    <rect x="3" y="3" width="10" height="10" fill="#808080" />
    <rect x="4" y="4" width="8" height="8" fill="#C0C0C0" />
    <circle cx="8" cy="8" r="2" fill="#000080" />
  </svg>
);

export const VolumeIcon: React.FC<IconProps> = ({ size = 16, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    {/* Speaker body */}
    <rect x="2" y="6" width="3" height="4" fill="#000000" />
    <polygon points="5,6 9,2 9,14 5,10" fill="#000000" />
    {/* Sound waves */}
    <path d="M11 5C12 6 12 10 11 11" stroke="#000000" strokeWidth="1" fill="none" />
    <path d="M13 3C15 5 15 11 13 13" stroke="#000000" strokeWidth="1" fill="none" />
  </svg>
);

export const MutedVolumeIcon: React.FC<IconProps> = ({ size = 16, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    <rect x="2" y="6" width="3" height="4" fill="#000000" />
    <polygon points="5,6 9,2 9,14 5,10" fill="#000000" />
    <line x1="11" y1="5" x2="15" y2="11" stroke="#FF0000" strokeWidth="1.5" />
    <line x1="15" y1="5" x2="11" y2="11" stroke="#FF0000" strokeWidth="1.5" />
  </svg>
);

export const ShutdownIcon: React.FC<IconProps> = ({ size = 16, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    <circle cx="8" cy="8" r="6" stroke="#FF0000" strokeWidth="2" fill="none" />
    <line x1="8" y1="2" x2="8" y2="8" stroke="#FF0000" strokeWidth="2" />
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ size = 16, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    className={className}
    {...props}
  >
    <circle cx="8" cy="8" r="7" fill="#000080" stroke="#000000" strokeWidth="1" />
    <rect x="7" y="3" width="2" height="2" fill="#FFFFFF" />
    <rect x="7" y="6" width="2" height="6" fill="#FFFFFF" />
    <rect x="6" y="6" width="1" height="1" fill="#FFFFFF" />
    <rect x="6" y="11" width="4" height="1" fill="#FFFFFF" />
  </svg>
);
