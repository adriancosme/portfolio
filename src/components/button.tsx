interface ButtonProps {
  text: string;
  href?: string;
  color: "primary" | "secondary";
  size: string;
  target?: string;
}
import Link from "next/link";

export const Button = ({ text, href, color, size, target }: ButtonProps) => {
  const bgColorClass = color === "primary" ? "bg-secondary" : "";
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
      className={`${bgColorClass} ${borderedClass} text-white p-2.5 rounded-lg text-${size} hover:scale-105 cursor-pointer h-auto`}
      href={href}
      target={target}
    >
      {text}
    </Link>
  );
};
