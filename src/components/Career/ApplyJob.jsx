import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Select from "react-select";
import Button from '../Button';

const Image = dynamic(() => import('next/image'), { ssr: false });

export default function ApplyJob() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch(
                "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
            );
            const data = await response.json();
            setCountries(data.countries);
            setSelectedCountry(data.userSelectValue);
        };

        fetchCountries();
    }, []);

    const customStyles = {
        control: (provided) => ({
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
            <div className='p-2 flex justify-center items-center m-4'>
                <hr className='bg-gradient-to-r from-main1 to-main3 rounded-lg h-1 w-20'/>
                <h1 className="text-main1 roboto-black text-[2rem] mx-4">SUBMIT RESUME</h1>
                <hr className='bg-gradient-to-r from-main3 to-main1 rounded-lg h-1 w-20'/>
            </div>
            <form className="w-5/6 relative">
                <div className='flex'>
                    <Image src="/Images/Career/form image1.png" width={300} height={300} alt='img1' className='w-1/2'/>
                    <div>
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
                        <div className='flex w-full'>
                            <input type='checkbox' id='check' name='check' className='w-4 -mt-10'/>
                            <p className='mx-5 text-gray-400 w-3/4 xlllll:text-xl xlllll:w-2/3'>
                                By filling this form, you authorize us to contact you via Email, Phone, or any other mode of 
                                communication for processing your application.
                            </p>
                        </div>
                        <div className="mt-5 -ml-3">
                            <Button
                                buttonText="Submit"
                                bgColor="bg-main1"
                                className="hover:border-main1 border-2 border-white"
                            />
                        </div>
                    </div>
                    <Image src="/Images/Career/form image2.png" width={300} height={300} alt='img1' className='absolute bottom-0 right-[-12vw] w-1/3 scale-x-[-1]'/>
                </div>
            </form>
        </div>
    );
}
