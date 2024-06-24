import Image from "next/image";
import { useState } from "react";

export default function Button({ buttonText, bgColor, className }) {
    // Extract the color class name from the bgColor prop 
    const textColor = bgColor.replace("bg-", "");

    const [hover, setHover] = useState(false);

    return (
        <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`rounded-tr-xl xxxxxxl:scale-140 xxxxxxl:hover:scale-150 xxxxxxl:ml-[3vw] xlllll:max-w-[10vw] lg:ml-[1vw] md:ml-[2vw] rounded-tl-xl rounded-bl-xl lg:w-[15vw] md:w-[30vw] sssm:w-[50vw] flex mb-4 h-10 p-2 mx-20 justify-center text-center font-semibold ${bgColor} ${hover ? `text-${textColor}` : 'text-white'} hover:bg-white hover:scale-105 ${className}`}
        >
            {buttonText}
            <div className="scale-75 my-0 ml-3 cursor-pointer xlllll:scale-100 xlllll:mt-0.5 xl:scale-90 xl:mt-0.5">
                <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
            </div>
        </button>
    );
}
