import { motion } from "framer-motion";

export default function MediaIcons({ IconComponent, href }) { //Takes the react icons and the link to social media
    return (
        <motion.a
            href={href}
            className="p-2 bg-gradient-to-r from-main3 to-accent hover:bg-black text-white rounded-full"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
        >
            <IconComponent size={24} />
        </motion.a>
    );
}