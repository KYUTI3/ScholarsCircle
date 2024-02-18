import Image from "next/image";
import Footer from "../../Components/Footer";
import About from "../../Components/About";

export default function Home() {
  return (
    <main className="flex flex-col"> 
    <div className="bottom-0">
      <Footer />
    </div>
    <div className='translate-y-[360px] size-50 w-50'> 
      <About /> 
    </div>

    
    </main>
  );
}
