/*Importing requried libraries and media*/
import Image from "next/image";
import { useState } from "react";
import SectionHeading from "../SectionHeading";
import ReadButton from "../ReadButton";
import { Tilt } from 'react-next-tilt';

/*Details for each industry card*/
const industries = [
    {
        heading: "PHARMA",
        text: "Digitalization of Validation Procedures and Batch Records",
        image: "/Images/Industry/pharma.jpg",
    },
    {
        heading: "LOGISTICS",
        text: "Transform and Streamline Your Logistics Operations",
        image: "/Images/Industry/logistics.webp",
    },
    {
        heading: "UTILITIES",
        text: "Streamline Your Utilities Operations",
        image: "/Images/Industry/uitlities.webp",
    },
    {
        heading: "MANUFACTURING",
        text: "Streamline Your Manufacturing Operations",
        image: "/Images/Industry/manufactuting.webp",
    },
    {
        heading: "AGRIBUSINESS",
        text: "Transform Your Agribusiness Operations",
        image: "/Images/Industry/agribusiness.webp",
    },
];

export default function Industry() {
    const headings = [
        {
            spans: [
                { text: 'The', color: 'main3', pr: 1 },
                { text: 'In', color: 'main3', pl: 1 },
                { text: 'dustries', color: 'main2', px: 0 },
                { text: 'we', color: 'main1', px: 1 },
                { text: 'se', color: 'main1', px: 0 },
                { text: 'rve', color: 'accent', px: 0 },
            ],
        },
       
    ];
     
    //----------------------------------------------------------------------------------------------------
    //Handles indexing for larger screens where 2 industry cards are displayed at a time
    const [currentIndexLarge, setCurrentIndexLarge] = useState(0); 

    const handleNextLarge = () => {
        setCurrentIndexLarge((prevIndex) => (prevIndex + 2) % industries.length);
    };

    const handlePreviousLarge = () => {
        setCurrentIndexLarge((prevIndex) => (prevIndex - 2 + industries.length) % industries.length);
    };

    const displayIndustriesLarge = [
        industries[currentIndexLarge],
        industries[(currentIndexLarge + 1) % industries.length],
    ];

    //-----------------------------------------------------------------------------------------------------
    //Handles indexing for smaller screens where 1 industry card is displayed at a time
    const [currentIndexSmall, setCurrentIndexSmall] = useState(0);

    const handleNextSmall = () => {
        setCurrentIndexSmall((prevIndex) => (prevIndex + 1) % industries.length);
    };

    const handlePreviousSmall = () => {
        setCurrentIndexSmall((prevIndex) => (prevIndex - 1 + industries.length) % industries.length);
    };

    const displayIndustriesSmall = [industries[currentIndexSmall]];

    return (
        <div>
            <div className="w-2/3 lgg:mx-20 mx-10 sssm:mt-[45vh] lgg:mt-[50vh] xl:mt-[50vh] xll:mt-[30vh] xxl:mt-[40vh] xlllll:mt-[40vh] xlll:mt-[40vh]">
                 {/*Heading for the industry section*/}
                 <SectionHeading Title="OUR INDUSTRY" headings={headings} />
            </div>

            {/* Large Screen Slider */}
            <div className="lgg:mt-[-5vh] xl:mt-[20vh] xll:mt-[15vh] xxl:mt-[20vh] flex justify-between mx-5 relative sssm:hidden lgg:flex">
                <div className="lgg:mt-[25vh] xl:mt-[15vh] xll:mt-[13vh] xxl:mt-[10vh] xlllll:ml-8 xlllll:mt-[13vh] lxl:mt-[17vh]" onClick={handlePreviousLarge}>
                    <Image src="/Images/Services/previous-arrow.png" quality={100} width={20} height={20} alt="previous arrow" className="lgg:scale-250 xlllll:scale-500 cursor-pointer"/>
                </div>

                {displayIndustriesLarge.map((industry, index) => (
                    <div key={index} className={`flex ${index === 0 ? 'justify-start' : 'justify-end'} relative`}>
                        <h1 className={`lgg:text-[2.5rem] xl:text-[3rem] lxl:text-[5rem] xlllll:text-[5rem] text-[#3dbce2] z-30 absolute ${index === 0 ? 'lgg:left-[6vw] lxl:left-[4vw] xlllll:left-[-5vw] xxl:left-20 xll:-top-[15vh] xl:-top-[20vh] xl:left-[1vw]' : 'lgg:right-[26vw] lxl:right-[21vw] xlllll:right-[13vw] xxl:right-[24vw] xll:-top-[15vh] xl:-top-[20vh] xl:right-[23vw] xll:right-[24vw]' } roboto-black`}>
                            {industry.heading}
                        </h1>
                        <h1 className={`lgg:text-[2.5rem] xl:text-[3rem] lxl:text-[5rem] xlllll:text-[5rem] text-[#DBDBDB] z-10 absolute ${index === 0 ? 'lgg:left-[6.2vw] lxl:left-[4.3vw] xlllll:left-[-4.7vw] xxl:left-[6.1vw] xll:-top-[14.7vh] xll:left-[6vw] xl:-top-[19.7vh] xl:left-[1.2vw]' : 'lgg:right-[25.8vw] lxl:right-[20.8vw] xlllll:right-[12.7vw] xxl:right-[23.8vw] xll:-top-[14.5vh] xll:right-[23.8vw] xl:-top-[19.5vh] xl:right-[22.8vw]'} roboto-black`}>
                            {industry.heading}
                        </h1>

                        <Tilt>
                        <div className={`lgg:scale-90 xl:scale-100 xll:scale-110 xxl:scale-105 lxl:scale-125 xlllll:scale-140 xlllll:mt-10 flex xxl:-mt-10 xll:mt-0 lxl:mt-10 lgg:mt-[10vh] xl:-mt-5 ${index === 1 ? 'lxl:ml-[3.5vw]' : ''}`}>
                            <div className={`${index === 1 ? 'xlllll:ml-10' : ''}`}>
                                 <Image src={industry.image} width={350} height={350} alt={industry.heading} className="rounded-[2vw] rounded-br-none relative"/> 
                            </div>

                            <div className="mt-6 rounded-tr-[2vw] bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-[#E1F6FB] via-[#bce3f3] from-1% to-[#E1F6FB] to-100% xl:w-[200px] xl:h-[200px] lgg:w-[200px] lgg:h-[170px]">
                                <p className="text-gray-400 font-medium p-4 xl:py-8 lgg:py-6">{industry.text}</p>
                                <div className="mx-10 xl:scale-125 xlllll:scale-105 xlllll:mx-7">
                                    <ReadButton />
                                </div>
                            </div>
                        </div>
                        </Tilt> 
                    </div>
                ))}

                <div className="lgg:mt-[25vh] xl:mt-[15vh] xll:mt-[13vh] xxl:mt-[10vh] xlllll:mt-[16vh] xlllll:mr-5 lxl:mt-[17vh]" onClick={handleNextLarge}>
                    <Image src="/Images/Services/next-arrow.png" width={20} height={20} quality={100} alt="next arrow" className="scale-180 xlllll:scale-300 cursor-pointer"/>
                </div>
            </div>

            {/* Small Screen Slider */}
            <div className="lgg:hidden sssm:flex  items-center mt-[5vh] mx-5">
                <div className="mt-5" onClick={handlePreviousSmall}>
                    <Image src="/Images/Services/previous-arrow.png" width={20} height={20} alt="previous arrow" className="scale-150 cursor-pointer"/>
                </div>

                {displayIndustriesSmall.map((industry, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h1 className="text-3xl text-[#3dbce2] z-30 mb-4 -mt-5 roboto-black">
                            {industry.heading}
                        </h1>

                        <div className="flex">
                            <div className="scale-100 mb-4 ml-4">
                                <Image src={industry.image} width={250} height={250} alt={industry.heading} className="rounded-lg"/>
                            </div>

                            <div className="-mt-5 sssm:-ml-8  ssmm:-ml-9 scale-60 rounded-tr-lg bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-[#E1F6FB] via-[#bce3f3] from-1% to-[#E1F6FB] to-100% w-[250px] h-[150px]">
                                <p className="text-gray-400 font-medium p-4">{industry.text}</p>
                                <div className="scale-125 -mt-4 ml-10">
                                    <ReadButton />
                                </div>
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
