import Image from "next/image";

export default function Partners(){
    return(
        <div className="relative sssm:mt-[-10vh] smmm:mt-[-5vh] ssmm:mt-[-3vh] llg:mt-[7vh] mmd:mt-[8vh]">

            <div className="w-full mt-20">
                <Image src="/Images/Partners/partners-bg.jpg" width={500} height={500} alt="bg" className="w-full h-full rotate-180"/>
                
                <div className="bg-white w-full h-1/2 absolute lg:top-[80vh] md:top-[30vh] sssm:top-[23vh] left-0"></div>
                
                <div className="bg-white lg:w-[20vw] lg:h-[10vh] md:p-4 sssm:w-[20vw] sssm:h-[3vh] md:h-[4vh] p-2 rounded-md absolute top-10 left-10 flex items-center justify-center">
                    <Image src="/Images/Partners/microsoft-azure.jpg" width={200} height={200} alt="microsoft" className="xlllll:scale-180"/>
                </div>

                <div className="bg-white lg:w-[20vw] lg:h-[10vh] md:p-4 sssm:w-[20vw] sssm:h-[3vh] md:h-[4vh] p-2 rounded-md absolute top-10 md:left-[35vw] sssm:left-[40vw] flex items-center justify-center">
                    <Image src="/Images/Partners/Google.png" width={200} height={200} alt="google" className="xlllll:scale-180"/>
                </div>

                <div className="bg-white lg:w-[20vw] lg:h-[10vh] md:p-4 sssm:w-[20vw] sssm:h-[3vh] md:h-[4vh] p-2 rounded-md absolute lg:top-[30vh] md:top-[12vh] sssm:top-[10vh] md:left-[20vw] sssm:left-[25vw] flex items-center justify-center">
                    <Image src="/Images/Partners/Amazon.png" width={100} height={200} alt="amazon" className="sssm:scale-75 lg:scale-100 md:scale-50 xlllll:scale-180"/>
                </div>

                <div className="bg-white lg:w-[20vw] lg:h-[10vh] md:p-4 sssm:w-[20vw] sssm:h-[3vh] md:h-[4vh] p-2 rounded-md absolute lg:top-[50vh] md:top-[20vh] sssm:top-[15vh] left-10 flex items-center justify-center">
                    <Image src="/Images/Partners/SAP.jpg" width={100} height={200} alt="sap" className="sssm:scale-75 lg:scale-100 md:scale-60 xlllll:scale-180"/>
                </div>

                <div className="bg-white lg:w-[20vw] lg:h-[10vh] md:p-4 sssm:w-[20vw] sssm:h-[3vh] md:h-[4vh] p-2 rounded-md absolute lg:top-[50vh] md:top-[20vh] sssm:top-[15vh] md:left-[35vw] sssm:left-[40vw] flex items-center justify-center">
                    <Image src="/Images/Partners/Nasscom.png" width={150} height={200} alt="nasscom" className="lg:scale-100 md:scale-60 xlllll:scale-180"/>
                </div>

            </div>

            <h1 className="text-accent font-bold xlllll:text-[8rem] xlllll:right-[1.7vw] xllll:text-[6rem] lg:text-[4rem] md:text-[2.5rem] sssm:text-[1rem] absolute lg:top-[10vh] sssm:top-[5vh] lg:right-9 sssm:right-[10.5vw] md:right-[4.7vw]">OUR</h1>
            <h1 className="text-white font-bold  xlllll:text-[8rem] xllll:text-[6rem] lg:text-[4rem] md:text-[2.5rem] sssm:text-[1rem] absolute lg:top-[10vh] sssm:top-[5vh] right-10">OUR</h1>
            <h1 className="text-accent font-bold  xlllll:text-[8rem] xlllll:right-[1.7vw] xllll:text-[6rem] lg:text-[4rem] md:text-[2.5rem] sssm:text-[1em] absolute lg:top-[25vh] xllll:top-[30vh] sssm:top-[10vh] lg:right-9 sssm:right-[10.5vw] md:right-[4.7vw]">PARTNERS</h1>
            <h1 className="text-white font-bold  xlllll:text-[8rem] xllll:text-[6rem] lg:text-[4rem] md:text-[2.5rem] sssm:text-[1rem] absolute lg:top-[25vh] xllll:top-[30vh] sssm:top-[10vh] right-10">PARTNERS</h1>
         

        </div>
    
    );
}