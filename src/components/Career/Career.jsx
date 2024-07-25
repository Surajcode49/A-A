/*Importing requried libraries and media*/
import Select from "react-select";
import SectionHeading from "../SectionHeading";
import { useState, useEffect } from "react";
import Button from "../Button";
import Link from "next/link";

export default function Career() {
    const headings = [
        {
            spans: [
                { text: 'Build', color: 'main3', px: 0 },
                { text: 'ing', color: 'main2', pr: 1 },
                { text: 'exper', color: 'main1', pl: 1 },
                { text: 'iences', color: 'accent', px: 0 },
            ],
        },
        {
            spans: [
                { text: 'that', color: 'main3', px: 0 },
                { text: 'are', color: 'main2', px: 1 },
                { text: 'happ', color: 'main1', px: 0 },
                { text: 'ier', color: 'accent', px: 0 },
            ],
        },
        {
            spans: [
                { text: 'engag', color: 'main3', px: 0 },
                { text: 'ing,', color: 'main2', pr: 1 },
                { text: 'an', color: 'main1', pl: 1},
                { text: 'd', color: 'accent', px: 0 },
            ],
        },
        {
            spans: [
                { text: 'mean', color: 'main3', px: 0 },
                { text: 'ing', color: 'main2', pr: 1},
                { text: 'fu', color: 'main1', px: 0 },
                { text: 'l', color: 'accent', px: 0 },
            ],
        },
    ];

    /*For selecting different job positions in career input form */
    const [selectedPosition, setSelectedPosition] = useState(null);

    const [menuPortalTarget, setMenuPortalTarget] = useState(null);

    useEffect(() => {
        setMenuPortalTarget(document.body);
    }, []);

    const positions = [
        { value: 'Software Engineer', label: 'Software Engineer' },
        { value: 'Web Developer', label: 'Web Developer' },
        { value: 'Manager', label: 'Manager' },
        { value: 'Data Scientist', label: 'Data Scientist' },
        { value: 'Big Data Engineer', label: 'Big Data Engineer' },
    ];

    /*Custom styles for the form */
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
            zIndex: 9999,
        }),
        menuPortal: (base) => ({
            ...base,
            zIndex: 9999,
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#9CA3B7',
            
        })
    };

    return (
        <div className="lg:mt-[5vh] xlllll:mt-[10vh] xl:mt-[10vh] md:mt-[-7vh] sssm:mt-[-7vh] justify-between items-center relative lg:mx-20 sssm:mx-10">
            <div className="flex flex-col lg:flex-row md:mx-10 mx-1">
                <div className="w-full lg:w-1/3 mt-[10vh] xlllll:mt-2">
                    {/*Heading for the career section*/}
                    <SectionHeading Title="CAREERS" heading="Building expereinces that are happier, engaging, and meaningful"/>

                    <div className="mt-5 lgg:-ml-5 sssm:-ml-[23vw]">
                        <Link href="/Career" legacyBehavior>
                            <a>  
                                <Button
                                   buttonText="View All"
                                   bgColor="bg-main1"
                                   className="hover:border-main1 border-2 border-white"
                                />
                            </a>
                        </Link>
                    </div>
                </div>

                {/*Career input form*/}
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
                            menuPortalTarget={menuPortalTarget}
                        />
                        <div className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-5 outline-none placeholder-gray-400">
                            <div className="flex justify-between">
                                <label htmlFor="resume" className="text-gray-400">CV/Resume *</label>
                                <div className="bg-gray-100 hover:bg-main3 -mt-2 text-gray-500 hover:text-white flex justify-center items-center text-sm text-center min-w-[7vw] max-h-[5vh] px-4 py-2 rounded-bl-xl rounded-tr-xl cursor-pointer">Browse</div>
                            </div>

                            <input className="hidden " type="file" placeholder="CV/Resume *" id="resume" name="resume"/>
                        </div>
                    </div>

                    <div className="mt-5 lgg:-ml-3 sssm:-ml-10">
                        <Button
                            buttonText="Submit"
                            bgColor="bg-main3"
                            className="hover:border-main3 border-2 border-white"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
