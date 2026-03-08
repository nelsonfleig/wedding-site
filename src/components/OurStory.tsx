import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";

const OurStory = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto px-6 py-20 text-center"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 variants={fadeUp} className="font-serif text-4xl mb-8">
        Our Story
      </motion.h2>

      <motion.p variants={fadeUp}>
        We met by chance and quickly discovered we shared the same love for
        travel, good food, and long conversations. Over the years our friendship
        grew into something truly special.
      </motion.p>

      <motion.p className="mt-6" variants={fadeUp}>
        Now we’re excited to begin the next chapter of our lives surrounded by
        the people we love the most.
      </motion.p>
    </motion.section>
  );
};

export default OurStory;
