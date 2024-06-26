import { useState, useEffect, useRef, memo } from 'react';
import Image from "next/image";
import dynamic from 'next/dynamic';
import { Tilt } from 'react-next-tilt';

const JobCard = memo(function JobCard({ JobTitle, Position1, Position2, image }) {
    return (
        <div className="job-card">
            <Image src={image} width={200} height={200} alt={JobTitle} className="job-card-image" />
            <div className="job-card-content">
                <h1 className="job-card-title">{JobTitle}</h1>
                <p className="job-card-position">{Position1}</p>
                <p className="job-card-position">{Position2}</p>
            </div>
        </div>
    );
});

const Button = memo(function Button({ buttonText, bgColor, className, onClick }) {
    return (
        <button className={`${bgColor} ${className}`} onClick={onClick}>
            {buttonText}
        </button>
    );
});

const ApplyJob = dynamic(() => import('./ApplyJob'), { ssr: false });

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
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + jobs.length) % jobs.length);
    };

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

    return (
        <div className="bg-gray-100 p-6 w-full xl:h-[95vh] lxl:h-[80vh] xxl:h-[75vh] xll:h-[65vh] mt-10">
            <h1 className="flex justify-center items-center text-gray-500 text-[1.5rem]">FEATURED JOBS</h1>
            
            <div className="xl:mx-20 sssm:mx-7 mt-5 flex xlllll:mx-20 lxl:mx-40">
                <div className="w-full mt-5 mx-0 sssm:block lgg:hidden">
                    <Tilt>
                        <div className="text-center bg-gradient-to-r from-main3 to-main1 h-[400px] sssm:max-w-[400px] lxl:h-[500px] xlllll:h-[530px]">
                            <Image src={jobs[currentIndex].imgSrc} width={180} height={180} alt="jobs" className="mx-auto w-5/6 pt-8 pb-2 rounded-md" loading="lazy" />
                            
                            <div className="mx-auto w-5/6">
                                <h1 className="text-white underline">{jobs[currentIndex].title}</h1>
                                <br />
                                {jobs[currentIndex].positions.map((position, index) => (
                                    <p key={index} className="text-white">{position}</p>
                                ))}
                                <p className="text-white underline ml-20">View All Positions</p>
                            </div>
                        </div>
                    </Tilt>
                    
                    <div className="flex justify-center space-x-4 mt-4">
                        <Image src="/Images/Services/previous-arrow.png" width={20} height={20} alt="previous arrow" onClick={handlePrev} className="cursor-pointer" loading="lazy" />
                        <Image src="/Images/Services/next-arrow.png" width={20} height={20} alt="next arrow" onClick={handleNext} className="cursor-pointer" loading="lazy" />
                    </div>
                </div>

                <div className="w-1/3 sssm:hidden lgg:block h-[400px] lxl:h-[500px] xlllll:h-[530px] bg-gradient-to-r from-main3 to-main1">
                    <Image src="/Images/Career/featured job icons/ANDROID DEVELOPER.jpg" width={200} height={200} alt="jobs" className="mx-auto w-5/6 pt-8 pb-2 rounded-md" loading="lazy" />
                    
                    <div className="mx-auto w-5/6">
                        <h1 className="text-white underline xlllll:text-[1.5rem]">ANDROID DEVELOPER</h1>
                        <br />
                        <p className="text-white xlllll:text-[1.5rem]">Android Developer (2-8 Years)</p>
                        <p className="text-white xlllll:text-[1.5rem]">Tech Lead - Developer (5-10 Years)</p>
                        <p className="text-white underline ml-20 xlllll:text-[1.5rem] xlllll:ml-40">View All Positions</p>
                    </div>
                </div>

                <div className="sssm:hidden lgg:block">
                    <div className="flex w-full space-x-7 mx-10 lxl:ml-[8vw] lxl:my-[2vw] lxl:scale-125 xlllll:ml-[10vw] xlllll:my-[2vw] xlllll:scale-140">
                        <JobCard 
                            JobTitle='JAVASCRIPT MOBILE' 
                            Position1='React Native Developer (2-8 Years)' 
                            Position2='Tech Lead - JavaScript Mobile (5-10 Years)'
                            image="/Images/Career/featured job icons/coding.webp"
                        />
                        <JobCard 
                            JobTitle='BLOCKCHAIN' 
                            Position1='Blockchain Developer (2-8 Years)' 
                            Position2='Tech Lead - Blockchain (5-10 Years)'
                            image="/Images/Career/featured job icons/blockchain.webp"
                        />  
                    </div>

                    <div className="flex w-full mx-10 space-x-7 mt-5 xlllll:mt-[5vw] xlllll:ml-[10vw] xlllll:my-[2vw] xlllll:scale-140 lxl:ml-[8vw] lxl:mt-[5vw] lxl:my-[2vw] lxl:scale-125 ">
                        <JobCard 
                            JobTitle='FLUTTER' 
                            Position1='Flutter Developer (2-8 Years)' 
                            Position2='Tech Lead - Flutter (5-10 Years)'
                            image="/Images/Career/featured job icons/Flutter-01.webp"
                        />
                        <JobCard 
                            JobTitle='UX/UI DEVELOPER' 
                            Position1='Frontend Designer (HTML / CSS / JS) (2-8 Years)' 
                            Position2='Tech Lead - Developer (5-10 Years)'
                            image="/Images/Career/featured job icons/coding.webp"
                        />
                    </div>
                    
                    <div className="mt-5 mx-7 xlllll:mt-20 xlllll:mx-[6.5vw] xlllll:scale-140" onClick={openModal}>
                        <Button
                            buttonText="Apply Now"
                            bgColor="bg-main1"
                            className="hover:border-main1 border-2 border-white"
                        />
                    </div>

                    {showModal && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                            <div ref={modalRef} className="w-5/6 mx-auto rounded-[2vw] rounded-br-none border-4 border-accent bg-white">
                                <ApplyJob />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
