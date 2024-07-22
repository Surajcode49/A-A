import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../HomeSections";

export default function AboutPageLarge({ heading1, heading2, text1, image, text2, listItems = [], boldTexts = [] }) {
  return (
    <main>
      {/* For large screens */}
      <div className="sssm:hidden md:block">
        <Section>
          <div className="border-2 border-main2 rounded-xl rounded-bl-none rounded-br-[3vw] px-0 py-6 lgg:mx-[10vw] md:mx-5 xlllll:my-40 my-20 relative w-2/3">
            <div>
                <motion.p
                className="text-gray-400 mx-5 mt-5 md:max-w-[400px] xxxxxxl:min-w-[1200px] xlllll:max-w-[850px] lgg:max-w-[500px] md:text-sm xlllll:leading-[4vh] lgg:text-[1rem] xlllll:w-[800px] xlllll:text-[1.6rem] text-wrap"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1 }}
              >
                {text1}
              </motion.p>

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

            <motion.div
              className={`bg-main3 md:scale-60 lgg:scale-100 rounded-[2vw] rounded-br-none xlllll:w-[700px] xlllll:h-[550px] w-[450px] h-[350px] absolute md:-top-20 lgg:-top-10 xlllll:-top-5 md:-right-[40vw] lgg:-right-[14vw] xlllll:-right-[15vw]`}
              initial={{ x: 100, rotateZ: 0 }}
              whileInView={{ x: 0 }}
              whileHover={{
                rotateZ: 5,
              }}
              transition={{ type: "spring", duration: 0.5, stiffness: 100 }}
            >
              <Image
                src={image}
                width={400}
                height={400}
                alt="service"
                className="absolute xlllll:-top-5 xlllll:right-5 lgg:-top-3 md:-top-5 lgg:right-3 md:right-5 rounded-[2vw] rounded-br-none xlllll:w-[700px] xlllll:h-[550px] w-[450px] h-[350px]"
              />
            </motion.div>
          </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
