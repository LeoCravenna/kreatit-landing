/*VERSIÓN GALERÍA INFINITA*/
import React, { useState, useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";

const projects = [
  {
    image: "/images/proyects/proyecto_whattheburger.png",
    title: "What The Burguer",
    description: "Sitio web realizado para reconocido local de hamburguesas",
    link: "https://whattheburger.ar",
  },
  {
    image: "/images/proyects/proyecto_planlilyvallejos.png",
    title: "Plan Lily Vallejos",
    description: "Sitio web fitness para realizar rutinas en el hogar o en el gym",
    link: "https://planlilyvallejos.com",
  },
  {
    image: "/images/proyects/proyecto_mundoperfumes.png",
    title: "Mundo Perfumes",
    description: "Plataforma de e-commerce moderna y escalable.",
    link: "https://mundoperfumes.com.ar",
  },
  {
    image: "/images/proyects/proyecto_stockunionferroviaria.png",
    title: "Sistema Stock",
    description: "Software a medida para controles de stock",
    link: "https://stock.unionferroviaria.org.ar",
  },
  {
    image: "/images/proyects/proyecto_osfe.png",
    title: "Osfe",
    description: "Obra Social Ferroviaria",
    link: "https://www.osfe.org.ar/",
  },
  {
    image: "/images/proyects/proyecto_unionferroviaria.png",
    title: "Unión Ferroviaria",
    description: "Sindicato Ferroviario",
    link: "https://unionferroviaria.org.ar/",
  },
];

export default function ProjectsGallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [visibleProjects, setVisibleProjects] = useState(6); // Número inicial de proyectos visibles

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Detectar si la sección es visible
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already expanded
    } else {
      setActiveIndex(index); // Expand selected card
    }
  };

  const handleLoadMore = () => {
    setVisibleProjects((prevCount) => prevCount + 6); // Mostrar 6 más
  };

  const handleShowLess = () => {
    setVisibleProjects(6); // Reducir a los 6 iniciales
  };

  return (
    <section id="projects" ref={sectionRef} className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Proyectos Realizados
      </h2>

      {/* Galería de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-3xl shadow-lg group transition-all duration-500 transform ${
              isVisible
                ? `opacity-100 translate-y-0 ${
                    activeIndex === index ? "h-[300px]" : "h-[300px] w-full"
                  }`
                : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => handleToggle(index)} // Mobile interaction
          >
            {/* Fondo dinámico */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-accent to-primary opacity-10 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500 rounded-lg"
              style={{
                zIndex: 1, // Asegura que el fondo esté debajo del contenido.
              }}
            ></div>

            {/* Imagen del proyecto */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ zIndex: 2 }} // La imagen está por encima del fondo.
              />
            </div>

            {/* Contenido expandible */}
            <div
              className={`absolute inset-0 p-6 flex flex-col justify-center items-center text-white transition-all duration-500 ${
                activeIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
              style={{
                zIndex: 3, // Asegura que el contenido esté encima de todo.
              }}
            >
              <h2
                className="text-3xl text-center font-bold mb-2 transition-all duration-300"
                style={{
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                {project.title}
              </h2>
              <p
                className="text-md text-center mb-4 transition-all duration-300"
                style={{
                  textShadow: "0 1px 3px rgba(0, 0, 0, 0.6)",
                }}
              >
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[150px] rounded-full text-center text-md font-bold text-blue-900 bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 shadow-md hover:text-white hover:from-blue-400 hover:to-blue-600 transition-all duration-300"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de carga */}
      <div className="flex justify-center items-center mt-8">
        {visibleProjects < projects.length && (
          <button
            onClick={handleLoadMore}
            className="bg-blue-500 text-white rounded-full px-6 py-2 shadow-lg mx-2 hover:bg-blue-600 transition-all"
          >
            Ver Más Proyectos
          </button>
        )}
        {visibleProjects > 6 && (
          <button
            onClick={handleShowLess}
            className="bg-red-500 text-white rounded-full px-6 py-2 shadow-lg mx-2 hover:bg-red-600 transition-all"
          >
            Ver Menos Proyectos
          </button>
        )}
      </div>
    </section>
  );
}

/*VERSIÓN GALERÍA DE PROYECTOS*/
/* import React, { useState, useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";

const projects = [
  {
    image: "/images/proyects/proyecto_whattheburger.png",
    title: "What The Burguer",
    description: "Gestión avanzada de datos para empresas innovadoras.",
    link: "https://whattheburger.ar",
  },
  {
    image: "/images/proyects/proyecto_planlilyvallejos.png",
    title: "Plan Lily Vallejos",
    description: "Optimización de procesos logísticos con herramientas avanzadas.",
    link: "https://planlilyvallejos.com",
  },
  {
    image: "/images/proyects/proyecto_mundoperfumes.png",
    title: "Mundo Perfumes",
    description: "Plataforma de e-commerce moderna y escalable.",
    link: "https://mundoperfumes.com.ar",
  },
  {
    image: "/images/proyects/proyecto_stockunionferroviaria.png",
    title: "Software Stock",
    description: "Automatización de tareas críticas con IA.",
    link: "https://stock.unionferroviaria.org.ar",
  },
  {
    image: "/images/proyects/proyecto_example1.png",
    title: "Proyecto Ejemplo 1",
    description: "Innovación en el desarrollo de software personalizado.",
    link: "https://example.com/project1",
  },
  {
    image: "/images/proyects/proyecto_example2.png",
    title: "Proyecto Ejemplo 2",
    description: "Soluciones tecnológicas de alto impacto.",
    link: "https://example.com/project2",
  },
  {
    image: "/images/proyects/proyecto_example3.png",
    title: "Proyecto Ejemplo 3",
    description: "Automatización de procesos empresariales.",
    link: "https://example.com/project3",
  },
];

export default function ProjectsGallery() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            // Detectar si la sección es visible
            setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleToggle = (index) => {
      if (activeIndex === index) {
        setActiveIndex(null); // Collapse if already expanded
      } else {
        setActiveIndex(index); // Expand selected card
      }
    };

    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
        setTransitioning(true); // Activar transición
        setTimeout(() => {
            setCurrentPage((prevPage) => prevPage + 1);
            setTransitioning(false); // Desactivar transición después de cambiar de página
        }, 500); // Duración de la animación
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
        setTransitioning(true); // Activar transición
        setTimeout(() => {
            setCurrentPage((prevPage) => prevPage - 1);
            setTransitioning(false); // Desactivar transición después de cambiar de página
        }, 500); // Duración de la animación
        }
    };

    const currentProjects = projects.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

  return (
    <section id="projects" ref={sectionRef} className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Proyectos Realizados
      </h2>

      Galería de proyectos con animación de transición
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 transition-opacity transform ${
          transitioning ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
        } duration-500`}
      >
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-3xl shadow-lg group transition-all duration-500 transform ${
              isVisible
                ? `opacity-100 translate-y-0 ${
                    activeIndex === index ? "h-[300px]" : "h-[300px] w-full"
                  }`
                : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => handleToggle(index)} // Mobile interaction
          >
            Fondo dinámico
            <div
              className="absolute inset-0 bg-gradient-to-tr from-accent to-primary opacity-10 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500 rounded-lg"
              style={{
                zIndex: 1, // Asegura que el fondo esté debajo del contenido.
              }}
            ></div>

            Imagen del proyecto
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ zIndex: 2 }} // La imagen está por encima del fondo.
              />
            </div>

            Contenido expandible
            <div
              className={`absolute inset-0 p-6 flex flex-col justify-center items-center text-white transition-all duration-500 ${
                activeIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
              style={{
                zIndex: 3, // Asegura que el contenido esté encima de todo.
              }}
            >
              <h2
                className="text-3xl text-center font-bold mb-2 transition-all duration-300"
                style={{
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                {project.title}
              </h2>
              <p
                className="text-md text-center mb-4 transition-all duration-300"
                style={{
                  textShadow: "0 1px 3px rgba(0, 0, 0, 0.6)",
                }}
              >
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[150px] rounded-full text-center text-md font-bold text-blue-900 bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 shadow-md hover:text-white hover:from-blue-400 hover:to-blue-600 transition-all duration-300"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>

      Controles de navegación
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8">
          {currentPage > 0 && (
            <button
              onClick={handlePrev}
              className="bg-blue-500 text-white rounded-full w-12 h-12 shadow-lg mx-2 hover:bg-blue-600 transition-all"
            >
              &#8249;
            </button>
          )}
          {currentPage < totalPages - 1 && (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white rounded-full w-12 h-12 shadow-lg mx-2 hover:bg-blue-600 transition-all"
            >
              &#8250;
            </button>
          )}
        </div>
      )}
    </section>
  );
} */


/* import React from 'react';
import 'tailwindcss/tailwind.css';

const projects = [
    { image: '/images/project1.jpg', title: 'Proyecto 1', description: 'Descripción del proyecto 1' },
    { image: '/images/project2.jpg', title: 'Proyecto 2', description: 'Descripción del proyecto 2' },
    { image: '/images/project2.jpg', title: 'Proyecto 3', description: 'Descripción del proyecto 3' },
    { image: '/images/project2.jpg', title: 'Proyecto 4', description: 'Descripción del proyecto 4' },
    { image: '/images/project2.jpg', title: 'Proyecto 5', description: 'Descripción del proyecto 5' },
    { image: '/images/project2.jpg', title: 'Proyecto 6', description: 'Descripción del proyecto 6' },
];

export default function ProjectsGallery() {
    return (
        <section id="projects" className="py-16 bg-gray-100">
            <h2 className="text-3xl font-bold mb-12 text-center">Proyectos Realizados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {projects.map((project, index) => (
                    <div key={index} className="project-item relative overflow-hidden rounded-lg shadow-lg">
                        <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                        <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100">
                            <div className="text-white text-center">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} */