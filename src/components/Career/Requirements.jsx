/*Importing required components and libraries*/
import Image from "next/image";
import { useState } from "react";
import SectionHeading from "../SectionHeading";
import RequirementCard from "./RequirementCard";

//Vertical separator for requrirement cards
const Separator = () => (
  <hr className="sssm:hidden lgg:block bg-gradient-to-r from-main3 to-main1 rounded-lg w-1/2 lxl:w-1/4 xlllll:w-1/2 h-1 rotate-90 mt-20 ml-[-5vw] xlllll:mt-[13vh]" />
);

export default function Requirements() {
    //Linear gradient heading
    const headings = [
    {
        spans: [
            { text: 'We', color: 'main3', px: 0 },
            { text: 'map', color: 'main2', px: 1 },
            { text: 'compete', color: 'accent', px: 0 },
            { text: 'ncies', color: 'main1', px: 0 },
        ],
    },

    {
        spans: [
            { text: 'and', color: 'main3', px: 0 },
            { text: 'also', color: 'main2', px: 1 },
            { text: 'check', color: 'accent', px: 0 },
            { text: 'for', color: 'main1', px: 1 },
        ],
    },

    {
        spans: [
            { text: 'compatib', color: 'main3', px: 0 },
            { text: 'ility', color: 'main2', px: 0 },
            { text: 'to', color: 'accent', px: 1 },
            { text: 'be', color: 'main1', px: 0 },
        ],
    },

    {
        spans: [
            { text: 'sure', color: 'main3', px: 0 },
            { text: 'you,', color: 'main2', px: 1 },
            { text: 'match', color: 'accent', px: 0 },
            { text: 'the', color: 'main1', px: 1 },
        ],
    },

    {
        spans: [
            { text: 'values', color: 'main3', px: 0 },
            { text: 'we,', color: 'main2', px: 1 },
            { text: 'inhe', color: 'accent', px: 0 },
            { text: 'rit', color: 'main1', px: 0 },
        ],
    },
    ];

    //Requirement card details
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
    {
      title: 'LEADERSHIP TRAITS',
      text: 'Be ambitious, intelligent, confident, decision-maker, action-oriented and holds leadership traits.',
    },
    {
      title: 'HIGH GOALS',
      text: 'Focused and keeps advancing toward the set goals-individual, team, and organization.',
    },
    {
      title: 'SELF-MOTIVATED',
      text: 'We look for proactiveness in you. Someone who is self-driven and is an excellent communicator.',
    },
    {
      title: 'WORK ETHICS',
      text: 'Be a person of integrity and honesty, and participate in ethical work endeavors.',
    }
  ];

  //Handling next and previous buttons
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % content.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + content.length) % content.length);
  };

  return (
    <div className="bg-gray-100 xl:p-10 sssm:py-5 sssm:px-10 xl:mt-[20vh] sssm:h-[60vh] w-full xlllll:h-[35vh] xl:h-[40vh] xxl:h-[33vh] xll:h-[27vh] sssm:mt-10 sssm:block lgg:flex">
      
        <div className="w-full lg:w-1/3 xl:mt-[0vh] sssm:mx-10">
            {/* Requirements heading for career page */}
            <SectionHeading Title="WHAT WE LOOK FOR" headings={headings} />
        </div>

        {/* Vertical lines */}
        <hr className="sssm:hidden lgg:block bg-gradient-to-r from-main3 to-main1 rounded-lg w-1/3 lxl:w-1/4 xlllll:w-1/3 h-2 rotate-90 mt-20 ml-[0vw] xlllll:mt-[13vh]" />
        <hr className="sssm:block lgg:hidden bg-gradient-to-r from-main3 to-main1 rounded-lg w-3/5 h-2 rotate-90 absolute sssm:top-[198vh] ssmm:top-[185vh] ssm:top-[168vh] left-[-20vw]" />

        {/* Slider for small screens */}
        <div className="w-full mt-20 mx-10 sssm:block lgg:hidden">
            <p className="sssm:mt-10 text-main3 ssmm:text-xl text-md font-semibold xlllll:leading-10 xllll:text-xl xlllll:text-[2rem] xl:mt-[-25vh] roboto-light text-nowrap">
                {content[currentIndex].title}
            </p>

            <br />

            <p className="text-black text-sm mr-3 ssmm:text-lg">
                {content[currentIndex].text}
            </p>
        </div>

        {/*Slider for larger screens */}
        <div className="w-full lgg:flex justify-between sssm:hidden">
            <RequirementCard title={content[currentIndex].title} text={content[currentIndex].text}/>
            <Separator />
            <RequirementCard title={content[(currentIndex + 1) % content.length].title} text={content[(currentIndex + 1) % content.length].text}/>
            <Separator />
            <RequirementCard title={content[(currentIndex + 2) % content.length].title} text={content[(currentIndex + 2) % content.length].text}/>
        </div>

        {/*Next and previous arrow buttons*/}
        <div className="sssm:float-right">
            <div className="flex space-x-2 xl:mt-[27vh] xxl:mt-[22vh] xll:mt-[18vh] xlllll:mr-[5vw] xlllll:mt-[27vh] xl:scale-100 xlllll:scale-600">
                <Image src="/Images/Services/previous-arrow.png" width={20} height={20} onClick={handlePrev} alt="previous arrow" loading="lazy" className="cursor-pointer" />
                <Image src="/Images/Services/next-arrow.png" width={20} height={20} onClick={handleNext} alt="next arrow" loading="lazy" className="cursor-pointer" />
            </div>
        </div>

    </div>
  );
}
