import { Button } from "@/components/button";
import Card from "@/components/card";
import Experience from "@/components/experience";
import { SectionComponent } from "@/components/section";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import AboutMe from "../data/about.data.json";
import ProjectsData from "../data/projects.data.json";
import ExperienceData from "./../data/experience.data.json";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center text-white">
            <section id="home" className="max-w-md mx-auto container lg:max-w-5xl">
                <div className="flex justify-between">
                    <div className="max-w-2xl text-left">
                        <h1 className="font-bold text-white text-3xl md:text-4xl">Hi, I&apos;m Edwin Cosme, I&apos;m a Software Engineer.</h1>
                        <p className="text-accent text-3xl md:text-3xl pt-8 max-w-md">
                            I help people build their next big thing.
                        </p>
                        <div className="flex gap-5 pt-4 flex-wrap">
                            <Button
                                color="primary"
                                href="/EdwinCosmeCV.pdf"
                                text="Download CV"
                                size="2xl"
                                target="_blank"
                            />
                            <Button
                                color="secondary"
                                href="#contact"
                                text="Contact me 👋"
                                size="2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
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
                    </section>
                </div>
            </SectionComponent>
        </main>
    )
}