import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reel from "@/components/Reel";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reel />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
