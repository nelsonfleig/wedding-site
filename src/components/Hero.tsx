import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex items-center justify-center text-center px-6">
      <div className="max-w-2xl">
        {/* Top floral decoration */}
        <motion.img
          src="https://picsum.photos/seed/flower1/600/200"
          alt="floral decoration"
          className="mx-auto mb-10 opacity-80"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="font-serif text-6xl md:text-7xl lg:text-8xl mt-6 text-gray-900 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          María Paula & Nelson
        </motion.h1>

        {/* Bottom floral decoration */}
        <motion.img
          src="https://picsum.photos/seed/flower2/600/200"
          alt="floral decoration"
          className="mx-auto mt-12 opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        />
      </div>
    </section>
  );
}
