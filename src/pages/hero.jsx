import Image from "next/image";

export default function HeroSection(){
    return(
        <div>

            <div className="relative sssm:w-full">
                <video
                    className=""
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/Images/Hero/aplusa-hero.mp4" type="video/mp4" alt="hero" />
                    Your browser does not support the video tag.
                </video>
            </div>


            <Image src="/Images/Hero/arrow.png" width={500} height={500} alt="arrow" className="absolute xlllll:top-[55vh] xllll:top-[80vh] xl:top-[60vh] lg:top-[50vh] sssm:top-[16vh] ssmm:top-[17vh] md:top-[22vh] mdm:top-[20vh] mdd:top-[21vh] mmd:top-[23vh] xlx:top-[48vh] xlx:scale-80 mmd:left-[-2vw] ssm:top-[13.5vh] smmm:top-[14vh] xllll:scale-125 xllll:left-[10vw] xl:scale-100 lg:scale-90 md:scale-50 mmd:scale-60 mdm:scale-35 mdm:left-[-10vw] llg:scale-70 llg:left-[1vw] sssm:scale-25 lg:left-10 md:left-[-6vw] mdm:right-[55vw] sssm:right-[20vw] arrow"/> 

            <div className="absolute lg:top-[30vh] sssm:top-[15vh] ssmm:top-[18vh] smmm:top-[15vh] left-10">
                <h1 className="text-white font-bold md:text-[1.8rem] sssm:text-[1rem] xllll:text-[2.2rem] roboto-black">COMPANY PROFILE &</h1>
                <h1 className="text-white font-bold md:text-[1.8rem] sssm:text-[1rem] xllll:text-[2.2rem] roboto-black">SERVICE OFFERING</h1>
                <p className="text-accent md:text-lg font-semibold my-3 sssm:text-xs xllll:text-[1.5rem] font-sans">Intelligent and Automated SAP Solutions</p>
            </div>

            <h2 className="absolute roboto-black xlllll:top-[60vh] xllll:top-[80vh] md:top-[35vh] lg:top-[60vh] sssm:top-[28vh] ssmm:top-[32vh] ssm:top-[27vh] smmm:top-[30vh] font-bold left-20 text-main3 sssm:text-[2rem] md:text-[4rem] mdm:top-[28vh] mdm:text-[4rem] mdd:text-[4rem] mdd:top-[30vh] xlx:text-[10rem] xllll:text-[12rem]">SAP</h2>
            <h2 className="absolute roboto-black xlllll:top-[60vh]  xllll:top-[80vh] md:top-[35vh] xlllll:left-[5vw] lg:top-[60vh] sssm:top-[28vh] ssm:top-[27vh]  ssmm:top-[32vh] smmm:top-[30vh] font-bold xll:left-[6.7vw] xlll:left-[6vw] mmd:left-[9.8vw] mdm:top-[28vh] xl:left-[7vw] mdd:text-[4rem] xlx:text-[10rem] mdd:top-[30vh] xllll:left-[6vw] lg:left-[8vw] sssm:left-[21.5vw] ssmm:left-[21vw] mdd:left-[10.3vw] mdm:left-[10.5vw] ssm:left-[20vw] md:left-[11vw] text-white md:text-[4rem] sssm:text-[2rem] mdm:text-[4rem] xllll:text-[12rem] -z-1">SAP</h2>

            <div className="bg-gray-100 lg:space-x-20 ssm:space-x-7 xlll:space-x-[8vw] xlllll:space-x-[13vw] xllll:space-x-[10vw] sssm:space-x-4 ssmm:space-x-10 md:space-x-20 flex lg:px-80 md:px-[12vw] sssm:px-5 lg:py-3 sssm:py-0">
                <Image src="/Images/Hero/Medical.png" width={50} height={50} alt="medical" className="lg:scale-100 lg:hover:scale-115 sssm:scale-60 sssm:hover:scale-70 md:scale-90 md:hover:scale-100 xll:scale-125 xll:hover:scale-140 cursor-pointer"/>
                <Image src="/Images/Hero/manufacturing.png" width={50} height={50} alt="manufacturing" className="lg:scale-100 lg:hover:scale-115 sssm:scale-60 sssm:hover:scale-70 md:scale-90 md:hover:scale-100 xll:scale-125 xll:hover:scale-140 cursor-pointer"/>
                <Image src="/Images/Hero/Shield.png" width={50} height={50} alt="shield" className="lg:scale-100 lg:hover:scale-115 sssm:scale-60 sssm:hover:scale-70 md:scale-90 md:hover:scale-100 xll:scale-125 xll:hover:scale-140 cursor-pointer"/>
                <Image src="/Images/Hero/settings.png" width={50} height={50} alt="settings" className="lg:scale-100 lg:hover:scale-115 sssm:scale-60 sssm:hover:scale-70 md:scale-90 md:hover:scale-100 xll:scale-125 xll:hover:scale-140 cursor-pointer"/>
                <Image src="/Images/Hero/plants.png" width={50} height={50} alt="plants" className="lg:scale-100 lg:hover:scale-115 sssm:scale-60 sssm:hover:scale-70 md:scale-90 md:hover:scale-100 xll:scale-125 xll:hover:scale-140 cursor-pointer"/>
            </div>

        </div>
    );
}