interface ButtonProps {
  text: string;
  href?: string;
  color: "primary" | "secondary";
  size: string;
}
import Link from "next/link";

export const Button = ({ text, href, color, size }: ButtonProps) => {
  const bgColorClass = color === "primary" ? "bg-[#1C68B0]" : "";
  const isSecondary = color === "secondary";
  const borderedClass = isSecondary ? "border border-[#1C68B0]" : "";
  if (!href)
    return (
      <button
        className={`${bgColorClass} ${borderedClass} text-white p-2.5 rounded-lg text-${size} hover:scale-105 cursor-pointer`}
      >
        {text}
      </button>
    );
  return (
    <Link
      className={`${bgColorClass} ${borderedClass} text-white p-2.5 rounded-lg text-${size} hover:scale-105 cursor-pointer`}
      href={href}
    >
      {text}
    </Link>
  );
};
