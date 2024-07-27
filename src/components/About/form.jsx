import SectionHeading from "../SectionHeading";
import Button from "../Button";

export default function Form() {
    return (
        <div className="lg:mt-[5vh] xlllll:mt-[35vh]  xl:mt-[10vh] md:mt-[-7vh] sssm:mt-[-7vh] justify-between items-center relative lg:mx-20 sssm:mx-10">
            <div className="flex flex-col md:flex-row md:mx-10 mx-1 xlllll:mx-20">
                {/* Heading for the contacting section in about page */}
                <div className="w-full lg:w-1/5 xlllll:w-1/4 sssm:mt-10 lgg:mt-[10vh] xlllll:mt-5 xlllll:py-8">
                    <SectionHeading Title="LET'S GET STARTED" heading="Leave a message here and we shall connect with you to discuss your digital needs" />
                </div>

                {/*Form input*/}
                <form className="lgg:w-3/4 sssm:w-3/4 md:w-full mx-auto xlllll:text-xl">
                    
                    <div className="md:flex block md:space-x-10 space-x-0 lgg:my-8 my-2 lgg:space-y-0 space-y-4">
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400 bg-gray-100" type="text" placeholder="First Name *" id="firs-name" name="first-name"/>
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400 bg-gray-100" type="text" placeholder="Last Name *" id="last-name" name="last-name"/>
                    </div>

                    <div className="md:flex block md:space-x-10 space-x-0 lgg:my-8 my-2 lgg:space-y-0 space-y-4">
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400 bg-gray-100" type="email" placeholder="Email Id *" id="email" name="email"/>
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400 bg-gray-100" type="text" placeholder="Contact Number" id="contact-no" name="contact-no"/>
                    </div>

                    <div className="md:flex block md:space-x-10 space-x-0 lgg:my-8 my-2 lgg:space-y-0 space-y-4">
                        <input className="border-b border-gray-600 hover:border-main3 w-full md:mt-1 mt-2 outline-none placeholder-gray-400 bg-gray-100" type="text" placeholder="Organization/Institute " id="organization" name="organization"/>
                        <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400 bg-gray-100" type="text" placeholder="Job Title " id="job" name="job-title"/>
                    </div>

                    <input className="border-b border-gray-600 hover:border-main3 w-full mt-1 outline-none placeholder-gray-400 bg-gray-100" type="text" placeholder="How can we help you? *" id="help" name="help"/>
                    
                    <div className="flex justify-items-center items-center">
                    <div className="mt-5 sssm:mx-auto lgg:-ml-3">
                        <Button
                            buttonText="Submit"
                            bgColor="bg-main3"
                            className="hover:border-main3 border-2 mx-auto border-gray-100"
                        />
                    </div>
                    </div>

                </form>

            </div>
        </div>
    );
}
