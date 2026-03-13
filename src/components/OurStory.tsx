import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger } from "../animations";
import bouquet from "../assets/illustrations/IMG_7090.png";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

const events: TimelineEvent[] = [
  {
    year: "2019",
    title: "We Met",
    description:
      "A chance encounter that changed everything. What started as a casual conversation quickly turned into hours of talking, laughing, and discovering how much we had in common.",
  },
  {
    year: "2020",
    title: "First Adventure",
    description:
      "Our first trip together took us somewhere unexpected. Navigating new places side by side, we realized we made the perfect travel partners.",
  },
  {
    year: "2023",
    title: "A New Chapter",
    description:
      "We moved in together and started building a home filled with love, good food, and long conversations that never seem to end.",
  },
  {
    year: "2025",
    title: "The Proposal",
    description:
      "On a quiet evening, surrounded by the warmth of our life together, the question was asked — and the answer was an easy yes.",
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
    <div className="relative overflow-hidden">
      {/* Bouquet decoration */}
      <img
        src={bouquet}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-8 right-4 md:right-12 w-16 md:w-24 lg:w-32 pointer-events-none select-none rounded-none"
      />

      <section className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <motion.h2
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          Our Story
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
              <div key={event.year} className="relative mb-32 last:mb-0">
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
