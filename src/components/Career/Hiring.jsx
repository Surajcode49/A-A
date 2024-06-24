import Image from "next/image";
export default function HiringProcess({ step, heading1, heading2, list = [] , image}) {
    return (
        <div className="flex items-center justify-center">
            {/*Vertical dashed image for step*/}
            <div>
                <div className="w-[50px] h-[50px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-main3 from-10% to-main1 to-100% rounded-full">
                    <h1 className="text-white text-xl p-3 text-center">{step}</h1>
                </div>
               <Image src={image} width={3} height={10} alt="dashed-line" className="mx-5 mt-1"/>
            </div>

             {/*Step details*/}
            <div>
                <h1 className="text-xl mt-5">{heading1}</h1>
                <h1 className="text-xl">{heading2}</h1>
                <ul className="list-disc list-outside mt-2 mx-4">
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
}
