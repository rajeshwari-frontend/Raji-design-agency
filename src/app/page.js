import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Service />
      <Portfolio />
      <Contact />
    </div>
  );
}