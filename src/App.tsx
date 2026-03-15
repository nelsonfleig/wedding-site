import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import OurStory from "./components/OurStory";
import Details from "./components/Details";
import Gifts from "./components/Gifts";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden text-gray-700">
      <Hero />
      <Invitation />
      <Details />
      <OurStory />
      <Gifts />
      <RSVP />
      <Footer />
    </div>
  );
}
