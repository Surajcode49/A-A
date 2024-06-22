import Image from "next/image";
import Navbar from "../components/Header/navbar"
import Footer from "../components/Footer/Footer"
import Section from "../components/HomeSections";
import HiringProcess from "../components/Career/Hiring";
import Requirements from "../components/Career/Requirements";
import FeaturedJobs from "../components/Career/FeaturedJobs";
import Benefits from "../components/Career/Benefits";
import { motion } from "framer-motion";
import React, { useState } from 'react'
import "../app/globals.css";


export default function Career(){
    const content = [
        {
          step: '01',
          heading1: 'PROFILE',
          heading2: 'SHORTLISTING',
          list: [
            'Profile Screening',
            'Career Portal Registration',
            'Evaluation',
            'Role Feasibility Check',
            'Invitation for F2F',
          ],
        },
        {
          step: '02',
          heading1: 'WRITTEN',
          heading2: 'TEST',
          list: [
            'Aptitude (if applicable)',
            'Programming & Logic (if applicable)',
            'Domain Specific (if any)',
          ],
        },
        {
          step: '03',
          heading1: 'TECHNICAL',
          heading2: 'EVALUATION',
          list: ['Level 1 - Basic', 'Level 2 - Advanced', 'Level 3 - Expert (if applicable)'],
        },
        {
          step: '04',
          heading1: 'HR',
          heading2: 'ROUND',
          list: ['Remuneration', 'Company Policies', 'Queries'],
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
      };


    return(
        <div className="overflow-hidden">
            <Navbar />
       
            <div className="relative w-full">
                <Image src="/Images/Career/bg-main.png" width={500} height={500} alt="career" className="w-full mt-5"/>
                <div className="bg-main3 w-1/2 right-0 h-2 absolute sssm:top-[-1.5vw] md:top-[-1vw] lgg:top-[-0.5vw] llg:top-[-0.5vw] xl:top-[-0.5vw] xlllll:top-[-0.3vw]"></div>

                <Section>
                    <div className="flex justify-center items-center absolute xl:top-[30vh] lgg:top-[20vh] md:top-[13vh] md:mx-20 lgg:mx-30 xlllll:mx-50 xl:mx-40 sssm:top-[7vh] sssm:mx-5">
                        <h1 className="text-white roboto-medium xxxxxxl:text-[3.5rem] xlllll:text-[2.5rem] lxl:text-[2rem] xxl:text-[1.7rem] xl:text-[1.5rem] llg:text-[1.5rem] lgg:text-[1.4rem] mdd:text-[1.1rem] md:text-[1rem] sssm:text-[0.5rem] smmm:text-[0.57rem] ssm:text-[0.6rem]">
                            Employee First, Employee Always! Let’s Make Work Meaningful Together. <br /> We Are Building For Billions And hunting for the curious, the dedicated, and enterprising.
                        </h1>
                    </div>
                </Section>

                <Section>
                    
                    <p className="flex justify-center items-center sssm:-mt-10 text-black text-md font-semibold xllll:text-xl xlllll:text-[2rem] xl:mt-[-25vh] xll:mt-[-20vh] xxl:mt-[-20vh]  roboto-light text-nowrap">
                        CAREERS
                    </p>
                    
                    <h2 className="flex justify-center mx-60 items-center sssm:hidden lgg:block lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 xxl:mt-2 font-bold roboto-black">
                        <span className="text-main3 px-0">Building experiences</span>
                        <span className="text-main2 px-1">that are</span>
                        <span className="text-accent px-1">happier, engaging,</span>
                        <span className="text-main1">and meaningful</span>
                    </h2>

                    <h2 className="flex ml-[20vw] justify-center items-center sssm:block lgg:hidden sssm:text-sm font-bold roboto-black">
                        <div>
                            <span className="text-main3 px-0">Building experiences</span>
                            <span className="text-main1 px-1">that are</span>
                        </div>

                        <div>
                            <span className="text-main3 px-1">happier, engaging,</span>
                            <span className="text-main1">and meaningful</span>
                        </div>

                    </h2>
                  
                </Section>

                <Section>
                    <h1 className="text-main3 roboto-light text-center justify-center items-center sssm:text-xl xl:text-[1.8rem] sssm:mt-10 xlllll:text-[2.2rem]">OUR CULTURE</h1>
                    <div className="sssm:block lgg:flex w-full sssm:mt-5 lgg:mt-0">
                        <div className="bg-gradient-to-r from-main3 to-main1 w-2/3 sssm:h-[180px] xl:h-[200px] relative sssm:scale-80 lgg:scale-100">
                            <Image src="/Images/Career/our culture.jpg" width={270} height={200} alt="culture" className="rounded-xl absolute top-2 left-1/2 cursor-pointer"/>
                        </div>

                        <p className="text-gray-400 mx-[14vw] xlllll:mx-[10vw] flex justify-center items-center xlllll:text-[1.5rem]">
                            Get ready to immerse in an environment which bespeaks a unique flair of warmth and positivity. 
                            From enjoying a great sip of coffee to a fun happy hour to some serious work, we have it all. 
                            Get to know us what we mean by the collaborative, open-door and inclusive environment.
                        </p>
                    </div>
                </Section>

                <Section>
                    <h1 className="text-main3 roboto-light text-center justify-center sssm:text-xl items-center xl:text-[1.8rem] xlllll:text-[2.2rem] sssm:mt-10">OUR PRINCIPLES</h1>
                    <div className="sssm:block lgg:flex w-full sssm:mt-5 lgg:mt-0">
                
                        <p className="text-gray-400 mx-[12vw] sssm:hidden lgg:block xlllll:mx-[8vw] flex justify-center items-center xlllll:text-[1.5rem]">
                            AplusA Technologies is an equal employment opportunity employer, offering equal employment opportunities to all individuals regardless of race, religion, sex, age, national origin, disability status, marital status and any other characteristiAc protected by law.
                            <br /> <br />
                            We’ve grown organically since inception by recruiting only the best, and we’re always on the lookout for new talent. If you have relevant experience, we’d love to hear from you.
                        </p>

                        <div className="bg-gradient-to-r from-main3 to-main1 w-2/3 sssm:h-[180px] xl:h-[200px] relative sssm:scale-80 lgg:scale-100 float-right">
                            <Image src="/Images/Career/our principles.jpg" width={270} height={200} alt="principles" className="rounded-xl absolute top-2 right-1/2 cursor-pointer"/>
                        </div>

                        <p className="text-gray-400 mx-[12vw] sssm:block lgg:hidden flex justify-center items-center">
                            AplusA Technologies is an equal employment opportunity employer, offering equal employment opportunities to all individuals regardless of race, religion, sex, age, national origin, disability status, marital status and any other characteristiAc protected by law.
                            <br /> <br />
                            We’ve grown organically since inception by recruiting only the best, and we’re always on the lookout for new talent. If you have relevant experience, we’d love to hear from you.
                        </p>

                    </div>
                </Section>

                <Section> <Requirements /> </Section>

                <Section>

                    <div className="text-black text-center lgg:mx-20 sssm:mx-10 my-10">
                        <h1 className="roboto-light text-[1.3rem] flex justify-center items-center xlllll:text-[2rem]">OUR HIRING PROCESS</h1>

                        <p className="flex justify-center items-center mt-5 xlllll:text-[1.5rem]">
                            Making the right choice begins with getting to know each other and an opportunity to talk about what we can achieve together.
                            <br />Our onboarding process is simple, transparent, and focuses on matching the right talent with the right opportunity. 
                        </p>
                    </div>

                    <div className="w-full mt-20 mx-10">
                        <div className="block lgg:hidden">
                            <div className="text-left">
                            <HiringProcess {...content[currentIndex]} />
                            </div>
                            <div className="flex justify-center space-x-4 mt-4">
                            <Image src="/Images/Services/previous-arrow.png" width={20} height={20} alt="previous arrow" onClick={handlePrev} className="cursor-pointer" />
                            <Image src="/Images/Services/next-arrow.png" width={20} height={20} alt="next arrow" onClick={handleNext} className="cursor-pointer" />
                            </div>
                        </div>

                        <div className="hidden lgg:flex justify-between mx-[10vw]">
                            {content.map((item, index) => (
                            <div key={index} className={`mt-${index % 2 === 0 ? 10 : 0}`}>
                                <HiringProcess {...item} />
                            </div>
                            ))}
                        </div>

                    </div>

                </Section>

                <Section> <FeaturedJobs /> </Section>

                <Section>
                    <h1 className="flex justify-center items-center text-gray-500 text-[1.5rem] xlllll:text-[2.5rem] my-4 xll:mt-[5vh] xl:mt-[15vh] xxl:mt-[5vh] xlllll:mt-[7vh]">EMPLOYEE BENEFITS</h1>
                    <Benefits />
                </Section>

                <div className="xl:mt-[30vh] xll:mt-[20vh] xxl:mt-[20vh] sssm:mt-[20vh]"></div>


                <br />

                <Footer />

            </div>

        </div>
    );
}