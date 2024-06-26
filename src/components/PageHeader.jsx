import Section from "./HomeSections";
import Image from "next/image";

export default function PageHeader({ image, text }) {
    return (
        <div>
            <Image 
                src={image} 
                width={1000} 
                height={1000} 
                quality={100} 
                alt="contact" 
                className="w-full mt-2"
                loading="lazy"
            />
            <div className="bg-main3 w-1/2 right-0 h-2 absolute sssm:top-[-1.5vw] md:top-[-1vw] lgg:top-[-0.5vw] llg:top-[-0.5vw] xl:top-[-0.5vw] xlllll:top-[-0.3vw]"></div>

            <Section>
                <div className="flex justify-center items-center absolute xl:top-[30vh] lgg:top-[20vh] md:top-[13vh] md:mx-20 lgg:mx-30 xlllll:mx-50 xl:mx-40 sssm:top-[7vh] sssm:mx-5">
                    <h1 className="text-white roboto-medium xxxxxxl:text-[3.5rem] xlllll:text-[2.5rem] lxl:text-[2rem] xxl:text-[1.7rem] xl:text-[1.5rem] llg:text-[1.5rem] lgg:text-[1.4rem] mdd:text-[1.1rem] md:text-[1rem] sssm:text-[0.5rem] smmm:text-[0.57rem] ssm:text-[0.6rem]">
                        {text}
                    </h1>
                </div>
            </Section>
        </div>
    );
}
