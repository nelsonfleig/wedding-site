import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";

const Gifts = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto px-6 py-20 text-center"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 variants={fadeUp} className="mb-8">
        Lista de regalos
      </motion.h2>

      <motion.p variants={fadeUp} className="mb-12">
        Su presencia es el mejor regalo que podemos recibir. Pero si desean
        hacernos un obsequio, pueden contribuir a nuestro nuevo hogar a través
        de los siguientes medios.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div variants={fadeUp}>
          <h3 className="mb-4">PayPal</h3>
          <p>correo@ejemplo.com</p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="mb-4">Transferencia bancaria</h3>
          <p>Banco: XXXX</p>
          <p>IBAN: ES00 0000 0000 0000 0000 0000</p>
          <p>Titular: María Paula & Nelson</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gifts;
