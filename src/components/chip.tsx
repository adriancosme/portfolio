import { CSSProperties } from "react";
import Image from "next/image";

interface ChipProps {
  text: string;
  color: "primary" | "secondary";
  // SVG element
  iconUrl?: string;
  hoverColor?: string;
}
const Chip = ({ text, color, iconUrl, hoverColor }: ChipProps) => {
  const bgColorClass = color === "primary" ? "bg-primary" : "bg-secondary";

  return (
    <div
      className={`chip flex items-center px-3 py-2 rounded-lg transition-colors duration-200 ${bgColorClass}`}
      style={{ "--chip-hover-color": hoverColor } as CSSProperties}
    >
      {iconUrl ? <Image className="mr-1.5 h-4 w-4" src={iconUrl} alt="icon" width={24} height={24} /> : null}
      <span className="text-xs">{text}</span>
    </div>
  );
};

export default Chip;
