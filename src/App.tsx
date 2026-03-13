import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Details from "./components/Details";
import RSVP from "./components/RSVP";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Schedule from "./components/Schedule";

export default function App() {
  return (
    <div className="bg-white text-gray-700 font-sans">
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
