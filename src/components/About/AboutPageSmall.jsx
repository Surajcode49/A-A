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
            <p className="text-gray-400 mx-5 mt-5 max-w-[300px] text-xs text-wrap">
              {text1}
            </p>

            <motion.h1
                className="text-white my-5 roboto-black cursor-pointer lxl:max-w-[900px] xlllll:leading-[4vh] xxl:max-w-[700px] lgg:max-w-[600px] xlllll:max-w-[900px] md:text-xl lgg:text-[1.1rem] xlllll:p-4 xlllll:text-[1.9rem] bg-accent w-full p-2 px-5"
                whileHover={{
                  letterSpacing: "0.1em",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {heading1}
              </motion.h1>

              <motion.p
                className="text-gray-400 mx-5 mt-5 md:max-w-[400px] xxxxxxl:min-w-[1200px] xlllll:max-w-[850px] lgg:max-w-[500px] md:text-sm xlllll:leading-[4vh] lgg:text-[1rem] xlllll:w-[800px] xlllll:text-[1.6rem] text-wrap"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1 }}
              >
                {text2}
              </motion.p>

                <motion.h1
                    className="text-white my-5 roboto-black cursor-pointer xlllll:leading-[4vh]  md:text-xl lgg:text-[1.1rem] xlllll:p-4 xlllll:text-[1.9rem] bg-accent w-full p-2 px-5"
                    whileHover={{
                    letterSpacing: "0.1em",
                    transition: { type: "spring", stiffness: 300 },
                    }}
                >
                    {heading2}
                </motion.h1>

                <ul className="text-gray-400  mx-10 my-5 list-outside list-disc xlllll:text-[1.6rem] xlllll:max-w-[1100px] lgg:max-w-[700px]">
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
