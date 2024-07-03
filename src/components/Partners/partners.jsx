/*Importing requried libraries and media*/
import Image from "next/image";
import {motion} from "framer-motion"

export default function Partners(){
    return(
        <div className="relative sssm:mt-[-10vh] smmm:mt-[-5vh] ssmm:mt-[-3vh] llg:mt-[7vh] mmd:mt-[8vh]">

            <div className="w-full mt-20">
                <Image src="/Images/Partners/new-partners.jpg" width={500} height={500} alt="bg" className="w-full h-full mdm:py-7 mmd:py-0 mdd:py-0 sssm:py-6 lg:py-5 xl:py-0"/>

                <motion.div className="partners-logo bg-white xlllll:h-[10vh] xll:h-[8vh] xlx:h-[10vh] lgg:h-[8vh] lg:w-[20vw] lg:h-[10vh] md:p-4 sssm:w-[20vw] sssm:h-[3vh] md:h-[4vh] p-2 rounded-md absolute top-10 left-10 flex items-center justify-center hover:scale-115 cursor-pointer"
                            drag
                            dragConstraints={{
                                top: -50,
                                left: 10,
                                right: 50,
                                bottom: 50,
                              }}
                >
                    <Image src="/Images/Partners/microsoft-azure.jpg" width={200} height={200} alt="microsoft" className="xlllll:scale-180"/>
                </motion.div>

                <motion.div className="partners-logo bg-white xlllll:h-[10vh] xll:h-[8vh]  lgg:h-[8vh] xlx:h-[10vh]  lg:w-[20vw] lg:h-[10vh] md:p-4 sssm:w-[20vw] sssm:h-[3vh] md:h-[4vh] p-2 rounded-md absolute top-10 md:left-[35vw] sssm:left-[40vw] flex items-center justify-center hover:scale-115 cursor-pointer"
                            drag
                            dragConstraints={{
                                top: 10,
                                left: 10,
                                right: 50,
                                bottom: 50,
                              }}
                >
                    <Image src="/Images/Partners/Google.png" width={200} height={200} alt="google" className="xlllll:scale-180"/>
                </motion.div>

                <motion.div id="amazon" className="partners-logo bg-white xlllll:h-[10vh] xlll:top-[29vh] xlx:h-[10vh] xlx:top-[35vh] lgg:h-[8vh] xll:h-[8vh] lg:w-[20vw] lg:h-[10vh] md:p-4 sssm:w-[20vw] sssm:h-[3vh] md:h-[4vh] p-2 rounded-md absolute xll:top-[25vh] lg:top-[30vh] md:top-[12vh] sssm:top-[10vh] md:left-[20vw] sssm:left-[25vw] flex items-center justify-center hover:scale-115 cursor-pointer"
                            drag
                            dragConstraints={{
                                top: -20,
                                left: 10,
                                right: 50,
                                bottom: 10,
                              }}
                >
                    <Image src="/Images/Partners/Amazon.png" width={100} height={200} alt="amazon" className="sssm:scale-75 lg:scale-100 md:scale-50 xlllll:scale-180"/>
                </motion.div>

                <motion.div id="sap" className="partners-logo bg-white xlll:top-[50vh] xlllll:h-[10vh] xlllll:top-[49vh] xlx:h-[10vh] xlx:top-[60vh] xll:h-[8vh] lgg:h-[8vh] lg:w-[20vw] lg:h-[10vh] md:p-4 sssm:w-[20vw] sssm:h-[3vh] md:h-[4vh] p-2 rounded-md absolute xll:top-[43vh]  lg:top-[50vh] md:top-[20vh] sssm:top-[15vh] left-10 flex items-center justify-center hover:scale-115 cursor-pointer"
                            drag
                            dragConstraints={{
                                top: -20,
                                left: 10,
                                right: 50,
                                bottom: 10,
                              }}
                >
                    <Image src="/Images/Partners/SAP.jpg" width={100} height={200} alt="sap" className="sssm:scale-75 lg:scale-100 md:scale-60 xlllll:scale-180"/>
                </motion.div>

                <motion.div id="nasscom" className="partners-logo bg-white xlll:top-[50vh] xlllll:h-[10vh] xlllll:top-[49vh] xlx:h-[10vh] xlx:top-[60vh] lgg:h-[8vh] xll:h-[8vh] lg:w-[20vw] lg:h-[10vh] md:p-4 sssm:w-[20vw] sssm:h-[3vh] md:h-[4vh] p-2 rounded-md absolute xll:top-[43vh]  lg:top-[50vh] md:top-[20vh] sssm:top-[15vh] md:left-[35vw] sssm:left-[40vw] flex items-center justify-center hover:scale-115 cursor-pointer"
                            drag
                            dragConstraints={{
                                top: -20,
                                left: 10,
                                right: 50,
                                bottom: 10,
                              }}
                >
                    <Image src="/Images/Partners/Nasscom.png" width={150} height={200} alt="nasscom" className="lg:scale-100 md:scale-60 xlllll:scale-180"/>
                </motion.div>

            </div>

            <h1 className="text-accent font-bold xxxxxxl:text-[11rem] xxxxxxl:top-[10.5vh] xxxxxxl:right-7 xlllll:text-[8rem] xlllll:right-[1.7vw] xlx:top-[10.5vh] xlx:text-[5.5rem] xllll:text-[6rem] xxl:text-[6rem] xxl:top-[10.5vh] xxl:right-15 lg:text-[4rem] md:text-[2.5rem] sssm:text-[1rem] absolute lg:top-[10vh] sssm:top-[7vh] lg:right-9 sssm:right-[10.5vw] md:right-[4.7vw]">OUR</h1>
            <h1 className="text-white font-bold xxxxxxl:text-[11rem] xlllll:text-[8rem] xlx:text-[5.5rem] xllll:text-[6rem] lg:text-[4rem] md:text-[2.5rem] xxl:text-[6rem]  sssm:text-[1rem] absolute lg:top-[10vh] sssm:top-[7vh] right-10">OUR</h1>
            <h1 className="text-accent font-bold xxxxxxl:text-[11rem] xxxxxxl:top-[30.5vh] xxxxxxl:right-7 xlllll:text-[8rem] xlx:text-[5.5rem] xlx:top-[25.5vh] xlllll:right-[1.7vw] xllll:text-[6rem] xxl:text-[6rem] xxl:top-[25.5vh] xxl:right-15  lg:text-[4rem] md:text-[2.5rem] sssm:text-[1em] absolute lg:top-[25vh] xllll:top-[30vh] sssm:top-[10vh] lg:right-9 sssm:right-[10.5vw] md:right-[4.7vw]">PARTNERS</h1>
            <h1 className="text-white font-bold xxxxxxl:text-[11rem] xlllll:text-[8rem] xlx:text-[5.5rem] xllll:text-[6rem] xxl:text-[6rem]  lg:text-[4rem] md:text-[2.5rem] sssm:text-[1rem] absolute lg:top-[25vh] xllll:top-[30vh] sssm:top-[10vh] right-10">PARTNERS</h1>
         

        </div>
    
    );
}