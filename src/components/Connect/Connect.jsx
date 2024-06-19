import Image from "next/image";

export default function Connect() {
    return (
        <div className="mx-[7vw] xl:my-[10vh] mmd:my-[2vh] sssm:my-[5vh]  relative">

            <div className="relative">
                <Image src="/Images/Connect/connect.jpg" width={800} height={500} alt="Connect" className="rounded-br-none rounded-tl-[2vw] rounded-bl-[5vw] rounded-tr-[5vw] w-[90vw] relative z-0" />
                <div className="bg-main1 absolute top-0 left-0 w-full h-full opacity-60 z-10 rounded-br-none rounded-tl-[2vw] rounded-bl-[5vw] rounded-tr-[5vw] "></div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-20">

                <h1 className="connect-text text-white roboto-black lg:text-[2.5rem] mmd:text-[2rem] mdm:text-[1.8rem] md:text-[1.7rem] sssm:text-[0.7rem] smmm:text-[0.8rem] ssmm:text-[0.8rem] absolute xl:top-20 md:top-10 sssm:top-5 z-30">
                    READY TO CONNECT WITH OUR EXPERTS AND UNDERSTAND THE BENEFITS SAP WILL BRING TO YOUR BUSINESS?
                </h1>

                <h1 className="connect-text text-main3 roboto-black lg:text-[2.5rem] mmd:text-[2rem] mdm:text-[1.8rem] md:text-[1.7rem] sssm:text-[0.7rem] smmm:text-[0.8rem] ssmm:text-[0.8rem]  absolute xl:top-20 md:top-10 sssm:top-5 sssm:left-0.5 md:left-1 z-20">
                    READY TO CONNECT WITH OUR EXPERTS AND UNDERSTAND THE BENEFITS SAP WILL BRING TO YOUR BUSINESS?
                </h1>

                <button className="connect-btn bg-main3 xl:mt-[40vh] sssm:mt-[11vh] lg:mt-[35vh] mmd:mt-[18vh] mdm:mt-[15vh] md:mt-[18vh] rounded-tr-xl rounded-tl-xl rounded-bl-xl  flex mb-4 h-10 sssm:scale-50 md:scale-100 p-2 sssm:px-[-5px] md:px-10 mx-20 text-white justify-center text-center font-semibold hover:bg-white hover:text-main3 md:hover:scale-105 sssm:hover:scale-65">
                    Read More
                    <div className="scale-75 my-0 ml-3 cursor-pointer xlllll:scale-100 xlllll:mt-0.5 xl:scale-90 xl:mt-0.5">
                        <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
                    </div>
                    
                </button>

            </div>

        </div>
    );
}
