import Head from "next/head";
import Image from "next/image";
import { SectionComponent } from "@/components/section";
import Link from "next/link";
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
                  className="bg-[#1C68B0] text-white p-2.5 rounded-lg text-2xl hover:scale-105 cursor:pointer"
                  href={"/"}
                >
                  Download CV
                </Link>
                <Link href={"#contact"} className="text-white text-2xl border border-[#1C68B0] rounded-lg p-2.5  hover:scale-105">
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
          <article></article>
        </SectionComponent>
        <SectionComponent id="about-me" title="About me">
          <p>About me text</p>
        </SectionComponent>
        <SectionComponent id="experience" title="Experience">
          <p>Exp text</p>
        </SectionComponent>
        <SectionComponent id="contact" title="Contact me">
          <p>Contact text</p>
        </SectionComponent>
      </main>
    </>
  );
}
