import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import { illustrations } from "../constants";

const Gifts = () => {
  return (
    <motion.section
      className="relative max-w-3xl mx-auto px-6 py-20 pb-30 text-center"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <img
        src={illustrations.tileOranges}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 -right-4 w-40 lg:w-52 pointer-events-none select-none rounded-none"
      />
      <div className="space-y-12">
        <motion.h2 variants={fadeUp} className="mb-8">
          Sugerencia de regalo
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-12">
          Su presencia es el mejor regalo que podemos recibir. Pero si desean
          hacernos un obsequio, pueden contribuir a nuestro nuevo hogar a través
          de los siguientes medios.
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
          <p>Banco: XXXX</p>
          <p>IBAN: ES00 0000 0000 0000 0000 0000</p>
          <p>María Paula Baldiviezo Peredo</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gifts;
