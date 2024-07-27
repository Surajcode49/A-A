import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../HomeSections";

export default function AboutPageSmall({ heading1, heading2, text1, image, text2, listItems = [], boldTexts = [] }) {
  return (
    <main>
      {/* For small screens */}
      <div className="sssm:block md:hidden mt-[15vh]">
        <div className="border-2 border-main2 flex flex-col justify-items-center items-center text-center rounded-xl rounded-bl-none rounded-tr-none px-0 py-2 mx-auto my-10 relative w-5/6">
          <div className="mt-20">
            <p className="text-gray-400 mx-5 mt-5 max-w-[300px] text-sm text-left text-wrap">
              {text1}
            </p>

            <motion.h1
                className="text-white my-5 roboto-black cursor-pointer  md:text-xl  bg-accent w-full p-2 px-5"
                whileHover={{
                  letterSpacing: "0.1em",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {heading1}
              </motion.h1>

              <motion.p
                className="text-gray-400 mx-5 mt-5 md:max-w-[400px] text-sm text-left text-wrap"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1 }}
              >
                {text2}
              </motion.p>

                <motion.h1
                    className="text-white my-5 roboto-black cursor-pointer  md:text-xl  bg-accent w-full p-2 px-5"
                    whileHover={{
                    letterSpacing: "0.1em",
                    transition: { type: "spring", stiffness: 300 },
                    }}
                >
                    {heading2}
                </motion.h1>

                <ul className="text-gray-400  mx-10 my-5 list-outside list-disc text-sm text-left">
                {listItems.map((item, index) => (
                  <motion.li key={index} className="cursor-pointer"
                            initial={{x: 0}}
                            whileHover={{x: 10}}
                            transition={{
                              duration: 0.5,
                              ease: "easeInOut"
                            }}
                  >
                    <span className="text-gray-400 mx-1"><b>{boldTexts[index]}</b></span>
                    <span className="text-gray-400 ">{item}</span>
                  </motion.li>
                ))}
              </ul>

          </div>
          <div className="bg-main3 rounded-xl rounded-br-none w-[250px] h-[180px] absolute -top-20">
            <Image
              src={image}
              width={200}
              height={200}
              alt="service"
              className="absolute -top-2 -left-2 rounded-xl rounded-br-none w-[250px] h-[180px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
