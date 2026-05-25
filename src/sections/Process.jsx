import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Concept & Vision",
    text: "We develop cinematic ideas, visual direction and storytelling systems tailored for futuristic productions and brands."
  },
  {
    number: "02",
    title: "Design & Motion",
    text: "From motion graphics to VFX pipelines, we craft immersive visuals with precision and cinematic detail."
  },
  {
    number: "03",
    title: "Production & Delivery",
    text: "Final renders, compositing and premium post-production workflows optimized for modern digital experiences."
  }
]

function Process() {
  return (
    <section className="py-40 px-8 bg-black">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >

          <p className="uppercase tracking-[8px] text-green-400 mb-6">
            Process
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            How We Build
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-green-900/30 bg-[#050505] rounded-[30px] p-10"
            >

              <p className="text-green-400 text-5xl font-black mb-8">
                {step.number}
              </p>

              <h3 className="text-3xl font-bold mb-6">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {step.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Process