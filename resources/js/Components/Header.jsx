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

  //Función botón Whatsapp
  const phoneNumber = "+541130437703";
  const handleWhatsappClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  /*const phoneNumber = "1130437703";
  const handleWhatsappClick = () => {
    const whatsappURL = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };*/

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

    {/* Botón WhatsApp (Se adapta a mobile) */}
    <motion.button className="fixed bottom-4 right-5 md:right-6 z-50"
         animate={{ scale: [1, 1.1, 1] }}  // Efecto de titileo (pulsación)
         transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
    >
      <button
        onClick={handleWhatsappClick}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-105 drop-shadow-[0_0_1px_rgba(255,255,255,1)] w-13 h-13 md:w-14 md:h-14"  // Ajusta tamaños en mobile y desktop
            aria-label="Contactar por WhatsApp"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-7 md:h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.47A11.84 11.84 0 0012 0a12 12 0 00-10.3 17.86L0 24l6.26-1.64A12 12 0 0012 24a11.84 11.84 0 008.48-3.48A12 12 0 0024 12a11.84 11.84 0 00-3.48-8.53zM12 22a10 10 0 01-5.36-1.5L3.6 21.6l1.1-3A9.95 9.95 0 012 12 10 10 0 1112 22zm4.71-7.94c-.26-.13-1.55-.76-1.79-.85s-.42-.13-.6.13-1 1.17-1.23 1.42-.45.2-.71.07a8.39 8.39 0 01-2.47-1.53 9.18 9.18 0 01-1.68-2.1c-.17-.3 0-.47.13-.6s.3-.34.45-.51.2-.26.3-.43.05-.32-.02-.45-.6-1.43-.83-1.95a.5.5 0 00-.43-.27c-.11 0-.23 0-.35.06a1.35 1.35 0 00-.59.46 2.56 2.56 0 00-.62 1.24 4.44 4.44 0 00.93 2.25A19.1 19.1 0 009.3 14.8a21.36 21.36 0 004.36 2.33 3.73 3.73 0 001.74.47 3.2 3.2 0 001.07-.23 2.53 2.53 0 001.3-1.1 2.1 2.1 0 00.15-1.17c-.06-.09-.24-.15-.5-.28z" />
        </svg>
      </button>
    </motion.button>    

    {/* Botón Whatsapp */}    
    {/* <div className="fixed bottom-4 right-5 z-50">
      <button
        onClick={handleWhatsappClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.47A11.84 11.84 0 0012 0a12 12 0 00-10.3 17.86L0 24l6.26-1.64A12 12 0 0012 24a11.84 11.84 0 008.48-3.48A12 12 0 0024 12a11.84 11.84 0 00-3.48-8.53zM12 22a10 10 0 01-5.36-1.5L3.6 21.6l1.1-3A9.95 9.95 0 012 12 10 10 0 1112 22zm4.71-7.94c-.26-.13-1.55-.76-1.79-.85s-.42-.13-.6.13-1 1.17-1.23 1.42-.45.2-.71.07a8.39 8.39 0 01-2.47-1.53 9.18 9.18 0 01-1.68-2.1c-.17-.3 0-.47.13-.6s.3-.34.45-.51.2-.26.3-.43.05-.32-.02-.45-.6-1.43-.83-1.95a.5.5 0 00-.43-.27c-.11 0-.23 0-.35.06a1.35 1.35 0 00-.59.46 2.56 2.56 0 00-.62 1.24 4.44 4.44 0 00.93 2.25A19.1 19.1 0 009.3 14.8a21.36 21.36 0 004.36 2.33 3.73 3.73 0 001.74.47 3.2 3.2 0 001.07-.23 2.53 2.53 0 001.3-1.1 2.1 2.1 0 00.15-1.17c-.06-.09-.24-.15-.5-.28z" />
        </svg>
      </button>
    </div>   */}  

    {/* Botón Scroll to Top (Se adapta a mobile) */}
    <motion.button
        className="fixed bottom-20 right-6 md:right-7 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-800 transition duration-300 z-50 drop-shadow-[0_0_1px_rgba(255,255,255,1)] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 50 }}
        transition={{ duration: 0.4 }}
        style={{ pointerEvents: showScrollTop ? "auto" : "none" }}
    >
        <ArrowUp size={24} className="md:w-7 md:h-7" />
    </motion.button>

    {/* Botón Scroll to Top */}
    {/* <motion.button
      className="fixed bottom-20 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 z-50 drop-shadow-[0_0_1px_rgba(255,255,255,1)]"
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 50 }}
      transition={{ duration: 0.4 }}
      style={{ pointerEvents: showScrollTop ? "auto" : "none" }}
    >
      <ArrowUp size={24} />
    </motion.button> */}
  </>
  );
}