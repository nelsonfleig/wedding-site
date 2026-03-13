import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import OurStory from "./components/OurStory";
import Details from "./components/Details";
import Schedule from "./components/Schedule";
import Location from "./components/Location";
import Gifts from "./components/Gifts";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="text-gray-700">
      <Hero />
      <Invitation />
      <OurStory />
      <Details />
      <Schedule />
      <Location />
      <Gifts />
      <RSVP />
      <Footer />
    </div>
  );
}
