import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import { illustrations } from "../constants";

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
        src={illustrations.lobster}
        alt=""
        aria-hidden="true"
        className="absolute top-50 left-0 md:left-8 lg:left-16 w-24 md:w-36 lg:w-48 pointer-events-none select-none "
      />

      <img
        src={illustrations.tower}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 -right-4 w-28 md:w-40 lg:w-52 pointer-events-none select-none rounded-none"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 variants={fadeUp} className="mb-12">
          Itinerario
        </motion.h2>

        <div className="space-y-12">
          <motion.div variants={fadeUp}>
            <h3 className="mb-4">Preboda</h3>
            <p>Septiembre 10</p>
            <p>20:30</p>
            <p>La Primera del Puente</p>
            <a
              href="https://maps.app.goo.gl/Yvi5yntmJpP4fA5T8"
              className="underline"
            >
              Ver en el mapa
            </a>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-4">Ceremonia</h3>
            <p>Septiembre 11</p>
            <p>17:30</p>
            <p>Iglesia de Santa María la Blanca</p>
            <a
              href="https://maps.app.goo.gl/74TArisYqSTXMZ3g8"
              className="underline"
            >
              Ver en el mapa
            </a>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-4">Recepción</h3>
            <p>Septiembre 11</p>
            <p>19:00</p>
            <p>El 29 Restaurante</p>
            <p>Vestimenta formal</p>
            <a
              href="https://maps.app.goo.gl/YApmRcW7kM69d2Zr8"
              className="underline"
            >
              Ver en el mapa
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Details;
