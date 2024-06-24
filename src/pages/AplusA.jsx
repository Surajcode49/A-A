/*Imorting requried components for about page*/
import Navbar from "../components/Header/navbar"
import Footer from "../components/Footer/Footer" 
import Section from "../components/HomeSections";
import SectionHeading from "../components/SectionHeading";
import PageHeader from "../components/PageHeader";
import AboutPageLarge from "../components/About/AboutPageLarge";
import AboutPageSmall from "../components/About/AboutPageSmall";
import GetStarted from "../components/About/form"
import ValuePageButton from "../components/About/ValuePageButton";
import "../app/globals.css";

export default function About(){
    const headings = [
        {
            spans: [
                { text: 'Welcome', color: 'main3', px: 0 },
                { text: 'to', color: 'main2', px: 1 },
                { text: 'AplusA', color: 'main1', px: 1 },
                { text: 'Technologies', color: 'accent', px: 0 },
            ],
        },
        
    ];

    return(
        <div>
            <Navbar />{/*Navbar*/}
       
            <div className="relative w-full">
                {/*Page header with background image and text*/}
                <PageHeader  
                    image="/Images/About/abt.png" 
                    text="As the world moves towards cloud, we were prepared for this transition a long time 
                        back. With a industry-updated centre of excellence we have been offering multiple 
                        SAP partner qualified solutions helping business owners unlock tremendous potential 
                        and scale their traditional setup."
                />
                
                {/*Heading for the about page*/}
                <Section>
                    <div className="flex justify-center items-center text-center mt-10">
                        <SectionHeading Title="ABOUT US" headings={headings} />
                    </div>
                </Section>

                {/*For larger screens*/}
                <div className="sssm:hidden lgg:block">
                    <Section>
                        <AboutPageLarge />
                    </Section>
                </div>

                {/*For smaller screens*/}
                <div className="sssm:block lgg:hidden">
                    <Section>
                        <AboutPageSmall />
                    </Section>
                </div>

                {/*Value section of about page*/}
                <Section>

                    <div className="flex justify-center items-center">
                        <div className="mx-[11vw]">
                            <h1 className="text-accent p-3 font-semibold text-center mt-[5vh] xxxxxxl:text-[1.8rem]">DO YOU SHARE OUR VALUES?</h1>
                            <p className="text-gray-500 md:mx-20 lg:text-[0.9rem] xxxxxxl:text-[1.5rem] xxxxxxl:leading-10 p-3 leading-6 text-center">
                                Our vision is to grow with the right people who live and breathe our values of honesty.  We take pride in creating a work environment that is professional and collaborative, 
                                where individuals can expect a bottom-up approach to ideas generating and sharing.
                            </p>
                    
                            <div className="md:flex sssm:block  justify-between mt-5 p-1 mx-6 sssm:px-12">
                                <ValuePageButton bgImage="/Images/About/communication.png" Text="Honesty"/>
                                <ValuePageButton bgImage="/Images/About/critical-thinking.png" Text="Integrity"/>
                                <ValuePageButton bgImage="/Images/About/transparency.png" Text="Transparency"/>
                                <ValuePageButton bgImage="/Images/About/organization-structure.png" Text="Loyalty"/>
                            </div>

                        </div>
                    </div>
                    
                </Section>

                {/*Contact form*/}
                <Section> 
                    <div className="bg-gray-100 W-full lgg:mt-0 sssm:mt-20">
                        <GetStarted />
                    </div>
                </Section>
                
            </div>

            <br />
            <Footer />{/*Footer*/}

        </div>
    );
}