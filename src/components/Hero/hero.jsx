import React, { useState } from "react";
import Image from "next/image";
import { Reorder } from "framer-motion";
import { Item } from "./Item";

const initialIcons = [
  { src: "/Images/Hero/Pharma_icon.webp", alt: "medical" },
  { src: "/Images/Hero/Manufacturing_icon.webp", alt: "manufacturing" },
  { src: "/Images/Hero/Utilities_icon.webp", alt: "shield" },
  { src: "/Images/Hero/Logistics_icon.webp", alt: "settings" },
  { src: "/Images/Hero/Agribusiness_icon.webp", alt: "plants" },
];

export default function HeroSection() {
  const [icons, setIcons] = useState(initialIcons);

  return (
    <div>
      <div className="relative w-full">
        {/* Background video */}
        <video className="w-full mt-1.5" autoPlay muted loop playsInline>
          <source src="/Images/Hero/aplusa-hero.mp4" type="video/mp4" alt="hero" />
          Your browser does not support the video tag.
        </video>
        <div className="bg-main3 w-1/2 right-0 h-2 absolute sssm:top-[-1.5vw] md:top-[-1vw] lgg:top-[-0.5vw] llg:top-[-0.5vw] xl:top-[-0.5vw] xlllll:top-[-0.3vw]"></div>
      </div>

      {/* SAP and Arrow */}
      <div className="mx-10">
        <Image src="/Images/Hero/arrow.png" width={500} height={500} alt="arrow" className="arrow absolute xxxxxxl:scale-180 xlllll:scale-160 lxl:scale-125 xl:scale-100 lgg:scale-80 md:scale-50 sssm:scale-35 lgg:left-0 xlllll:left-[10vw] xxxxxxl:top-[55vh] xxxxxxl:left-[10vw] xlllll:top-[50vh] xlx:top-[52vh] lxl:left-[8vw] lxl:top-[52vh] xll:top-[45vh] xxl:top-[53vh] xl:top-[63vh] lgg:top-[45vh] mdd:top-[22vh] mdm:top-[19vh] md:top-[20vh] md:left-[-12vw] sssm:top-[17vh] smmm:top-[16vh] ssm:top-[14vh] sssm:left-[-23vw] xl:left-10" />

        <div className="flex">
          <h1 className="service text-white roboto-black absolute xxxxxxl:top-[50vh] xll:top-[45vh] xlx:top-[53vh] xxl:top-[55vh] xl:top-[65vh] lgg:top-[50vh] mdd:top-[29vh] mdm:top-[26vh] md:top-[30vh] sssm:top-[27vh] ssm:top-[25vh] sssm:left-7 xl:left-10 sssm:text-[4rem] md:text-[7rem] lgg:text-[12rem] xl:text-[14rem] lxl:text-[20rem] xlllll:text-[22rem] xxxxxxl:text-[25rem] z-30">SAP</h1>
          <h2 className="service text-accent roboto-black absolute xxxxxxl:top-[50vh] xll:top-[45vh] xlx:top-[53vh] xlllll:top-[46vh] xxl:top-[55vh] xl:top-[66vh] lgg:top-[50vh] mdd:top-[29vh] mdm:top-[26vh] md:top-[30vh] sssm:top-[27vh] ssm:top-[25vh] sssm:left-6 md:left-5 llg:left-4 lgg:left-5 xl:left-7 xlllll:left-[2.4vw] sssm:text-[4rem] md:text-[7rem] lgg:text-[12rem] xl:text-[14rem] lxl:text-[20rem] xlllll:text-[22rem] xxxxxxl:text-[25rem] z-10">SAP</h2>
        </div>
      </div>

      {/* Video heading */}
      <div className="hero-head absolute lg:top-[30vh] md:top-[15vh] llg:top-[25vh] sssm:top-[16vh] ssmm:top-[18vh] ssm:top-[17vh] smmm:top-[18vh] left-10">
        <h1 className="text-white font-bold md:text-[1.8rem] sssm:text-[0.7rem] lxl:text-[2.5rem] xllll:text-[2.2rem] xxxxxxl:text-[3.5rem] roboto-black">COMPANY PROFILE &</h1>
        <h1 className="text-white font-bold md:text-[1.8rem] sssm:text-[0.7rem] lxl:text-[2.5rem] xllll:text-[2.2rem] xxxxxxl:text-[3.5rem] roboto-black">SERVICE OFFERING</h1>
        <p className="text-accent md:text-lg font-semibold my-3 lxl:text-[1.5rem] sssm:text-[0.6rem] sssm:mt-1 xllll:text-[1.5rem] xxxxxxl:text-[2.5rem] font-sans">Intelligent and Automated SAP Solutions</p>
      </div>

      {/* SAP icons */}
      <Reorder.Group axis="x" onReorder={setIcons} values={icons} className="bg-black flex justify-evenly xlllll:px-[20vw] sssm:p-1 md:p-2 lxl:p-4">
        {icons.map((icon) => (
          <Item key={icon.src} item={icon} />
        ))}
      </Reorder.Group>
    </div>
  );
}
