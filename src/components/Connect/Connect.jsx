/*Importing requried libraries and media*/
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

export default function Connect() {
    return (
        <div className="mx-[7vw] xl:-mt-20 xlllll:mt-20 mmd:my-[2vh] sssm:my-[5vh]  relative">

            <div className="relative">
                <Image src="/Images/Connect/connect.jpg" width={800} height={500} alt="Connect" loading="lazy" className="rounded-br-none rounded-tl-[2vw] rounded-bl-[5vw] rounded-tr-[5vw] w-[90vw] relative z-0" />
                <div className="bg-main1 absolute top-0 left-0 w-full h-full opacity-60 z-10 rounded-br-none rounded-tl-[2vw] rounded-bl-[5vw] rounded-tr-[5vw] "></div>
            </div>

            <div className=" absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-20">

                <h1 className="connect-text text-white xlllll:mx-5 xlllll:text-[4rem] roboto-black lg:text-[2.5rem] mmd:text-[2rem] mdm:text-[1.8rem] md:text-[1.7rem] sssm:text-[0.7rem] smmm:text-[0.8rem] ssmm:text-[0.8rem] absolute xl:top-20 md:top-10 sssm:top-5 z-30">
                    READY TO CONNECT WITH OUR EXPERTS AND UNDERSTAND THE BENEFITS SAP WILL BRING TO YOUR BUSINESS?
                </h1>

                <h1 className="connect-text text-main3 xlllll:mx-5 roboto-black xlllll:text-[4rem] lg:text-[2.5rem] mmd:text-[2rem] mdm:text-[1.8rem] md:text-[1.7rem] sssm:text-[0.7rem] smmm:text-[0.8rem] ssmm:text-[0.8rem]  absolute xl:top-20 md:top-10 sssm:top-5 sssm:left-0.5 md:left-1 z-20">
                    READY TO CONNECT WITH OUR EXPERTS AND UNDERSTAND THE BENEFITS SAP WILL BRING TO YOUR BUSINESS?
                </h1>

                <div className="xl:mt-[45vh] xl:ml-10 xlllll:mt-[35vh] xlllll:scale-160 lgg:scale-100 sssm:scale-50 sssm:mt-[10vh]">
                    <Link href="/contact" legacyBehavior>
                        <a>  
                            <Button
                                buttonText="Read More"
                                bgColor="bg-main3"
                            />
                        </a>
                    </Link>
                </div>

            </div>

        </div>
    );
}
