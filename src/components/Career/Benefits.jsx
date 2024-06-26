import Image from "next/image"
import { useState } from "react";
import { motion } from "framer-motion";

export default function Benefits(){
    const logos = [
        { src: "/Images/Career/emplyee benefits icons/advancement.webp", alt: "advancement" },
        { src: "/Images/Career/emplyee benefits icons/diversity.webp", alt: "diversity" },
        { src: "/Images/Career/emplyee benefits icons/recognition.webp", alt: "recognition" },
        { src: "/Images/Career/emplyee benefits icons/salary.webp", alt: "salary" },
        { src: "/Images/Career/emplyee benefits icons/worklife.webp", alt: "worklife" }
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? logos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === logos.length - 1 ? 0 : prevIndex + 1));
    };

    return(
        <div className="bg-gray-100 w-full xxl:h-[30vh] xll:h-[25vh] xlllll:h-[25vh] sssm:mt-[7vh] sssm:p-3 lgg:p-0 sssm:h-[10vh] xlllll:mt-[25vh] xl:h-[40vh] xll:mt-[15vh] xxl:mt-[20vh] xl:mt-[25vh] relative">            
            <div className="sssm:hidden lgg:block ">

                <motion.div className="absolute -top-1/2 left-[10vw] cursor-pointer" 
                            initial={{x: 0, y: 0}} 
                            whileHover={{x: 20, y: 20}}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                >
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={200} height={200} alt="advancement" loading="lazy" className="xlllll:scale-140"/>
                </motion.div>

                <motion.div className=" absolute -top-1/2 left-[40vw] xlllll:left-[45vw] cursor-pointer"
                            initial={{ y: 0}} 
                            whileHover={{ y: 20}}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                >
                    <Image src="/Images/Career/emplyee benefits icons/diversity.webp" width={200} height={200} alt="advancement" loading="lazy" className="xlllll:scale-140"/>
                </motion.div>

                <motion.div className=" absolute -top-1/2 right-[10vw] cursor-pointer"
                            initial={{ x: 0, y: 0}} 
                            whileHover={{ x: -20, y: 20}}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                >
                    <Image src="/Images/Career/emplyee benefits icons/recognition.webp" width={200} height={200} alt="advancement" loading="lazy" className="xlllll:scale-140"/>
                </motion.div>

                <motion.div className=" absolute -bottom-1/2 left-1/4 cursor-pointer"
                            initial={{x: 0, y: 0}} 
                            whileHover={{x:20, y: -20}}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                >
                    <Image src="/Images/Career/emplyee benefits icons/salary.webp" width={200} height={200} alt="advancement" loading="lazy" className="xlllll:scale-140"/>
                </motion.div>

                <motion.div className=" absolute -bottom-1/2 right-[25vw] cursor-pointer"
                            initial={{x: 0, y: 0}} 
                            whileHover={{x:-20, y: -20}}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                >
                    <Image src="/Images/Career/emplyee benefits icons/worklife.webp" width={200} height={200} alt="advancement" loading="lazy" className="xlllll:scale-140"/>
                </motion.div>

            </div>

            <div className="sssm:block lgg:hidden w-5/6 mx-auto">
                <div className="flex justify-between">
                    <div>
                        <Image src="/Images/Services/previous-arrow.png" width={20} height={20} alt="previous arrow" loading="lazy" onClick={handlePrev} className="cursor-pointer" /> 
                    </div>

                    <Image src={logos[currentIndex].src} width={100} height={100} alt="advancement" loading="lazy" className="absolute -top-1/2 left-1/3"/>
                    
                    <div>
                        <Image src="/Images/Services/next-arrow.png" width={20} height={20} alt="next arrow" loading="lazy" onClick={handleNext} className="cursor-pointer" />  
                    </div>
                </div>
            </div>
        
        </div> 
    )
}