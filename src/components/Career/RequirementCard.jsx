
export default function RequirementCard({title, text}){
    return(
        <div className="w-full lg:w-1/3 mt-[25vh] ml-[-3vw] sssm:hidden lgg:block">
            <p className="sssm:mt-10 text-main3 text-md font-semibold xlllll:leading-10 xllll:text-xl xlllll:text-[2rem] xl:mt-[-25vh] roboto-light text-nowrap">
                {title}
            </p>
            
            <br />

            <p className="text-black max-w-[15vw] text-sm xlllll:text-xl">
                {text}
            </p>
            
        </div>
    );
}