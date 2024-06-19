"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import HeroSection from "../pages/hero";
import Service from "../pages/service";
import About from "../pages/about";
import Industry from "../pages/industries";
import Partners from "../pages/partners";
import Head from "next/head";
import '../styles/globals.css';
import "../app/globals.css"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <Service />
      <About />
      <Industry />
      <Partners />
    </main>
  );
}
