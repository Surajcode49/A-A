import Image from "next/image";
import { useState } from "react";

export default function Requirements(){

        const content = [
          {
            title: 'POSITIVE ATTITUDE',
            text: 'Ability to blend with our culture, embody our core values, and maintain a positive approach.',
          },
          {
            title: 'TEAMWORK',
            text: 'Collaborate effectively with team members and contribute to collective goals.',
          },
          {
            title: 'INNOVATION',
            text: 'Continuously seek creative solutions and improvements to enhance our services.',
          },
        ];
      
        const [currentIndex, setCurrentIndex] = useState(0);
      
        const handleNext = () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
        };
      
        const handlePrev = () => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
        };

    return(
        <div className="bg-gray-100 xl:p-10 sssm:py-5 sssm:px-10 xl:mt-[20vh] sssm:h-[60vh] w-full xlllll:h-[35vh] xl:h-[40vh] xxl:h-[33vh] xll:h-[27vh] sssm:mt-10 sssm:block lgg:flex">
            <div className="w-full lg:w-1/3 xl:mt-[25vh] sssm:mx-10">

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

            <hr className=" sssm:hidden lgg:block bg-gradient-to-r from-main3 to-main1 rounded-lg w-1/3 lxl:w-1/4 xlllll:w-1/3 h-2 rotate-90 mt-20 ml-[0vw] xlllll:mt-[13vh]"/>
            <hr className=" sssm:block lgg:hidden bg-gradient-to-r from-main3 to-main1 rounded-lg w-3/5 h-2 rotate-90 absolute sssm:top-[193vh] ssmm:top-[180vh] left-[-20vw]"/>


            <div className="w-full mt-20 mx-10 sssm:block lgg:hidden">

                <p className="sssm:mt-10 text-main3 ssmm:text-xl text-md font-semibold xlllll:leading-10 xllll:text-xl xlllll:text-[2rem] xl:mt-[-25vh]  roboto-light text-nowrap">
                    {content[currentIndex].title}
                </p>

                <br />

                <p className="text-black text-sm mr-3 ssmm:text-lg">
                    {content[currentIndex].text}
                </p>

            </div>

            <div className="w-full lg:w-1/3 mt-[25vh] ml-[-3vw] sssm:hidden lgg:block">

                <p className="sssm:mt-10 text-main3 text-md font-semibold xlllll:leading-10 xllll:text-xl xlllll:text-[2rem] xl:mt-[-25vh]  roboto-light text-nowrap">
                    POSITIVE  <br />ATTITUDE
                </p>

                <br />

                <p className="text-black max-w-[15vw] text-sm xlllll:text-xl">
                    Ability to blend with our culture, embody our core values, and maintains a positive approach.
                </p>

            </div>

            <hr className="sssm:hidden lgg:block bg-gradient-to-r from-main3 to-main1 rounded-lg w-1/3 lxl:w-1/4 xlllll:w-1/3 h-1 rotate-90 mt-20 ml-[-5vw] xlllll:mt-[13vh]"/>

            <div className="w-full lg:w-1/3 mt-[25vh] ml-[-3vw] sssm:hidden lgg:block">

                <p className="sssm:mt-10 text-main3 text-md xlllll:leading-10 font-semibold xllll:text-xl xlllll:text-[2rem] xl:mt-[-25vh]  roboto-light text-nowrap">
                    EXCELLENT  <br />TEAM PLAYER
                </p>
                <br />

                <p className="text-black max-w-[15vw] text-sm xlllll:text-xl">
                    Someone who values people and has great collaboration skills to initiate self-domain and cross-functional work.
                </p>

            </div>

            <hr className="sssm:hidden lgg:block bg-gradient-to-r from-main3 to-main1 rounded-lg w-1/3 lxl:w-1/4 xlllll:w-1/3 h-1 rotate-90 mt-20 ml-[-5vw] xlllll:mt-[13vh]"/>

            <div className="w-full lg:w-1/3 mt-[25vh] ml-[-3vw] sssm:hidden lgg:block">

                <p className="sssm:mt-10 text-main3 text-md xlllll:leading-10 font-semibold xllll:text-xl xlllll:text-[2rem] xl:mt-[-25vh]  roboto-light text-nowrap">
                    LEARN  <br />AND GROW
                </p>
                <br />

                <p className="text-black max-w-[15vw] text-sm xlllll:text-xl">
                    Be flexible, adaptable, curious, and have the hunger to learn and grow.
                </p>

            </div>

            <div className="sssm:float-right ">
                <div className="flex space-x-2 xl:mt-[27vh] xxl:mt-[22vh] xll:mt-[18vh] xlllll:mr-[5vw] xlllll:mt-[27vh] xl:scale-100 xlllll:scale-600">
                    <Image src="/Images/Services/previous-arrow.png" width={20} height={20} onClick={handlePrev} alt="previous arrow" className="cursor-pointer"/>
                    <Image src="/Images/Services/next-arrow.png" width={20} height={20} onClick={handleNext} alt="next arrow" className="cursor-pointer"/>
                </div>
            </div>

        </div>
    );
}