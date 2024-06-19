import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../components/Header/navbar"
import Footer from "../Components/Footer/Footer"
import Select from "react-select";
import Section from "../components/HomeSections";
import { Tilt } from 'react-next-tilt';
import "../app/globals.css";

export default function Contact() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});
    const [selectedService, setSelectedService] = useState({});

    const services = [
        { value: 'sap', label: 'SAP' },
        { value: 'rise_with_sap', label: 'Rise with SAP' },
        { value: 'cloud_migration', label: 'Cloud Migration' },
        { value: 'analytics', label: 'Analytics' },
        { value: 'integration', label: 'Integration' },
    ];
    
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
            color: '#A0AEC0', // placeholder-gray-400
        })
    };

    return (
        <div>
            <Navbar />
       
        <div className="relative w-full ">
            <Image src="/Images/Connect/contact.png" width={500} height={500} alt="contact" className="w-full mt-10"/>
            <div className="bg-main3 w-1/2 right-0 h-2 absolute sssm:top-[-1.5vw] md:top-[-1vw] lgg:top-[-0.5vw] llg:top-[-0.5vw] xl:top-[-0.5vw] xlllll:top-[-0.3vw]"></div>
            
            <Section>
                <div className="flex justify-center items-center absolute xl:top-[30vh] lgg:top-[20vh] md:top-[13vh] md:mx-20 lgg:mx-30 xlllll:mx-50 xl:mx-40 sssm:top-[7vh] sssm:mx-5">
                    <h1 className="text-white roboto-medium xxxxxxl:text-[3.5rem] xlllll:text-[2.5rem] lxl:text-[2rem] xxl:text-[1.7rem] xl:text-[1.5rem] llg:text-[1.5rem] lgg:text-[1.4rem] mdd:text-[1.1rem] md:text-[1rem] sssm:text-[0.5rem] smmm:text-[0.57rem] ssm:text-[0.6rem]">
                        We are happy you have taken the first step. Let&apos;s get started and discuss how we can 
                        drive digital outcomes for your business. <br />
                        We are processing your message and our consultants shall reach out to you in 48 working hours.
                    </h1>
                </div>
            </Section>

            <Section>
                <p className="flex justify-center items-center sssm:mt-5 text-black text-md font-semibold xllll:text-xl xlllll:text-[2rem] xl:mt-10 roboto-light text-nowrap">
                    CONTACT US
                </p>
                
                <h2 className="flex justify-center items-center lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                    <span className="text-main3 px-0">We</span>
                    <span className="text-main3 px-1">are</span>
                    <span className="text-main2 px-1">happy</span>
                    <span className="text-main2 px-1">to</span>
                    <span className="text-accent px-1">hear</span>
                    <span className="text-accent px-1">from</span>
                    <span className="text-accent px-1">you!</span>
                </h2>

                <form className="w-3/4 mx-auto ">

                    <div className="md:flex block md:space-x-10 space-x-0 my-8">
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400" type="text" placeholder="Full Name *" id="full-name" name="full-name"/>
                        <Select
                            options={countries}
                            styles={customStyles}
                            value={selectedCountry}
                            onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                            className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-5  outline-none placeholder-gray-400"
                            placeholder="Country" id="country" name="country"
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
                        <button type="submit" className="bg-main1 mt-[5vh] rounded-tr-xl rounded-tl-xl rounded-bl-xl flex md:w-1/5 w-1/2 hover:border-main3 border-2 border-white ml-[0vw] mb-4 h-10 p-2 mx-20 text-white justify-center text-center font-semibold hover:bg-white hover:text-main3 hover:scale-105">
                            Submit
                            <div className="scale-75 my-0 ml-3 cursor-pointer xlllll:scale-100 xlllll:mt-0.5 xl:scale-90 xl:mt-0.5">
                                <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
                            </div>
                        </button>
                    </div>

                    </form>
                </Section>

                <div className="bg-gradient-to-r from-main3 to-accent mb-8 rounded-l-none rounded-lg w-1/3  h-3"></div>

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
                
                <div className="bg-gradient-to-r from-main3 to-accent  mb-8 rounded-l-none rounded-lg w-1/3 mt-8 float-right rotate-180 h-3"></div>

        </div>
        <Footer />
        <br />
        </div>
    );
}
