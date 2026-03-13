import { motion, type Variants } from "framer-motion";
import tiles from "../assets/illustrations/IMG_7098.png";
import tileOranges from "../assets/illustrations/IMG_7089.png";

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Details = () => {
  return (
    <motion.section
      className="relative bg-gray-50 py-20 px-6 overflow-hidden"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <img
        src={tiles}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 md:w-80 lg:w-[28rem] pointer-events-none select-none rounded-none opacity-20"
      />
      <img
        src={tileOranges}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-4 -right-4 w-28 md:w-40 lg:w-52 pointer-events-none select-none rounded-none opacity-25"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 variants={fadeUp} className="font-serif text-6xl mb-12">
          Wedding Details
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={fadeUp}>
            <h3 className="font-serif text-4xl mb-4">Ceremony</h3>
            <p>4:00 PM</p>
            <p>Santa Maria del Mar</p>
            <p>Barcelona, Spain</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="font-serif text-4xl mb-4">Reception</h3>
            <p>6:30 PM</p>
            <p>Masia Egara</p>
            <p>Terrassa, Spain</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Details;
