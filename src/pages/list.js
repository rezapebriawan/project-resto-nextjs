import { Hero, Latest, Navbar, Popular, Subscribe, Testimonials, Footer } from "@/components";
import '../app/globals.css';

export default function list() {
  return (
    <div>
      <main className="bg-white">
        <div className="px-10">
          <Navbar />
          <Hero />
          <Popular />
          <Latest />
          <Subscribe />
          <Testimonials />       
        </div>
        <Footer /> 
      </main>  
    </div>
  );
};
