/*export default function SectionHeading({ Title, headings }) {
    return (
        <div>
            <p className="text-black text-md font-semibold text-nowrap xllll:text-xl xlllll:text-[2rem] roboto-light">{Title}</p>
            {headings.map((heading, headingIndex) => (
                <h2
                    key={headingIndex}
                    className="lg:text-[1.5rem] xlllll:text-[2.5rem] roboto-black xlllll:mt-5 xllll:text-3xl sssm:text-lg md:text-[1.2rem] font-bold"
                >
                    {heading.spans.map((span, spanIndex) => (
                        <span
                            key={spanIndex}
                            className={`text-${span.color} px-${span.px ?? 0} pl-${span.pl ?? 0} pr-${span.pr ?? 0} ${headingIndex === 1 && spanIndex === 2 ? 'pl-1' : ''}`}
                        >
                            {span.text}
                        </span>
                    ))}
                </h2>
            ))}
        </div>
    );
}*/

export default function SectionHeading({ Title, heading }) {
    return (
        <div>
            <p className="text-black text-md font-semibold text-nowrap xllll:text-xl xlllll:text-[2rem] roboto-light">{Title}</p>
           
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#03c6e6] to-[#2388bb] from-1% to-99% lg:text-[1.5rem] xlllll:text-[2.5rem] roboto-black xlllll:mt-5 xllll:text-3xl sssm:text-lg md:text-[1.2rem] font-bold">
                {heading} 
                </h2>
        </div>
    );
}



