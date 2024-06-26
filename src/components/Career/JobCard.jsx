import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const JobCard = memo(({ JobTitle, Position1, Position2, image }) => {
    return (
        <div className="w-full h-[180px] bg-gray-50 border-2 border-accent rounded-sm">
            <div className="mx-auto w-5/6 my-2">
                <div className="flex justify-between items-center">
                    <h1 className="text-accent underline mt-4">{JobTitle}</h1>
                    <Image src={image} width={50} height={50} alt={JobTitle} />
                </div>
                <div className="mt-2">
                    <p className="text-black">{Position1}</p>
                    <p className="text-black">{Position2}</p>
                </div>
            </div>
        </div>
    );
});

JobCard.displayName = 'JobCard';

JobCard.propTypes = {
    JobTitle: PropTypes.string.isRequired,
    Position1: PropTypes.string.isRequired,
    Position2: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default JobCard;
