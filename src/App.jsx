function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 relative z-10">

        <h1 className="text-2xl font-bold tracking-[6px]">
          AETHER TRINETRA
        </h1>

        <div className="space-x-8 text-gray-300 hidden md:flex">
          <a href="#" className="hover:text-white transition">Work</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[85vh] px-6 relative z-10">

        <p className="uppercase tracking-[10px] text-gray-400 mb-6">
          Cinematic Motion & VFX Studio
        </p>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
          We Craft <br /> Visual Experiences
        </h1>

        <p className="text-gray-400 max-w-2xl text-lg mb-10 leading-relaxed">
          Motion Graphics, Motion Design,
          VFX and 3D compositing for futuristic
          brands, startups and cinematic storytelling.
        </p>

        <div className="flex gap-6 flex-wrap justify-center">

          <button className="bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition duration-300">
            View Showreel
          </button>

          <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
            Contact Us
          </button>

        </div>

      </section>
      

{/* Services Section */}
<section className="px-10 py-24 relative z-10">

  <div className="text-center mb-20">

    <p className="uppercase tracking-[8px] text-gray-500 mb-4">
      Services
    </p>

    <h2 className="text-5xl font-bold">
      What We Do
    </h2>

  </div>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Card 1 */}
    <div className="border border-gray-800 p-10 rounded-3xl bg-white/5 backdrop-blur-sm hover:scale-[1.02] transition duration-300">

      <h3 className="text-3xl font-bold mb-4">
        Motion Graphics
      </h3>

      <p className="text-gray-400 leading-relaxed">
        High-end 2D & 3D motion graphics
        designed for futuristic brands,
        advertisements and cinematic visuals.
      </p>

    </div>

    {/* Card 2 */}
    <div className="border border-gray-800 p-10 rounded-3xl bg-white/5 backdrop-blur-sm hover:scale-[1.02] transition duration-300">

      <h3 className="text-3xl font-bold mb-4">
        Motion Design
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Dynamic visual storytelling and
        modern motion systems crafted
        for immersive brand experiences.
      </p>

    </div>

    {/* Card 3 */}
    <div className="border border-gray-800 p-10 rounded-3xl bg-white/5 backdrop-blur-sm hover:scale-[1.02] transition duration-300">

      <h3 className="text-3xl font-bold mb-4">
        VFX
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Cinematic visual effects and advanced
        compositing workflows for premium
        digital productions and commercials.
      </p>

    </div>

    {/* Card 4 */}
    <div className="border border-gray-800 p-10 rounded-3xl bg-white/5 backdrop-blur-sm hover:scale-[1.02] transition duration-300">

      <h3 className="text-3xl font-bold mb-4">
        3D Compositing
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Integrating CGI and live visuals into
        seamless cinematic environments with
        precision and realism.
      </p>

    </div>

  </div>

</section>

{/* Showreel Section */}
<section className="px-10 py-24 relative z-10">

  <div className="text-center mb-20">

    <p className="uppercase tracking-[8px] text-gray-500 mb-4">
      Portfolio
    </p>

    <h2 className="text-5xl font-bold">
      Featured Work
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Project 1 */}
    <div className="group relative overflow-hidden rounded-3xl h-[400px] bg-gray-900 border border-gray-800">

      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
        alt="Project"
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">

        <h3 className="text-2xl font-bold mb-2">
          Cinematic Launch
        </h3>

        <p className="text-gray-300">
          Motion Graphics & Visual Storytelling
        </p>

      </div>

    </div>

    {/* Project 2 */}
    <div className="group relative overflow-hidden rounded-3xl h-[400px] bg-gray-900 border border-gray-800">

      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
        alt="Project"
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">

        <h3 className="text-2xl font-bold mb-2">
          Futuristic Interface
        </h3>

        <p className="text-gray-300">
          Motion Design & 3D Visuals
        </p>

      </div>

    </div>

    {/* Project 3 */}
    <div className="group relative overflow-hidden rounded-3xl h-[400px] bg-gray-900 border border-gray-800">

      <img
        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
        alt="Project"
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">

        <h3 className="text-2xl font-bold mb-2">
          VFX Compositing
        </h3>

        <p className="text-gray-300">
          Cinematic CGI Integration
        </p>

      </div>

    </div>

  </div>

</section>

{/* Contact Section */}
<section className="px-10 py-32 relative z-10">

  <div className="max-w-4xl mx-auto text-center">

    <p className="uppercase tracking-[8px] text-gray-500 mb-4">
      Contact
    </p>

    <h2 className="text-5xl md:text-6xl font-bold mb-8">
      Let’s Build Something Cinematic
    </h2>

    <p className="text-gray-400 text-lg leading-relaxed mb-12">
      We create premium motion design,
      VFX and cinematic visuals for
      futuristic startups and brands.
    </p>

    <div className="flex flex-wrap justify-center gap-6">

      <button className="bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition duration-300">
        Contact Us
      </button>

      <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
        View Projects
      </button>

    </div>

  </div>

</section>

{/* Footer */}
<footer className="border-t border-gray-800 px-10 py-8 flex flex-col md:flex-row justify-between items-center text-gray-500 relative z-10">

  <p>
    © 2026 Aether Trinetra. All rights reserved.
  </p>

  <div className="flex gap-6 mt-4 md:mt-0">
    <a href="#" className="hover:text-white transition">Instagram</a>
    <a href="#" className="hover:text-white transition">LinkedIn</a>
    <a href="#" className="hover:text-white transition">Behance</a>
  </div>

</footer>




    </div>
  )
}

export default App