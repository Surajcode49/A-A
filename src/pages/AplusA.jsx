import Image from "next/image";
import Navbar from "../components/Header/navbar"
import Footer from "../components/Footer/Footer" 
import Section from "../components/HomeSections";
import { motion } from "framer-motion";
import GetStarted from "../components/About/form"
import "../app/globals.css";

export default function About(){
    return(
        <div>
            <Navbar />
       
        <div className="relative w-full">
            <Image src="/Images/About/abt.png" width={500} height={500} alt="contact" className="w-full mt-10"/>
            <div className="bg-main3 w-1/2 right-0 h-2 absolute sssm:top-[-1.5vw] md:top-[-1vw] lgg:top-[-0.5vw] llg:top-[-0.5vw] xl:top-[-0.5vw] xlllll:top-[-0.3vw]"></div>
       
            <Section>
                <div className="flex justify-center items-center absolute xl:top-[30vh] lgg:top-[20vh] md:top-[13vh] md:mx-20 lgg:mx-30 xlllll:mx-50 xl:mx-40 sssm:top-[7vh] sssm:mx-5">
                    <h1 className="text-white roboto-medium xxxxxxl:text-[3.5rem] xlllll:text-[2.5rem] lxl:text-[2rem] xxl:text-[1.7rem] xl:text-[1.5rem] llg:text-[1.5rem] lgg:text-[1.4rem] mdd:text-[1.1rem] md:text-[1rem] sssm:text-[0.5rem] smmm:text-[0.57rem] ssm:text-[0.6rem]">
                        As the world moves towards cloud, we were prepared for this transition a long time back. With a industry-updated centre of excellence we have been offering multiple SAP partner qualified solutions helping business owners unlock tremendous potential and scale their traditional setup.
                    </h1>
                </div>
            </Section>

            <Section>
                <p className="flex justify-center items-center sssm:mt-10 text-black text-md font-semibold xllll:text-xl xlllll:text-[2rem] xl:mt-10  roboto-light text-nowrap">
                    ABOUT US
                </p>
                
                <h2 className="flex justify-center items-center lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                    <span className="text-main3 px-0">Welcome</span>
                    <span className="text-main2 px-1">to</span>
                    <span className="text-accent px-1">AplusA</span>
                    <span className="text-main1 px-1">Technologies</span>
                </h2>

            </Section>


            <div className="sssm:hidden lgg:block">
            <Section>
                <div className="bg-gradient-to-r xl:right-[10.5vw] llg:top-[137vh] absolute xl:top-[173vh] xxxxxxl:right-[22vw] xxxxxxl:top-[118vh] lgg:top-[135vh] lxl:top-[127vh] lgg:right-[10vw] xxl:top-[133vh] xll:top-[115vh] xlllll:top-[120vh] from-main3 to-accent mb-8 rounded-r-none rotate-180 rounded-lg w-1/12 h-3"></div>
                <div className="flex justify-center items-center lgg:w-5/6 sssm:w-full">
                    <div className="bg-accent sssm:w-full xl:w-5/6 xxxxxxl:w-2/3 llg:ml-[13vw] lgg:w-7/8 lgg:ml-20 h-full p-5 rounded-xl mt-20">
                    <div className="bg-gradient-to-r -mt-10 xl:ml-[15vw] xxxxxxl:ml-[19vw] lgg:ml-[14vw] lxl:ml-[23vw] xxl:ml-[20vw] xlllll:ml-[28vw] from-main3 to-accent mb-8 rounded-r-none rounded-lg w-1/3 h-3"></div>
                        <div className="flex space-x-[4vw]">
                            <div className="lgg:pr-[5vw]">
                                <p className="text-white text-justify text-xs xlllll:text-sm xxxxxxl:text-lg">
                                    AplusA Technologies started in 2017 as a partnership firm as a team tech enthusiast with a desire to 
                                    do something new. Together, we wanted to help global enterprises with software and reinvent how 
                                    business is done, in 2020 we have converted our partnership firm (AplusA Technologies) to private 
                                    limited company (AplusA Technologies Pvt. Ltd).
                                </p> <br />

                                <p className="text-white text-justify text-xs xlllll:text-sm xxxxxxl:text-lg">
                                    Today, the same entrepreneurial spirit continues to drive our culture of creativity, diversity, and 
                                    collaboration. AplusA Technologies has helped companies across verticals transform their traditional 
                                    business to evolve to the changing way of how business is done by end-to-end implementations, mergers & 
                                    acquisition projects, SAP upgrades, SAP enterprise planning & budgeting projects, ECC to SAP S/4HANA 
                                    migrations and developing simple and elegant solutions for their complex workflows.
                                </p> <br />

                            </div>

                            <div className="xl:scale-140 lgg:scale-125 xxl:scale-125 sssm:scale-50 llg:mt-[0vh] xxxxxxl:scale-180 xl:mt-[1vh] sssm:mt-[-55vh] xxxxxxl:mt-10 xxl:mt-[-3vh]">
                                <div className="bg-main3 rounded-[2.5vw] rounded-br-none w-[300px] h-[185px] relative">
                                    <Image src="/Images/About/business.jpg" width={300} height={250} alt="business" className="rounded-[1.5vw] rounded-br-none absolute -top-5 -left-3"/>
                                </div>
                            </div>
                
                        </div>
                        

                        <p className="text-white text-xs xlllll:text-sm xxxxxxl:text-lg">
                            As the world moves towards cloud, we were prepared for this transition a long time back. With vast 
                            expertise in new generation technology and familiarity with cloud based solutions like SAP BTP, SAC, 
                            RISE with SAP and data rich cloud systems you can rest assured, you are in safe hands.
                        </p> <br />

                        <p className="text-white text-xs xlllll:text-sm xxxxxxl:text-lg">
                            With a industry-updated centre of excellence we have been offering multiple SAP partner qualified 
                            solutions helping business owners unlock tremendous potential and scale their traditional setup.
                        </p> <br />

                    </div>

                </div>
               
            </Section>
            </div>


            <div className="sssm:block lgg:hidden">
                <Section>
                    <div className="bg-gradient-to-r from-accent to-main3 h-20 w-full mb-[10vh] mt-10"></div>
                    <div className="bg-white absolute mmd:top-[55vh] mdm:top-[44vh] mdd:top-[50vh] md:top-[55vh] md:left-[13.5vw] ssmm:top-[47vh] sssm:top-[45vh] ssm:top-[41vh] left-3 rounded-r-none rounded-lg w-2/12 h-3"></div>
                    <div className="bg-white absolute mmd:top-[73vh] mdm:top-[57vh] mdm:right-[23vw] mdd:top-[64.5vh] md:top-[71vh] md:right-[21vw] ssmm:top-[64vh] sssm:top-[62vh] ssmm:right-10 sssm:right-8 ssm:top-[57vh] ssm:right-10 smmm:top-[60vh] smmm:right-[13.5vw] rounded-l-none rounded-lg w-1/12 h-1"></div>
                    <div className="bg-gradient-to-b from-main1 to-accent h-full w-8/9 mx-3 p-6 mdd:p-8  rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none">
                        
                        <div className="sssm:scale-80 mdd:scale-125 mdm:mt-[-15vh] ssm:scale-90 md:scale-100 md:mx-[27vw] ssm:mx-4 sssm:mt-[-20vh] mb-4 ">
                            <div className="bg-main3 rounded-[2.5vw] rounded-br-none w-[300px] h-[185px] relative">
                                <Image src="/Images/About/business.jpg" width={300} height={250} alt="business" className="rounded-xl rounded-br-none absolute -top-5 -left-3"/>
                            </div>
                        </div>
                

                        <p className="text-white text-justify text-xs mdd:mt-10 ">
                            AplusA Technologies started in 2017 as a partnership firm as a team tech enthusiast with a desire to 
                            do something new. Together, we wanted to help global enterprises with software and reinvent how 
                            business is done, in 2020 we have converted our partnership firm (AplusA Technologies) to private 
                            limited company (AplusA Technologies Pvt. Ltd).
                        </p> <br />

                        <p className="text-white text-justify text-xs xlllll:text-sm xxxxxxl:text-lg">
                            Today, the same entrepreneurial spirit continues to drive our culture of creativity, diversity, and 
                            collaboration. AplusA Technologies has helped companies across verticals transform their traditional 
                            business to evolve to the changing way of how business is done by end-to-end implementations, mergers & 
                            acquisition projects, SAP upgrades, SAP enterprise planning & budgeting projects, ECC to SAP S/4HANA 
                            migrations and developing simple and elegant solutions for their complex workflows.
                        </p> <br />

                        <p className="text-white text-justify text-xs xlllll:text-sm xxxxxxl:text-lg">
                            As the world moves towards cloud, we were prepared for this transition a long time back. With vast 
                            expertise in new generation technology and familiarity with cloud based solutions like SAP BTP, SAC, 
                            RISE with SAP and data rich cloud systems you can rest assured, you are in safe hands.
                        </p> <br />

                        <p className="text-white text-justify text-xs xlllll:text-sm xxxxxxl:text-lg">
                            With a industry-updated centre of excellence we have been offering multiple SAP partner qualified 
                            solutions helping business owners unlock tremendous potential and scale their traditional setup.
                        </p> <br />


                    </div>
                </Section>
            </div>

            <Section>

                <div className="flex justify-center items-center">
                    <div className="mx-[11vw]">
                        <h1 className="text-accent p-3 font-semibold text-center mt-[5vh] xxxxxxl:text-[1.8rem]">DO YOU SHARE OUR VALUES?</h1>
                        <p className="text-gray-500 md:mx-20 lg:text-[0.9rem] xxxxxxl:text-[1.5rem] xxxxxxl:leading-10 p-3 leading-6 text-center">
                            Our vision is to grow with the right people who live and breathe our values of honesty.  We take pride in creating a work environment that is professional and collaborative, 
                            where individuals can expect a bottom-up approach to ideas generating and sharing.
                        </p>
                   
                    <div className="md:flex sssm:block  justify-between mt-5 p-1 mx-6 sssm:px-12">
                        <motion.div className="rounded-md sssm:my-4 md:mx-2 lgg:mx-0 lgg:my-0  rounded-br-none border-b-4 border-accent border-r-4"
                                    whileHover={{
                                        scale: [1, 1.2, 1.2, 1, 1],
                                        rotate: [0, 0, 180, 180, 0],
                                        borderRadius: ["0%", "0%", "10%", "10%", "0%"]
                                      }}
                                      transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                        
                                      }}
                        >
                            <div className="bg-white lg:w-[12vw] md:w-[20vw] sssm:w-[40vw] items-center justify-center p-3 border-2 border-gray-200  relative cursor-pointer">
                                <div className="relative z-10 bg-[url('/Images/About/communication.png')] bg-contain bg-no-repeat bg-center">
                                    <h1 className="font-bold text-md text-center">Honesty</h1>
                                </div>  
                            </div>

                        </motion.div>


                        <motion.div className="rounded-md md:mx-2 lgg:mx-0 rounded-br-none sssm:my-4 lgg:my-0 border-b-4 border-accent border-r-4"
                                    whileHover={{
                                        scale: [1, 1.2, 1.2, 1, 1],
                                        rotate: [0, 0, 180, 180, 0],
                                        borderRadius: ["0%", "0%", "10%", "10%", "0%"]
                                      }}
                                      transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                        
                                      }}
                        >
                            <div className="bg-white lg:w-[12vw] md:w-[20vw] sssm:w-[40vw] items-center justify-center p-3 border-2 border-gray-200  relative cursor-pointer">
                                <div className="relative z-10 bg-[url('/Images/About/critical-thinking.png')] bg-contain bg-no-repeat bg-center">
                                    <h1 className="font-bold text-md text-center">Integrity</h1>
                                </div>  
                            </div>

                        </motion.div>

                        <motion.div className="rounded-md rounded-br-none md:mx-2 lgg:mx-0 sssm:my-4 lgg:my-0 border-b-4 border-accent border-r-4"
                                    whileHover={{
                                        scale: [1, 1.2, 1.2, 1, 1],
                                        rotate: [0, 0, 180, 180, 0],
                                        borderRadius: ["0%", "0%", "10%", "10%", "0%"]
                                      }}
                                      transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                       
                                      }}
                        >
                            <div className="bg-white lg:w-[12vw] md:w-[20vw] sssm:w-[40vw] items-center justify-center p-3 border-2 border-gray-200  relative cursor-pointer">
                                <div className="relative z-10 bg-[url('/Images/About/transparency.png')] bg-contain bg-no-repeat bg-center">
                                    <h1 className="font-bold text-md text-center">Transparency</h1>
                                </div>  
                            </div>

                        </motion.div>

                        <motion.div className="rounded-md rounded-br-none md:mx-2 lgg:mx-0 sssm:my-4 lgg:my-0 border-b-4 border-accent border-r-4"
                                    whileHover={{
                                        scale: [1, 1.2, 1.2, 1, 1],
                                        rotate: [0, 0, 180, 180, 0],
                                        borderRadius: ["0%", "0%", "10%", "10%", "0%"]
                                      }}
                                      transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                      }}
                        >
                            <div className="bg-white lg:w-[12vw] md:w-[20vw] sssm:w-[40vw] items-center justify-center p-3 border-2 border-gray-200  relative cursor-pointer">
                                <div className="relative z-10 bg-[url('/Images/About/organization-structure.png')] bg-contain bg-no-repeat bg-center">
                                    <h1 className="font-bold text-md text-center">Loyalty</h1>
                                </div>  
                            </div>

                        </motion.div>


                    </div>

                    </div>
                </div>
                
            </Section>


                
            <Section> 
            <div className="bg-gray-100 W-full lgg:mt-0 sssm:mt-20">
                    <GetStarted />
                </div>
            </Section>
            

        </div>
        <br />
        <Footer />
        </div>
    );
}