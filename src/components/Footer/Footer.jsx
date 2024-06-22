import { useState } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import Location from "../../../public/Images/Footer/Location.webp";
import Email from "../../../public/Images/Footer/Mail.webp";
import logo from "../../../public/Images/Header/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaLocationArrow, FaMailBulk, FaCopyright } from "react-icons/fa";

export default function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    const variants = {
        hidden: direction => ({
            opacity: 0,
            x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
            y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.5, ease: 'easeInOut' }
        }
    };

    return (
        <footer className="footer relative mt-[10vh] md:mt-[0vh] bg-[url('/Images/Footer/footer_bg.png')] bg-auto bg-no-repeat bg-center">
            <div className="container mx-auto flex text-center flex-wrap md:flex-nowrap justify-center items-center pt-10 pb-10">
                <motion.div 
                    className="w-full md:w-1/4 mb-6 md:mb-0"
                    initial="hidden"
                    animate="visible"
                    custom="left"
                    variants={variants}
                >
                    <div 
                        className="mb-4 transform transition-transform duration-500 ease-in-out cursor-pointer"
                        style={{ transform: isHovered ? 'rotateY(20deg)' : 'rotateY(0deg)' }} 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Image src={logo} width={250} height={150} alt="logo" />
                    </div>
                    <div className="flex justify-center space-x-3 mx-9 mt-10">
                        <motion.a
                            href="#"
                            className="p-2 bg-gradient-to-r from-main3 to-accent hover:bg-black text-white rounded-full"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaFacebookF size={24} />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="p-2 bg-gradient-to-r from-main3 to-accent hover:bg-black text-white rounded-full"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaTwitter size={24} />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="p-2 bg-gradient-to-r from-main3 to-accent hover:bg-black text-white rounded-full"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaLinkedin size={24} />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="p-2 bg-gradient-to-r from-main3 to-accent hover:bg-black text-white rounded-full"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaInstagram size={24} />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div 
                    className="w-full md:w-1/4 mb-6 md:mb-0"
                    initial="hidden"
                    animate="visible"
                    custom="top"
                    variants={variants}
                >
                    <h3 className="text-black font-bold text-lg mb-4 roboto-light">COMPANY</h3>
                    <ul>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">Home</a>
                        </motion.li>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">About Us</a>
                        </motion.li>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">Services</a>
                        </motion.li>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">Careers</a>
                        </motion.li>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">Contact Us</a>
                        </motion.li>
                    </ul>
                </motion.div>

                <motion.div 
                    className="w-full md:w-1/4 mb-6 md:mb-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <h3 className="text-black font-bold text-lg mb-4 roboto-light">SERVICES</h3>
                    <ul>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">SAP</a>
                        </motion.li>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">Rise with SAP</a>
                        </motion.li>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">Analytics</a>
                        </motion.li>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">Cloud Migration</a>
                        </motion.li>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">Integration</a>
                        </motion.li>
                    </ul>
                </motion.div>

                <motion.div 
                    className="w-full md:w-1/4 mb-6 md:mb-0"
                    initial="hidden"
                    animate="visible"
                    custom="bottom"
                    variants={variants}
                >
                    <h3 className="text-black font-bold text-lg mb-4 roboto-light">INDUSTRIES</h3>
                    <ul>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">Agribusiness</a>
                        </motion.li>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">Pharma</a>
                        </motion.li>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">Logistics</a>
                        </motion.li>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">Utilities</a>
                        </motion.li>
                        <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
                            <a href="#" className="text-accent roboto-medium hover:text-[#8D8B87]">Manufacturing</a>
                        </motion.li>
                    </ul>
                </motion.div>

                <motion.div 
                    className="w-full md:w-1/4 mb-6 md:mb-0"
                    initial="hidden"
                    animate="visible"
                    custom="right"
                    variants={variants}
                >
                    <h3 className="text-black roboto-light text-lg mb-4">CONTACT US</h3>
                    <Image src={Location} width={20} height={20} alt="Location" className="mx-40"/>
                    <motion.p className="text-accent mb-4 text-sm roboto-medium hover:text-[#8D8B87] cursor-pointer" whileHover={{ scale: 1.1 }}>
                        11th Floor, Dallas Center, Knowledge City, Survey No 83/1, Plot No A1, Hitech City Main Road, Hyderabad - 500032, Telangana, India.
                    </motion.p>

                    <Image src={Email} width={20} height={20} alt="Email" className="mx-40"/>
                    <motion.p className="text-accent mb-4 text-sm roboto-medium hover:text-[#8D8B87]" whileHover={{ scale: 1.1 }}>
                        <a href="mailto:getintouch@aplusatech.com">getintouch@aplusatech.com</a>
                    </motion.p>
                </motion.div>
            </div>

            <hr className="border-[1.3px] border-black w-full"/>
            <p className="text-center my-8 flex justify-center items-center text-nowrap text-xs md:text-lg">
                <FaCopyright size={20} className="px-1"/>
                2024 
                <span className="text-accent roboto-medium px-1">AplusA Technologies Pvt. Ltd.</span>
                All Rights Reserved
            </p>
        </footer>
    );
}
