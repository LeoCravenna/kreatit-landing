import React, { useEffect, useRef, useState } from "react";
import 'tailwindcss/tailwind.css';

const techLogos = [
  { id: 1, image: "/images/technologies/logo-html5.png", name: "HTML5" },
  { id: 2, image: "/images/technologies/logo-css3.png", name: "CSS3" },
  { id: 3, image: "/images/technologies/logo-tailwind.png", name: "Tailwind CSS" },
  { id: 4, image: "/images/technologies/logo-javascript.png", name: "JavaScript" },
  { id: 5, image: "/images/technologies/logo-typescript.png", name: "TypeScript" },
  { id: 6, image: "/images/technologies/logo-react.png", name: "React JS" },
  { id: 7, image: "/images/technologies/logo-angular.png", name: "Angular" },
  { id: 8, image: "/images/technologies/logo-ionic.png", name: "Ionic" },
  { id: 9, image: "/images/technologies/logo-bootstrap.png", name: "Bootstrap" },
  { id: 10, image: "/images/technologies/logo-laravel.png", name: "Laravel" },
  { id: 11, image: "/images/technologies/logo-php.png", name: "Php" },
  { id: 12, image: "/images/technologies/logo-jquery.png", name: "JQuery" },
  { id: 13, image: "/images/technologies/logo-mysql.png", name: "MySQL" },
  { id: 14, image: "/images/technologies/logo-git.png", name: "Git" },
  { id: 15, image: "/images/technologies/logo-wordpress.png", name: "Wordpress" },
  { id: 16, image: "/images/technologies/logo-elementor.png", name: "Elementor" },
];

export default function Carousel() {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;
    let speed = 1; // Velocidad del auto-scroll

    const autoScroll = () => {
      if (!isDragging.current) {
        scrollContainer.scrollLeft += speed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="w-full relative overflow-hidden bg-gray-50 py-16"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Tecnologías usadas
      </h2>

      {/* Gradientes laterales */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

      {/* Contenedor del carrusel */}
      <div
        ref={scrollRef}
        className="carousel-container flex gap-8 whitespace-nowrap cursor-grab active:cursor-grabbing"
      >
        {[...techLogos, ...techLogos].map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 w-36 h-36 relative group"
          >
            <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-md flex items-center justify-center">
              <img
                src={logo.image}
                alt={logo.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-2 text-center">
              <p className="text-gray-800 font-medium">{logo.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*import React, { useCallback, useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

const techLogos = [
    { id: 1, image: '/images/logo-react.png', alt: 'Logo React' },
    { id: 2, image: '/images/logo-laravel.png', alt: 'Logo Laravel' },
    { id: 3, image: '/images/logo-tailwind.png', alt: 'Logo Tailwind' },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % techLogos.length);
        }
    }, [isTransitioning]);

    useEffect(() => {
        const timer = setInterval(nextSlide, 3000); // Cambia cada 3 segundos
        return () => clearInterval(timer);
    }, [nextSlide]);

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
    };

    return (
        <div className="carousel py-16 bg-gray-50 overflow-hidden relative">
            <h2 className="text-3xl font-bold text-center mb-8">Tecnologías que usamos</h2>
            
             Contenedor de las imágenes con transición 
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {techLogos.map((logo) => (
                    <div key={logo.id} className="w-full flex-shrink-0 flex items-center justify-center">
                        <img
                            src={logo.image}
                            alt={logo.alt}
                            className="h-44 w-44 object-contain"
                        />
                    </div>
                ))}
            </div>

            Indicadores de progreso 
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {techLogos.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                            index === currentIndex ? 'bg-primary' : 'bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}*/

/*import React from 'react';
import 'tailwindcss/tailwind.css';

const techLogos = [
    '/images/logo-react.png',
    '/images/logo-laravel.png',
    '/images/logo-tailwind.png',
];

export default function Carousel() {
    return (
        <div className="carousel py-16 bg-gray-50 overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8">Tecnologías que usamos</h2>
            <div className="flex items-center justify-center space-x-8 animate-scroll">
                {techLogos.map((logo, index) => (
                    <img key={index} src={logo} alt={`Logo ${index}`} className="h-44 w-44 object-contain " />
                ))}
            </div>
        </div>    
    );
}*/