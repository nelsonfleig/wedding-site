import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { illustrations } from "../constants";

export default function Hero() {
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontsReady(true));
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-6">
      <img
        src={illustrations.orangeBlossoms}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-56 md:w-72 lg:w-96 pointer-events-none select-none rounded-none"
      />
      <img
        src={illustrations.orangeBranch}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-32 md:w-44 lg:w-56 pointer-events-none select-none rounded-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={fontsReady ? { opacity: 1 } : undefined}
        transition={{ duration: 1 }}
        variants={fadeUp}
      >
        <h1 className="relative z-10 text-7xl md:text-8xl lg:text-9xl tracking-wide mb-6">
          María Paula & Nelson
        </h1>

        <p className="mb-2">11 de Septiembre 2026</p>
        <p className="mb-2">Sevilla · España</p>
      </motion.div>
    </section>
  );
}
