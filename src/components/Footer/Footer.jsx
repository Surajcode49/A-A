/*Importing requried libraries and media*/
import Image from "next/image";
import Link from "next/link";
import FooterMenus from "./FooterMenus";
import { motion } from 'framer-motion';
import Location from "../../../public/Images/Footer/Location.webp";
import Email from "../../../public/Images/Footer/Mail.webp";
import logo from "../../../public/Images/Header/AplusA-Logo.svg";
import MediaIcons from "./MediaIcons";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
    const variants = { //Animation effect for footer columns
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
                
                {/*Slide in effect for 1st column from left side*/}
                <motion.div 
                    className="w-full md:w-1/4 mb-6 md:mb-0"
                    initial="hidden"
                    animate="visible"
                    custom="left"
                    variants={variants}
                >
                    {/*Clickable logo to navigate to home page*/}
                    <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
                        <Link href="/" legacyBehavior>
                            <a> <Image src={logo} width={250} height={150} loading="lazy" className="mx-2 xlllll:scale-125 xlllll:ml-10" alt="Logo" /> </a>
                        </Link>
                    </motion.div>
                    
                     {/*Social media icons*/}
                    <div className="flex justify-center space-x-3 mx-15 ml-10 mt-0">
                        <MediaIcons icon="/Images/Footer/Linkedin-Icon.webp" href="https://www.linkedin.com"/>
                        <MediaIcons icon="/Images/Footer/Facebook-Icon.webp" href="https://www.facebook.com"/>
                        <MediaIcons icon="/Images/Footer/Instagram-Icon.webp" href="https://www.instagram.com"/>
                        <MediaIcons icon="/Images/Footer/Twitter-Icon.webp" href="https://www.twitter.com"/>
                    </div>

                </motion.div>

                {/*Slide in effect for 2nd column from top*/}
                <motion.div 
                    className="w-full md:w-1/4 mb-6 md:mb-0"
                    initial="hidden"
                    animate="visible"
                    custom="top"
                    variants={variants}
                >
                    <h3 className="text-black font-bold text-lg mb-4 roboto-light">COMPANY</h3>
                    
                    <ul>
                        <FooterMenus Menu="Home" Route="/"/>
                        <FooterMenus Menu="About Us" Route="/AplusA"/>
                        <FooterMenus Menu="Services" Route="/Services"/>
                        <FooterMenus Menu="Careers" Route="/Career"/>
                        <FooterMenus Menu="Contact Us" Route="/Contact"/>
                    </ul>

                </motion.div>

                {/*Fade in effect for 3rd column*/}
                <motion.div 
                    className="w-full md:w-1/4 mb-6 md:mb-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <h3 className="text-black font-bold text-lg mb-4 roboto-light">SERVICES</h3>
                    
                    <ul>
                        <FooterMenus Menu="SAP" Route="/Services"/>
                        <FooterMenus Menu="Rise with SAP" Route="/Services"/>
                        <FooterMenus Menu="Analytics" Route="/Services"/>
                        <FooterMenus Menu="Cloud Migration" Route="/Services"/>
                        <FooterMenus Menu="Integration" Route="/Services"/>
                    </ul>

                </motion.div>

                {/*Slide in effect for 4th column from bottom*/}
                <motion.div 
                    className="w-full md:w-1/4 mb-6 md:mb-0"
                    initial="hidden"
                    animate="visible"
                    custom="bottom"
                    variants={variants}
                >
                    <h3 className="text-black font-bold text-lg mb-4 roboto-light">INDUSTRIES</h3>
                    
                    <ul>
                        <FooterMenus Menu="Agribusiness" Route="/Agribusiness"/>
                        <FooterMenus Menu="Pharma" Route="/Pharmacy"/>
                        <FooterMenus Menu="Logistics" Route="/Logistics"/>
                        <FooterMenus Menu="Utilities" Route="/Utilities"/>
                        <FooterMenus Menu="Manufacturing" Route="/Manufacturing"/>
                    </ul>

                </motion.div>

                {/*Slide in effect for 5th column from right*/}
                <motion.div 
                    className="w-full md:w-1/4 mb-6 md:mb-0"
                    initial="hidden"
                    animate="visible"
                    custom="right"
                    variants={variants}
                >
                    <h3 className="text-black roboto-light text-lg mb-4">CONTACT US</h3>

                    <div className="flex flex-col">
                        <Image src={Location} width={20} height={20} alt="Location" className="mx-auto"/>
                        <motion.p className="text-accent mb-4 text-sm xlllll:max-w-[240px] roboto-medium hover:text-[#8D8B87] cursor-pointer mx-auto" whileHover={{ scale: 1.1 }}>
                            11th Floor, Dallas Center, Knowledge City, Survey No 83/1, Plot No A1, Hitech City Main Road, Hyderabad - 500032, Telangana, India.
                        </motion.p>

                        <Image src={Email} width={20} height={20} alt="Email" className="mx-auto"/>
                        <motion.p className="text-accent mb-4 text-sm roboto-medium hover:text-[#8D8B87]" whileHover={{ scale: 1.1 }}>
                            <a href="mailto:getintouch@aplusatech.com">getintouch@aplusatech.com</a>
                        </motion.p>
                    </div>

                </motion.div>

            </div>

            {/*Copyright*/}
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
