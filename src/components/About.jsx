import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-slate-900"
        >
          Our Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg text-slate-600"
        >
          Barakah Treats was born from a family recipe passed down through generations. We braid each koeksister by hand, fry them to a deep golden hue, and soak them in our signature spiced syrup. It’s sweetness that brings people together.
        </motion.p>
      </div>
    </section>
  );
}
