import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import { illustrations } from "../constants";
import { createICS } from "../utils";

const DeviceCalendarIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
  </svg>
);

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
        className="absolute top-0 left-0 md:left-8 lg:left-16 w-24 md:w-36 lg:w-48 pointer-events-none select-none"
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
            <p>Iglesia de Santa María La Blanca</p>
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

          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-center items-center gap-4 pt-4"
          >
            <h3 className="mb-4">Guarda la fecha en tu calendario</h3>
            <div className="flex flex-col items-center space-y-3 w-60">
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+de+Mar%C3%ADa+Paula+y+Nelson&dates=20260911T153000Z/20260911T230000Z&location=Sevilla%2C+Espa%C3%B1a&details=Nos+casamos%21+Te+esperamos+en+la+Iglesia+de+Santa+Mar%C3%ADa+la+Blanca+a+las+17%3A30."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition font-medium w-full"
              >
                <DeviceCalendarIcon />
                Google
              </a>
              <button
                onClick={createICS}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border bg-white border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium w-full"
              >
                <DeviceCalendarIcon />
                Dispositivo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Details;
