import { motion } from "framer-motion"

function Careers() {
  return (
    <section className="py-40 px-8 bg-[#020402]">

      <div className="max-w-5xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[8px] text-green-400 mb-6">
            Careers & Learning
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-10">

            Growing The Future

          </h2>

          <p className="text-gray-400 text-xl leading-relaxed mb-12">

            Aether Trinetra is continuously exploring
            futuristic storytelling, AI-assisted workflows,
            cinematic motion systems and next-generation
            visual production technologies.

          </p>

          <button className="bg-green-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">

            Join Our Journey

          </button>

        </motion.div>

      </div>

    </section>
  )
}

export default Careers