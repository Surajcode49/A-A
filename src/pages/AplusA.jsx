/* Importing required components for about page */
import dynamic from 'next/dynamic';
import Navbar from "../components/Header/navbar";
import Footer from "../components/Footer/Footer";
import Section from "../components/HomeSections";
import SectionHeading from "../components/SectionHeading";
import Clients from "../components/Clients/Clients";
import Connect from "../components/Connect/Connect";
import PageHeader from "../components/PageHeader";
import "../app/globals.css";

// Lazy loading components
const AboutPageLarge = dynamic(() => import("../components/About/AboutPageLarge"), { ssr: false });
const AboutPageSmall = dynamic(() => import("../components/About/AboutPageSmall"), { ssr: false });
const GetStarted = dynamic(() => import("../components/About/form"), { ssr: false });
const ValuePageButton = dynamic(() => import("../components/About/ValuePageButton"), { ssr: false });

export default function About() {

    return (
        <div>
            <Navbar /> {/* Navbar */}
       
            <div className="relative w-full">
                {/* Page header with background image and text */}
                <PageHeader  
                    image="/Images/About/About-US-02.jpg" 
                    heading="ABOUT US"
                    text="AplusA Technologies: Your Trusted Partner for Digital Transformation"
                />

                <div className='bg-black p-6 xlllll:p-12 text-white uppercase'>
                    <p className='lgg:px-40 sssm:px-5 sssm:text-xs xlllll:text-[2.1rem] xlllll:leading-[4vh] text-justify lgg:text-xl'>
                        <span className='text-accent'>AplusA Technologies</span> was founded in 2017 by a passionate team of tech enthusiasts 
                        with a bold vision: to empower businesses worldwide through innovative software 
                        solutions. We started as a partnership firm, evolving in 2020 to <span className='text-accent'>AplusA 
                        Technologies Pvt. Ltd.</span>, a testament to our commitment to growth and excellence.
                    </p>
                </div>
                
                

                {/* For larger screens */}
                <div className="sssm:hidden lgg:block">
                    <Section>
                        <AboutPageLarge 
                            text1="AplusA Technologies was founded in 2017 by a passionate team of tech enthusiasts with a bold vision: to empower businesses worldwide through innovative software solutions. We started as a partnership firm, evolving in 2020 to AplusA Technologies Pvt. Ltd., a testament to our commitment to growth and excellence."
                            heading1="WHAT WE DO"
                            text2="AplusA Technologies was founded in 2017 by a passionate team of tech enthusiasts with a bold vision: to empower businesses worldwide through innovative software solutions. We started as a partnership firm, evolving in 2020 to AplusA Technologies Pvt. Ltd., a testament to our commitment to growth and excellence."
                            heading2="WHY CHOOSE APLUSA?"
                            boldTexts={[
                                "Proven Track Record: ", 
                                "Unwavering Commitment: ",
                                "Collaborative Approach: ", 
                                "Technical Expertise:  "
                            ]}
                            listItems={[
                                "We have a history of helping companies across verticals transform their traditional business models and achieve success.", 
                                "We are passionate about building long-term partnerships and helping our clients thrive in the digital age.", 
                                "We believe in open communication and working hand-in-hand with you to achieve your goals.",
                                "Our team possesses deep technical knowledge and experience with cutting-edge technologies."
                            ]}
                            image="/Images/About/aboutus_section.jpg"
                        />
                    </Section>
                </div>

                {/* For smaller screens */}
                <div className="sssm:block lgg:hidden">
                    <Section>
                        <AboutPageSmall
                            text1="AplusA Technologies was founded in 2017 by a passionate team of tech enthusiasts with a bold vision: to empower businesses worldwide through innovative software solutions. We started as a partnership firm, evolving in 2020 to AplusA Technologies Pvt. Ltd., a testament to our commitment to growth and excellence."
                            heading1="WHAT WE DO"
                            text2="AplusA Technologies was founded in 2017 by a passionate team of tech enthusiasts with a bold vision: to empower businesses worldwide through innovative software solutions. We started as a partnership firm, evolving in 2020 to AplusA Technologies Pvt. Ltd., a testament to our commitment to growth and excellence."
                            heading2="WHY CHOOSE APLUSA?"
                            boldTexts={[
                                "Proven Track Record: ", 
                                "Unwavering Commitment: ",
                                "Collaborative Approach: ", 
                                "Technical Expertise:  "
                            ]}
                            listItems={[
                                "We have a history of helping companies across verticals transform their traditional business models and achieve success.", 
                                "We are passionate about building long-term partnerships and helping our clients thrive in the digital age.", 
                                "We believe in open communication and working hand-in-hand with you to achieve your goals.",
                                "Our team possesses deep technical knowledge and experience with cutting-edge technologies."
                            ]}
                            image="/Images/About/aboutus_section.jpg"
                        />
                    </Section>
                </div>

                {/* Value section of about page */}
                <Section>
                    <div className="flex justify-center items-center bg-gray-100">
                        <div className="mx-[7vw]">
                            <h1 className="text-accent p-3 font-semibold text-center mt-[5vh] xxxxxxl:text-[1.8rem]">OUR CORE VALUES</h1>
                            <p className="text-gray-500 md:mx-20 lg:text-[0.9rem] xxxxxxl:text-[1.5rem] xxxxxxl:leading-10 p-3 leading-6 text-center">
                            At AplusA Technologies, we foster a collaborative and transparent work environment built on a foundation of honesty, integrity, and loyalty. We believe these values are the cornerstone of building strong partnerships and delivering exceptional results for our clients.
                            </p>
                    
                            <div className="md:flex sssm:block justify-between mt-5 mb-10 p-1 mx-6 sssm:px-12">
                                <ValuePageButton bgImage="/Images/About/Honesty.png" Text="Transparency"/>
                                <ValuePageButton bgImage="/Images/About/Integrity.png" Text="Honesty"/>
                                <ValuePageButton bgImage="/Images/About/transparent.png" Text="Integrity"/>
                                <ValuePageButton bgImage="/Images/About/Loyalty.png" Text="Loyalty"/>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section>
                    <Clients />
                </Section>

                {/* Contact form */}
                <Section> 
                    <div className="bg-gray-100 w-full lgg:-mt-40 lgg:mb-40 sssm:mt-20 xlllll:-mt-[25vh] xlllll:h-[35vh]">
                        <GetStarted />
                    </div>
                </Section>
            </div>

            <Section>
                <Connect />
            </Section>

            <br />
            <Footer /> {/* Footer */}
        </div>
    );
}
