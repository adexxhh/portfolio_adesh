import Journey from "@/components/Journey";
import Quotes from "@/components/Quotes";
import Blogs from "@/components/Blogs";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 md:px-0">
      <Header />
      <Hero />
      <Quotes />
      <About />
      <Journey />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
}
