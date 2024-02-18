import Image from "next/image";
import Footer from "../../Components/Footer";
import About from "../../Components/About";
import Hero from "../../Components/Hero";
import Navbar from '../../Components/Navbar'
import favicon from '/app/favicon.ico'

export default function Home() {
  return (
    <main className="flex flex-col"> 
    <div className="bottom-0">
      <Footer />
    </div>
    <div className='translate-y-[360px] size-50 w-50'> 
      <About /> 
    </div>
    <div className=" transform mt-auto -translate-y-[140px] bg-amber-300 border-solid max-w-96 translate-x-[525px] "> 
     <Hero />
    </div>
    <div className="fixed right-[630px] "> 
      <Navbar />
    </div>

    </main>
  );
}
