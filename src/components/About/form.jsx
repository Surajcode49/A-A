import SectionHeading from "../SectionHeading";
import Button from "../Button";

export default function Form() {
    const headings = [
        {
            spans: [
                { text: 'Leave', color: 'main3', px: 0 },
                { text: 'a', color: 'main2', px: 1 },
                { text: 'mess', color: 'main1', px: 0 },
                { text: 'age', color: 'accent', px: 0 },
            ],
        },
        {
            spans: [
                { text: 'here', color: 'main3', px: 0 },
                { text: 'and', color: 'main2', px: 1 },
                { text: 'we', color: 'main1', px: 0 },
                { text: 'shall', color: 'accent', px: 1 },
            ],
        },
        {
            spans: [
                { text: 'connect', color: 'main3', px: 0 },
                { text: 'with,', color: 'main2', px: 1 },
                { text: 'you', color: 'main1', px: 0},
                { text: 'to', color: 'accent', px: 1 },
            ],
        },
        {
            spans: [
                { text: 'discuss', color: 'main3', px: 0 },
                { text: 'your,', color: 'main2', pl: 1},
                { text: 'digi', color: 'main1', pl: 1 },
                { text: 'tal', color: 'accent', px: 0 },
            ],
        },
        {
            spans: [
                { text: 'needs', color: 'main3', px: 0 },
            ],
        },
    ];

    return (
        <div className="lg:mt-[5vh] xlllll:mt-[35vh]  xl:mt-[10vh] md:mt-[-7vh] sssm:mt-[-7vh] justify-between items-center relative lg:mx-20 sssm:mx-10">
            <div className="flex flex-col md:flex-row md:mx-10 mx-1">
                {/* Heading for the contacting section in about page */}
                <div className="w-full lg:w-1/3 mt-[10vh] xlllll:mt-5 xxxxxxl:pb-8">
                    <SectionHeading Title="LET'S GET STARTED" headings={headings} />
                </div>

                {/*Form input*/}
                <form className="lgg:w-3/4 sssm:w-3/4 md:w-full mx-auto ">
                    
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
                    
                    <div className="mt-5 -ml-3">
                        <Button
                            buttonText="Submit"
                            bgColor="bg-main3"
                            className="hover:border-main3 border-2 border-gray-100"
                        />
                    </div>

                </form>

            </div>
        </div>
    );
}
