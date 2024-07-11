/* Importing required libraries */
import { useState } from "react";
import { useMotionValue, Reorder } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Item = ({ item, link }) => {
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    // Reorderable SAP icons
    <Reorder.Item
      value={item}
      id={item.src}
      style={{ y, cursor: 'grab' }}
    >
      <Link href={item.link} legacyBehavior>
        <a
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <Image
            src={isHovered ? item.hoversrc : item.src}
            width={80}
            height={80}
            alt={item.alt}
            loading="lazy"
            className="xlllll:scale-175 xlllll:hover:scale-190 lg:scale-100 lg:hover:scale-115 sssm:scale-70 sssm:hover:scale-70 md:scale-90 md:hover:scale-100 xll:scale-125 xll:hover:scale-140 cursor-pointer"
          />
        </a>
      </Link>
    </Reorder.Item>
  );
};
