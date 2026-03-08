import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";

const Schedule = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto px-6 py-20 text-center"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2 variants={fadeUp} className="font-serif text-4xl mb-10">
        Schedule
      </motion.h2>

      <div className="space-y-6">
        <motion.div variants={fadeUp}>
          <p className="font-medium">4:00 PM</p>
          <p>Ceremony</p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="font-medium">5:30 PM</p>
          <p>Cocktail Hour</p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="font-medium">7:00 PM</p>
          <p>Dinner & Celebration</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Schedule;
