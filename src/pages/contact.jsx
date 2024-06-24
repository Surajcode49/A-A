/*Imorting requried components for contact page*/
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../components/Header/navbar";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer/Footer";
import PageHeader from "../components/PageHeader";
import Select from "react-select";
import Section from "../components/HomeSections";
import { Tilt } from 'react-next-tilt';
import Button from "../components/Button";
import "../app/globals.css";

export default function Contact() {
    const headings = [
        {
            spans: [
                { text: 'We', color: 'main3', px: 0 },
                { text: 'are', color: 'main3', px: 1 },
                { text: 'happy', color: 'main2', px: 1 },
                { text: 'to', color: 'main2', px: 1 },
                { text: 'hear', color: 'accent', px: 1 },
                { text: 'from', color: 'accent', px: 1 },
                { text: 'you!', color: 'accent', px: 0 },
            ],
        },
        
    ];

    //Selecting countries from list of options
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});

    //Fetching country list
    useEffect(() => {
        fetch(
        "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
        .then((response) => response.json())
        .then((data) => {
            setCountries(data.countries);
            setSelectedCountry(data.userSelectValue);
        });
    }, []);

    //Selecting service type from service drop-down menu
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        { value: 'sap', label: 'SAP' },
        { value: 'rise_with_sap', label: 'Rise with SAP' },
        { value: 'cloud_migration', label: 'Cloud Migration' },
        { value: 'analytics', label: 'Analytics' },
        { value: 'integration', label: 'Integration' },
    ];

    //Custom form styles
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: 'none',
            boxShadow: 'none',
        }),
        menu: (provided) => ({
            ...provided,
            border: 'none',
            boxShadow: 'none',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#9CA3B7',
            
        })

    };

    return (
        <div>
            <Navbar /> {/*Navbar*/}
       
            <div className="relative w-full ">
                {/*Page header with background image and text*/}
                <PageHeader  
                    image="/Images/Connect/Contact-US-01.webp" 
                    text="We are happy you have taken the first step. Let&apos;s get started and discuss how we can 
                        drive digital outcomes for your business.
                        We are processing your message and our consultants shall reach out to you in 48 working hours."
                />

                <Section>
                    {/*Heading for the contact page*/}
                    <div className="flex justify-center items-center text-center mt-10">
                        <SectionHeading Title="CONTACT US" headings={headings} />
                    </div>
                
                    {/*Contact form input*/}
                    <form className="w-3/4 mx-auto ">

                        <div className="md:flex block md:space-x-10 space-x-0 my-8">
                            <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400" type="text" placeholder="Full Name *" id="full-name" name="full-name"/>
                            <Select
                                options={countries}
                                styles={customStyles}
                                value={selectedCountry}
                                onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                                className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-5 outline-none placeholder-gray-400"
                                placeholder="Country" 
                                id="country"
                                name="country"
                            />
                        </div>

                        <div className="md:flex block md:space-x-10 space-x-0 my-8">
                            <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400" type="email" placeholder="Email Id *" id="email" name="email"/>
                            <Select
                                options={services}
                                styles={customStyles}
                                value={selectedService}
                                onChange={(selectedOption) => setSelectedService(selectedOption)}
                                className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-5 outline-none placeholder-gray-400"
                                placeholder="Services" id="country" name="country"
                            />
                        </div>

                        <div className="md:flex block md:space-x-10 space-x-0 my-8">
                            <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400" type="text" placeholder="Contact Number" id="contact-no" name="contact-no"/>
                            <input className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-8 outline-none placeholder-gray-400" type="text" placeholder="Organization/Institute *" id="organization" name="organization"/>
                        </div>

                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400" type="text" placeholder="How can we help you? *" id="help" name="help"/>

                        <div className="flex justify-center items-center">
                            <div className="mt-5 -ml-3">
                                <Button
                                    buttonText="Submit"
                                    bgColor="bg-main3"
                                    className="hover:border-main3 border-2 border-white"
                                />
                            </div>
                        </div>

                    </form>
                </Section>

                {/*Gradient line 1*/}
                <div className="bg-gradient-to-r from-main3 to-accent mb-8 rounded-l-none rounded-lg w-1/3  h-3"></div>

                {/*Animated contact section*/}
                <Section>
                    <div className="w-full sssm:h-20 lgg:h-40 cursor-pointer xl:h-40 xxxxxxl:h-60  flex justify-between xl:px-60 md:px-10 lg:px-40 sssm:px-2 items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-main3 from-10% to-main1 to-100%">
                        <Tilt> <Image src="/Images/Footer/Mail.webp" width={200} height={200} alt="email" className="z-10 xxxxxxl:scale-150 xl:scale-100 lgg:scale-90 lg:scale-70 md:scale-50 sssm:scale-35"/> </Tilt>
                        <p className="text-white roboto-light hover:font-semibold text-center sssm:text-[0.5rem] md:text-[0.7rem] lg:text-xl xxxxxxl:text-[2.5rem] z-20 md:ml-[-40vw] lg:ml-[-35vw] sssm:ml-[-45vw] xl:ml-[-30vw] xxxxxxl:ml-[-35vw]">getintouch@aplusatech.com</p>
                        
                        <hr className="border-2 border-gray-300 opacity-35 rounded-lg rotate-180 w-1 h-3/4"/>
                        
                        <Tilt>  <Image src="/Images/Footer/Location.webp" width={200} height={200} alt="location" className=" xxxxxxl:scale-150 xl:scale-100 lgg:scale-75 lg:scale-60 md:scale-50 sssm:scale-25"/> </Tilt> 
                        <p className="text-white roboto-light hover:font-semibold text-center sssm:text-[0.5rem]  md:text-[0.7rem] lgg:text-[0.9rem] xl:text-md xxl:text-xl xxxxxxl:text-[1.8rem] xxxxxxl:leading-10 z-20 xl:ml-[-30vw] lgg:ml-[-35vw] lg:ml-[-40vw] xxl:ml-[-35vw] xlllll:ml-[-40vw] sssm:ml-[-50vw] text-wrap lg:max-w-[30vw] sssm:max-w-[45vw]">APLUSA TECHNOLOGIES PVT. LTD. <br />
                        11th Floor, Dallas Center, Knowledge City, Survey No 83/1, Plot No A1, Hitech City Main Road, Hyderabad - 500032, Telangana, India.</p>
                    </div>
                </Section>

                {/*Gradient line 2*/}
                <div className="bg-gradient-to-r from-main3 to-accent  mb-8 rounded-l-none rounded-lg w-1/3 mt-8 float-right rotate-180 h-3"></div>

            </div>
            <Footer /> {/*Footer*/}
            <br />
        </div>
    );
}
