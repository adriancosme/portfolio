import Image from "next/image";
import Link from "next/link";
import Chip from "./chip";
import { Button } from "./button";

interface technology {
  text: string;
  color: string;
  icon: string;
}

interface CardProps {
  image: string;
  altImage: string;
  title: string;
  bodyText: string;
  technologies: technology[];
  hasRepository: boolean;
  repository: string;
  hasLiveDemo: boolean;
  liveDemoUrl: string;
  index: number;
}

const Card = ({
  title,
  bodyText,
  technologies,
  hasRepository,
  repository,
  index
}: CardProps) => {
  return (
    <article className="relative group col-span-12 lg:col-span-4 border rounded-3xl shadow-md border-gray-600">
      <header>
        <h3 className="text-gray-100 px-4 text-xl font-bold mt-3">{title}</h3>
      </header>
      <section className="mt-2">
        <p className="text-gray-400 px-4 text-lg ">{bodyText}</p>
      </section>
      <footer className="p-4">
        <div className="flex flex-wrap gap-3">
          {technologies?.map(({ text, color, icon }, index) => {
            return (
              <Chip key={`${text}-${index}`} text={text} iconUrl={icon} color="secondary" hoverColor={color} />
            );
          })}
        </div>
      </footer>
    </article>
  );
};

export default Card;
