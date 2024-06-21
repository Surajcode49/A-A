export default function HiringProcess({ step, heading1, heading2, list = [] }) {
    return (
        <div className="flex items-center justify-center">
            <div>
                <div className="w-[50px] h-[50px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-main3 from-10% to-main1 to-100% rounded-full">
                    <h1 className="text-white text-xl p-3 text-center">{step}</h1>
                </div>
                <hr className="w-1 h-[30vh] xlllll:h-[20vh] border-2 border-dashed border-black mx-5 mt-1" />
            </div>

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
