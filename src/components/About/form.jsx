import Image from "next/image";
import Select from "react-select";
import { useState } from "react";
import { delay, motion } from "framer-motion";

export default function Form() {
    const [selectedPostion, setSelectedPosition] = useState({});

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
            color: '#A0AEC0', // placeholder-gray-400
        })
    };

    return (
        <div className="lg:mt-[5vh] xlllll:mt-[35vh]  xl:mt-[10vh] md:mt-[-7vh] sssm:mt-[-7vh] justify-between items-center relative lg:mx-20 sssm:mx-10">
            <div className="flex flex-col md:flex-row md:mx-10 mx-1">
                {/* Heading for the clients section */}
                <div className="w-full lg:w-1/3 mt-[10vh] xxxxxxl:pb-8">
                    <p className="text-black text-md font-semibold xllll:text-xl xlllll:text-[2rem] roboto-light text-nowrap">LET&apos;S GET STARTED</p>
                    <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                        <span className="text-main3 px-0">Leave</span>
                        <span className="text-main2 px-1">a</span>
                        <span className="text-main1 px-0">mess</span>
                        <span className="text-accent">age</span>
                    </h2>
                    <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                        <span className="text-main3 px-0">here</span>
                        <span className="text-main2 px-1">and</span>
                        <span className="text-main1 px-1">we</span>
                        <span className="text-accent">shall</span>
                    </h2>
                    <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                        <span className="text-main3 px-0">connect</span>
                        <span className="text-main2 px-1">with</span>
                        <span className="text-main1 px-1">you</span>
                        <span className="text-accent">to</span>
                    </h2>
                    <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                        <span className="text-main3 px-0">discuss</span>
                        <span className="text-main2 px-1">your</span>
                        <span className="text-main1 px-0">digi</span>
                        <span className="text-accent">tal</span>
                    </h2>
                    <h2 className="lg:text-[1.5rem] text-xl xllll:text-3xl xlllll:text-[2.5rem] xlllll:mt-5 font-bold roboto-black">
                        <span className="text-main3 px-0">needs</span>
                    </h2>

                </div>

                <form className="lgg:w-3/4 sssm:w-3/4 md:w-full mx-auto ">

                    <div className="md:flex block md:space-x-10 space-x-0 my-8">
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400 bg-gray-100" type="text" placeholder="Full Name *" id="full-name" name="full-name"/>
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400 bg-gray-100" type="text" placeholder="Full Name *" id="full-name" name="full-name"/>
                    </div>

                    <div className="md:flex block md:space-x-10 space-x-0 my-8">
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400 bg-gray-100" type="email" placeholder="Email Id *" id="email" name="email"/>
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400 bg-gray-100" type="text" placeholder="Contact Number" id="contact-no" name="contact-no"/>
                    </div>

                    <div className="md:flex block md:space-x-10 space-x-0 my-8">
                        <input className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-8 outline-none placeholder-gray-400 bg-gray-100" type="text" placeholder="Organization/Institute " id="organization" name="organization"/>
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400 bg-gray-100" type="text" placeholder="Job Title " id="job" name="job-title"/>
                    </div>

                    <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400 bg-gray-100" type="text" placeholder="How can we help you? *" id="help" name="help"/>
                    <button type="submit" className="bg-main3 mt-[5vh] rounded-tr-xl rounded-tl-xl rounded-bl-xl flex md:w-1/4 w-1/2 hover:border-main3 border-2 border-gray-100 ml-[0vw] mb-4 h-10 p-2 mx-20 text-white justify-center text-center font-semibold hover:bg-white hover:text-main3 hover:scale-105">
                        Submit
                        <div className="scale-75 my-0 ml-3 cursor-pointer md:scale-105 md:mt-1 xlllll:scale-100 xlllll:mt-0.5 xl:scale-90 xl:mt-0.5">
                            <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
                        </div>
                    </button>

                    </form>

            </div>
        </div>
    );
}
