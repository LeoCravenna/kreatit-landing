import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "tailwindcss/tailwind.css";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Controla si la animación ya se ejecutó
  
  /*Efecto palabras servicios 1*/
  //const [activeIndex, setActiveIndex] = useState(0);  // Controla el texto animado
  
  /*Efecto palabras servicios 2*/
  //const [displayedText, setDisplayedText] = useState(""); // Texto que se está escribiendo
  //const [textIndex, setTextIndex] = useState(0); // Índice del array de servicios
  //const [isDeleting, setIsDeleting] = useState(false); // Controla si se está borrando el texto
  
  /*Efecto palabras servicios 3*/
  const services = ["Sitios Web", "Apps", "Software a medida"];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Marca la animación como ejecutada cuando el usuario pasa de la portada
      if (window.scrollY > 50) {
        setHasAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*Efecto palabras servicios 1*/
  /* useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length); // Cambia al siguiente servicio
    }, 2500); // Cambia cada 2 segundos
    return () => clearInterval(interval);
  }, []); */

  /*Efecto palabras servicios 2*/
  /* useEffect(() => {
    const typeEffect = () => {
      const currentText = services[textIndex]; // Texto actual del array

      if (isDeleting) {
        // Borrado
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
      } else {
        // Escritura
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentText) {
        // Pausa después de escribir
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        // Pasar al siguiente texto después de borrar
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % services.length); // Loop infinito
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 50 : 100); // Velocidad de escritura y borrado
    return () => clearTimeout(timer); // Limpieza del timer
  }, [displayedText, isDeleting, textIndex]); */

  /*Efecto palabras servicios 3*/
  

  const smoothScrollTo = (targetId, num) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const offset = num;
    const targetPosition = element.getBoundingClientRect().top + window.scrollY + offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // Duración en ms
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
  };

  const handleLinkClick = (e, id, num) => {
    e.preventDefault();
    smoothScrollTo(id, num);
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        bubble: {
          distance: 200,
          size: 6,
          duration: 2,
          opacity: 0.8,
        },
      },
    },
  };

  return (
    <section className="hero-section h-screen bg-gradient-to-br from-dark to-primary text-white flex items-center justify-center relative overflow-hidden">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Texto principal con animación y efecto parallax */}
      <div
        className={`text-center z-30 p-4 rounded-lg 
          bg-dark/10 backdrop-blur-sm 
          md:bg-transparent md:backdrop-blur-none 
          lg:bg-transparent lg:backdrop-blur-none 
          ${!hasAnimated && scrollY === 0 ? "animate-riseUp" : ""}`} // Solo aplica animación si no ha ocurrido antes
        style={{
          transform: `translateY(${scrollY > 200 ? (scrollY - 200) * 0.2 : 0}px)`,
          transition: "transform 0.1s ease-out",
          textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1 className="text-5xl font-heading font-bold mb-4 hover:scale-105 hover:text-accent transition-transform duration-300">
          Impulsa tu presencia en línea
        </h1>
        
        {/*Efecto palabras servicios 1*/}
        {/* <p className="text-xl mb-8">
          <span>Desarrollamos experiencias digitales únicas:</span>{" "}
          <span className="text-accent font-bold transition-opacity duration-700">
            {services[activeIndex]}
          </span>
        </p> */}
        
        {/*Efecto palabras servicios 2*/}
        {/* <p className="text-xl mb-8">
          <span>Desarrollamos experiencias digitales únicas: </span>
          <span className="text-accent font-bold">{displayedText}</span>
        </p> */}

        {/*Efecto palabras servicios 3*/}  
        <div className="text-xl mb-8 flex flex-col items-center justify-center text-center sm:flex-row sm:items-center">
          <span className="mr-2">Desarrollamos experiencias digitales únicas:</span>
          <div className="relative h-[2.5rem] w-[13rem] overflow-hidden">
            {/* Animación infinita */}
            <div
              className="absolute flex flex-col animate-carousel"
              style={{
                animationDuration: `${services.length * 3}s`, // Duración basada en la cantidad de palabras
              }}
            >
              {services.concat(services).map((word, index) => (
                <div
                  key={index}
                  className="text-accent font-bold text-2xl h-[2.5rem] flex items-center justify-center sm:justify-start break-words sm:whitespace-nowrap whitespace-normal"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* <p className="text-xl mb-8 hover:scale-105 hover:text-accent transition-transform duration-300">
          Desarrollamos experiencias digitales únicas: desde sitios web y aplicaciones hasta soporte IT y soluciones a medida para tu negocio
        </p> */}
        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, "contact", 1200)}
          className="relative inline-block px-6 py-3 font-bold text-lg text-blue-900 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full shadow-lg hover:from-blue-400 hover:to-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 rounded-full blur-lg transition-opacity duration-500 group-hover:opacity-100 animate-ping"
            aria-hidden="true"
          ></span>
          Contáctanos
        </a>
      </div>

      {/* Cohete grande en el fondo con efecto de despegue */}
      <div
        className="absolute bottom-[-40%] md:bottom-[-20%] left-0 w-full flex justify-start overflow-hidden z-20"
        style={{
          transform: `translateY(${scrollY * -0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src="/images/cohete-azul.png"
          alt="Cohete grande"
          className="w-96 h-auto"
        />
      </div>

      {/* Círculos distribuidos equitativamente (fijos en la pantalla) */}
      <div className="absolute inset-0 z-0">
        <div className="w-16 h-16 bg-accent rounded-full absolute top-10 left-10 animate-moveTwinkle"></div>
        <div className="w-24 h-24 bg-secondary rounded-full absolute top-10 right-10 animate-moveTwinkle"></div>
        <div className="w-20 h-20 bg-primary rounded-full absolute bottom-10 left-20 animate-moveTwinkle"></div>
        <div className="w-12 h-12 bg-white rounded-full absolute bottom-20 right-32 animate-moveTwinkle"></div>
        <div className="w-14 h-14 bg-accent rounded-full absolute top-1/4 left-1/4 animate-moveTwinkle"></div>
        <div className="w-10 h-10 bg-secondary rounded-full absolute top-1/3 right-1/4 animate-moveTwinkle"></div>
        <div className="w-18 h-18 bg-primary rounded-full absolute bottom-1/4 left-1/3 animate-moveTwinkle"></div>
        <div className="w-8 h-8 bg-white rounded-full absolute bottom-1/3 right-1/5 animate-moveTwinkle"></div>
        <div className="w-6 h-6 bg-accent rounded-full absolute top-16 left-1/6 animate-moveTwinkle"></div>
        <div className="w-10 h-10 bg-secondary rounded-full absolute bottom-10 right-10 animate-moveTwinkle"></div>
      </div>

      {/* Luz pulsante de fondo */}
      <div className="absolute inset-0 w-full h-full animate-pulse bg-gradient-to-t from-blue-600 via-blue-400 to-transparent opacity-50 blur-lg z-0"></div>
    </section>


        /* <section className="hero-section h-screen bg-gradient-to-br from-dark to-primary text-white flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10 animate-riseUp">
                <h1 className="text-5xl font-heading font-bold mb-4">Impulsa tu presencia en línea</h1>
                <p className="text-xl mb-8">Creamos sitios web y sistemas funcionales y atractivos.</p>
                <a href="#contact" className="bg-accent hover:bg-secondary text-white font-bold py-2 px-4 rounded transition-colors">Contáctanos</a>
            </div>
            <div className="absolute inset-0 z-0">
                
                <div className="floating-element w-16 h-16 bg-accent rounded-full absolute top-10 left-20 animate-floating"></div>
                <div className="floating-element w-24 h-24 bg-secondary rounded-full absolute top-40 right-32 animate-floating"></div>
                <div className="floating-element w-10 h-10 bg-primary rounded-full absolute bottom-5 left-16 animate-floating"></div>

               
                <div className="w-4 h-4 bg-white rounded-full absolute top-16 left-10 animate-zoomInOut"></div>
                <div className="w-3 h-3 bg-white rounded-full absolute bottom-20 right-40 animate-zoomInOut"></div>
                <div className="w-2 h-2 bg-white rounded-full absolute top-5 right-5 animate-fadeIn"></div>
                <div className="w-3 h-3 bg-white rounded-full absolute bottom-10 left-32 animate-fadeIn"></div>

         
                <div className="floating-element w-12 h-12 bg-accent clip-triangle absolute top-32 left-5 animate-rotate360"></div>
                <div className="floating-element w-8 h-8 bg-secondary clip-triangle absolute bottom-10 right-10 animate-rotate360"></div>

               
                <div className="floating-element w-6 h-6 bg-primary absolute top-20 right-20 animate-zoomInOut"></div>
                <div className="floating-element w-8 h-8 bg-accent absolute bottom-32 left-20 animate-floating"></div>
            </div>
        </section> */

  

        /* <section className="hero-section h-screen bg-gradient-to-br from-dark to-primary text-white flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10 animate-fadeIn">
                <h1 className="text-5xl font-heading font-bold mb-4">Impulsa tu presencia en línea</h1>
                <p className="text-xl mb-8">Creamos sitios web y sistemas funcionales y atractivos.</p>
                <a href="#contact" className="bg-accent hover:bg-secondary text-white font-bold py-2 px-4 rounded transition-colors">Contáctanos</a>
            </div>
            <div className="absolute inset-0 z-0">
                <div className="floating-element w-16 h-16 bg-accent rounded-full absolute top-40 left-20 animate-floating"></div>
                <div className="floating-element w-24 h-24 bg-secondary rounded-full absolute top-60 right-32 animate-floating"></div>
                <div className="floating-element w-20 h-20 bg-accent rounded-full absolute bottom-20 left-1/3 animate-floating"></div>
            </div>
        </section> */
        /* <section className="hero-section h-screen bg-primary text-white flex items-center justify-center relative">
            <div className="text-center z-10 animate-fadeIn">
                <h1 className="text-5xl font-heading font-bold mb-4">Impulsa tu presencia en línea</h1>
                <p className="text-xl mb-8">Creamos sitios web y sistemas funcionales y atractivos.</p>
                <a href="#contact" className="bg-accent hover:bg-secondary text-white font-bold py-2 px-4 rounded transition-colors">Contáctanos</a>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-dark to-transparent z-0"></div>
        </section> */
        /* <div className="hero h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Impulsa tu Presencia en Línea</h1>
                <p className="text-xl mb-8">Creamos sitios web atractivos y funcionales</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contáctanos</button>
            </div>
        </div> */
    );
}