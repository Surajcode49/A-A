import Image from "next/image";
import { useState } from "react";

/*Details for each service card*/
const slides = [
    {
        title: "SAP Integration Services",
        description: "Synchronize your business with SAP",
        img: "/Images/Services/sap_integration_services.png",
        bulletText: "SAP Integration Services",
    },

    {
        title: "Rise wih SAP",
        description: "Elevate your enterprise with SAP",
        img: "/Images/Services/risewithsap.png",
        bulletText: "Rise with SAP",
    },

    {
        title: "SAP Consulting Services",
        description: "Expert SAP Consulting",
        img: "/Images/Services/sap_consulting.jpg",
        bulletText: "SAP Consulting Services",
    },

    {
        title: "SAP Analytics Cloud",
        description: "Advanced analytics with SAP",
        img: "/Images/Services/analytics.avif",
        bulletText: "SAP Analytics Cloud",
    },

    {
        title: "Cloud Migrations",
        description: "Seamless cloud transitions",
        img: "/Images/Services/cloud_migration.jpg",
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
                        <li
                            key={index}
                            className={` ${
                                index === currentIndex ? "text-accent font-bold" : "text-main2 font-semibold"
                            } list-inside list-disc`}
                        >
                            {slide.bulletText}
                        </li>
                    ))}
                </ul>

            
                <h2 className="absolute roboto-black xlllll:top-[45.5vh] xlllll:left-[2.3vw] lg:top-[60vh] sssm:top-[15vh] md:top-[10vh] font-bold lg:left-10 sssm:right-10 text-main3 lg:text-[10rem] sssm:text-[3rem] md:text-[7rem] xlllll:text-[14rem]">1</h2>
                <h2 className="absolute roboto-black xlllll:top-[45vh] lg:top-[60vh] sssm:top-[15vh] md:top-[10vh] font-bold xllll:left-[2vw] lg:left-[3vw] sssm:right-[11.5vw] ssmm:right-[10.4vw] ssm:right-[10vw] md:right-[5.5vw] md:text-[7rem] text-gray-200 lg:text-[10rem] sssm:text-[3rem] xlllll:text-[14rem] -z-1">1</h2>
                <hr className="absolute xlllll:top-[70vh] lg:top-[95vh] sssm:top-[23vh] md:top-[25vh] lg:left-10 sssm:right-9 lg:border-2 sssm:border-1 border-gray-300 w-[7vw]"/>

            </div>

            <div className="w-2/3 flex items-center min-w-[350px] justify-center lg:mr-[7vw] relative lg:scale-140 sssm:scale-75 lg:my-8 sssm:my-[-3vw] service">

                <div className="bg-[#e8faff] w-full h-full p-4 rounded-lg relative">
                    <Image src={slides[currentIndex].img} width={500} height={500}/>
                    <p className="text-black text-sm xlllll:text-xl underline font-semibold">{slides[currentIndex].title}</p>
                    <p className="text-gray-700 text-sm xlllll:text-lg">{slides[currentIndex].description}</p>
                    <div className="flex">
                        <p className="text-main1 text-xs md:text-sm font-bold py-3 cursor-pointer xlllll:text-lg mr-1 xlllll:mr-2 md:mr-4">Read More</p>
                        <div className="scale-75 my-1 xlllll:my-4 cursor-pointer xlllll:scale-100 xl:my-2 md:scale-100 md:my-3">
                            <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
                        </div>
                    </div>
                    
                </div>

               
                <div className="absolute lg:right-[-2vw] md:right-[-2vw]  sssm:right-[-5vw] xlllll:right-[-0.8vw] xl:top-[30vh] lg:top-[20vh] xlx:top-[20vh]  sssm:top-[21vh] mdm:top-[15vh] cursor-pointer" onClick={handleNextClick}>
                    <Image src="/Images/Services/next-arrow.png" width={20} height={20} alt="next arrow" className="xlllll:scale-160 xl:scale-150 sssm:scale-140"/>
                </div>
             

        
                <div className="absolute lg:left-[-4vw] md:left-[-7vw] xlllll:left-[-3.5vw] sssm:left-[-14vw] xl:top-[30vh] xlx:top-[20vh] lg:top-[20vh] mdm:top-[15vh] sssm:top-[21vh] bg-[#DBDBDB] p-1  mdm:px-[0.8vw]  mdd:px-[0.8vw] lg:px-[0.5vw] sssm:px-[1.5vw] md:px-[1vw] scale-115 rounded-full cursor-pointer" onClick={handlePrevClick}>
                    <Image src="/Images/Services/previous-arrow.png" width={20} height={20} alt="next arrow" className="scale-200"/>
                </div>

            </div>
        </div>
    );
}