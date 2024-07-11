import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Reorder } from "framer-motion";
import { Item } from "./Item";

const initialIcons = [
  { src: "/Images/Hero/Pharma_icon.webp", alt: "medical", link:"/Pharmacy" , hoversrc:"/Images/Hero/pharma-blue.webp"},
  { src: "/Images/Hero/Logistics_icon.webp", alt: "settings", link:"/Logistics", hoversrc:"/Images/Hero/logistics-blue.webp"  }, 
  { src: "/Images/Hero/Manufacturing_icon.webp", alt: "manufacturing", link:"/Manufacturing", hoversrc:"/Images/Hero/manufacturing-blue.webp"  },
  { src: "/Images/Hero/Utilities_icon.webp", alt: "shield", link:"/Utilities", hoversrc:"/Images/Hero/utilities-blue.webp"  },
  { src: "/Images/Hero/Agribusiness_icon.webp", alt: "plants", link:"/Agribusiness", hoversrc:"/Images/Hero/agribusiness-blue.webp"  },
];

export default function HeroSection() {
  const [icons, setIcons] = useState(initialIcons);

  const videoStyles = useMemo(() => ({
    width: '100%',
    marginTop: '1.5rem',
  }), []);

  return (
    <div>
      <div className="relative w-full">
        <video
          className="w-full lgg:mt-1.5 sssm:-mt-1 ssmm:mt-2.5"
          autoPlay
          muted
          loop
          playsInline
          style={videoStyles}
        >
          <source src="/Images/Hero/new-aplusa1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="bg-main3 w-1/2 right-0 h-2 absolute sssm:top-[-2vw] ssmm:top-[-2vw] md:top-[-1vw] lgg:top-[-0.5vw] llg:top-[-0.5vw] xl:top-[-0.6vw] xlllll:top-[-0.4vw]"></div>
      </div>

      <div className="mx-10">
        <Image src="/Images/Hero/arrow.png" width={500} height={500} alt="arrow" className="arrow absolute xxxxxxl:scale-190 xlllll:scale-125 lxl:scale-90 xl:scale-85 lgg:scale-80 md:scale-45 sssm:scale-30 lgg:left-0 xlllll:left-[6vw] xxxxxxl:top-[58vh] xxxxxxl:left-[10vw] xlllll:top-[50vh] xlx:top-[52vh] lxl:left-[4vw] lxl:top-[53vh] xll:top-[47vh] xxl:top-[43vh] xl:top-[75vh] xl:mt-2 xxl:mt-5 xll:-mt-10 lgg:top-[49vh] llg:top-[40vh] mdd:top-[20vh] mdm:top-[19vh] md:top-[20vh] md:left-[-12vw] sssm:top-[20vh] ssmm:mt-0 smmm:top-[16vh] ssm:top-[14vh] ssmm:left-[-26vw] sssm:left-[-24vw] xl:left-5" />

        <div className="flex">
          <h1 className="service text-white roboto-black absolute xxxxxxl:top-[50vh] xll:top-[45vh] xlx:top-[53vh] xxl:top-[48vh] xl:top-[65vh] xlllll:top-[40vh] xl:mt-5 lgg:top-[50vh] mdd:top-[27vh] mdm:top-[26vh] md:top-[30vh] llg:top-[42vh] sssm:top-[32vh] ssmm:top-[28vh] ssm:top-[25vh] sssm:left-7 xl:left-10 sssm:text-[3rem] md:text-[7rem] lgg:text-[12rem] xl:text-[11rem] lxl:text-[14rem] xlllll:text-[16rem] xxxxxxl:text-[25rem] z-30">SAP</h1>
          <h2 className="service text-accent roboto-black absolute xxxxxxl:top-[50vh] xll:top-[45vh] xlx:top-[53vh] xlllll:top-[40vh] xxl:top-[48vh] xlllll:mt-7 xl:mt-6 xl:top-[66vh]  lgg:top-[50vh] mdd:top-[27vh] mdm:top-[26vh] llg:top-[42vh] md:top-[30vh] sssm:top-[32vh] ssmm:top-[25vh] md:mt-1 ssm:-mt-6 ssmm:mt-0.5 ssmm:left-[7.5vw] ssm:top-[28vh] sssm:left-[8.5vw] sssm:-mt-[3.3vh] md:left-8 llg:left-4 lgg:left-5 xl:left-[3.5vw] xlllll:left-[2.4vw] lxl:left-[3.2vw] sssm:text-[3rem] md:text-[7rem] lgg:text-[12rem] xl:text-[11rem] lxl:text-[14rem] xlllll:text-[16rem] xxxxxxl:text-[25rem] z-10">SAP</h2>
        </div>
      </div>

      <div className="hero-head absolute lg:top-[30vh] md:top-[15vh] llg:top-[25vh] sssm:top-[20vh] ssmm:top-[18vh] ssm:top-[17vh] smmm:top-[18vh] left-10">
        <h1 className="text-white font-bold md:text-[1.8rem] sssm:text-[0.7rem] lxl:text-[2.5rem] xllll:text-[2.2rem] xxxxxxl:text-[3.5rem] roboto-black">
          COMPANY PROFILE &
        </h1>
        <h1 className="text-white font-bold md:text-[1.8rem] sssm:text-[0.7rem] lxl:text-[2.5rem] xllll:text-[2.2rem] xxxxxxl:text-[3.5rem] roboto-black">
          SERVICE OFFERING
        </h1>
        <p className="text-accent md:text-lg font-semibold my-3 lxl:text-[1.5rem] sssm:text-[0.6rem] sssm:mt-1 xllll:text-[1.5rem] xxxxxxl:text-[2.5rem] font-sans">
          Intelligent and Automated SAP Solutions
        </p>
      </div>

      <Reorder.Group
        axis="x"
        onReorder={setIcons}
        values={icons}
        className="bg-black flex justify-evenly lgg:px-[15vw] sssm:px-[17vw] md:px-[15vw] xlllll:px-[10vw] lxl:px-[15vw] xlllll:p-10 sssm:p-0 md:p-2 lxl:p-4"
      >
        {icons.map((icon) => (
          <Item key={icon.src} item={icon} />
        ))}
      </Reorder.Group>
    </div>
  );
}
