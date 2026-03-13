import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import tileOranges from "../assets/illustrations/IMG_7089.png";

const Details = () => {
  return (
    <motion.section
      className="relative py-20 px-6 overflow-hidden"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <img
        src={tileOranges}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-4 -right-4 w-28 md:w-40 lg:w-52 pointer-events-none select-none rounded-none"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 variants={fadeUp} className="mb-12">
          Itinerario
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={fadeUp}>
            <h3 className="mb-4">Preboda</h3>
            <p>Septiembre 10, 20:30</p>
            <p>La Primera del Puente</p>
            <p>Septiembre 10</p>
            <a href="https://maps.google.com" className="underline">
              Ver en el mapa
            </a>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-4">Ceremonia</h3>
            <p>Septiembre 11, 17:30</p>
            <p>Iglesia de Santa María la Blanca</p>
            <p>Septiembre 11</p>
            <a href="https://maps.google.com" className="underline">
              Ver en el mapa
            </a>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-4">Recepción</h3>
            <p>Septiembre 11, 19:00</p>
            <p>El 29 Restaurante</p>
            <p>Vestimenta formal</p>
            <a href="https://maps.google.com" className="underline">
              Ver en el mapa
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Details;
