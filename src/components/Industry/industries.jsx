import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const industries = [
    {
        heading: "PHARMA",
        text: "Digitalization of Validation Procedures and Batch Records",
        image: "/Images/Industry/pharma image.jpg",
    },
    {
        heading: "LOGISTICS",
        text: "Transform and Streamline Your Logistics Operations",
        image: "/Images/Industry/logistics image.webp",
    },
    {
        heading: "UTILITIES",
        text: "Streamline Your Utilities Operations",
        image: "/Images/Industry/uitlities image.webp",
    },
    {
        heading: "MANUFACTURING",
        text: "Streamline Your Manufacturing Operations",
        image: "/Images/Industry/manufactuting image.webp",
    },
    {
        heading: "AGRIBUSINESS",
        text: "Transform Your Agribusiness Operations",
        image: "/Images/Industry/agribusiness image.webp",
    },
];

export default function Industry() {
    const [currentIndexLarge, setCurrentIndexLarge] = useState(0);
    const [currentIndexSmall, setCurrentIndexSmall] = useState(0);

    const handleNextLarge = () => {
        setCurrentIndexLarge((prevIndex) => (prevIndex + 2) % industries.length);
    };

    const handlePreviousLarge = () => {
        setCurrentIndexLarge((prevIndex) => (prevIndex - 2 + industries.length) % industries.length);
    };

    const handleNextSmall = () => {
        setCurrentIndexSmall((prevIndex) => (prevIndex + 1) % industries.length);
    };

    const handlePreviousSmall = () => {
        setCurrentIndexSmall((prevIndex) => (prevIndex - 1 + industries.length) % industries.length);
    };

    const displayIndustriesLarge = [
        industries[currentIndexLarge],
        industries[(currentIndexLarge + 1) % industries.length],
    ];

    const displayIndustriesSmall = [industries[currentIndexSmall]];

    return (
        <div>
            <div className="w-2/3 mx-20 sssm:mt-[55vh] lgg:mt-[50vh] xl:mt-[50vh] xll:mt-[30vh] xxl:mt-[40vh] xlllll:mt-[40vh] xlll:mt-[40vh]">
                <p className="text-black text-md font-semibold xllll:text-xl xlllll:text-[2rem] roboto-light">OUR INDUSTRY</p>
                <h2 className="lg:text-[1.5rem] text-xl font-bold mb-8 xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 roboto-black">
                    <span className="text-main3 px-0">The</span>
                    <span className="text-main3 pl-1">In</span>
                    <span className="text-main2 px-0">dustries</span>
                    <span className="text-main1 px-1">we</span>
                    <span className="text-main1 pl-1">se</span>
                    <span className="text-accent px-0">rve</span>
                </h2>
            </div>

            {/* Large Screen Slider */}
            <div className="lgg:mt-[-5vh] xl:mt-[20vh] xll:mt-[15vh] xxl:mt-[20vh] flex justify-between mx-5 relative sssm:hidden lgg:flex">
                <div className="lgg:mt-[25vh] xl:mt-[20vh] xll:mt-[13vh] xxl:mt-[10vh] xlllll:ml-8 xlllll:mt-[16vh] lxl:mt-[17vh]" onClick={handlePreviousLarge}>
                    <Image src="/Images/Services/previous-arrow.png" width={20} height={20} alt="previous arrow" className="lgg:scale-250 xlllll:scale-500 cursor-pointer"/>
                </div>

                {displayIndustriesLarge.map((industry, index) => (
                    <div key={index} className={`flex ${index === 0 ? 'justify-start' : 'justify-end'} relative`}>
                        <h1 className={`lgg:text-[2.5rem] xl:text-[4rem] lxl:text-[5rem] xlllll:text-[5rem] text-[#3dbce2] z-30 absolute ${index === 0 ? 'lgg:left-[6vw] lxl:left-[4vw] xlllll:left-[-5vw] xxl:left-20 xll:-top-[15vh] xl:-top-[20vh] left-12' : 'lgg:right-[26vw] lxl:right-[21vw] xlllll:right-[13vw] xxl:right-[24vw] xll:-top-[15vh] xl:-top-[20vh] xl:right-[21vw] xll:right-[24vw]' } roboto-black`}>
                            {industry.heading}
                        </h1>
                        <h1 className={`lgg:text-[2.5rem] xl:text-[4rem] lxl:text-[5rem] xlllll:text-[5rem] text-[#DBDBDB] z-10 absolute ${index === 0 ? 'lgg:left-[6.2vw] lxl:left-[4.3vw] xlllll:left-[-4.7vw] xxl:left-[6.1vw] xll:-top-[14.7vh] xll:left-[6vw] xl:-top-[19.6vh] left-[4vw]' : 'lgg:right-[25.8vw] lxl:right-[20.8vw] xlllll:right-[12.7vw] xxl:right-[23.8vw] xll:-top-[14.5vh] xll:right-[23.8vw] xl:-top-[19.5vh] xl:right-[20.8vw]'} roboto-black`}>
                            {industry.heading}
                        </h1>

                        <div className={`lgg:scale-90 xl:scale-100 xll:scale-110 xxl:scale-105 lxl:scale-125 xlllll:scale-140 xlllll:mt-20 flex xxl:-mt-10 xll:mt-0 lxl:mt-10 lgg:mt-[10vh] xl:mt-0 ${index === 1 ? 'lxl:ml-[3.5vw]' : ''}`}>
                            <div className={`${index === 1 ? 'xlllll:ml-10' : ''}`}>
                                <Image src={industry.image} width={350} height={350} alt={industry.heading} className="rounded-[2vw] rounded-br-none relative"/>
                            </div>

                            <div className="mt-6 rounded-tr-[2vw] bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-[#E1F6FB] via-[#bce3f3] from-1% to-[#E1F6FB] to-100% xl:w-[200px] xl:h-[200px] lgg:w-[200px] lgg:h-[170px]">
                                <p className="text-gray-400 font-medium p-4 xl:py-8 lgg:py-6">{industry.text}</p>
                                
                                <motion.div className="flex lg:mt-10 lgg:-mt-2 sssm:mt-2 xlllll:ml-3 ml-7 xl:-mt-2 cursor-pointer"
                                            initial={{x: 0}}
                                            whileHover={{x:20, scale: 1.1}}
                                            transition={{
                                                duration: 0.7,
                                                ease: "easeInOut",
                                            }}
                                >
                                    <p className="text-accent font-semibold lgg:text-lg md:text-sm xlllll:text-xl xlll:text-lg sssm:text-[0.7rem] text-nowrap mr-2 xlllll:mr-6">
                                        Read More
                                    </p>

                                    <div className="scale-75 lgg:scale-100 xl:scale-140 lgg:mt-1 xl:mt-1 xl:ml-2 lg:mt-[-0.5vw] llg:mt-[0vw] sssm:mt-[-1.5vw] cursor-pointer md:mt-[0.3vw] xlllll:scale-150 xlllll:my-2 xl:my-0 ">
                                        <Image
                                            src="/Images/Services/read-arrow.png"
                                            width={20}
                                            height={20}
                                            alt="read arrow"
                                            className="lg:scale-100 sssm:scale-105"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="lgg:mt-[25vh] xl:mt-[20vh] xll:mt-[13vh] xxl:mt-[10vh] xlllll:mt-[16vh] xlllll:mr-5 lxl:mt-[17vh]" onClick={handleNextLarge}>
                    <Image src="/Images/Services/next-arrow.png" width={20} height={20} alt="next arrow" className="scale-180 xlllll:scale-300 cursor-pointer"/>
                </div>
            </div>

            {/* Small Screen Slider */}
            <div className="lgg:hidden sssm:flex  items-center mt-[5vh] mx-5">
                <div className="mt-5" onClick={handlePreviousSmall}>
                    <Image src="/Images/Services/previous-arrow.png" width={20} height={20} alt="previous arrow" className="scale-150 cursor-pointer"/>
                </div>

                {displayIndustriesSmall.map((industry, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h1 className="text-3xl text-[#3dbce2] z-30 mb-4 roboto-black">
                            {industry.heading}
                        </h1>

                        <div className="flex">
                        <div className="scale-100 mb-4 ml-4">
                            <Image src={industry.image} width={250} height={250} alt={industry.heading} className="rounded-lg"/>
                        </div>

                        <div className="-mt-5 -ml-7 scale-70 rounded-tr-lg bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-[#E1F6FB] via-[#bce3f3] from-1% to-[#E1F6FB] to-100% w-[250px] h-[150px]">
                            <p className="text-gray-400 font-medium p-4">{industry.text}</p>
                            
                            <motion.div className="flex mt-4 cursor-pointer"
                                        initial={{x: 0}}
                                        whileHover={{x:20, scale: 1.1}}
                                        transition={{
                                            duration: 0.7,
                                            ease: "easeInOut",
                                        }}
                            >
                                <p className="text-accent font-semibold text-sm ml-4 -mt-7">
                                    Read More
                                </p>

                                <div className="scale-100 -mt-7 ml-3">
                                    <Image
                                        src="/Images/Services/read-arrow.png"
                                        width={20}
                                        height={20}
                                        alt="read arrow"
                                    />
                                </div>
                            </motion.div>
                        </div>
                        </div>
                    </div>
                ))}

                <div className="mt-5" onClick={handleNextSmall}>
                    <Image src="/Images/Services/next-arrow.png" width={20} height={20} alt="next arrow" className="scale-150 cursor-pointer"/>
                </div>
            </div>
        </div>
    );
}
