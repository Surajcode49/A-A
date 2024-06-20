"use client"
import Navbar from "../components/Header/navbar"
import Footer from "../components/Footer/Footer"
import Home from "../pages/Home"
import "../app/globals.css";

export default function Main() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Home /> {/*For home page*/}
      <Footer />
      
    </main>
  );
}
