import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 overflow-hidden">
      {/* glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[110%] bg-gradient-to-b from-amber-300/40 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Handcrafted Koeksisters, Made with Barakah
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-lg text-slate-600"
          >
            Crispy on the outside, syrupy in the middle, and full of love. Freshly braided and fried to golden perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#order" className="inline-flex items-center justify-center rounded-xl bg-amber-500 text-white font-semibold px-5 py-3 shadow-sm hover:bg-amber-600 transition-colors">Order Now</a>
            <a href="#gallery" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">See Gallery</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-amber-500/20 blur-2xl rounded-3xl -z-10" />
          <img
            src="https://images.unsplash.com/photo-1672085518195-a1f7d0c9f7a1?q=80&w=1400&auto=format&fit=crop"
            alt="Fresh koeksisters glazed in syrup"
            className="rounded-3xl w-full object-cover aspect-[4/3] shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
