interface ChipProps {
  text: string;
  color: "primary" | "secondary";
}
const Chip = ({ text, color }: ChipProps) => {
  const bgColorClass = color === "primary" ? "bg-[#20222C]" : "bg-[#CECECE]";
  const textColorClass = color === "primary" ? "text-white" : "text-black";
  return (
    <div className={`px-6 py-1 rounded-3xl ${bgColorClass} ${textColorClass}`}>
      {text}
    </div>
  );
};

export default Chip;
