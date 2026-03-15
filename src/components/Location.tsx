import { fadeUp } from "../animations";
import { motion } from "framer-motion";
import { illustrations } from "../constants";

const Location = () => {
  return (
    <motion.section
      className="relative py-20 px-6 text-center overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <img
        src={illustrations.tower}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 md:right-8 lg:right-16 w-24 md:w-36 lg:w-48 pointer-events-none select-none "
      />

      <div className="relative z-10">
        <h2 className="mb-6">Location</h2>

        <p className="mb-6">Iglesia Santa Maria la Blanca · Sevilla · España</p>

        <a href="https://maps.google.com" className="underline">
          View on Google Maps
        </a>
      </div>
    </motion.section>
  );
};

export default Location;
