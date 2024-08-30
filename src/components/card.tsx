import clsx from "clsx";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Chip from "./chip";

interface technology {
  text: string;
  color: string;
  icon: string;
}

interface CardProps {
  image: string;
  altImage: string;
  title: string;
  description: string;
  technologies: technology[];
  hasRepository: boolean;
  repository: string;
  hasLiveDemo: boolean;
  liveDemoUrl: string;
  index: number;
}

const Card = ({
  title,
  description,
  technologies,
  hasRepository,
  repository,
  hasLiveDemo,
  liveDemoUrl,
  index
}: CardProps) => {
  return (
    <article className="relative group flex flex-col rounded-md border-[1px] border-neutral-300 px-3 py-4 shadow-sm dark:border-neutral-800">
      <div className={clsx('flex flex-col space-y-3')}>
        <header className="flex w-full items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-[10px]">
              {
                hasLiveDemo ? (
                  <Link
                    href={liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-[6px] font-medium decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline"
                  >
                    <span className="text-gray-100">{title}</span>
                    <RiArrowRightUpLine className="opacity-50 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100" size={15} />
                  </Link>
                ) : (
                  <p className="font-medium">{title}</p>
                )
              }
            </div>
            <div className="flex items-center gap-2">
              {
                hasRepository ? (
                  <Link
                    href={repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-75 transition-opacity duration-100 hover:opacity-100"
                  >
                    <FaGithub height={16} />
                  </Link>
                ) : null
              }
            </div>
          </div>
        </header>
        <p className="truncate text-sm dark:text-neutral-400">{description}</p>
        <footer className="">
          <div className="flex flex-wrap gap-3">
            {technologies?.map(({ text, color, icon }, index) => {
              return (
                <Chip key={`${text}-${index}`} text={text} iconUrl={icon} color="secondary" hoverColor={color} />
              );
            })}
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Card;
