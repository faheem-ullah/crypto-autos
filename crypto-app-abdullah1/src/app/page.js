"use client";
import Nav from "@/components/nav";
import "swiper/css";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="bg-[black] text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <Footer />
    </main>
  );
}
