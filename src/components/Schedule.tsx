import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import { illustrations } from "../constants";

const Schedule = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={illustrations.lobster}
        alt=""
        aria-hidden="true"
        className="absolute -top-4 -left-4 w-24 md:w-36 lg:w-44 pointer-events-none select-none rounded-none"
      />
      <img
        src={illustrations.cocktails}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-4 right-4 md:right-12 w-16 md:w-24 lg:w-32 pointer-events-none select-none rounded-none"
      />

      <motion.section
        className="max-w-3xl mx-auto px-6 py-20 text-center relative z-10"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeUp} className="mb-10">
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
    </div>
  );
};

export default Schedule;
