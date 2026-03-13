import { motion } from "framer-motion";
import { stagger, fadeUp } from "../animations";

const Gallery = () => {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-6 py-20"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        variants={fadeUp}
        className="text-center mb-12"
      >
        Gallery
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          variants={fadeUp}
          className="aspect-square bg-gray-200 rounded-lg"
        />
        <motion.div
          variants={fadeUp}
          className="aspect-square bg-gray-200 rounded-lg"
        />
        <motion.div
          variants={fadeUp}
          className="aspect-square bg-gray-200 rounded-lg"
        />
      </div>
    </motion.section>
  );
};

export default Gallery;
