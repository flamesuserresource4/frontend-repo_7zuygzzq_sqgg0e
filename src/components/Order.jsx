import { useState } from "react";
import { motion } from "framer-motion";

export default function Order() {
  const [qty, setQty] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="order" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-slate-900 text-center"
        >
          Place an Order
        </motion.h2>

        <form onSubmit={submit} className="mt-10 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-6 grid gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700">Your Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} required className="mt-2 w-full rounded-xl border-slate-300 focus:ring-amber-500 focus:border-amber-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone Number</label>
              <input value={phone} onChange={(e)=>setPhone(e.target.value)} required className="mt-2 w-full rounded-xl border-slate-300 focus:ring-amber-500 focus:border-amber-500"/>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Quantity (dozens)</label>
            <input type="number" min={1} value={qty} onChange={(e)=>setQty(parseInt(e.target.value)||1)} className="mt-2 w-full rounded-xl border-slate-300 focus:ring-amber-500 focus:border-amber-500" />
          </div>

          <button type="submit" className="inline-flex justify-center items-center rounded-xl bg-amber-500 text-white font-semibold px-5 py-3 hover:bg-amber-600 transition-colors">
            Submit Request
          </button>

          {submitted && (
            <p className="text-amber-700 bg-amber-50 rounded-xl p-4">
              Thanks {name}! We'll WhatsApp you at {phone} to confirm your order of {qty} dozen koeksisters.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
