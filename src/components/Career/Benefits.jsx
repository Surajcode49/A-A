import Image from "next/image"
export default function Benefits(){
    return(
        <div className="bg-gray-100 w-full xxl:h-[30vh] xll:h-[25vh] xlllll:h-[25vh] sssm:p-3 lgg:p-0 sssm:h-[10vh] xlllll:mt-[25vh] xl:h-[40vh] xll:mt-[15vh] xxl:mt-[20vh] xl:mt-[25vh] relative">            
            <div className="sssm:hidden lgg:block">

                <div className=" absolute -top-1/2 left-1/4">
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={200} height={200} alt="advancement" className="xlllll:scale-140"/>
                </div>

                <div className=" absolute -top-1/2 left-2/4">
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={200} height={200} alt="advancement" className="xlllll:scale-140"/>
                </div>

                <div className=" absolute -top-1/2 left-3/4">
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={200} height={200} alt="advancement" className="xlllll:scale-140"/>
                </div>

                <div className=" absolute -bottom-1/2 left-1/3">
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={200} height={200} alt="advancement" className="xlllll:scale-140"/>
                </div>

                <div className=" absolute -bottom-1/2 left-2/3">
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={200} height={200} alt="advancement" className="xlllll:scale-140"/>
                </div>

            </div>

            <div className="sssm:block lgg:hidden ">
                <div className="flex space-x-4 mx-4">
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={50} height={50} alt="advancement" className=""/>
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={50} height={50} alt="advancement" className=""/>
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={50} height={50} alt="advancement" className=""/>
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={50} height={50} alt="advancement" className=""/>
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={50} height={50} alt="advancement" className=""/>
                </div>
            </div>
        
        </div> 
    )
}