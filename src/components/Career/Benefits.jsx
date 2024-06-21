import Image from "next/image"
export default function Benefits(){
    return(
        <div className="bg-gray-100 w-full h-[40vh] mt-[25vh] relative">            
            <div className="">

                <div className=" absolute -top-1/2 left-1/4 w-[200px] h-[200px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-main3 from-10% to-main1 to-100% rounded-full">
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={200} height={200} alt="advancement"/>
                </div>

                <div className=" absolute -top-1/2 left-2/4 w-[200px] h-[200px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-main3 from-10% to-main1 to-100% rounded-full">
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={200} height={200} alt="advancement"/>
                </div>

                <div className=" absolute -top-1/2 left-3/4 w-[200px] h-[200px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-main3 from-10% to-main1 to-100% rounded-full">
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={200} height={200} alt="advancement"/>
                </div>

                <div className=" absolute -bottom-1/2 left-1/3 w-[200px] h-[200px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-main3 from-10% to-main1 to-100% rounded-full">
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={200} height={200} alt="advancement"/>
                </div>

                <div className=" absolute -bottom-1/2 left-2/3 w-[200px] h-[200px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-main3 from-10% to-main1 to-100% rounded-full">
                    <Image src="/Images/Career/emplyee benefits icons/advancement.webp" width={200} height={200} alt="advancement"/>
                </div>

            </div>
        
        </div> 
    )
}