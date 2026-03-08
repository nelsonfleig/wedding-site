import { motion, type Variants } from "framer-motion";

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
      className="bg-gray-50 py-20 px-6"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 variants={fadeUp} className="font-serif text-4xl mb-12">
          Wedding Details
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={fadeUp}>
            <h3 className="font-serif text-2xl mb-4">Ceremony</h3>
            <p>4:00 PM</p>
            <p>Santa Maria del Mar</p>
            <p>Barcelona, Spain</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="font-serif text-2xl mb-4">Reception</h3>
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
