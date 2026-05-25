import { motion } from "framer-motion"

import founder1 from "../assets/founder1.jpeg"
import founder2 from "../assets/founder2.jpg"

function About() {
  return (
    <section
      id="about"
      className="relative py-40 px-8 bg-black overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-900/20 blur-[120px] rounded-full"></div>

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

            About Us

          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10">

            We Create <br /> Visual Worlds

          </h2>

          <p className="text-gray-400 text-xl leading-relaxed max-w-4xl">

            Aether Trinetra is a futuristic multimedia
            production company focused on cinematic
            storytelling, motion graphics, VFX and
            immersive digital experiences.

          </p>

        </motion.div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Founder 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="group"
          >

            <div className="overflow-hidden rounded-3xl mb-6">

              <img
                src={founder1}
                alt="Founder"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

            <h3 className="text-3xl font-bold mb-2">

              Om Vinayak

            </h3>

            <p className="text-green-400 mb-4">

              Co-Founder

            </p>

            <p className="text-gray-500 leading-relaxed">

              Focused on futuristic storytelling,
              cinematic systems and immersive
              visual experiences.

            </p>

          </motion.div>

          {/* Founder 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >

            <div className="overflow-hidden rounded-3xl mb-6">

              <img
                src={founder2}
                alt="Founder"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

            <h3 className="text-3xl font-bold mb-2">

              Co-Founder Name

            </h3>

            <p className="text-green-400 mb-4">

              Co-Founder

            </p>

            <p className="text-gray-500 leading-relaxed">

              Passionate about motion design,
              VFX workflows and futuristic
              visual innovation.

            </p>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About