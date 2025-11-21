import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1599785209794-8eaa0ebc3dea?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546549039-49e2ad16b76d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604908553996-42c3104b2b9a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606313564200-7b61b9c7b28e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1200&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-white to-amber-50/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Real Koeksisters</h2>
          <p className="text-slate-600">A peek into our kitchen and the treats we make</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative group"
            >
              <img src={src} alt={`Koeksisters ${idx + 1}`} className="rounded-2xl aspect-[4/3] w-full object-cover shadow-md" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 group-hover:ring-amber-500/40 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
