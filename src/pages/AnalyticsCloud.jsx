"use client"
import Navbar from "../components/Header/navbar"
import Footer from "../components/Footer/Footer"
import "../app/globals.css";
import Image from "next/image";

export default function AnalyticsCloud() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="flex justify-center items-center">
        <Image src="/Images/Underconstruction.jpg" alt="underconstruction" width={500} height={500}/>
      </div>
      <Footer />
      
    </main>
  );
}
