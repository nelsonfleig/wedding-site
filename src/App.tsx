import { motion, type Variants } from "framer-motion";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Details from "./components/Details";
import RSVP from "./components/RSVP";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Schedule from "./components/Schedule";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-700 font-sans">
      <Hero />
      <OurStory />
      <Details />
      <Schedule />
      <Location />
      <Gallery />
      <RSVP />
      {/* FOOTER */}
      <footer className="text-center py-12 text-gray-500">
        <p>Made with 💙 for our wedding</p>
      </footer>
    </div>
  );
}
