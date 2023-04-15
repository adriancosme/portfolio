import Image from "next/image";
import Link from "next/link";
import Chip from "./chip";
import { Button } from "./button";

interface CardProps {
  image: string;
  altImage: string;
  title: string;
  bodyText: string;
  technologies: string[];
  hasRepository: boolean;
  repository: string;
  hasLiveDemo: boolean;
  liveDemoUrl: string;
}

const Card = ({
  image,
  altImage,
  title,
  bodyText,
  technologies,
  hasRepository,
  repository,
  hasLiveDemo,
  liveDemoUrl,
}: CardProps) => {
  return (
    <article className="group col-span-12 lg:col-span-4 border rounded-3xl shadow-md border-gray-700 relative bg-[#CECECE] ">
      <header>
        <div className="block">        
          <section className="overflow-hidden rounded-t-3xl relative bg-white h-40">
            <Image src={image} alt={altImage} width={400} height={200} className="object-cover object-center" />
          </section>
        </div>
        <h3 className="text-[#20222C] px-4 text-lg font-bold mt-3">{title}</h3>
      </header>
      <section className="mt-2">
        <p className="text-[#20222C] px-4 text-md ">{bodyText}</p>
      </section>
      <footer className="p-4">
        <div className="flex flex-wrap gap-1">
          {technologies?.map((text, index) => {
            return (
              <Chip key={`${text}-${index}`} text={text} color="primary" />
            );
          })}
        </div>
        <div className="flex gap-2 mt-4">
          {hasRepository && (
            <Button
              color="primary"
              href={repository}
              text="Code"
              size="base"
              target="_blank"
            />
          )}
          {hasLiveDemo && (
            <Button
              color="primary"
              href={liveDemoUrl}
              text="Website"
              size="base"
              target="_blank"
            />
          )}
        </div>
      </footer>
    </article>
  );
};

export default Card;
