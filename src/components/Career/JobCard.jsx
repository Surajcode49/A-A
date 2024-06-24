import Image from "next/image";

export default function JobCard({JobTitle, Postion1, Position2, image}){
    return(
        <div className="w-full h-[180px] bg-gray-50 border-2 border-accent rounded-sm">
            <div className="mx-auto w-5/6 my-2">
                <div className="flex justify-between">
                    <h1 className="text-accent underline mt-4">{JobTitle}</h1>
                    <Image src={image} width={50} height={50} alt="coding"/>
                </div>
                <br />
                <p className="text-black">{Postion1}</p>
                <p className="text-black">{Position2}</p>
            </div>
        </div>
    );
}