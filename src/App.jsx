import { useEffect, useState } from "react";
import Features from "./components/features";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Pricing from "./components/pricing";
import Testimonials from "./components/testimonials";

export default function App() {
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      setscrolled(window.scrollY > 50);
      
    }
    window.addEventListener('scroll', handlescroll)

    return () => window.removeEventListener('scroll', handlescroll)
  })

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
    </div>
  )
}