import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import { illustrations } from "../constants";

const Gifts = () => {
  return (
    <motion.section
      className="relative  overflow-hidden"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <img
        src={illustrations.tileOranges}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-40 lg:w-52 pointer-events-none select-none rounded-none"
      />
      <div className="max-w-3xl mx-auto px-6 py-20 pb-30 text-center">
        <div className="space-y-12">
          <motion.h2 variants={fadeUp} className="mb-8">
            Sugerencia de regalo
          </motion.h2>

          <motion.p variants={fadeUp} className="mb-12">
            Su presencia es el mejor regalo que podemos recibir. Pero si desean
            hacernos un obsequio, pueden contribuir a nuestro nuevo hogar a
            través de los siguientes medios.
          </motion.p>

          <motion.div variants={fadeUp}>
            <h3 className="mb-4">Bizum</h3>
            <p>+34 625 99 55 39</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-4">PayPal</h3>
            <p>nelson.fleig@gmail.com</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-4">Transferencia bancaria</h3>
            <p>Banco: Mercantil Santa Cruz</p>
            <p>Cta Ahorros (Bolivianos) 4067788562</p>
            <p>María Paula Baldiviezo</p>
            <p>CI 4707116 SC</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Gifts;
