import { fadeUp } from "../animations";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <motion.section
      className="bg-gray-50 py-20 px-6 text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="font-serif text-4xl mb-6">Location</h2>

      <p className="mb-6">Masia Egara · Terrassa · Spain</p>

      <a
        href="https://maps.google.com"
        className="underline underline-offset-4 hover:text-blue-600"
      >
        View on Google Maps
      </a>
    </motion.section>
  );
};

export default Location;
