import { useState, useEffect } from 'react';
import Select from "react-select";
import Image from "next/image";

export default function FeaturedJobs() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});


    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


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
        
        <div className="bg-gray-100 p-6 w-full h-[95vh] mt-10">
            <h1 className="flex justify-center items-center text-gray-500 text-[1.5rem]">FEATURED JOBS</h1>
            <div className="mx-20 mt-5 flex">

                <div className="w-1/3 h-[400px] bg-gradient-to-r from-main3 to-main1">
                    <Image src="/Images/Career/featured job icons/ANDROID DEVELOPER.jpg" width={200} height={200} alt="jobs" className="mx-auto w-5/6 pt-8 pb-2 rounded-md"/>
                    
                    <div className="mx-auto w-5/6">
                        <h1 className="text-white underline">ANDROID DEVELOPER</h1>
                        <br />
                        <p className="text-white">Android Developer (2-8 Years)</p>
                        <p className="text-white">Tech Lead - Developer (5-10 Years)</p>
                        <p className="text-white underline ml-20">View All Positions</p>
                    </div>

                </div>

                <div className="">
                    <div className="flex w-full mx-10">
                        <div className="w-full h-[180px] bg-gray-50 border-2 border-accent rounded-sm">
                            <div className="mx-auto w-5/6 my-2">
                                <div className="flex justify-between">
                                    <h1 className="text-accent underline mt-4">ANDROID DEVELOPER</h1>
                                    <Image src="/Images/Career/featured job icons/coding.webp" width={50} height={50} alt="coding"/>
                                </div>
                                <br />
                                <p className="text-black">Android Developer (2-8 Years)</p>
                                <p className="text-black">Tech Lead - Developer (5-10 Years)</p>
                            </div>
                        </div>

                        <div className="w-full h-[180px] bg-gray-50 border-2 border-accent rounded-sm mx-5">
                            <div className="mx-auto w-5/6 my-2">
                                <div className="flex justify-between">
                                    <h1 className="text-accent underline mt-4">ANDROID DEVELOPER</h1>
                                    <Image src="/Images/Career/featured job icons/coding.webp" width={50} height={50} alt="coding"/>
                                </div>
                                <br />
                                <p className="text-black">Android Developer (2-8 Years)</p>
                                <p className="text-black">Tech Lead - Developer (5-10 Years)</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex w-full mx-10 mt-5">
                        <div className="w-full h-[180px] bg-gray-50 border-2 border-accent rounded-sm">
                            <div className="mx-auto w-5/6 my-2">
                                <div className="flex justify-between">
                                    <h1 className="text-accent underline mt-4">ANDROID DEVELOPER</h1>
                                    <Image src="/Images/Career/featured job icons/coding.webp" width={50} height={50} alt="coding"/>
                                </div>
                                <br />
                                <p className="text-black">Android Developer (2-8 Years)</p>
                                <p className="text-black">Tech Lead - Developer (5-10 Years)</p>
                            </div>
                        </div>

                        <div className="w-full h-[180px] bg-gray-50 border-2 border-accent rounded-sm mx-5">
                            <div className="mx-auto w-5/6 my-2">
                                <div className="flex justify-between">
                                    <h1 className="text-accent underline mt-4">ANDROID DEVELOPER</h1>
                                    <Image src="/Images/Career/featured job icons/coding.webp" width={50} height={50} alt="coding"/>
                                </div>
                                <br />
                                <p className="text-black">Android Developer (2-8 Years)</p>
                                <p className="text-black">Tech Lead - Developer (5-10 Years)</p>
                            </div>
                        </div>

                    </div>

                    <button onClick={openModal} className="bg-main1 xl:mt-[5vh] sssm:mt-[11vh] lg:mt-[35vh] mmd:mt-[18vh] mdm:mt-[15vh] md:mt-[18vh] rounded-tr-xl rounded-tl-xl rounded-bl-xl  flex mb-4 h-10 sssm:scale-50 md:scale-100 p-2 sssm:px-[-5px] md:px-10 mx-20 text-white justify-center text-center font-semibold hover:bg-white hover:text-main3 md:hover:scale-105 sssm:hover:scale-65">
                        Apply Now
                        <div className="scale-75 my-0 ml-3 cursor-pointer xlllll:scale-100 xlllll:mt-0.5 xl:scale-90 xl:mt-0.5">
                            <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
                        </div>
                    </button>

                    {/* Modal */}
                    {showModal && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                        <div className="w-5/6 mx-auto rounded-[2vw] rounded-br-none border-2 border-accent bg-white">
                        
                        <div className='p-2 flex justify-center items-center m-4'>
                            <hr className='bg-gradient-to-r from-main1 to-main3 rounded-lg h-1 w-20'/>
                            <h1 className="text-main1 roboto-black text-[2rem] mx-4">SUBMIT RESUME</h1>
                            <hr className='bg-gradient-to-r from-main3 to-main1 rounded-lg h-1 w-20'/>
                        </div>

                        <form className="w-5/6 mx-auto">

                            <div className="md:flex block md:space-x-10 space-x-0 my-8">
                                <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400" type="text" placeholder="Full Name *" id="full-name" name="full-name"/>
                                <input className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-5  outline-none placeholder-gray-400" type="text" placeholder="Email Address *" id="email" name="email"/>
                            </div>

                            <div className="md:flex block md:space-x-10 space-x-0 my-8">
                                <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400" type="tel" placeholder="Phone Number *" id="phone" name="phone"/>
                                <input className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-5 outline-none placeholder-gray-400" type="text" placeholder="Preferred Job Location *" id="location" name="location"/>
                            </div>

                            <div className="md:flex block md:space-x-10 space-x-0 my-8">
                                <Select
                                    options={countries}
                                    styles={customStyles}
                                    value={selectedCountry}
                                    onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                                    className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-5  outline-none placeholder-gray-400"
                                    placeholder="Country" id="country" name="country"
                                />
                                <div className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-5 outline-none placeholder-gray-400">
                                    <div className="flex justify-between">
                                        <label htmlFor="resume" className="text-gray-400">Upload Your Resume *</label>
                                        <div className="bg-gray-100 hover:bg-main3 -mt-2 text-gray-500 hover:text-white flex justify-center items-center text-sm text-center min-w-[7vw] max-h-[5vh] px-4 py-2 rounded-bl-xl rounded-tr-xl cursor-pointer">Browse</div>
                                    </div>

                                    <input className="hidden " type="file" placeholder="CV/Resume *" id="resume" name="resume"/>
                                </div>
                                
                            </div>

                            <button className="bg-main1 mt-[5vh] rounded-tr-xl rounded-tl-xl rounded-bl-xl flex md:w-1/4 w-1/2 hover:border-main3 border-2 border-white ml-[0vw] mb-4 h-10 p-2 mx-20 text-white justify-center text-center font-semibold hover:bg-white hover:text-main3 hover:scale-105">
                                Submit
                                <div className="scale-75 my-0 ml-3 cursor-pointer xlllll:scale-100 xlllll:mt-0.5 xl:scale-90 xl:mt-0.5">
                                    <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
                                </div>
                            </button>

                            </form>
                        </div>
                    </div>
                    )}

                </div>

            </div>
        </div>
    );
}
