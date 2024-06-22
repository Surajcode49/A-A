import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

/*Details for each service card*/
const slides = [
    {
        title: "SAP Integration Services",
        description: "Synchronize your business with SAP",
        img: "/Images/Services/SAP Integration Services.webp",
        bulletText: "SAP Integration Services",
    },

    {
        title: "Rise wih SAP",
        description: "Elevate your enterprise with SAP",
        img: "/Images/Services/Rise with SAP.webp",
        bulletText: "Rise with SAP",
    },

    {
        title: "SAP Consulting Services",
        description: "Expert SAP Consulting",
        img: "/Images/Services/SAP Consulting Services.webp",
        bulletText: "SAP Consulting Services",
    },

    {
        title: "SAP Analytics Cloud",
        description: "Advanced analytics with SAP",
        img: "/Images/Services/SAP Analytics Cloud.webp",
        bulletText: "SAP Analytics Cloud",
    },

    {
        title: "Cloud Migrations",
        description: "Seamless cloud transitions",
        img: "/Images/Services/Cloud Migrations.webp",
        bulletText: "Cloud Migrations",
    },
]
export default function Service(){
     /*Initializing index for the career cards*/
    const [currentIndex, setCurrentIndex] = useState(0);

     /*Button for going to next card*/
    const handleNextClick = () =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

     /*Button for going to previous card*/
    const handlePrevClick = () =>{
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return(
        <div className="md:flex sssm:block space-x-30 lg:mt-[10vh] sssm:mt-[5vh] justify-items-center items-center mx-[10vw] md:mx-[5vw] relative">
             {/*Heading for the service section*/}
            <div  className="w-full">
                <p className="text-black text-md font-semibold xllll:text-xl xlllll:text-[2rem] roboto-light">OUR SERVICES</p>

                <h2 className="lg:text-[1.5rem] xlllll:text-[2.5rem] roboto-black xlllll:mt-5 xllll:text-3xl sssm:text-lg md:text-[1.2rem] font-bold">
                    <span className="text-main3 px-1">The</span>
                    <span className="text-main2 px-1">Services</span>
                    <span className="text-main1 px-1">We</span>
                    <span className="text-accent">Offer</span>
                </h2>

                 {/*Updating the color of bulletin text based on card displayed*/}
                <ul className="text-nowrap lg:leading-10 font-sans sssm:leading-[3vh] lg:text-xl xllll:leading-[8vh] xlllll:text-[2rem] xllll:text-2xl md:text-lg sssm:text-xs px-4">
                    { slides.map((slide, index) => (
                        <div  key={index}>
                        <motion.div  className="flex flex-nowrap"
                            initial={{x: 0}}
                            whileHover={{x:20}}
                            transition={{
                                duration: 0.7,
                                ease: "easeInOut",
                            }}
                        >
                            <div className={` ${
                                    index === currentIndex ? "bg-accent font-bold" : "bg-main2"
                                } cursor-pointer xxxxxxl:my-14  xlllll:my-9 xlllll:w-10 xlllll:h-2 sssm:w-5 sssm:h-1.3 sssm:my-2 xl:my-5 w-7 h-1.5 rounded-sm  mr-5`}> 
                            </div>

                            <li
                                className={` ${
                                    index === currentIndex ? "text-accent font-bold" : "text-main2 font-semibold"
                                } cursor-pointer`}
                            >
                                {slide.bulletText}
                            </li>
                        
                        </motion.div>

                            <h2 className="service absolute roboto-black xlllll:top-[60.5vh]  xlllll:left-[2.3vw] xxl:top-[60vh] xll:top-[55vh] lgg:top-[75vh] lg:top-[75vh] xl:top-[76vh] xl:left-[3.4vw] sssm:left-[63vw] sssm:top-[15vh] md:top-[10vh] font-bold lg:left-10 sssm:right-10 text-main3 lg:text-[10rem] sssm:text-[4rem] md:text-[7rem] xlllll:text-[14rem]">{currentIndex + 1}</h2>
                            <h2 className="service absolute roboto-black xlllll:top-[60vh]  xlx:left-[3vw] xxl:top-[59vh] xll:top-[54vh] lgg:top-[74vh] lgg:left-[3.5vw] lg:top-[75vh] sssm:top-[14.7vh] sssm:left-[62.2vw] md:top-[10vh] font-bold xllll:left-[2vw] lg:left-[3vw] sssm:right-[11.5vw] ssmm:right-[10.4vw] ssm:right-[10vw] md:right-[5.5vw] md:text-[7rem] text-gray-200 lg:text-[10rem] sssm:text-[4rem] xlllll:text-[14rem] -z-1">{currentIndex + 1}</h2>
                            <hr className="absolute xlllll:top-[75vh]  xxl:top-[73vh] xll:top-[65vh] lxl:left-[3vw] xl:top-[92vh] lgg:top-[90vh] lg:top-[95vh] sssm:top-[18vh] sssm:left-[65vw] ssmm:top-[22vh] smmm:top-[21vh] md:top-[25vh] lgg:left-[5vw] lg:left-[4vw] sssm:right-9 lg:border-2 sssm:border-1 border-gray-300 w-[7vw] xlllll:w-[6vw] xlllll:left-[3vw]"/>
                        </div>
                    ))}
                </ul>

            </div>

            <div className="w-2/3 flex items-center min-w-[350px] xl:mt-[20vh lgg:mt-[10vh] xll:mt-[10vh] xxl:mt-[10vh] justify-center lg:mr-[7vw] relative lg:scale-140 sssm:scale-75 lg:my-8 sssm:my-[-3vw] service">

                <div className="bg-[#e8faff] w-[350px] h-[350px] p-4 xxxxxxl:p-12 rounded-lg relative xlllll:w-[450px] xlllll:h-[450px] xxxxxxl:w-[600px] xxxxxxl:h-[600px]">
                    <Image src={slides[currentIndex].img} alt="Description of image" width={500} height={500}  />
                    
                    <p className="text-black text-sm xlllll:text-xl underline font-semibold">{slides[currentIndex].title}</p>
                    <p className="text-gray-700 text-sm xlllll:text-lg">{slides[currentIndex].description}</p>
                    
                    <motion.div className="flex"
                                 initial={{x: 0}}
                                 whileHover={{x:20, scale: 1.1}}
                                 transition={{
                                     duration: 0.7,
                                     ease: "easeInOut",
                                 }}
                    >
                        <p className="text-main1 text-xs md:text-sm font-bold py-3 cursor-pointer xlllll:text-lg mr-1 xlllll:mr-2 md:mr-4">Read More</p>
                        
                        <div className="scale-75 my-1 xl:mt-2.5 xlllll:my-4 cursor-pointer xlllll:scale-100 xl:my-2 md:scale-100 md:my-3">
                            <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
                        </div>

                    </motion.div>

                    <Image src="/Images/Services/next-arrow.png" width={20} height={20} alt="next arrow" className="absolute top-1/2 xl:right-[-1.2vw] xlllll:right-[-0.8vw] md:right-[-1.8vw] sssm:right-[-3vw] sssm:scale-125 cursor-pointer xxxxxxl:scale-200" onClick={handleNextClick}/>

                    <Image src="/Images/Services/previous-arrow.png" width={20} height={20} alt="previous arrow" className="absolute top-1/2 xl:left-[-4vw] xlllll:left-[-3vw] md:left-[-7vw] sssm:left-[-12vw] sssm:scale-180 cursor-pointer xxxxxxl:scale-300" onClick={handlePrevClick} />
                    
                </div>

            </div>
        </div>
    );
}