export default function SectionHeading({ Title, heading }) {
    return (
        <div>
            <p className="text-black text-md font-semibold text-nowrap xllll:text-xl xlllll:text-[2rem] roboto-light">{Title}</p>
           
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#03c6e6] via-main2 to-[#2388bb] from-1% to-99% lg:text-[1.5rem] xlllll:text-[2.5rem] roboto-black xlllll:mt-5 xlllll:leading-[4.5vh] xllll:text-3xl sssm:text-lg md:text-[1.2rem] font-bold">
                {heading} 
                </h2>
        </div>
    );
}



