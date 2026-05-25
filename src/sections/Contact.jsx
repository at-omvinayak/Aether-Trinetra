import { motion } from "framer-motion"

function Contact() {
  return (
    <section
      id="contact"
      className="py-40 px-8 bg-black border-t border-green-900/20"
    >

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-20"
        >

          {/* Left */}
          <div>

            <p className="uppercase tracking-[8px] text-green-400 mb-6">

              Contact

            </p>

            <h2 className="text-5xl md:text-7xl font-black mb-10">

              Let’s Build <br /> Something Cinematic

            </h2>

            <p className="text-gray-400 text-xl leading-relaxed">

              Reach out for collaborations,
              cinematic productions, motion systems,
              VFX projects and futuristic visual experiences.

            </p>

          </div>

          {/* Right */}
          <div className="space-y-10">

            <div>

              <p className="text-green-400 uppercase tracking-[4px] mb-3">

                Mobile

              </p>

              <p className="text-2xl text-white">

                +91 9776427601

              </p>

            </div>

            <div>

              <p className="text-green-400 uppercase tracking-[4px] mb-3">

                Email

              </p>

              <p className="text-2xl text-white">

                omvinayak1aethertrinetra@gmail.com

              </p>

            </div>

            <div>

              <p className="text-green-400 uppercase tracking-[4px] mb-3">

                GREEN VALLEY, SECTOR 42,121003

              </p>

              <p className="text-2xl text-white leading-relaxed">

                Faridabad, Haryana, India

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact