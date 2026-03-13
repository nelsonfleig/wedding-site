import { motion } from "framer-motion";
import orangeBlossoms from "../assets/illustrations/IMG_7099.png";
import orangeBranch from "../assets/illustrations/IMG_7095.png";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center text-center px-6 overflow-hidden">
      <img
        src={orangeBlossoms}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-40 md:w-56 lg:w-72 pointer-events-none select-none rounded-none opacity-70"
      />
      <img
        src={orangeBranch}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-16 md:w-24 lg:w-32 pointer-events-none select-none rounded-none opacity-70"
      />

      <motion.h1
        className="relative z-10 font-serif text-6xl md:text-7xl lg:text-8xl text-gray-900 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        María Paula & Nelson
      </motion.h1>
    </section>
  );
}
