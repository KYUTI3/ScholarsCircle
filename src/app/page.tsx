import Image from "next/image";
import Footer from "../../components/Footer";
import About from "../../components/About";
import Hero from "../../components/Hero";
import Navbar from '../../components/Navbar'
import favicon from '/app/favicon.ico'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="fixed top-0"> 
       <Navbar />
      </div>
      <div className="flex flex-col items-center space-y-10">
      <div className="bg-amber-300"> 
        <Hero />
      </div>
        <About />
       <div className="fixed bottom-0"> 
        <Footer />
       </div>
      </div>
    </main>
  );
}