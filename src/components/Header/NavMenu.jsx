import Link from "next/link";
import { motion } from "framer-motion";

export default function NavMenu({Menu,Route}){ //Takes the menu name and link to the page for navigation
    return(
        <motion.li
            className="border-2 border-white"
            whileHover={{ borderTopColor: "#33BBE3" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Link href={Route} legacyBehavior>
                <a className="hover:text-accent cursor-pointer block py-2">{Menu}</a>
            </Link>

        </motion.li>
    );
}