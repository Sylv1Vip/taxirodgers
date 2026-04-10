import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Philosophy from "./components/Philosophy";
import TaxiVtc from "./components/TaxiVtc";
import Protocol from "./components/Protocol";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <Philosophy />
        <TaxiVtc />
        <Protocol />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
