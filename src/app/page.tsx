import ArrowLink from "@/components/arrow-link";
import Card from "@/components/card";
import Experience from "@/components/experience";
import HeroImage from "@/components/hero-image";
import { SectionComponent } from "@/components/section";
import Link from "next/link";
import { CSSProperties } from "react";
import { AiFillGithub, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import AboutMe from "../data/about.data.json";
import ProjectsData from "../data/projects.data.json";
import ExperienceData from "./../data/experience.data.json";

export default function Home() {
    return (
        <>
            <header id="home" className="relative mx-10vw">
                <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl mb-24 h-auto pt-24 lg:min-h-[40rem] lg:pb-12 lg:mb-64">
                    <HeroImage />
                    <div className="col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
                        <h1
                            className="leading-tight text-gray-50 text-3xl md:text-4xl font-medium motion-safe:animate-hero-text-reveal"
                            style={{
                                "--hero-text-reveal-duration": "1.2s",
                                "--hero-text-reveal-opacity-step-0": 1,
                                "--hero-text-reveal-x-step-0": 0,
                                "--hero-text-reveal-y-step-0": "0px",
                                "--hero-text-reveal-opacity-step-1": 1,
                                "--hero-text-reveal-x-step-1": 0,
                                "--hero-text-reveal-y-step-1": "0px",
                                "--hero-text-reveal-opacity-step-2": 1,
                                "--hero-text-reveal-x-step-2": 0,
                                "--hero-text-reveal-y-step-2": "0px",
                                "--hero-text-reveal-opacity-step-3": 1,
                                "--hero-text-reveal-x-step-3": 0,
                                "--hero-text-reveal-y-step-3": "0px",
                            } as CSSProperties}
                        >Hi, I&apos;m Edwin Cosme, <span className="">I&apos;m a software engineer.</span></h1>
                        <p
                            className="leading-tight text-gray-500 text-3xl md:text-4xl mt-3 pt-8 max-w-md motion-safe:animate-hero-text-reveal"
                            style={{
                                "--hero-text-reveal-duration": "1.2s",
                                "--hero-text-reveal-opacity-step-0": 0,
                                "--hero-text-reveal-x-step-0": 0,
                                "--hero-text-reveal-y-step-0": "25px",
                                "--hero-text-reveal-opacity-step-1": 1,
                                "--hero-text-reveal-x-step-1": 0,
                                "--hero-text-reveal-y-step-1": "0px",
                                "--hero-text-reveal-opacity-step-2": 1,
                                "--hero-text-reveal-x-step-2": 0,
                                "--hero-text-reveal-y-step-2": "0px",
                                "--hero-text-reveal-opacity-step-3": 1,
                                "--hero-text-reveal-x-step-3": 0,
                                "--hero-text-reveal-y-step-3": "0px",
                            } as CSSProperties}
                        >
                            I help people build their next big thing.
                        </p>
                        <p
                            className="text-secondary flex items-center text-lg md:text-lg pt-8 motion-safe:animate-hero-text-reveal"
                            style={{
                                "--hero-text-reveal-duration": "1.3s",
                                "--hero-text-reveal-opacity-step-0": 0,
                                "--hero-text-reveal-x-step-0": 0,
                                "--hero-text-reveal-y-step-0": "25px",
                                "--hero-text-reveal-opacity-step-1": 1,
                                "--hero-text-reveal-x-step-1": 0,
                                "--hero-text-reveal-y-step-1": "0px",
                                "--hero-text-reveal-opacity-step-2": 1,
                                "--hero-text-reveal-x-step-2": 0,
                                "--hero-text-reveal-y-step-2": "0px",
                                "--hero-text-reveal-opacity-step-3": 1,
                                "--hero-text-reveal-x-step-3": 0,
                                "--hero-text-reveal-y-step-3": "0px",
                            } as CSSProperties}
                        >
                            <span className="location-icon mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                            </span>
                            Playa del Carmen, Mexico
                        </p>
                        <p
                            className="text-secondary text-lg md:text-lg pt-4 pl-1.5 flex gap-2 items-center motion-safe:animate-hero-text-reveal"
                            style={{
                                "--hero-text-reveal-duration": "1.3s",
                                "--hero-text-reveal-opacity-step-0": 0,
                                "--hero-text-reveal-x-step-0": 0,
                                "--hero-text-reveal-y-step-0": "25px",
                                "--hero-text-reveal-opacity-step-1": 0,
                                "--hero-text-reveal-x-step-1": 0,
                                "--hero-text-reveal-y-step-1": "25px",
                                "--hero-text-reveal-opacity-step-2": 1,
                                "--hero-text-reveal-x-step-2": 0,
                                "--hero-text-reveal-y-step-2": "0px",
                                "--hero-text-reveal-opacity-step-3": 1,
                                "--hero-text-reveal-x-step-3": 0,
                                "--hero-text-reveal-y-step-3": "0px",
                            } as CSSProperties}
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            I&apos;m currently looking for a full-time position.
                        </p>
                        <div
                            className="flex flex-col md:flex-row items-center  gap-5 pt-8 motion-safe:animate-hero-text-reveal"
                            style={{
                                "--hero-text-reveal-duration": "1.3s",
                                "--hero-text-reveal-opacity-step-0": 0,
                                "--hero-text-reveal-x-step-0": 0,
                                "--hero-text-reveal-y-step-0": "25px",
                                "--hero-text-reveal-opacity-step-1": 0,
                                "--hero-text-reveal-x-step-1": 0,
                                "--hero-text-reveal-y-step-1": "25px",
                                "--hero-text-reveal-opacity-step-2": 1,
                                "--hero-text-reveal-x-step-2": 0,
                                "--hero-text-reveal-y-step-2": "0px",
                                "--hero-text-reveal-opacity-step-3": 1,
                                "--hero-text-reveal-x-step-3": 0,
                                "--hero-text-reveal-y-step-3": "0px",
                            } as CSSProperties}
                        >
                            <section about="Social links" className="flex gap-4">
                                <Link
                                    href="https://github.com/adriancosme"
                                    about="Github profile page"
                                    target="_blank"
                                    className="group flex items-center justify-center w-11 h-11 bg-white hover:bg-[#1C68B0] rounded-full -left-3 cursor-pointer"
                                >
                                    <AiFillGithub className="text-black group-hover:text-white group-hover:scale-110" size={32} />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/edwin-cosme/"
                                    about="Linkedin profile page"
                                    target="_blank"
                                    className="group flex items-center justify-center w-11 h-11 bg-white hover:bg-[#1C68B0] rounded-full -left-3 cursor-pointer"
                                >
                                    <FaLinkedinIn className="text-black group-hover:text-white" size={32} />
                                </Link>
                                <Link
                                    href="https://wa.me/+529841536959"
                                    about="WhatsApp number"
                                    target="_blank"
                                    className="group flex items-center justify-center w-11 h-11 bg-white hover:bg-[#1C68B0] rounded-full -left-3 cursor-pointer"
                                >
                                    <AiOutlineWhatsApp className="text-black group-hover:text-white" size={32} />
                                </Link>
                                <Link
                                    href="mailto:adriancosme15@gmail.com"
                                    about="Email address"
                                    target="_blank"
                                    className="group flex items-center justify-center w-11 h-11 bg-white hover:bg-[#1C68B0] rounded-full -left-3 cursor-pointer"
                                >
                                    <AiOutlineMail className="text-black group-hover:text-white" size={32} />
                                </Link>
                            </section>
                        </div>
                        <div
                            className="hidden lg:block pt-12 motion-safe:animate-hero-text-reveal"
                            style={{
                                "--hero-text-reveal-duration": "1.3s",
                                "--hero-text-reveal-opacity-step-0": 0,
                                "--hero-text-reveal-x-step-0": 0,
                                "--hero-text-reveal-y-step-0": "25px",
                                "--hero-text-reveal-opacity-step-1": 0,
                                "--hero-text-reveal-x-step-1": 0,
                                "--hero-text-reveal-y-step-1": "25px",
                                "--hero-text-reveal-opacity-step-2": 1,
                                "--hero-text-reveal-x-step-2": 0,
                                "--hero-text-reveal-y-step-2": "0px",
                                "--hero-text-reveal-opacity-step-3": 1,
                                "--hero-text-reveal-x-step-3": 0,
                                "--hero-text-reveal-y-step-3": "0px",
                            } as CSSProperties}
                        >
                            <ArrowLink text="Get to know more about me" href="#projects" />
                        </div>
                    </div>

                </div >
            </header>
            <main className="relative mx-10vw text-primary">
                <SectionComponent id="projects" title="Projects">
                    <div className="grid grid-cols-12 gap-5 mt-8">
                        {ProjectsData.map((project, index) => (
                            <Card
                                key={index}
                                index={index}
                                title={project.title}
                                image={project.image}
                                altImage={project.title}
                                bodyText={project.description}
                                hasLiveDemo={project.hasLiveDemo}
                                liveDemoUrl={project.demoUrl}
                                hasRepository={project.hasRepository}
                                repository={project.repository}
                                technologies={project.stack}
                            />
                        ))}
                    </div>
                </SectionComponent>
                <SectionComponent id="about-me" title="About me">
                    <p className="mt-8 text-white">{AboutMe.text}</p>
                </SectionComponent>
                <SectionComponent id="experience" title="Experience">
                    <Experience data={ExperienceData} />
                </SectionComponent>
            </main>
        </>
    )
}