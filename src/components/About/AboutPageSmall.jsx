import Image from "next/image";

export default function AboutPageSmall(){
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
            {/*Gradinet background and white lines*/}
            <div className="bg-gradient-to-r from-accent to-main3 h-20 w-full mb-[10vh] mt-10"></div>
            <div className="bg-white absolute mmd:top-[55vh] mdm:top-[44vh] mdd:top-[50vh] md:top-[55vh] md:left-[13.5vw] ssmm:top-[48vh] sssm:top-[47vh] ssm:top-[41vh] left-3 rounded-r-none rounded-lg w-2/12 h-3"></div>
            <div className="bg-white absolute mmd:top-[73vh] mdm:top-[57vh] mdm:right-[23vw] mdd:top-[64.5vh] md:top-[71vh] md:right-[21vw] ssmm:top-[64vh] sssm:top-[64vh] ssmm:right-10 sssm:right-8 ssm:top-[57vh] ssm:right-10 smmm:top-[60vh] smmm:right-[13.5vw] rounded-l-none rounded-lg w-1/12 h-1"></div>
            
            <div className="bg-gradient-to-b from-main1 to-accent h-full w-8/9 mx-3 p-6 mdd:p-8  rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none">
                {/*About image*/}
                <div className="sssm:scale-80 mdd:scale-125 mdm:mt-[-15vh] ssm:scale-90 md:scale-100 md:mx-[27vw] ssm:mx-4 sssm:mt-[-20vh] mb-4 ">
                    <div className="bg-main3 rounded-[2.5vw] rounded-br-none w-[300px] h-[185px] relative">
                        <Image src="/Images/About/business.jpg" width={300} height={250} alt="business" loading="lazy" className="rounded-xl rounded-br-none absolute -top-5 -left-3"/>
                    </div>
                </div>
        
                {/*Paragraphs*/}
                <p className="text-white text-justify text-xs mdd:mt-10 "> {Paragraphs[1].Para2} </p> <br />

                <div className="text-white text-justify text-xs xlllll:text-sm xxxxxxl:text-lg">
                    <p>{Paragraphs[1].Para2}</p> <br />
                    <p>{Paragraphs[2].Para3}</p> <br />
                    <p>{Paragraphs[3].Para4}</p> <br />
                </div>
                
            </div>
        </div>
    );
}