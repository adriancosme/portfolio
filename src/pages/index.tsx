import Head from "next/head";
import Image from "next/image";
import { SectionComponent } from "@/components/section";
import Link from "next/link";
import { MdOutlineArticle } from "react-icons/md";
import { AiFillGithub, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Edwin Cosme - Portfolio</title>
        <meta
          property="og:title"
          content="Edwin Cosme - Portfolio"
          key="title"
        />
        <meta property="og:description" content="Portfolio" key="description" />
      </Head>
      <main className="flex min-h-screen flex-col py-8 bg-[#20222C]">
        <section id="home" className="max-w-md mx-auto container lg:max-w-5xl">
          <div className="flex justify-between">
            <div className="max-w-2xl text-left">
              <h1 className="font-bold text-white text-5xl">Edwin Cosme</h1>
              <h2 className="text-[#1C68B0] text-3xl font-bold">
                Full-stack developer
              </h2>
              <p className="text-white text-2xl pt-8 max-w-md">
                Creating product-driven software solutions
              </p>
              <div className="flex gap-5 pt-4">
                <Link
                  className="bg-[#1C68B0] text-white p-2.5 rounded-lg text-2xl hover:scale-105 cursor-pointer"
                  href={"/"}
                >
                  Download CV
                </Link>
                <Link
                  href={"#contact"}
                  className="text-white text-2xl border border-[#1C68B0] rounded-lg p-2.5  hover:scale-105"
                >
                  Contact me 👋
                </Link>
              </div>
            </div>
            <div className="block">
              <section className="overflow-hidden rounded-3xl relative bg-white">
                <Image
                  src="/photo.jpg"
                  alt="avatar"
                  width={190}
                  height={200}
                  priority
                />
              </section>
            </div>
          </div>
        </section>
        <SectionComponent id="projects" title="Projects">
          <div className="grid grid-cols-12 gap-5 mt-8">
            <article className="group col-span-12 lg:col-span-4 border rounded-3xl shadow-md border-gray-700 relative bg-[#CECECE] ">
              <header>
                <div className="block">
                  <section className="overflow-hidden rounded-t-3xl relative bg-white">
                    <Image
                      src="/university-demo.webp"
                      alt="university-demo-app"
                      width={400}
                      height={600}
                    />
                  </section>
                </div>
                <h3 className="text-[#20222C] px-4 text-lg font-bold mt-3">
                  Card title
                </h3>
              </header>
              <section className="mt-2">
                <p className="text-[#20222C] px-4 text-md ">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, lacus
                  tempus laoreet pellentesque ridiculus nam, etiam id gravida
                  hac mi nisl. Lectus scelerisque platea primis auctor consequat
                  a arcu, nisl dictum maecenas duis nulla
                </p>
              </section>
              <footer className="p-4">
                <div className="flex flex-wrap gap-1">
                  {[1, 2, 3, 4].map((val) => {
                    return (
                      <div
                        key={val}
                        className="bg-[#20222C] px-6 py-1 text-white rounded-3xl"
                      >
                        React
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-2 mt-4">
                  <Link
                    href={"/"}
                    className="px-6 py-1 bg-[#1C68B0] rounded-3xl text-white"
                  >
                    Code
                  </Link>
                  <Link
                    href={"/"}
                    className="px-6 py-1 bg-[#1C68B0] rounded-3xl text-white"
                  >
                    Demo
                  </Link>
                </div>
              </footer>
            </article>
          </div>
        </SectionComponent>
        <SectionComponent id="about-me" title="About me">
          <p className="mt-8 text-white">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, lacus tempus
            laoreet pellentesque ridiculus nam, etiam id gravida hac mi nisl.
            Lectus scelerisque platea primis auctor consequat a arcu, nisl
            dictum maecenas duis nulla gravida egestas, pharetra penatibus porta
            nisi potenti et. Habitant quis fermentum sociis montes libero
            elementum eget, aptent integer diam feugiat hac ornare velit, in
            hendrerit augue litora mattis tellus.
          </p>
        </SectionComponent>
        <SectionComponent id="experience" title="Experience">
          <div className="grid grid-cols-12 gap-4 mt-8">
            <ol className="relative col-span-12">
              <li className="mb-10 last:mb-0 border-l pl-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-[#1C68B0] rounded-full -left-3">
                  <MdOutlineArticle color="#fff" size="16" />
                </span>
                <div className="flex flex-col justify-between items-start md:flex-row">
                  <header>
                    <h3 className="flex items-center mb-1 text-lg font-bold text-white">
                      Full-stack developer
                    </h3>
                    <time className="block mb-2 text-white text-sm font-normal leading-none mt-2">
                      Aug, 2023 - Aug 2024
                    </time>
                  </header>
                  <Link
                    href="/"
                    className="text-white font-bold inline-flex items-center hover:text-[#1C68B0]"
                  >
                    31Rooms
                  </Link>
                </div>
                <p className="text-[#CECECE] mt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit magnis,
                  nec rutrum sociis condimentum ac accumsan facilisi etiam
                  sollicitudin
                </p>
              </li>
            </ol>
          </div>
        </SectionComponent>
        <SectionComponent id="contact" title="Contact me">
          <div className="flex flex-col md:flex-row justify-start gap-10">
            <section className="max-w-sm">
              <h3 className="text-white mt-4 text-base">
                Do you have and idea?
              </h3>
              <p className="text-white text-base">
                Send me a message and make it real. You can find me at:
              </p>
              <section className="flex mt-6 gap-4">
                <Link
                  href="https://github.com/adriancosme"
                  about="Github profile page"
                  target="_blank"
                  className="group flex items-center justify-center w-11 h-11 bg-white hover:bg-[#1C68B0] rounded-full -left-3 cursor-pointer"
                >
                  <AiFillGithub className="text-black group-hover:text-white group-hover:scale-110" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/edwin-cosme/"
                  about="Linkedin profile page"
                  target="_blank"
                  className="group flex items-center justify-center w-11 h-11 bg-white hover:bg-[#1C68B0] rounded-full -left-3 cursor-pointer"
                >
                  <FaLinkedinIn className="text-black group-hover:text-white" />
                </Link>
                <Link
                  href="https://wa.me/19841536959"
                  about="WhatsApp number"
                  target="_blank"
                  className="group flex items-center justify-center w-11 h-11 bg-white hover:bg-[#1C68B0] rounded-full -left-3 cursor-pointer"
                >
                  <AiOutlineWhatsApp className="text-black group-hover:text-white" />
                </Link>
                <Link
                  href="mailto:adriancosme15@gmail.com"
                  about="Email address"
                  target="_blank"
                  className="group flex items-center justify-center w-11 h-11 bg-white hover:bg-[#1C68B0] rounded-full -left-3 cursor-pointer"
                >
                  <AiOutlineMail className="text-black group-hover:text-white" />
                </Link>
              </section>
            </section>
          </div>
        </SectionComponent>
      </main>
    </>
  );
}
