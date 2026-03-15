import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import { illustrations } from "../constants";

const Invitation = () => {
  return (
    <motion.section
      className="relative max-w-3xl mx-auto px-6 py-24 pb-40 text-center"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <img
        src={illustrations.tiles}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 md:w-80 lg:w-md pointer-events-none select-none rounded-none"
      />

      <motion.h2 variants={fadeUp} className="mb-8">
        Nos casamos
      </motion.h2>

      <motion.p variants={fadeUp}>
        Nos complace compartir con ustedes uno de los días más importantes de
        nuestras vidas. Nos encantaría contar con su presencia para celebrar
        juntos nuestra unión ante Dios.
      </motion.p>

      <motion.p variants={fadeUp} className="mt-6">
        Será una noche llena de amor, risas y buena compañía. Los esperamos con
        los brazos abiertos y mucha ilusión.
      </motion.p>
    </motion.section>
  );
};

export default Invitation;
