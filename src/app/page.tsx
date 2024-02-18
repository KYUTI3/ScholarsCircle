import Image from "next/image";
import Footer from "../../Components/Footer";
import About from "../../Components/About";
import Hero from "../../Components/Hero";
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
    <div className="mt-auto -translate-y-[135px]"> 
     <Hero />
    </div>

    </main>
  );
}
