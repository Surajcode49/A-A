/*Importing requried libraries and media*/
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { delay, motion } from "framer-motion";
import Button from "../Button";

export default function Clients(){
    const headings = [
        {
            spans: [
                { text: 'They', color: 'main3', px: 0 },
                { text: 'Trust', color: 'main2', px: 1 },
                { text: 'Us', color: 'main1', px: 0 },
                { text: 'And', color: 'accent', px: 1 },
            ],
        },
        {
            spans: [
                { text: 'We', color: 'main3', px: 0 },
                { text: 'Keep', color: 'main2', px: 1 },
                { text: 'Giving', color: 'main1', px: 0 },
                { text: 'Them', color: 'accent', px: 1 },
            ],
        },
        {
            spans: [
                { text: 'Rea', color: 'main3', px: 0 },
                { text: 'so', color: 'main2', px: 0 },
                { text: 'ns', color: 'main1', px: 0 },
                { text: 'Too', color: 'accent', px: 1 },
            ],
        },
    ];


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
        <div className="lg:mt-[5vh] xlllll:mt-[35vh] xl:mt-[10vh] sssm:mt-[2vh] justify-between items-center relative xl:mx-5 lg:mx-20 sssm:mx-0">

            <div className="md:flex sssm:block xl:mx-20 mx-10 sssm:mx-0">
                <div className="sssm:mx-5">
                    
                    <div className="w-1/3 lg:mt-[20vh] md:mt-[10vh] xxl:mt-[15vh] xlllll:mt-[0vh]">
                        {/*Heading for the about section*/}
                        <SectionHeading Title="OUR HAPPY CLIENTS" headings={headings} />
                    </div>

                    <div className="lgg:mt-20 sssm:mt-5 sssm:ml-[-20vw] xlllll:ml-10 xlllll:scale-140">
                        <Button
                            buttonText="View All"
                            bgColor="bg-main1"
                            className="hover:border-main1 border-2 border-white"
                        />
                    </div>

                </div>

                <div className="sssm:scale-90 ssm:scale-100 md:scale-50 mdd:scale-60 xl:scale-60 xll:scale-80 xlllll:scale-100 ssm:mx-3 md:-mt-[25vh] md:-ml-[25vw] mdd:-mt-[17vh] mdd:-ml-[19vw] mdm:-mt-[20vh] llg:-mt-[30vh] llg:-ml-[10vw] xl:ml-0 xll:-mt-[15vh] lxl:ml-20 xlllll:-mt-[30vh] xlllll:ml-[20vw]">
                    {/* Mapping the logos and applying the variants for pop-up animation effect */}
                    {[0, 1, 2, 3].map(row => (
                        <div key={row} className="flex">
                            {logos.slice(row * 4, row * 4 + 4).map((logo, index) => (
                                <motion.div
                                    key={index}
                                    className="clients ssmm:w-[80px] md:w-[200px] bg-gradient-to-r from-main3 to-accent sssm:m-1 md:m-3 lgg:m-2 rounded-full px-[4px] py-[4px] flex justify-center items-center"
                                    initial="hidden"
                                    animate="visible"
                                    custom={row * 4 + index}
                                    variants={logoVariants}
                                    whileHover={{ scale: 1.1, y: -15 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    
                                >
                                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white from-30% to-main3 to-100% rounded-full flex justify-center items-center">
                                        <Image src={logo.src} width={200} height={200} alt={logo.alt} loading="lazy" className="p-2"/>
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
