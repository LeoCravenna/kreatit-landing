import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import "tailwindcss/tailwind.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const smoothScrollTo = (targetId, num) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const offset = num;
    const targetPosition = element.getBoundingClientRect().top + window.scrollY + offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(
        timeElapsed,
        startPosition,
        distance,
        duration
      );
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
    //setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e, id, num) => {
    e.preventDefault();
    setMenuOpen(false);
    smoothScrollTo(id,num);
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-dark shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo con animación */}
        <div className="flex items-center">
          {/* Imagen inicial */}
          <motion.img
            src="/images/logo/logo_abreviado_claro.png"
            alt="Logo"
            className="w-6 h-8 glow-effect"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
          />
          {/* Animación de las letras */}
          <div
            className="flex overflow-hidden"
            style={{
              width: "10rem", //Asegura espacio suficiente para todas las letras
            }}
          >
            {["R", "E", "A", "T", "I", "T"].map((letter, index) => (
              <motion.span
                key={index}
                className={`text-3xl font-bold ${
                  index >= 4 ? "text-accent italic" : "text-[#D7E9F4]"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.5, //Retraso progresivo para cada letra
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 5, //Pausa entre ciclos de animación
                }}
                style={{
                  marginLeft: "0.4rem",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* //Logo con animación
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex items-center text-white text-3xl font-heading font-bold"
        >
          //Imagen del logo
          <motion.img
            src="/images/logo/logo_abreviado_claro.png"
            alt="KreatIT Logo"
            className="w-6 h-8 mr-1 glow-effect"
            initial={{ x: -50, opacity: 0 }} // Inicia fuera de pantalla
            animate={{ x: 0, opacity: 1 }} // Se mueve hacia su posición final
            transition={{ duration: 0.8, ease: "easeOut" }} // Duración y suavidad
          />

          //Texto del logo
          <motion.span
            className="flex items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }} // Aparece después de un pequeño retraso
          >
            <span className="text-[#D7E9F4]">REAT</span>
            <motion.span
              className="text-accent italic"
              initial={{ opacity: 0, x: 50 }} // Empieza fuera de pantalla hacia la derecha
              animate={{ opacity: 1, x: 0 }} // Se desliza a la posición final
              transition={{ delay: 0.8, duration: 0.6 }} // Aparece después de "REAT"
            >
              IT
            </motion.span>
          </motion.span>
        </motion.div> */}
        
        {/* Logo */}
        {/* <button
          onClick={() => smoothScrollTo("top")}
          className="flex items-center text-white text-3xl font-heading font-bold"
          //className="text-white text-3xl font-heading font-bold"
          aria-label="Go to top"
        >
          <img
            src="/images/logo/logo_abreviado_claro.png" // Reemplaza con la ruta de tu imagen PNG
            alt="KreatIT Logo"
            className="w-6 h-8 mr-1 glow-effect" // Ajusta el tamaño según sea necesario
          />
          <span>
            <span className="colorText">REAT</span>
            <span className="text-accent italic">IT</span>
          </span>
        </button> */}

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, "about", 0)}
            className="text-white hover:text-accent transition-colors"
          >
            Quiénes Somos
          </a>
          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, "services", 0)}
            className="text-white hover:text-accent transition-colors"
          >
            Servicios
          </a>
          <a
            href="#projects"
            onClick={(e) => handleLinkClick(e, "projects", 0)}
            className="text-white hover:text-accent transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact", 1200)}
            className="text-white hover:text-accent transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* Menu Toggle (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-white focus:outline-none relative z-50"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <span className="text-xl">✕</span> // Close icon
            ) : (
              <span className="text-xl">☰</span> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-dark text-white p-6 flex flex-col space-y-4 text-center transform transition-transform duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a
          href="#about"
          onClick={(e) => handleLinkClick(e, "about", 0)}
          className="block hover:text-accent transition-colors"
        >
          Quiénes Somos
        </a>
        <a
          href="#services"
          onClick={(e) => handleLinkClick(e, "services", 0)}
          className="block hover:text-accent transition-colors"
        >
          Servicios
        </a>
        <a
          href="#projects"
          onClick={(e) => handleLinkClick(e, "projects", 0)}
          className="block hover:text-accent transition-colors"
        >
          Proyectos
        </a>
        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, "contact", 1200)}
          className="block hover:text-accent transition-colors"
        >
          Contacto
        </a>
      </div>
    </header>

    {/* Botón Scroll to Top */}
    <motion.button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 z-50 drop-shadow-[0_0_1px_rgba(255,255,255,1)]"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 50 }}
        transition={{ duration: 0.4 }}
        style={{ pointerEvents: showScrollTop ? "auto" : "none" }}
        >
        <ArrowUp size={24} />
    </motion.button>
  </>
  );
}