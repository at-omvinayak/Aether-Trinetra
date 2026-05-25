import { motion } from "framer-motion"

const services = [
  {
    title: "Motion Graphics",
    description:
      "High-end 2D and 3D motion graphics crafted for futuristic brands, cinematic visuals and immersive storytelling."
  },

  {
    title: "Motion Design",
    description:
      "Dynamic visual systems, animated interfaces and modern motion experiences designed for digital productions."
  },

  {
    title: "VFX & Compositing",
    description:
      "Cinematic visual effects, CGI integration and advanced compositing workflows for premium productions."
  },

  {
    title: "Video Editing",
    description:
      "Professional cinematic editing with storytelling-focused pacing, transitions, sound integration and visual rhythm."
  },

  {
    title: "3D Visualisation",
    description:
      "Futuristic CGI renders, environments and immersive 3D visuals designed for next-generation experiences."
  },

  {
    title: "Creative Direction",
    description:
      "Visual concept development, cinematic identity creation and futuristic storytelling strategies for modern brands."
  }
]

function Services() {
  return (
    <section
      id="services"
      className="relative py-40 px-8 bg-[#020402] overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-green-900/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >

          <p className="uppercase tracking-[8px] text-green-400 mb-6">

            Services

          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10">

            What We Build

          </h2>

          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">

            We craft cinematic digital experiences,
            futuristic visual systems and immersive
            storytelling solutions for modern productions
            and next-generation brands.

          </p>

        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-green-900/20 bg-[#050505] rounded-[30px] p-10 hover:border-green-400/40 transition duration-500"
            >

              <h3 className="text-3xl font-bold mb-6 group-hover:text-green-400 transition">

                {service.title}

              </h3>

              <p className="text-gray-400 leading-relaxed">

                {service.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Services