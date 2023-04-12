import Link from "next/link";
import { MdOutlineArticle } from "react-icons/md";

interface JobProps {
  position: string;
  period: string;
  company: string;
  websiteCompany: string;
  shortDescription: string;
  archivements: string[];
}

const Job = ({
  position,
  period,
  company,
  websiteCompany,
  shortDescription,
  archivements,
}: JobProps) => {
  return (
    <li className="mb-10 last:mb-0 border-l pl-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-[#1C68B0] rounded-full -left-3">
        <MdOutlineArticle color="#fff" size="16" />
      </span>
      <div className="flex flex-col justify-between items-start md:flex-row">
        <header>
          <h3 className="flex items-center mb-1 text-lg font-bold text-white">
            {position}
          </h3>
          <time className="block mb-2 text-white text-sm font-normal leading-none mt-2">
            {period}
          </time>
        </header>
        <Link
          href={websiteCompany}
          target="_blank"
          className="text-white font-bold inline-flex items-center hover:text-[#1C68B0]"
        >
          {company}
        </Link>
      </div>
      <p className="text-[#CECECE] mt-2">{shortDescription}</p>
      <ul className="ml-1 mt-2 list-inside list-disc">
        {archivements.map((text, index) => {
          return (
            <li key={index} className="text-[#CECECE] text-sm mb-1 last:mb-0">
              {text}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Job;
