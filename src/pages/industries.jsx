import Image from "next/image";
import { useState, useEffect } from "react";

const industries = [
    {
        heading: "PHARMA",
        text: "Digitalization of Validation Procedures and Batch Records",
        image: "/Images/Industry/medical.png",
    },
    {
        heading: "LOGISTICS",
        text: "Transform and Streamline Your Logistics Operations",
        image: "/Images/Industry/quality-control.avif",
    },
    {
        heading: "UTILITIES",
        text: "Streamline Your Utilities Operations",
        image: "/Images/Industry/wind-energy.avif",
    },
    {
        heading: "MANUFACTURING",
        text: "Streamline Your Manufacturing Operations",
        image: "/Images/Industry/automobile.avif",
    },
    {
        heading: "AGRIBUSINESS",
        text: "Transform Your Agribusiness Operations",
        image: "/Images/Industry/agriculture.jpg",
    },
];

export default function Industry() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 500);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + industries.length) % industries.length);
    };

    return (
        <div className="lg:mt-[40vh] xllll:mt-[75vh] xlllll:mt-[40vh] md:mt-[25vh] sssm:mt-[45vh] xl:mt-[50vh] ssm:mt-[45vh] justify-between items-center relative mx-10 md:ml-[7vw] sssm:ml-[10vw]">
            <div className="w-2/3">
                <p className="text-black text-md font-semibold xllll:text-xl xlllll:text-[2rem] roboto-light">OUR INDUSTRY</p>

                <h2 className="text-xl font-bold mb-8 xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 roboto-black">
                    <span className="text-main3 px-0">The</span>
                    <span className="text-main3 pl-1">In</span>
                    <span className="text-main2 px-0">dustries</span>
                    <span className="text-main1 px-1">we</span>
                    <span className="text-main1 pl-1">se</span>
                    <span className="text-accent px-0">rve</span>
                </h2>
            </div>

            {[0, 1].map((i) => {
                const index = (currentIndex + i) % industries.length;
                const industry = industries[index];
                return (
                    <div key={index}>
                        <h2
                            className={`absolute lg:top-[10.3vh] sssm:top-[7.3vh] font-bold ${
                                i === 0 ? "lg:left-1 sssm:left-[0.2vw] md:left-[3.2vw]" : "md:right-[19vw] lg:right-[17.8vw] xlllll:right-[23.8vw] xlll:right-[24vw] md:block sssm:hidden"
                            } text-[#DBDBDB] lg:text-[3rem] sssm:text-[2rem] xlllll:text-[5rem]`}
                        >
                            {industry.heading}
                        </h2>

                        <h2
                            className={`absolute lg:top-[10vh] sssm:top-[7vh] font-bold ${
                                i === 0 ? "lg:left-1 sssm:left-[0.4vw] md:left-[3.2vw]" : "md:right-[19vw] lg:right-[18vw] xlll:right-[24vw] md:block sssm:hidden"
                            } text-[#3dbce2] lg:text-[3rem] sssm:text-[2rem] xlllll:text-[5rem]`}
                            >
                            {industry.heading}
                        </h2>

                        
                    </div>
                );
            })}

            <div className="absolute lg:top-[45vh] md:top-[20vh] sssm:top-[20vh] xlllll:top-[32vh] xlllll:ml-[-4.5vw] ml-[-5vw] md:ml-[-5vw] sssm:ml-[-7vw] mdd:ml-[-3vw] llg:ml-[-5vw] llg:mt-[-0.5vw] mdm:top-[17vh] mdd:top-[18vh]">
                <div onClick={handlePrevious} className="my-1 xlllll:scale-400 xl:scale-200 lg:scale-140 md:scale-115 sssm:scale-140 llg:scale-200 ssmm:scale-100 cursor-pointer">
                    <Image src="/Images/Services/previous-arrow.png" width={20} height={20} alt="previous arrow" />
                </div>
            </div>

            <div className="flex lg:space-x-10 xlll:space-x-20 md:space-x-[-7vw] lg:mt-[20vh] md:mt-[-1vh] sssm:mt-[10vh] xlllll:mt-[10vh] sssm:flex-col md:flex-row">
                {Array(isSmallScreen ? 1 : 2)
                    .fill()
                    .map((_, i) => {
                        const index = (currentIndex + i) % industries.length;
                        const industry = industries[index];

                        return (
                            <div key={index} className="md:flex md:scale-70 lg:scale-100 sssm:flex sssm:scale-100">
                                <div className="lg:scale-180 sssm:scale-400 mmd:scale-400 md:scale-600 mdd:mt-[16vh] md:mt-[17vh] llg:mt-[11vh] xlllll:scale-160 sssm:mt-[7vh] lg:ml-[5vw] md:ml-[2vw] sssm:ml-[17vw]">
                                    <Image
                                        src={industry.image}
                                        width={350}
                                        height={350}
                                        alt={industry.heading}
                                        className="lg:rounded-tl-xl lg:rounded-tr-xl lg:rounded-bl-xl sssm:rounded-tl-md sssm:rounded-tr-md sssm:rounded-bl-md"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>

                                <div id="industry-text" className="rounded-tl-xl lg:mt-7 md:mt-[7vh] xl:mt-[8vh] xlllll:mt-[9vh] mmd:mt-[8.5vh] sssm:mt-[-2vh] rounded-tr-xl rounded-bl-xl bg-[#E8FAFF] xlllll:ml-[4.5vw] xlllll:h-[40vh] xlll:h-[35vh] lg:min-w-[100px]  lg:max-w-[200px] xlllll:max-w-[300px] xlllll:max-h-[20vh] lg:h-[30vh] llg:max-h-[25vh] mdm:max-h-[13vh] md:w-[40vw] md:h-[16vh] sssm:min-w-[35vw] sssm:max-h-[15vh] lg:p-6 sssm:p-5 xl:ml-[5vw] mmd:ml-[8vw] lg:ml-[6vw] llg:ml-[5vw] md:ml-[12vw] sssm:ml-[16vw]">
                                    <h1 className="text-gray-500 font-medium md:text-sm xlllll:text-2xl xlll:text-lg sssm:text-[0.7rem]">
                                        {industry.text}
                                    </h1>

                                    <div className="flex lg:mt-10 sssm:mt-2">
                                        <p className="text-accent font-semibold md:text-sm xlllll:text-2xl xlll:text-lg sssm:text-[0.7rem] text-nowrap mr-2 xlllll:mr-6">
                                            Read More
                                        </p>

                                        <div className="scale-75 lg:mt-[-0.5vw] llg:mt-[0vw] sssm:mt-[-1.5vw] cursor-pointer md:mt-[0.3vw] xlllll:scale-150 xlllll:my-2 xl:my-0 ">
                                            <Image
                                                src="/Images/Services/read-arrow.png"
                                                width={20}
                                                height={20}
                                                alt="read arrow"
                                                className="lg:scale-100 sssm:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                <div className="lg:mt-[20vh] md:mt-[15vh] sssm:mt-[3vh] mdm:mt-[12.5vh] ssm:mt-[4vh] scale-140 mdd:mt-[14vh] llg:mt-[17vh]">
                    <div onClick={handleNext} className="my-1 cursor-pointer">
                        <div className="lg:scale-170 sssm:scale-160 xlllll:scale-200">
                            <Image src="/Images/Services/next-arrow.png" width={20} height={20} alt="next arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
