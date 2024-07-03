import Image from "next/image"
import Navbar from "../components/Header/navbar"
import Footer from "../components/Footer/Footer"
import "../app/globals.css";

export default function Pharmacy(){
    return(
        <main>
            <Navbar />
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-[1.5rem] capitalize mb-10">We serve pharmaceutical industry</h1>
                <Image src="/Images/Underconstruction.jpg" alt="underconstruction" width={500} height={500}/>
            </div>
            <Footer />
        </main>
    )
}