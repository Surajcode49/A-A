/*Importing required libraries*/
import { useMotionValue, Reorder } from "framer-motion";
import Image from "next/image";

export const Item = ({ item }) => {
  const y = useMotionValue(0);

  return (
    //Reorderable SAP icons
    <Reorder.Item value={item} id={item.src} style={{ y, cursor: 'grab' }}>
      <Image
        src={item.src}
        width={50}
        height={50}
        alt={item.alt}
        loading="lazy"
        className="lg:scale-100 lg:hover:scale-115 sssm:scale-60 sssm:hover:scale-70 md:scale-90 md:hover:scale-100 xll:scale-125 xll:hover:scale-140 cursor-pointer"
      />
    </Reorder.Item>
  );
};
