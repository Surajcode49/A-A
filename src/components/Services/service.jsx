import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import SectionHeadingNew from "../SectionHeadingNew";
import ReadButton from "../ReadButton";

/*Details for each service card*/
const slides = [
    {
        title: "SAP Integration Services",
        description: "Synchronize your business with SAP",
        img: "/Images/Services/SAP Integration Services-new.webp",
        bulletText: "SAP Integration Services",
        link: "/IntegrationService",
    },
    {
        title: "Rise with SAP",
        description: "Elevate your enterprise with SAP",
        img: "/Images/Services/Rise with SAP.webp",
        bulletText: "Rise with SAP",
        link: "/RiseWithSap",
    },
    {
        title: "SAP Consulting Services",
        description: "Expert SAP Consulting",
        img: "/Images/Services/SAP Consulting Services.webp",
        bulletText: "SAP Consulting Services",
        link: "/ConsultingServices",
    },
    {
        title: "SAP Analytics Cloud",
        description: "Advanced analytics with SAP",
        img: "/Images/Services/SAP Analytics Cloud-new.webp",
        bulletText: "SAP Analytics Cloud",
        link: "/AnalyticsCloud",
    },
    {
        title: "Cloud Migrations",
        description: "Seamless cloud transitions",
        img: "/Images/Services/Cloud Migrations.webp",
        bulletText: "Cloud Migrations",
        link: "/CloudMigration",
    },
];

export default function Service() {
    /*Initializing index for the career cards*/
    const [currentIndex, setCurrentIndex] = useState(0);

    /*Button for going to next card*/
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    /*Button for going to previous card*/
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="md:flex sssm:block space-x-30 lg:mt-[10vh] sssm:mt-[5vh] justify-items-center items-center mx-[10vw] md:mx-[5vw] relative">
            <div className="w-full">
                {/*Heading for the service section*/}
                <SectionHeadingNew Title="OUR SERVICES" heading="The Services We Offer" />

                {/*Updating the color of bulletin text based on card displayed*/}
                <ul className="text-nowrap lg:leading-10 lgg:mt-7 xlllll:mt-10 font-sans sssm:leading-[3vh] lg:text-xl xllll:leading-[8vh] xlllll:leading-[6vh] xlllll:text-[2rem] xllll:text-2xl md:text-lg sssm:text-xs px-4">
                    {slides.map((slide, index) => (
                        <Link href={slide.link} key={index} passHref>
                            <motion.div
                                className="flex flex-nowrap cursor-pointer"
                                initial={{ x: 0 }}
                                whileHover={{ x: 20 }}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeInOut",
                                }}
                            >
                                <div className={`${
                                    index === currentIndex ? "bg-accent font-bold" : "bg-main2"
                                } xxxxxxl:my-14 xlllll:my-4 xlllll:w-10 xlllll:h-2 sssm:w-5 sssm:h-1.3 sssm:my-2 xl:my-2 xl:mt-5 xlllll:mt-8 w-7 h-1.5 rounded-sm mr-5`}>
                                </div>

                                <li className={`${
                                    index === currentIndex ? "text-accent font-bold" : "text-main2 font-semibold"
                                }`}>
                                    {slide.bulletText}
                                </li>
                            </motion.div>
                        </Link>
                    ))}
                </ul>
            </div>

            {/*Service image slider with description*/}
            <div className="w-2/3 flex items-center min-w-[350px] xl:mt-[20vh] lgg:mt-[10vh] xll:mt-[10vh] xxl:mt-[10vh] justify-center lg:mr-[12vw] relative lg:scale-140 sssm:scale-75 lg:my-8 xl:scale-170 xlllll:scale-200 lxl:scale-200 lxl:mt-[20vh] sssm:my-[-3vw] service">
                <div className="bg-[#e8faff] w-[350px] h-[350px] p-4 xxxxxxl:p-12 rounded-lg relative xlllll:w-[450px] xlllll:h-[450px] xxxxxxl:w-[600px] xxxxxxl:h-[600px]">
                    <Image src={slides[currentIndex].img} alt="Service image" width={500} height={500} />
                    <p className="text-black text-sm xlllll:text-xl underline font-semibold">{slides[currentIndex].title}</p>
                    <p className="text-gray-700 text-sm xlllll:text-lg">{slides[currentIndex].description}</p>
                    <div className="sssm:scale-140 sssm:mx-[12vw] xl:scale-100 xl:mx-0">
                        <Link href={slides[currentIndex].link} legacyBehavior>
                            <a><ReadButton /></a>
                        </Link>
                        
                    </div>
                    {/*Next and Previous buttons*/}
                    <Image src="/Images/Services/arrow_blue.svg" width={20} height={20} quality={100} alt="next arrow" className="absolute top-1/2 xl:right-[-1.2vw] xlllll:right-[-0.8vw] md:right-[-1.8vw] sssm:right-[-3vw] sssm:scale-125 hover:sssm:scale-140 xl:scale-200 hover:xl:scale-250 cursor-pointer xxxxxxl:scale-200 xlllll:scale-250 hover:xlllll:scale-300" onClick={handleNextClick} />
                    <Image src="/Images/Services/arrow_grey.svg" width={20} height={20} quality={100} alt="previous arrow" className="absolute top-1/2 xl:left-[-4vw] xlllll:left-[-4vw] md:left-[-7vw] sssm:left-[-12vw] sssm:scale-180 cursor-pointer xxxxxxl:scale-300 xlllll:scale-250" onClick={handlePrevClick} />
                </div>
            </div>
        </div>
    );
}
