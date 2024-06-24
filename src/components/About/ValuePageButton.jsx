import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ValuePageButton({ bgImage, Text }) { //Takes background image and text as props
    return (
        <motion.div className="rounded-md sssm:my-4 md:mx-2 lgg:mx-0 lgg:my-0  rounded-br-none border-b-4 border-accent border-r-4"
            whileHover={{
                scale: [1, 1.2, 1.2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "10%", "10%", "0%"]
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                
            }}
        >
            <div className="bg-white lg:w-[12vw] md:w-[20vw] sssm:w-[40vw] items-center justify-center p-3 border-2 border-gray-200  relative cursor-pointer">
            
                <div
                    className="relative z-10 bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <h1 className="font-bold text-md text-center">{Text}</h1>
                </div>
                
            </div>

        </motion.div>
    );
}
