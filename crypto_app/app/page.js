import Courosal from "./components/Courosal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/Main";


export default function Home() {
  return (
    <div className="">
      <Header />
      <MainSection />
      <Courosal />
      <HeroSection />
      <Footer />
    </div>
  )
}
