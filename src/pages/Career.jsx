import Image from "next/image";
import Navbar from "../components/Header/navbar"
import Footer from "../components/Footer/Footer"
import Section from "../components/HomeSections";
import PageHeader from "../components/PageHeader";
import HiringProcess from "../components/Career/Hiring";
import Requirements from "../components/Career/Requirements";
import FeaturedJobs from "../components/Career/FeaturedJobs";
import Benefits from "../components/Career/Benefits";
import SectionHeading from "../components/SectionHeading";
import React, { useState } from 'react'
import "../app/globals.css";


export default function Career(){
    const headings = [
        {
            spans: [
                { text: 'Building experiences', color: 'main3', px: 0 },
                { text: 'that are', color: 'main2', px: 1 },
                { text: 'happier, engaging,', color: 'accent', px: 1 },
                { text: 'and meaningful', color: 'main1', px: 1 },
            ],
        },
    ];

    //Hiring process round details
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
          image: '/Images/Career/dashedline.png',
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
          image: '/Images/Career/dashedline2.png',
        },
        {
          step: '03',
          heading1: 'TECHNICAL',
          heading2: 'EVALUATION',
          list: ['Level 1 - Basic', 'Level 2 - Advanced', 'Level 3 - Expert (if applicable)'],
          image: '/Images/Career/dashedline.png',
        },
        {
          step: '04',
          heading1: 'HR',
          heading2: 'ROUND',
          list: ['Remuneration', 'Company Policies', 'Queries'],
          image: '/Images/Career/dashedline2.png',
        },
      ];
    
      //Handling next and previous buttons
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
      };


    return(
        <div className="overflow-hidden">
            <Navbar />{/*Navbar*/}
       
            <div className="relative w-full">
                {/*Page header with background image and text*/}
                <PageHeader  
                    image="/Images/Career/Career-01-01.webp" 
                    text="Employee First, Employee Always! Let’s Make Work Meaningful Together.
                         We Are Building For Billions And hunting for the curious, the dedicated, and enterprising."
                />

                {/*Heading for the career page*/}
                <Section>
                    <div className="flex justify-center items-center text-center mt-10 xlllll:mt-20">
                        <SectionHeading Title="CAREERS" heading="Building expereinces that are happier, engaging, and meaningful" />
                    </div>
                </Section>

                {/*Culture section*/}
                <Section>
                    <h1 className="text-main3 roboto-light text-center justify-center items-center sssm:text-xl xl:text-[1.8rem] sssm:mt-10 xlllll:text-[2.2rem] xlllll:mt-20">OUR CULTURE</h1>
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

                {/*Principles section*/}
                <Section>
                    <h1 className="text-main3 roboto-light text-center justify-center sssm:text-xl items-center xl:text-[1.8rem] xlllll:text-[2.2rem] sssm:mt-10">OUR PRINCIPLES</h1>
                    <div className="sssm:block lgg:flex w-full sssm:mt-5  xlllll:mt-10">
                
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

                {/*Requirement/skills section*/}
                <Section> <Requirements /> </Section>

                {/*Hiring process section*/}
                <Section>
                    <div className="text-black text-center lgg:mx-20 sssm:mx-10 my-10">
                        <h1 className="roboto-light text-[1.3rem] flex justify-center items-center xlllll:text-[2rem]">OUR HIRING PROCESS</h1>

                        <p className="flex justify-center items-center mt-5 xlllll:text-[1.5rem]">
                            Making the right choice begins with getting to know each other and an opportunity to talk about what we can achieve together.
                            <br />Our onboarding process is simple, transparent, and focuses on matching the right talent with the right opportunity. 
                        </p>
                    </div>

                    <div className="w-full mt-20 mx-10">
                        {/*Slider for small screens*/}
                        <div className="block lgg:hidden">
                            <div className="text-left">
                                <HiringProcess {...content[currentIndex]} />
                            </div>

                            <div className="flex justify-center space-x-4 mt-4">
                                <Image src="/Images/Services/previous-arrow.png" width={20} height={20} alt="previous arrow" onClick={handlePrev} className="cursor-pointer" />
                                <Image src="/Images/Services/next-arrow.png" width={20} height={20} alt="next arrow" onClick={handleNext} className="cursor-pointer" />
                            </div>
                        </div>

                        {/*Display all rounds in flex*/}
                        <div className="hidden lgg:flex justify-between mx-[10vw]">
                            {content.map((item, index) => (
                            <div key={index} className={`mt-${index % 2 === 0 ? 10 : 0}`}>
                                <HiringProcess {...item} />
                            </div>
                            ))}
                        </div>

                    </div>

                </Section>

                {/*Featured jobs section*/}
                <Section> <FeaturedJobs /> </Section>

                {/*Employee benefits section*/}
                <Section>
                    <h1 className="flex justify-center items-center text-gray-500 text-[1.5rem] xlllll:text-[2.5rem] my-4 xll:mt-[5vh] xl:mt-[15vh] xxl:mt-[5vh] xlllll:mt-[7vh]">EMPLOYEE BENEFITS</h1>
                    <Benefits />
                </Section>

                {/*Creating space between employee benefits and footer section*/}
                <div className="xl:mt-[30vh] xll:mt-[20vh] xxl:mt-[20vh] sssm:mt-[20vh]"></div>
                <br />

                <Footer />{/*Footer*/}

            </div>

        </div>
    );
}