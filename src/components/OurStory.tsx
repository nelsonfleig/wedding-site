import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger } from "../animations";
import peru from "../assets/photos/IMG_1345.jpg";
import civil from "../assets/photos/IMG_5678.jpeg";
import pancho from "../assets/photos/IMG_6781.jpeg";
import sevilla from "../assets/photos/IMG_9486.jpeg";
import { illustrations } from "../constants";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

const events: TimelineEvent[] = [
  {
    year: "2020",
    title: "Nos conocimos",
    description:
      "Fue en el Año Nuevo de 2020 cuando Nelson, buscando algo rico para comer, cayó como paracaidista en la fiesta de María Paula. Poco tiempo después de empezar a salir, nos lanzamos juntos a una aventura por Perúy entre paisajes increíbles, comida deliciosa y muchas risas, empezó a crecer el amor.",
    image: peru,
  },
  {
    year: "2022",
    title: "Boda civil",
    description:
      "Cuando a Nelson le apareció una oportunidad laboral en Barcelona, no lo dudamos mucho: si tocaba cambiar de país, lo haríamos juntos. Y así, entre maletas y nuevos comienzos, decidimos dar otro paso importante y casarnos por lo civil.",
    image: civil,
  },
  {
    year: "2023",
    title: "Arribat a Barcelona",
    description:
      "Nuestra primera etapa en Barcelona empezó en el Raval, mientras María Paula se dedicaba con paciencia (y mucha determinación) a la misión de encontrar nuestro hogar. Después de muchas visitas y búsquedas, llegó el gran momento: ¡las llaves de nuestro apartamento! Y posteriormente llegó nuestro perro Pancho.",
    image: pancho,
  },
  {
    year: "2025",
    title: "Peparando la boda",
    description:
      "Pasaron los años y, ya establecidos en Barcelona, siempre tuvimos la ilusión de casarnos ante Dios y, sobre todo, en la ciudad más romántica de España: Sevilla. Tras recorrer media ciudad visitando iglesias y posibles lugares para celebrar, elegimos el lugar donde celebraremos este nuevo capítulo de nuestra historia.",
    image: sevilla,
  },
];

const OurStory = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  // Line only grows — track the highest scroll progress reached
  const lineScaleY = useMotionValue(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > lineScaleY.get()) {
      lineScaleY.set(latest);
    }
  });

  return (
    <div className="relative overflow-hidden pb-30">
      <img
        src={illustrations.cocktails}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-16 md:w-24 lg:w-32 pointer-events-none select-none rounded-none"
      />
      <section className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <motion.h2
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          Nuestra Historia
        </motion.h2>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Animated vertical line — grows as user scrolls */}
          <motion.div
            className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px bg-gray-200 origin-top"
            style={{ scaleY: lineScaleY }}
          />

          {events.map((event, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={event.year}
                className="relative mb-24 md:mb-32 last:mb-0"
              >
                {/* Dot — scales in when the line reaches it at viewport center */}
                <motion.div
                  className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-400 border-2 border-white z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />

                {/* Event content — fades up when node reaches ~center of viewport */}
                <motion.div
                  className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-12"
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
                >
                  {/* Text content */}
                  <motion.div
                    variants={fadeUp}
                    className={
                      isEven
                        ? "md:col-start-2 md:pl-12"
                        : "md:col-start-1 md:pr-12 md:text-right"
                    }
                  >
                    <span className="font-serif text-2xl text-gray-900">
                      {event.year}
                    </span>
                    <h3 className="text-3xl mt-1">{event.title}</h3>
                    <p className="mt-3">{event.description}</p>
                  </motion.div>

                  {/* Image placeholder */}
                  <motion.div
                    variants={fadeUp}
                    className={`mt-4 md:mt-0 ${
                      isEven
                        ? "md:col-start-1 md:row-start-1 md:pr-12"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    {event.image ? (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="aspect-[4/3] w-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="aspect-[4/3] bg-gray-200 rounded-lg" />
                    )}
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default OurStory;
