import { fadeUp } from "../animations";
import { motion } from "framer-motion";

const RSVP = () => {
  return (
    <motion.section
      className="bg-gray-50 py-20 px-6 text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="font-serif text-6xl mb-8">RSVP</h2>

      <p className="mb-8">Please let us know if you’ll be joining us.</p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
      >
        RSVP Now
      </motion.button>
    </motion.section>
  );
};

export default RSVP;
