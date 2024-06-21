import Image from "next/image";
import Select from "react-select";
import { useState } from "react";
import { delay, motion } from "framer-motion";

export default function Clients() {
    const [selectedPosition, setSelectedPosition] = useState(null);

    const positions = [
        { value: 'Software Engineer', label: 'Software Engineer' },
        { value: 'Web Developer', label: 'Web Developer' },
        { value: 'Manager', label: 'Manager' },
        { value: 'Data Scientist', label: 'Data Scientist' },
        { value: 'Big Data Engineer', label: 'Big Data Engineer' },
    ];

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
        <div className="lg:mt-[5vh] xlllll:mt-[10vh] xl:mt-[10vh] md:mt-[-7vh] sssm:mt-[-7vh] justify-between items-center relative lg:mx-20 sssm:mx-10">
            <div className="flex flex-col lg:flex-row md:mx-10 mx-1">
                {/* Heading for the clients section */}
                <div className="w-full lg:w-1/3 mt-[10vh] xlllll:mt-2">
                    <p className="text-black text-md font-semibold xllll:text-xl xlllll:text-[2rem] roboto-light text-nowrap">CAREERS</p>
                    <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                        <span className="text-main3 px-0">Build</span>
                        <span className="text-main2 pr-1">ing</span>
                        <span className="text-main1 px-0">exper</span>
                        <span className="text-accent">iences</span>
                    </h2>
                    <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                        <span className="text-main3 pr-1">that</span>
                        <span className="text-main2 px-1">are</span>
                        <span className="text-main1 px-0">happ</span>
                        <span className="text-accent">ier</span>
                    </h2>
                    <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                        <span className="text-main3 px-0">engag</span>
                        <span className="text-main2 pr-1">ing,</span>
                        <span className="text-main1 px-0">an</span>
                        <span className="text-accent px-0">d</span>
                    </h2>
                    <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                        <span className="text-main3 px-0">mean</span>
                        <span className="text-main2 px-0">ing</span>
                        <span className="text-main1 px-0">fu</span>
                        <span className="text-accent px-0">l</span>
                    </h2>

                    <button className="bg-main1 rounded-tr-xl ml-[0vw] my-4 xlllll:max-w-[10vw] rounded-tl-xl rounded-bl-xl lg:w-[15vw] md:w-[30vw] sssm:w-[50vw] flex mb-4 h-10 p-2 mx-20 text-white justify-center text-center font-semibold hover:bg-white hover:text-main3 hover:border-main3 border-2 border-white hover:scale-105">
                        View All
                        <div className="scale-75 my-0 ml-3 cursor-pointer xlllll:scale-100 xlllll:mt-0.5 xl:scale-90 xl:mt-0.5">
                            <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
                        </div>
                    </button>
                </div>

                <form className="w-full">

                    <div className="md:flex block md:space-x-10 space-x-0 my-8">
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400" type="text" placeholder="First Name *" id="first-name" name="first-name"/>
                        <input className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-5  outline-none placeholder-gray-400" type="text" placeholder="Last Name *" id="last-name" name="last-name"/>
                    </div>

                    <div className="md:flex block md:space-x-10 space-x-0 my-8">
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400" type="email" placeholder="Email Id *" id="email" name="email"/>
                        <input className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-5 outline-none placeholder-gray-400" type="tel" placeholder="Contact No. *" id="contact" name="contact"/>
                    </div>

                    <div className="md:flex block md:space-x-10 space-x-0 my-8">
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400" type="text" placeholder="Organization/Institute *" id="organization" name="organization"/>
                        <input className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-5 outline-none placeholder-gray-400" type="text" placeholder="Job Title *" id="job-title" name="job-title"/>
                    </div>

                    <div className="md:flex block md:space-x-10 space-x-0 my-8">
                        <Select
                            options={positions}
                          
                            styles={customStyles}
                            value={selectedPosition}
                            onChange={(selectedOption) => setSelectedPosition(selectedOption)}
                            className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-5 outline-none placeholder-gray-400"
                            placeholder="Postion Applied For" 
                            id="position"
                            name="position"
                        />
                        <div className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-5 outline-none placeholder-gray-400">
                            <div className="flex justify-between">
                                <label htmlFor="resume" className="text-gray-400">CV/Resume *</label>
                                <div className="bg-gray-100 hover:bg-main3 -mt-2 text-gray-500 hover:text-white flex justify-center items-center text-sm text-center min-w-[7vw] max-h-[5vh] px-4 py-2 rounded-bl-xl rounded-tr-xl cursor-pointer">Browse</div>
                            </div>

                            <input className="hidden " type="file" placeholder="CV/Resume *" id="resume" name="resume"/>
                        </div>
                    </div>

                    <button className="bg-main3 mt-[5vh] rounded-tr-xl rounded-tl-xl rounded-bl-xl flex md:w-1/4 w-1/2 hover:border-main3 border-2 border-white ml-[0vw] mb-4 h-10 p-2 mx-20 text-white justify-center text-center font-semibold hover:bg-white hover:text-main3 hover:scale-105">
                        Submit
                        <div className="scale-75 my-0 ml-3 cursor-pointer xlllll:scale-100 xlllll:mt-0.5 xl:scale-90 xl:mt-0.5">
                            <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
                        </div>
                    </button>

                </form>
            </div>
        </div>
    );
}
