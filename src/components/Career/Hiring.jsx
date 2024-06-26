import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Image from "next/image";

const HiringProcess = memo(({ step, heading1, heading2, list = [], image }) => {
    return (
        <div className="flex items-center justify-center">
            {/* Vertical dashed image for step */}
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-main3 to-main1 rounded-full flex items-center justify-center">
                    <h1 className="text-white text-xl">{step}</h1>
                </div>
                <Image src={image} width={3} height={10} alt="dashed-line" className="mx-5 mt-1" />
            </div>

            {/* Step details */}
            <div className="ml-5">
                <h1 className="text-xl mt-5">{heading1}</h1>
                <h1 className="text-xl">{heading2}</h1>
                <ul className="list-disc list-outside mt-2 ml-5">
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

HiringProcess.propTypes = {
    step: PropTypes.string.isRequired,
    heading1: PropTypes.string.isRequired,
    heading2: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string.isRequired,
};

export default HiringProcess;
