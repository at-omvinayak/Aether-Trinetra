import { motion } from "framer-motion"

function Work() {
  return (
    <section
      id="work"
      className="relative py-40 px-8 bg-[#020402] overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-green-900/10 blur-[150px] rounded-full"></div>

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

            Work

          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10">

            Featured <br /> Experiences

          </h2>

          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">

            Cinematic visuals, futuristic motion systems
            and immersive storytelling crafted for
            modern brands and digital productions.

          </p>

        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden mb-16 group"
        >

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
            alt="Project"
            className="w-full h-[700px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute bottom-0 left-0 p-12">

            <p className="uppercase tracking-[5px] text-green-400 mb-4">

              Motion Design • CGI

            </p>

            <h3 className="text-5xl font-bold mb-6">

              Future Interface System

            </h3>

            <p className="text-gray-300 max-w-2xl text-lg">

              A cinematic exploration of futuristic
              interfaces, holographic visuals and
              immersive digital storytelling.

            </p>

          </div>

        </motion.div>

        {/* Smaller Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[30px]"
          >

            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute bottom-0 p-8">

              <p className="text-green-400 uppercase tracking-[4px] mb-3">

                VFX • Compositing

              </p>

              <h3 className="text-3xl font-bold">

                Digital Reality

              </h3>

            </div>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[30px]"
          >

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute bottom-0 p-8">

              <p className="text-green-400 uppercase tracking-[4px] mb-3">

                Motion Graphics

              </p>

              <h3 className="text-3xl font-bold">

                Cinematic Identity

              </h3>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Work