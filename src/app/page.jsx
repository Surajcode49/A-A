"use client"
import dynamic from 'next/dynamic';
import "../styles/globals.css";

const Navbar = dynamic(() => import("../components/Header/navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer/Footer"), {
  ssr: false,
});
const Home = dynamic(() => import("../pages/Home"), {
  ssr: false,
});

export default function Main() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
}
