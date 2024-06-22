import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function About(){
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [60, -60]);
    const rotateY = useTransform(x, [-100, 100], [-60, 60]);
    return(
        <div className="abthead lg:mt-[50vh] xlllll:mt-[35vh] xl:mt-[40vh] sssm:mt-[2vh] justify-between items-center relative lg:mx-20 sssm:mx-10">
            <div className="w-1/3">
                <p className="text-black text-md font-semibold  xllll:text-xl xlllll:text-[2rem] roboto-light">ABOUT US</p>

                <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl  xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                    <span className="text-main3 px-0">Welco</span>
                    <span className="text-main2 px-0">me</span>
                    <span className="text-main1 px-1">to</span>
                </h2>

                <h2 className=" lg:text-[1.5rem] text-xl xllll:text-3xl  xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                    <span className="text-main3 px-0">Apl</span>
                    <span className="text-main2 px-0">usA</span>
                    <span className="text-main1 pl-1">Tech</span>
                    <span className="text-accent px-0">nologies</span>
                </h2>

            </div>

            <div className="flex lg:scale-100 xlll:scale-110 xllll:scale-125 sssm:scale-75 md:scale-90 lg:mt-[-15vh md:mt-[-10vh] sssm:mt-[-13vh]">

                <div className="bg-accent/80 md:scale-80 lg:scale-100 sssm:min-w-[550px] lg:max-w-[600px] xxxxxxl:max-w-[1100px] xlx:max-w-[600px] lgg:max-w-[500px] sssm:max-w-full xlllll:max-w-[850px] xllll:max-w-[800px] xll:max-w-[650px] mmd:max-w-[520px] md:min-w-[400px] md:max-w-[500px] lg:px-[8vw] md:px-[6vw] sssm:px-[20vw] ssm:min-w-[620px] py-2 absolute top-[20vh] xl:ml-[-6.5vw] lg:ml-[-9vw] xlll:ml-[-2vw] xllll:ml-[2vw] mmd:ml-[-16vw] md:ml-[-18vw] sssm:ml-[-30vw]">
                    <p className="text-white md:text-sm xllll:text-lg xxxxxxl:text-[1.5rem] xxxxxxl:leading-10 sssm:xs p-3 sssm:my-2 leading-6 text-justify">
                        AplusA Technologies started in 2017 as a partnership firm of a team
                        of tech enthusiasts with a desire to do something new. Together, we
                        wanted to help global enterprises with software and reinvent how
                        business is done. In 2020, we converted our partnership firm
                        (AplusA Technologies) to private limited company (AplusA Technologies
                        Pvt. Ltd). <br /><br/>Today, the same entrepreneurial spirit continues to drive our
                        culture of creativity, diversity, and collaboration.
                    </p>
                    <button className="bg-main3 rounded-tr-xl xxxxxxl:scale-140 xxxxxxl:hover:scale-150 xxxxxxl:ml-[3vw] xlllll:max-w-[10vw] lg:ml-[1vw] md:ml-[2vw] rounded-tl-xl rounded-bl-xl lg:w-[15vw] md:w-[30vw] sssm:w-[50vw] flex mb-4 h-10 p-2 mx-20 text-white justify-center text-center font-semibold hover:bg-white hover:text-main3 hover:scale-105">
                        Read More
                        <div className="scale-75 my-0 ml-3 cursor-pointer xlllll:scale-100 xlllll:mt-0.5 xl:scale-90 xl:mt-0.5">
                            <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
                        </div>
                        
                    </button>
                </div>

                <div className="bg-gray-100 lg:min-w-[500px] smmm:mt-20 ssm:mt-0 xxxxxxl:max-w-[800px] xxxxxxl:left-[55vw] xlllll:max-w-[620px] xlx:left-[48vw] xlllll:px-[4.5vw] xlllll:left-[55vw] xlllll:top-[15vh] lgg:left-[45vw] sssm:scale-85 xllll:scale-115 md:scale-70 lg:scale-100 md:max-w-full sssm:max-w-[570px] ssm:max-w-[700px] ssmm:min-w-[610px] lg:px-[6vw] md:px-[12vw] md:pr-[12.5vw] sssm:px-[22vw] ssmm:px-[26vw] absolute lg:top-[5vh] md:top-[10vh] xllll:left-[58.4vw] lg:left-[50vw] md:left-[36vw] sssm:top-[110vh] smmm:top-[110vh] ssmm:top-[115vh] ssm:top-[98vh] sssm:left-[-40vw] rounded-lg">
                    <h1 className="text-accent p-3 font-semibold text-center mt-[5vh] xxxxxxl:text-[1.8rem]">DO YOU SHARE OUR VALUES?</h1>
                    <p className="text-gray-500 lg:text-[0.9rem] xxxxxxl:text-[1.5rem] xxxxxxl:leading-10 p-3 leading-6 text-center">
                        Our vision is to grow with the right people who live and breathe our values of honesty.
                    </p>
                    <p className="text-gray-500 lg:text-[0.9rem] xxxxxxl:text-[1.5rem] xxxxxxl:leading-10 p-3 leading-6 text-center">
                        We take pride in creating a work environment that is professional and collaborative, 
                        where individuals can expect a bottom-up approach to ideas generating and sharing.
                    </p>

                    <div className="flex p-1 mx-6 sssm:px-8">
                        <motion.div className="bg-white lg:w-[12vw] md:w-[20vw] sssm:w-[40vw] items-center justify-center p-3 mx-2 rounded-md rounded-br-none border-b-4 border-main3 border-r-4 relative cursor-pointer"
                                    whileHover={{
                                        scale: [1, 1.2, 1.2, 1, 1],
                                        rotate: [0, 0, 180, 180, 0],
                                        borderRadius: ["0%", "0%", "10%", "10%", "0%"]
                                      }}
                                      transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        times: [0, 0.2, 0.5, 0.8, 1],
                                      }}
                        >
                            
                            <div className="relative z-10 bg-[url('/Images/About/communication.png')] bg-contain bg-no-repeat bg-center">
                                <h1 className="font-bold text-md text-center">Honesty</h1>
                            </div>
                            
                            
                        </motion.div>


                        <motion.div className="bg-white lg:w-[12vw] md:w-[20vw] sssm:w-[40vw] items-center justify-center p-3 mx-2 rounded-md rounded-br-none border-b-4 border-main3 border-r-4 relative  cursor-pointer"
                                    whileHover={{
                                        scale: [1, 1.2, 1.2, 1, 1],
                                        rotate: [0, 0, 180, 180, 0],
                                        borderRadius: ["0%", "0%", "10%", "10%", "0%"]
                                      }}
                                      transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        times: [0, 0.2, 0.5, 0.8, 1],
                                      }}
                        >
                            <div className="relative z-10 bg-[url('/Images/About/critical-thinking.png')] bg-contain bg-no-repeat bg-center ">
                                <h1 className="font-bold text-md text-center">Integrity</h1>
                            </div>

                        </motion.div>

                    </div>

                    <div className="flex p-1  mx-6 mb-4 sssm:px-8">
                        <motion.div className="bg-white lg:w-[12vw] md:w-[20vw] sssm:w-[40vw] items-center justify-center p-3 mx-2 rounded-md rounded-br-none border-b-4 border-main3 border-r-4 relative  cursor-pointer"
                                    whileHover={{
                                        scale: [1, 1.2, 1.2, 1, 1],
                                        rotate: [0, 0, 180, 180, 0],
                                        borderRadius: ["0%", "0%", "10%", "10%", "0%"]
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        times: [0, 0.2, 0.5, 0.8, 1],
                                    }}
                        >
                            <div className="relative z-10 bg-[url('/Images/About/transparency.png')] bg-contain bg-no-repeat bg-center ">
                                <h1 className="font-bold text-md text-center">Transparency</h1>
                            </div>
                            
                        </motion.div>

                        <motion.div className="bg-white lg:w-[12vw] md:w-[20vw] sssm:w-[40vw]  items-center justify-center p-3 mx-2 rounded-md rounded-br-none border-b-4 border-main3 border-r-4 relative cursor-pointer"
                                     whileHover={{
                                        scale: [1, 1.2, 1.2, 1, 1],
                                        rotate: [0, 0, 180, 180, 0],
                                        borderRadius: ["0%", "0%", "10%", "10%", "0%"]
                                      }}
                                      transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        times: [0, 0.2, 0.5, 0.8, 1],
                                      }}
                        >
                            <div className="relative z-10 bg-[url('/Images/About/organization-structure.png')] bg-contain bg-no-repeat bg-center ">
                                <h1 className="font-bold text-md text-center">Loyalty</h1>
                            </div>
            
                        </motion.div>

                    </div>

                </div>

            </div>

            <div className="lg:ml-[2vw] lgg:ml-[-3vw] xlx:ml-[0vw] ssm:mt-[-5vh] ssm:ml-[-25vw] xlllll:ml-[9vw] md:ml-[-2vw] mdd:ml-[-4vw] mdm:ml-[-3vw] mdd:mt-[15vh] xllll:ml-[12vw] xllll:mt-[24vh] sssm:ml-[-30vw] xxxxxxl:ml-[11vw] xxxxxxl:scale-250 llg:scale-105 llg:ml-[-5vw] lxl:scale-150 xll:scale-125 xllll:scale-160 sssm:scale-140 md:scale-70 lg:scale-80 xl:scale-115 xxl:scale-140 xxl:ml-[0vw] mmd:scale-80 md:mt-[14vh]">
                <motion.div className="w-2/3 flex items-center max-w-[210px] mdd:scale-90 mmd:scale-80 lg:scale-125 mdm:scale-90 md:scale-75 sssm:scale-90  justify-center lg:mt-[15vh] md:mt-[12vh] ssm:mt-[58vh] ssmm:mt-[65vh] sssm:mt-[62vh] relative"
                            style={{
                                marginLeft: "35vw",
                                x,
                                y,
                                rotateX,
                                rotateY,
                                cursor: "grab"
                            }}
                            drag
                            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                            dragElastic={0.6}
                            whileTap={{ cursor: "grabbing" }}
                >
                    <div className="photo_bg bg-main3 w-full xxxxxxl:h-[10vh] xlllll:h-[13vh]  lxl:h-[16vh] lgg:h-[22vh] xlx:h-[24vh] xll:h-[15.5vh] xxl:h-[18vh] xl:h-[24vh] mdm:h-[11.3vh] lg:h-[21vh] md:h-[15vh] smmm:h-[17.5vh] sssm:h-[18vh] mdd:h-[13vh] ssmm:h-[18.5vh] ssm:h-[16vh] p-4 lg:ml-[0.5vw] sssm:ml-[1.5vw] relative overflow-visible rounded-t-xl rounded-bl-xl about"></div>
                    
                    <Image src="/Images/About/team.jpg" width={200} height={200} alt="about" className="absolute top-0 rounded-t-xl rounded-bl-xl"/>
                </motion.div>
            </div>
        </div>
    );
}