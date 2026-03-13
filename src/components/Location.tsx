import { fadeUp } from "../animations";
import { motion } from "framer-motion";
import tower from "../assets/illustrations/IMG_7103.png";

const Location = () => {
  return (
    <motion.section
      className="relative bg-gray-50 py-20 px-6 text-center overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <img
        src={tower}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 md:right-8 lg:right-16 w-24 md:w-36 lg:w-48 pointer-events-none select-none rounded-none opacity-25"
      />

      <div className="relative z-10">
        <h2 className="font-serif text-6xl mb-6">Location</h2>

        <p className="mb-6">Masia Egara · Terrassa · Spain</p>

        <a
          href="https://maps.google.com"
          className="underline underline-offset-4 hover:text-blue-600"
        >
          View on Google Maps
        </a>
      </div>
    </motion.section>
  );
};

export default Location;
