import Image from "next/image";
import Navbar from "../components/Header/navbar"
import Footer from "../Components/Footer/Footer"
import Section from "../components/HomeSections";
import HiringProcess from "../components/Career/Hiring";
import Requirements from "../components/Career/Requirements";
import FeaturedJobs from "../components/Career/FeaturedJobs";
import Benefits from "../components/Career/Benefits";
import { motion } from "framer-motion";
import "../app/globals.css";


export default function Career(){

    return(
        <div>
            <Navbar />
       
            <div className="relative w-full">
                <Image src="/Images/Career/bg-main.png" width={500} height={500} alt="career" className="w-full mt-5"/>

                <Section>
                    <div className="flex justify-center items-center absolute xl:top-[30vh] lgg:top-[20vh] md:top-[13vh] md:mx-20 lgg:mx-30 xlllll:mx-50 xl:mx-40 sssm:top-[7vh] sssm:mx-5">
                        <h1 className="text-white roboto-medium xxxxxxl:text-[3.5rem] xlllll:text-[2.5rem] lxl:text-[2rem] xxl:text-[1.7rem] xl:text-[1.5rem] llg:text-[1.5rem] lgg:text-[1.4rem] mdd:text-[1.1rem] md:text-[1rem] sssm:text-[0.5rem] smmm:text-[0.57rem] ssm:text-[0.6rem]">
                            Employee First, Employee Always! Let’s Make Work Meaningful Together. <br /> We Are Building For Billions And hunting for the curious, the dedicated, and enterprising.
                        </h1>
                    </div>
                </Section>

                <Section>
                    <p className="flex justify-center items-center sssm:mt-10 text-black text-md font-semibold xllll:text-xl xlllll:text-[2rem] xl:mt-[-25vh]  roboto-light text-nowrap">
                        CAREERS
                    </p>
                    
                    <h2 className="flex justify-center items-center lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                        <span className="text-main3 px-0">Building experiences</span>
                        <span className="text-main2 px-1">that are</span>
                        <span className="text-accent px-1">happier, engaging,</span>
                        <span className="text-main1">and meaningful</span>
                    </h2>

                </Section>

                <Section>
                    <h1 className="text-main3 roboto-light text-center justify-center items-center text-[1.8rem] xl:mt-10">OUR CULTURE</h1>
                    <div className="flex w-full">
                        <div className="bg-gradient-to-r from-main3 to-main1 w-2/3 h-[200px] relative">
                            <Image src="/Images/Career/our culture.jpg" width={270} height={200} alt="culture" className="rounded-xl absolute top-2 left-1/2 cursor-pointer"/>
                        </div>

                        <p className="text-gray-400 mx-[14vw] flex justify-center items-center">
                            Get ready to immerse in an environment which bespeaks a unique flair of warmth and positivity. 
                            From enjoying a great sip of coffee to a fun happy hour to some serious work, we have it all. 
                            Get to know us what we mean by the collaborative, open-door and inclusive environment.
                        </p>
                    </div>
                </Section>

                <Section>
                    <h1 className="text-main3 roboto-light text-center justify-center items-center text-[1.8rem] xl:mt-10">OUR PRINCIPLES</h1>
                    <div className="flex w-full">
                
                        <p className="text-gray-400 mx-[12vw] flex justify-center items-center">
                            AplusA Technologies is an equal employment opportunity employer, offering equal employment opportunities to all individuals regardless of race, religion, sex, age, national origin, disability status, marital status and any other characteristiAc protected by law.
                            <br /> <br />
                            We’ve grown organically since inception by recruiting only the best, and we’re always on the lookout for new talent. If you have relevant experience, we’d love to hear from you.
                        </p>

                        <div className="bg-gradient-to-r from-main3 to-main1 w-2/3 h-[200px] relative float-right">
                            <Image src="/Images/Career/our principles.jpg" width={270} height={200} alt="principles" className="rounded-xl absolute top-2 right-1/2 cursor-pointer"/>
                        </div>

                    </div>
                </Section>

                <Section> <Requirements /> </Section>

                <Section>

                    <div className="text-black text-center mx-20 my-10">
                        <h1 className="roboto-light text-[1.3rem] flex justify-center items-center">OUR HIRING PROCESS</h1>

                        <p className="flex justify-center items-center mt-5">
                            Making the right choice begins with getting to know each other and an opportunity to talk about what we can achieve together.
                            <br />Our onboarding process is simple, transparent, and focuses on matching the right talent with the right opportunity. 
                        </p>
                    </div>

                    <div className="flex justify-between mx-[10vw]">
                        <div className="mt-10">
                            <HiringProcess 
                                step="01"
                                heading1="PROFILE"
                                heading2="SHORTLISTING"
                                list={[
                                    "Profile Screening",
                                    "Career Portal Registration",
                                    "Evaluation",
                                    "Role Feasibility Check",
                                    "Invitation for F2F"
                                ]}
                            />
                        </div>

                        <div className="mt-0">
                            <HiringProcess 
                                step="02"
                                heading1="WRITTEN"
                                heading2="TEST"
                                list={[
                                    "Aptitude (if applicable)",
                                    "Programming & Logic (if applicable)",
                                    "Domain Specific (if any)"
                                ]}
                            />
                        </div>

                        <div className="mt-10">
                            <HiringProcess 
                                step="03"
                                heading1="TECHNICAL"
                                heading2="EVALUATION"
                                list={[
                                    "Level 1 - Basic",
                                    "Level 2 - Advanced",
                                    "Level 3 - Expert (if applicable)"
                                ]}
                            />
                        </div>

                        <div className="mt-0">
                            <HiringProcess 
                                step="04"
                                heading1="HR"
                                heading2="ROUND"
                                list={[
                                    "Remuneration",
                                    "Company Policies",
                                    "Queries"
                                ]}
                            />
                        </div>

                    </div>

                </Section>

                <Section> <FeaturedJobs /> </Section>

                <Section>
                    <h1 className="flex justify-center items-center text-gray-500 text-[1.5rem] my-4 mt-[15vh]">EMPLOYEE BENEFITS</h1>
                    <Benefits />
                </Section>

                <div className="mt-[30vh]"></div>


                <br />

                <Footer />

            </div>

        </div>
    );
}