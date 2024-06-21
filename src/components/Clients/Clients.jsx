import Image from "next/image";
import { delay, motion } from "framer-motion";

export default function Clients(){
    /*Creating pop-up animation for each logo container*/
    const logoVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 1,
                duration: 0.5
            }
        })
    };

    /*Describing logo container props here*/
    const logos = [
        { src: "/Images/Clients/logo1.webp", alt: "SAP" },
        { src: "/Images/Clients/logo2.webp", alt: "Microsoft_Azure" },
        { src: "/Images/Clients/logo3.webp", alt: "Google_Cloud" },
        { src: "/Images/Clients/logo4.webp", alt: "Nasscom" },
        { src: "/Images/Clients/logo5.webp", alt: "Amazon_Web_Services" },
        { src: "/Images/Clients/logo6.webp", alt: "Ather" },
        { src: "/Images/Clients/logo7.webp", alt: "Axantia" },
        { src: "/Images/Clients/logo8.webp", alt: "Nubax_Data_Labs" },
        { src: "/Images/Clients/logo9.webp", alt: "Pharma_International" },
        { src: "/Images/Clients/logo10.webp", alt: "US_Robotics" },
        { src: "/Images/Clients/logo11.webp", alt: "MS_Pharma" },
        { src: "/Images/Clients/logo12.webp", alt: "Nournet" },
        { src: "/Images/Clients/logo13.webp", alt: "Nournet" },
        { src: "/Images/Clients/logo14.webp", alt: "Nournet" },
        { src: "/Images/Clients/logo15.webp", alt: "Nournet" },
        { src: "/Images/Clients/logo16.webp", alt: "Nournet" },
    ];

    return (
        <div className="lg:mt-[5vh] xlllll:mt-[35vh] xl:mt-[10vh] sssm:mt-[2vh] justify-between items-center relative lg:mx-20 sssm:mx-10">

            <div className="md:flex sssm:block xl:mx-20 mx-10 sssm:mx-0">
                <div>
                    {/*Heading for the clients section*/}
                    <div className="w-1/3 lg:mt-[20vh] md:mt-[10vh] xxl:mt-[15vh] xlllll:mt-[0vh]">
                        <p className="text-black text-md font-semibold xllll:text-xl xlllll:text-[2rem] roboto-light text-nowrap">OUR HAPPY CLIENTS</p>

                        <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                            <span className="text-main3 pr-1">They</span>
                            <span className="text-main2 pr-1">Trust</span>
                            <span className="text-main1 pr-1">Us</span>
                            <span className="text-accent">And</span>
                        </h2>

                        <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                            <span className="text-main3 pr-1">We</span>
                            <span className="text-main2 pr-1">Keep</span>
                            <span className="text-main1 pr-1">Giving</span>
                            <span className="text-accent">Them</span>
                        </h2>

                        <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                            <span className="text-main3 px-0">Rea</span>
                            <span className="text-main2 px-0">so</span>
                            <span className="text-main1 px-0">ns</span>
                            <span className="text-accent px-1">Too</span>
                        </h2>

                    </div>

                    <button className="bg-main1 rounded-tr-xl ml-[0vw] md:my-16 sssm:my-4 rounded-tl-xl rounded-bl-xl w-5/6 flex mb-4 h-10 p-2 mx-20 text-white justify-center text-center font-semibold hover:bg-white hover:text-main3 hover:border-main3 border-2 border-white hover:scale-105">
                        View All
                        <div className="scale-75 my-0 ml-3 cursor-pointer xlllll:scale-100 xlllll:mt-0.5 xl:scale-90 xl:mt-0.5">
                            <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
                        </div>
                    </button>

                </div>

                <div className="xlllll:-mt-[20vh]">
                    {/* Mapping the logos and applying the variants for pop-up animation effect */}
                    {[0, 1, 2, 3].map(row => (
                        <div key={row} className="flex mt-0 xlllll:-mt-10 xlllll:scale-80 xl:scale-50  md:scale-50 sssm:scale-75 sssm:ml-[-15vw] mmd:ml-[-15vw] mdm:ml-[-24vw]  md:ml-[-28vw]  lg:ml-0">
                            {logos.slice(row * 4, row * 4 + 4).map((logo, index) => (
                                <motion.div
                                    key={index}
                                    className="clients bg-gradient-to-r from-main3 to-accent xlllll:mt-2 sssm:mx-2 md:mx-4  xl:-mt-20 lgg:-mt-20 md:-mt-16 sssm:-mt-2 rounded-full px-[4px] py-[4px] flex justify-center items-center"
                                    initial="hidden"
                                    animate="visible"
                                    custom={row * 4 + index}
                                    variants={logoVariants}
                                    whileHover={{ scale: 1.1, y: -15 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }}
                                    
                                >
                                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white from-30% to-main3 to-100% rounded-full flex justify-center items-center">
                                        <Image src={logo.src} width={200} height={200} alt={logo.alt} className="p-2"/>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}
