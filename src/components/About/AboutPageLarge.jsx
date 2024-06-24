import Image from "next/image";

export default function AboutPageLarge(){
    const Paragraphs = [
        {
            Para1: "AplusA Technologies started in 2017 as a partnership firm as a team tech enthusiast with a desire to do something new. Together, we wanted to help global enterprises with software and reinvent how business is done, in 2020 we have converted our partnership firm (AplusA Technologies) to private limited company (AplusA Technologies Pvt. Ltd)."
        },

        {
            Para2: "Today, the same entrepreneurial spirit continues to drive our culture of creativity, diversity, and collaboration. AplusA Technologies has helped companies across verticals transform their traditional business to evolve to the changing way of how business is done by end-to-end implementations, mergers & acquisition projects, SAP upgrades, SAP enterprise planning & budgeting projects, ECC to SAP S/4HANA migrations and developing simple and elegant solutions for their complex workflows."
        },

        {
            Para3: "As the world moves towards cloud, we were prepared for this transition a long time back. With vast expertise in new generation technology and familiarity with cloud based solutions like SAP BTP, SAC, RISE with SAP and data rich cloud systems you can rest assured, you are in safe hands."
        },

        {
            Para4: "With a industry-updated centre of excellence we have been offering multiple SAP partner qualified solutions helping business owners unlock tremendous potential and scale their traditional setup."
        },
    ]

    return(
        <div>
            {/*Gradient line 1*/}
            <div className="bg-gradient-to-r xl:right-[10.5vw] llg:top-[137vh] absolute xl:top-[173vh] xxxxxxl:right-[22vw] xxxxxxl:top-[118vh] lgg:top-[135vh] lxl:top-[127vh] lgg:right-[10vw] xxl:top-[133vh] xll:top-[115vh] xlllll:top-[120vh] from-main3 to-accent mb-8 rounded-r-none rotate-180 rounded-lg w-1/12 h-3"></div>
                    
            <div className="flex justify-center items-center lgg:w-5/6 sssm:w-full">
                {/*About text background*/}
                <div className="bg-accent sssm:w-full xl:w-5/6 xxxxxxl:w-2/3 llg:ml-[13vw] lgg:w-7/8 lgg:ml-20 h-full p-5 rounded-xl mt-20">
                
                    {/*Gradient line 2*/}
                    <div className="bg-gradient-to-r -mt-10 xl:ml-[15vw] xxxxxxl:ml-[19vw] lgg:ml-[14vw] lxl:ml-[23vw] xxl:ml-[20vw] xlllll:ml-[28vw] from-main3 to-accent mb-8 rounded-r-none rounded-lg w-1/3 h-3"></div>
                        
                    <div className="flex space-x-[4vw]">
                        {/*First 2 paragraphs*/}  
                        <div className="lgg:pr-[5vw] text-white text-justify text-xs xlllll:text-sm xxxxxxl:text-lg">
                            <p>{Paragraphs[0].Para1}</p> <br />
                            <p>{Paragraphs[1].Para2}</p> <br />
                        </div>

                        {/*About image*/}
                        <div className="xl:scale-140 lgg:scale-125 xxl:scale-125 sssm:scale-50 llg:mt-[0vh] xxxxxxl:scale-180 xl:mt-[1vh] sssm:mt-[-55vh] xxxxxxl:mt-10 xxl:mt-[-3vh]">
                            <div className="bg-main3 rounded-[2.5vw] rounded-br-none w-[300px] h-[185px] relative">
                                <Image src="/Images/About/business.jpg" width={300} height={250} alt="business" className="rounded-[1.5vw] rounded-br-none absolute -top-5 -left-3"/>
                            </div>
                        </div>
            
                    </div>
                    
                    {/*Last 2 paragraphs*/}  
                    <div className="text-white text-xs xlllll:text-sm xxxxxxl:text-lg mt-3">
                        <p>{Paragraphs[2].Para3}</p> <br />
                        <p>{Paragraphs[3].Para4}</p> <br />
                    </div>
                    
                </div>

            </div>

         </div>
    );
}