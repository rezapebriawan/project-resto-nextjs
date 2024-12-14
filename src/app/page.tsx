import { Hero, Latest, Navbar, Popular, Subscribe, Testimonials, Footer } from "@/components";

export default function Home() {
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

// X@@2kNtZ3*HrUFy
