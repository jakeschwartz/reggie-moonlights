import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Discography from "./components/Discography";
import Story from "./components/Story";
import Ephemera from "./components/Ephemera";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grain vignette min-h-screen">
      <Marquee />
      <Hero />
      <About />
      <Discography />
      <Story />
      <Ephemera />
      <Footer />
    </div>
  );
}
