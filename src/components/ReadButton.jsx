import Image from "next/image";
import { motion } from "framer-motion";

export default function Button() {
    return (
        <motion.div className="flex"
                    initial={{x: 0}}
                    whileHover={{x:20, scale: 1.1}}
                    transition={{
                        duration: 0.7,
                        ease: "easeInOut",
                    }}
        >
            <p className="text-main1 text-xs md:text-sm font-bold py-3 cursor-pointer xlllll:text-lg mr-1 xlllll:mr-2 md:mr-4">Read More</p>
            
            <div className="scale-75 my-1 xl:mt-2.5 xlllll:my-4 cursor-pointer xlllll:scale-100 xl:my-2 md:scale-100 md:my-3 sssm:mt-2">
                <Image src="/Images/Services/read-arrow.png" quality={100} width={20} height={20} alt="read arrow" />
            </div>

        </motion.div>
    );
}
