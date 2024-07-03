/*Importing required libraries*/
import { useMotionValue, Reorder } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Item = ({ item, link }) => {
  const y = useMotionValue(0);

  return (
    //Reorderable SAP icons
    <Reorder.Item value={item} id={item.src} style={{ y, cursor: 'grab' }}>
      <Link href={item.link} legacyBehavior>
        
          <Image
            src={item.src}
            width={50}
            height={50}
            alt={item.alt}
            loading="lazy"
            className="lg:scale-100 lg:hover:scale-115 sssm:scale-60 sssm:hover:scale-70 md:scale-90 md:hover:scale-100 xll:scale-125 xll:hover:scale-140 cursor-pointer"
          />
        
      </Link>
    </Reorder.Item>
  );
};
