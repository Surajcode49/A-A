import Image from "next/image"
import { useState } from "react";

export default function Benefits(){
    const logos = [
        { src: "/Images/Career/emplyee benefits icons/advancement.webp", alt: "advancement" },
        { src: "/Images/Career/emplyee benefits icons/diversity.webp", alt: "diversity" },
        { src: "/Images/Career/emplyee benefits icons/recognition.webp", alt: "recognition" },
        { src: "/Images/Career/emplyee benefits icons/salary.webp", alt: "salary" },
        { src: "/Images/Career/emplyee benefits icons/worklife.webp", alt: "worklife" }
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? logos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === logos.length - 1 ? 0 : prevIndex + 1));
    };

    return(
        <div className="bg-gray-100 w-full xxl:h-[30vh] xll:h-[25vh] xlllll:h-[25vh] sssm:mt-[7vh] sssm:p-3 lgg:p-0 sssm:h-[10vh] xlllll:mt-[25vh] xl:h-[40vh] xll:mt-[15vh] xxl:mt-[20vh] xl:mt-[25vh] relative">            
            <div className="sssm:hidden lgg:block">

                <div className=" absolute -top-1/2 left-1/4">
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={200} height={200} alt="advancement" className="xlllll:scale-140"/>
                </div>

                <div className=" absolute -top-1/2 left-2/4">
                    <Image src="/Images/Career/emplyee benefits icons/diversity.webp" width={200} height={200} alt="advancement" className="xlllll:scale-140"/>
                </div>

                <div className=" absolute -top-1/2 left-3/4">
                    <Image src="/Images/Career/emplyee benefits icons/recognition.webp" width={200} height={200} alt="advancement" className="xlllll:scale-140"/>
                </div>

                <div className=" absolute -bottom-1/2 left-1/3">
                    <Image src="/Images/Career/emplyee benefits icons/salary.webp" width={200} height={200} alt="advancement" className="xlllll:scale-140"/>
                </div>

                <div className=" absolute -bottom-1/2 left-2/3">
                    <Image src="/Images/Career/emplyee benefits icons/worklife.webp" width={200} height={200} alt="advancement" className="xlllll:scale-140"/>
                </div>

            </div>

            <div className="sssm:block lgg:hidden w-5/6 mx-auto">
                <div className="flex justify-between">
                    <div>
                        <Image src="/Images/Services/previous-arrow.png" width={20} height={20} alt="previous arrow" onClick={handlePrev} className="cursor-pointer" /> 
                    </div>

                    <Image src={logos[currentIndex].src} width={100} height={100} alt="advancement" className="absolute -top-1/2 left-1/3"/>
                    
                    <div>
                        <Image src="/Images/Services/next-arrow.png" width={20} height={20} alt="next arrow" onClick={handleNext} className="cursor-pointer" />  
                    </div>
                </div>
            </div>
        
        </div> 
    )
}