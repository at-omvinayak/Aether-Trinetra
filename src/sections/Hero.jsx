import { motion } from "framer-motion"
import heroVideo from "../assets/hero.mp4"

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Green Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04150B]/30 to-black/40"></div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
      >

        <p className="uppercase tracking-[10px] text-green-400 mb-6 text-sm">

          Cinematic Motion • VFX • 3D Compositing

        </p>

        <h1 className="text-6xl md:text-8xl xl:text-[140px] font-black leading-none mb-8">

          AETHER <br /> TRINETRA

        </h1>

        <p className="max-w-3xl text-gray-300 text-lg md:text-xl leading-relaxed mb-10">

          Building cinematic visual experiences,
          futuristic motion systems and immersive
          storytelling for next-generation brands,
          productions and digital worlds.

        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <button className="bg-green-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">

            View Showreel

          </button>

          <button className="border border-green-400 text-green-300 px-8 py-4 rounded-full hover:bg-green-400 hover:text-black transition duration-300">

            Contact Us

          </button>

        </div>

      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  )
}

export default Hero