import { useState, useEffect, useRef } from 'react';
import Select from "react-select";
import Image from "next/image";

export default function FeaturedJobs() {
    const jobs = [
        {
          imgSrc: '/Images/Career/featured job icons/ANDROID DEVELOPER.jpg',
          title: 'ANDROID DEVELOPER',
          positions: [
            'Android Developer (2-8 Years)',
            'Tech Lead - Developer (5-10 Years)',
          ],
        },
        {
          imgSrc: '/Images/Career/featured job icons/ANDROID DEVELOPER.jpg',
          title: 'IOS DEVELOPER',
          positions: [
            'IOS Developer (3-7 Years)',
            'Senior IOS Developer (5-9 Years)',
          ],
        },
        {
          imgSrc: '/Images/Career/featured job icons/ANDROID DEVELOPER.jpg',
          title: 'WEB DEVELOPER',
          positions: [
            'Frontend Developer (2-5 Years)',
            'Backend Developer (3-6 Years)',
          ],
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + jobs.length) % jobs.length);
      };

      
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});


    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        if (showModal) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showModal]);

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
        <div className="bg-gray-100 p-6 w-full xl:h-[95vh] lxl:h-[80vh] xxl:h-[75vh] xll:h-[65vh] mt-10">
            <h1 className="flex justify-center items-center text-gray-500 text-[1.5rem]">FEATURED JOBS</h1>
            
            <div className="xl:mx-20 sssm:mx-7 mt-5 flex xlllll:mx-40 lxl:mx-40">

            <div className="w-full mt-5 mx-0 sssm:block lgg:hidden">
                <div className="block lgg:hidden">
                    <div className="text-center bg-gradient-to-r from-main3 to-main1 h-[400px] sssm:max-w-[400px] lxl:h-[500px] xlllll:h-[530px]">
                        <Image src={jobs[currentIndex].imgSrc} width={200} height={200} alt="jobs" className="mx-auto w-5/6 pt-8 pb-2 rounded-md" />
                        
                        <div className="mx-auto w-5/6">
                            <h1 className="text-white underline">{jobs[currentIndex].title}</h1>
                            <br />
                            {jobs[currentIndex].positions.map((position, index) => (
                            <p key={index} className="text-white">{position}</p>
                            ))}
                            <p className="text-white underline ml-20">View All Positions</p>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                        <Image src="/Images/Services/previous-arrow.png" width={20} height={20} alt="previous arrow" onClick={handlePrev} className="cursor-pointer" />
                        <Image src="/Images/Services/next-arrow.png" width={20} height={20} alt="next arrow" onClick={handleNext} className="cursor-pointer" />
                    </div>

                </div>

                <div className="hidden lgg:flex justify-between mx-[10vw]">
                    {jobs.map((job, index) => (
                    <div key={index} className="lgg:w-1/3 sssm:max-w-[400px] h-[400px] lxl:h-[500px] xlllll:h-[530px] bg-gradient-to-r from-main3 to-main1">
                        <Image src={job.imgSrc} width={200} height={200} alt="jobs" className="mx-auto w-5/6 pt-8 pb-2 rounded-md" />
                        
                        <div className="mx-auto w-5/6">
                            <h1 className="text-white underline">{job.title}</h1>
                            <br />
                            {job.positions.map((position, idx) => (
                                <p key={idx} className="text-white">{position}</p>
                            ))}
                            <p className="text-white underline ml-20">View All Positions</p>
                        </div>

                    </div>
                    ))}
                </div>
                </div>


                <div className="w-1/3 sssm:hidden lgg:block h-[400px] lxl:h-[500px] xlllll:h-[530px] bg-gradient-to-r from-main3 to-main1">
                    <Image src="/Images/Career/featured job icons/ANDROID DEVELOPER.jpg" width={200} height={200} alt="jobs" className="mx-auto w-5/6 pt-8 pb-2 rounded-md"/>
                    
                    <div className="mx-auto w-5/6">
                        <h1 className="text-white underline">ANDROID DEVELOPER</h1>
                        <br />
                        <p className="text-white">Android Developer (2-8 Years)</p>
                        <p className="text-white">Tech Lead - Developer (5-10 Years)</p>
                        <p className="text-white underline ml-20">View All Positions</p>
                    </div>

                </div>

                <div className="sssm:hidden lgg:block">
                    <div className="flex w-full mx-10 lxl:ml-[8vw] lxl:my-[2vw] lxl:scale-125 xlllll:ml-[10vw] xlllll:my-[2vw] xlllll:scale-140">
                        <div className="w-full h-[180px] bg-gray-50 border-2 border-accent rounded-sm">
                            <div className="mx-auto w-5/6 my-2">
                                <div className="flex justify-between">
                                    <h1 className="text-accent underline mt-4">JAVASCRIPT MOBILE</h1>
                                    <Image src="/Images/Career/featured job icons/coding.webp" width={50} height={50} alt="coding"/>
                                </div>
                                <br />
                                <p className="text-black">React Native Developer (2-8 Years)</p>
                                <p className="text-black">Tech Lead - JavaScript Mobile (5-10 Years)</p>
                            </div>
                        </div>

                        <div className="w-full h-[180px] bg-gray-50 border-2 border-accent rounded-sm mx-5">
                            <div className="mx-auto w-5/6 my-2">
                                <div className="flex justify-between">
                                    <h1 className="text-accent underline mt-4">BLOCKCHAIN</h1>
                                    <Image src="/Images/Career/featured job icons/blockchain.webp" width={50} height={50} alt="coding"/>
                                </div>
                                <br />
                                <p className="text-black">Blockchain Developer (2-8 Years)</p>
                                <p className="text-black">Tech Lead - Blockchain (5-10 Years)</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex w-full mx-10 mt-5 xlllll:mt-[5vw] xlllll:ml-[10vw] xlllll:my-[2vw] xlllll:scale-140 lxl:ml-[8vw] lxl:mt-[5vw] lxl:my-[2vw] lxl:scale-125 ">
                        <div className="w-full h-[180px] bg-gray-50 border-2 border-accent rounded-sm">
                            <div className="mx-auto w-5/6 my-2">
                                <div className="flex justify-between">
                                    <h1 className="text-accent underline mt-4">FLUTTER</h1>
                                    <Image src="/Images/Career/featured job icons/Flutter-01.webp" width={50} height={50} alt="coding"/>
                                </div>
                                <br />
                                <p className="text-black">Flutter Developer (2-8 Years)</p>
                                <p className="text-black">Tech Lead - Flutter (5-10 Years)</p>
                            </div>
                        </div>

                        <div className="w-full h-[180px] bg-gray-50 border-2 border-accent rounded-sm mx-5">
                            <div className="mx-auto w-5/6 my-2">
                                <div className="flex justify-between">
                                    <h1 className="text-accent underline mt-4">UX/UI DEVELOPER</h1>
                                    <Image src="/Images/Career/featured job icons/coding.webp" width={50} height={50} alt="coding"/>
                                </div>
                                <br />
                                <p className="text-black">Frontend Designer (HTML/CC.) (2-8 Years)</p>
                                <p className="text-black">Tech Lead - Developer (5-10 Years)</p>
                            </div>
                        </div>

                    </div>

                    <button onClick={openModal} className="bg-main1 xlllll:scale-125 xl:mt-[5vh] sssm:mt-[11vh] lg:mt-[35vh] mmd:mt-[18vh] mdm:mt-[15vh] md:mt-[18vh] rounded-tr-xl rounded-tl-xl rounded-bl-xl  flex mb-4 h-10 sssm:scale-50 md:scale-100 p-2 sssm:px-[-5px] md:px-10 mx-20 text-white justify-center text-center font-semibold hover:bg-white hover:text-main3 md:hover:scale-105 sssm:hover:scale-65">
                        Apply Now
                        <div className="scale-75 my-0 ml-3 cursor-pointer xlllll:scale-100 xlllll:mt-0.5 xl:scale-90 xl:mt-0.5">
                            <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
                        </div>
                    </button>

                    {/* Modal */}
                    {showModal && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                        <div ref={modalRef} className="w-5/6 mx-auto rounded-[2vw] rounded-br-none border-4 border-accent bg-white">
                        
                        <div className='p-2 flex justify-center items-center m-4'>
                            <hr className='bg-gradient-to-r from-main1 to-main3 rounded-lg h-1 w-20'/>
                            <h1 className="text-main1 roboto-black text-[2rem] mx-4">SUBMIT RESUME</h1>
                            <hr className='bg-gradient-to-r from-main3 to-main1 rounded-lg h-1 w-20'/>
                        </div>

                        <form className="w-5/6 relative ">

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
                            

                            <button className="bg-main1 mt-[5vh] rounded-tr-xl rounded-tl-xl rounded-bl-xl flex md:w-1/4 w-1/2 hover:border-main3 border-2 border-white ml-[0vw] mb-4 h-10 p-2 mx-20 text-white justify-center text-center font-semibold hover:bg-white hover:text-main3 hover:scale-105">
                                Submit
                                <div className="scale-75 my-0 ml-3 cursor-pointer xlllll:scale-100 xlllll:mt-0.5 xl:scale-90 xl:mt-0.5">
                                    <Image src="/Images/Services/read-arrow.png" width={20} height={20} alt="read arrow" />
                                </div>
                            </button>
                            </div>

                            <Image src="/Images/Career/form image2.png" width={300} height={300} alt='img1' className='absolute bottom-0 right-[-17vw] w-1/3'/>

                            </div>
                            </form>
                        </div>
                    </div>
                    )}

                </div>

            </div>
        </div>
    );
}
