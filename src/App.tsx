import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import OurStory from "./components/OurStory";
import Details from "./components/Details";
import Schedule from "./components/Schedule";
import Location from "./components/Location";
import Gifts from "./components/Gifts";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className="text-gray-700">
      <Hero />
      <Invitation />
      <Details />
      <OurStory />
      <Gifts />
      <RSVP />
      <Footer />
      <Location />
      <Schedule />
      <Gallery />
    </div>
  );
}
