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

        <motion.p
          className="font-sans tracking-[0.3em] uppercase text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We are getting married
        </motion.p>

        <motion.h1
          className="font-serif text-6xl md:text-7xl lg:text-8xl mt-6 text-gray-900 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nelson & Maria
        </motion.h1>

        {/* Elegant divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-8 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-px w-16 bg-gray-400"></div>
          <span className="font-serif text-xl">❦</span>
          <div className="h-px w-16 bg-gray-400"></div>
        </motion.div>

        <motion.p
          className="mt-8 text-lg md:text-xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          September 12, 2026
        </motion.p>

        <motion.p
          className="text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Barcelona, Spain
        </motion.p>

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
