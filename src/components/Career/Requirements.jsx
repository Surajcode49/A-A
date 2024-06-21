import Image from "next/image";

export default function Requirements(){
    return(
        <div className="bg-gray-100 p-10 mt-[20vh] w-full h-[40vh] flex">
            <div className="w-full lg:w-1/3 mt-[25vh]">

                <p className="sssm:mt-10 text-black text-md font-semibold xllll:text-xl xlllll:text-[2rem] xl:mt-[-25vh]  roboto-light text-nowrap">
                    WHAT WE LOOK FOR
                </p>

                <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                    <span className="text-main3 px-0">We</span>
                    <span className="text-main2 px-1">map</span>
                    <span className="text-accent px-0">compete</span>
                    <span className="text-main1">ncies</span>
                </h2>

                <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                    <span className="text-main3 px-0">and</span>
                    <span className="text-main2 px-1">also</span>
                    <span className="text-accent px-1">check</span>
                    <span className="text-main1">for</span>
                </h2>

                <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                    <span className="text-main3 px-0">compatib</span>
                    <span className="text-main2 px-0">ility,</span>
                    <span className="text-accent px-1">to</span>
                    <span className="text-main1">be</span>
                </h2>

                <h2 className="items-center lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                    <span className="text-main3 px-0">sure</span>
                    <span className="text-main2 px-1">you,</span>
                    <span className="text-accent px-1">match</span>
                    <span className="text-main1">the</span>
                </h2>

                <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                    <span className="text-main3 px-0">values</span>
                    <span className="text-main2 px-1">we,</span>
                    <span className="text-accent px-0">inhe</span>
                    <span className="text-main1">rit</span>
                </h2>

            </div>

            <hr className="bg-gradient-to-r from-main3 to-main1 rounded-lg w-1/3 h-2 rotate-90 mt-20 ml-[0vw]"/>

            <div className="w-full lg:w-1/3 mt-[25vh] ml-[-3vw]">

                <p className="sssm:mt-10 text-main3 text-md font-semibold xllll:text-xl xlllll:text-[2rem] xl:mt-[-25vh]  roboto-light text-nowrap">
                    POSITIVE  <br />ATTITUDE
                </p>

                <br />

                <p className="text-black max-w-[15vw] text-sm">
                    Ability to blend with our culture, embody our core values, and maintains a positive approach.
                </p>

            </div>

            <hr className="bg-gradient-to-r from-main3 to-main1 rounded-lg w-1/3 h-1 rotate-90 mt-20 ml-[-5vw]"/>

            <div className="w-full lg:w-1/3 mt-[25vh] ml-[-3vw]">

                <p className="sssm:mt-10 text-main3 text-md font-semibold xllll:text-xl xlllll:text-[2rem] xl:mt-[-25vh]  roboto-light text-nowrap">
                    EXCELLENT  <br />TEAM PLAYER
                </p>
                <br />

                <p className="text-black max-w-[15vw] text-sm">
                    Someone who values people and has great collaboration skills to initiate self-domain and cross-functional work.
                </p>

            </div>

            <hr className="bg-gradient-to-r from-main3 to-main1 rounded-lg w-1/3 h-1 rotate-90 mt-20 ml-[-5vw]"/>

            <div className="w-full lg:w-1/3 mt-[25vh] ml-[-3vw]">

                <p className="sssm:mt-10 text-main3 text-md font-semibold xllll:text-xl xlllll:text-[2rem] xl:mt-[-25vh]  roboto-light text-nowrap">
                    LEARN  <br />AND GROW
                </p>
                <br />

                <p className="text-black max-w-[15vw] text-sm">
                    Be flexible, adaptable, curious, and have the hunger to learn and grow.
                </p>

            </div>

            <div>
                <div className="flex space-x-2 mt-[27vh]">
                    <Image src="/Images/Services/previous-arrow.png" width={20} height={20} alt="previous arrow" />
                    <Image src="/Images/Services/next-arrow.png" width={20} height={20} alt="next arrow" />
                </div>
            </div>

        </div>
    );
}