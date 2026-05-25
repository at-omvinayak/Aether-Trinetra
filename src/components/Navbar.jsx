import logo from "../assets/logo.png"
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#07110A]/80 backdrop-blur-md border-b border-green-900">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div className="flex items-center gap-4">

        <img
        src={logo}
        alt="Logo"
        className="w-12 h-12 object-contain"
        />

        <h1 className="text-2xl font-bold tracking-[6px] text-white">
        AETHER TRINETRA
        </h1>

      </div>

        <div className="hidden md:flex gap-10 text-sm uppercase tracking-[3px]">

          <a href="#about" className="hover:text-green-400 transition">
            About
          </a>

          <a href="#services" className="hover:text-green-400 transition">
            Services
          </a>

          <a href="#work" className="hover:text-green-400 transition">
            Work
          </a>

          <a href="#contact" className="hover:text-green-400 transition">
            Contact
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar