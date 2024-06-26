import { motion } from "framer-motion";
import { memo } from "react";

const ValueSectionButton = memo(function ValueSectionButton({ bgImage, Text }) {
    return (
        <motion.div
            className="rounded-md sssm:my-4 md:mx-2 lgg:mx-0 lgg:my-0 rounded-br-none border-b-4 border-accent border-r-4"
            whileHover={{
                scale: [1, 1.2, 1.2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "10%", "10%", "0%"]
            }}
            transition={{
                duration: 1,
                ease: "easeInOut"
            }}
        >
            <div
                className="relative z-10 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="font-bold text-md text-center">{Text}</h1>
            </div>
        </motion.div>
    );
});

export default ValueSectionButton;
