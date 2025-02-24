import React, { useEffect, useState, useRef } from "react";
import 'tailwindcss/tailwind.css';

export default function AboutUs() {
    const sectionRef = useRef(null);
    const pathRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [arrowPosition, setArrowPosition] = useState({ x: 50, y: 220, angle: 0 });

    useEffect(() => {
        const handleScroll = () => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            //Detectar si la sección es visible en la pantalla
            setIsVisible(
            rect.top <= window.innerHeight && rect.bottom >= 0
            );
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isVisible || !pathRef.current) return;
    
        const path = pathRef.current;
        const pathLength = path.getTotalLength();
    
        let start = 0;
        const animationDuration = 1422; //Duración total de la animación en milisegundos
        const intervalTime = 30; //Frecuencia de actualización (60 FPS)
        const step = pathLength / (animationDuration / intervalTime);
    
        const interval = setInterval(() => {
            if (start > pathLength) {
                clearInterval(interval);
    
                //Asegurar que la flecha se mantenga en la posición y orientación final
                const finalPoint = path.getPointAtLength(pathLength);
                const penultimatePoint = path.getPointAtLength(pathLength - 1); //Penúltimo punto
                const finalAngle = Math.atan2(
                    finalPoint.y - penultimatePoint.y,
                    finalPoint.x - penultimatePoint.x
                ) * (180 / Math.PI);
    
                setArrowPosition({
                    x: finalPoint.x,
                    y: finalPoint.y,
                    angle: finalAngle,
                });
    
                return;
            }
    
            //Obtener el punto actual y el siguiente punto
            const point = path.getPointAtLength(start);
            const nextPoint = start + 1 <= pathLength
                ? path.getPointAtLength(start + 1)
                : path.getPointAtLength(start - 1); //Usa el penúltimo punto si es el final
    
            //Calcular el ángulo basado en los dos puntos
            const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
    
            //Centrar la flecha en el trayecto
            setArrowPosition({
                x: point.x, //Ajuste horizontal
                y: point.y, //Ajuste vertical
                angle,
            });
    
            start += step;
        }, intervalTime);
    
        return () => clearInterval(interval);
    }, [isVisible]);

    return (
        <section 
          id="about"
          ref={sectionRef}
          className="py-16 bg-gray-100 overflow-hidden"
        >
            {/* Título fuera del grid */}
            <h2 
              className={`text-4xl font-bold mb-12 text-center text-gray-800 transform transition-transform duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
                Quiénes Somos
            </h2>

            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
                {/* Texto */}
                <div 
                  className={`text-left transform transition-transform duration-1000 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                    {/* <h2 className="text-4xl font-bold mb-6 text-gray-800">
                        Quiénes Somos
                    </h2> */}
                    <p className="text-lg text-justify leading-relaxed text-gray-700">
                        En <span className="font-semibold text-primary">Kreatit</span>, somos más que una agencia de tecnología; 
                        somos socios estratégicos para empresas y startups que buscan <span className="text-secondary font-bold">transformar sus ideas en éxitos digitales</span>. 
                        Creamos soluciones a medida, impulsadas por innovación y excelencia técnica.
                    </p>
                    <p className="mt-4 text-lg text-justify leading-relaxed text-gray-700">
                        Nuestros servicios abarcan desde el desarrollo de <span className="font-bold text-accent">Aplicaciones Web</span> y 
                        <span className="font-bold text-primary"> Mobile</span> hasta <span className="font-bold text-secondary">Consultoría Tecnológica</span>, 
                        <span className="font-bold text-accent"> Soporte IT</span>, y la <span className="font-bold text-primary">Administración de Servidores</span>.
                        Trabajamos con tecnologías de vanguardia para garantizar que tu empresa esté a la altura de las demandas del mercado actual.
                    </p>
                    <p className="mt-4 text-lg text-justify leading-relaxed text-gray-700">
                        Nos especializamos en empoderar a startups y empresas para que puedan alcanzar el siguiente nivel. 
                        Desde <span className="font-semibold text-secondary">sistemas escalables</span> hasta 
                        <span className="font-semibold text-accent"> experiencias de usuario únicas</span>, estamos aquí para ayudarte a marcar la diferencia.
                    </p>
                </div>

                {/* SVG interactivo animado */}
                <div
                  className={`relative flex justify-center items-center transform transition-transform duration-1000 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 300 300"
                      className="w-80 h-80"
                    >
                        {/* Fondo de gradiente circular */}
                        <defs>
                            <radialGradient id="backgroundGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#38BDF8" stopOpacity="1" />
                                <stop offset="100%" stopColor="#1E3A8A" stopOpacity="1" />
                            </radialGradient>
                            <linearGradient id="coheteBodyGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#E1F6FF" />
                                <stop offset="100%" stopColor="#A1E2FF" />
                            </linearGradient>
                            <linearGradient id="propulsionGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#FF5722" />
                                <stop offset="50%" stopColor="#FFC107" />
                                <stop offset="100%" stopColor="#FFEB3B" />
                            </linearGradient>
                            <linearGradient id="barGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#1E40AF" />
                                <stop offset="100%" stopColor="#38BDF8" />
                            </linearGradient>
                            <clipPath id="clipSphere">
                                <circle cx="150" cy="150" r="140" />
                            </clipPath>
                        </defs>

                        <g clipPath="url(#clipSphere)">   

                            {/* Esfera de fondo */}
                            <circle cx="150" cy="150" r="140" fill="url(#backgroundGradient)" />

                            {/* Trayectoria del cohete */}
                            <path
                              ref={pathRef}
                              d="M50 220 C150 150, 150 150, 240 80"
                              fill="none"
                              stroke="#ffffff"
                              strokeWidth="2"
                              strokeDasharray="300"
                              strokeDashoffset={isVisible ? "0" : "300"}
                              style={{
                                transition: isVisible
                                  ? "stroke-dashoffset 2.5s ease-out" // Transición al volverse visible
                                  : "none", // No se anima si no es visible
                              }}
                              /* className="animate-drawPath" */
                            />

                            {/* Flecha dinámica */}
                            <g
                              transform={`translate(${arrowPosition.x}, ${arrowPosition.y}) rotate(${arrowPosition.angle})`}
                            >
                                <polygon
                                  points="0,-5 10,0 0,5"
                                  fill="#FFFFFF"
                                  stroke="#000"
                                  strokeWidth="0"
                                />
                            </g>

                            {/* Cohete */}
                            <g
                              transform={`translate(${isVisible ? "170" : "70"}, ${
                                isVisible ? "20" : "100"
                              }) scale(0.7) rotate(45)`}
                              style={{
                                transition: "transform 3s ease-out",
                              }}
                              /* transform="translate(98, 22)"
                              className="animate-fly" */
                            >
                                <path
                                  d="M75.1,92.9H52.9l-3-4.5C31.6,60.9,37.8,24,64,4l0,0l2.2,1.8c24.7,20.6,29.7,56.5,11.7,83.1L75.1,92.9z"
                                  fill="url(#coheteBodyGradient)"
                                />
                                <circle cx="64" cy="39.6" fill="#1894CB" r="6.7" />
                                <path
                                  d="M42.9,76.2L32.5,86.6c-3.5,3.5-3.5,9.1,0,12.6l2.6,2.6l17.8-8.9"
                                  fill="#38BDF8"
                                />
                                <path
                                  d="M75.1,92.9l17.8,8.9l2.6-2.6c3.5-3.5,3.5-9.1,0-12.6L84.6,75.7"
                                  fill="#38BDF8"
                                />
                                <path
                                  d="M59.1,101.8h9.8h0c5.6,2.6,7,10,2.7,14.5L64,124l-7.6-7.8C52.1,111.8,53.5,104.4,59.1,101.8L59.1,101.8z"
                                  fill="url(#propulsionGradient)"
                                />
                            </g>

                            {/* Gráfico de barras */}
                            <g>
                                <rect
                                  x="70"
                                  y="210"
                                  width="30"
                                  height={isVisible ? "100" : "0"}
                                  /* height="0" */
                                  fill="url(#barGradient)"
                                  style={{
                                    transition: "height 3s ease-out, transform 0.8s ease-out",
                                    transform: isVisible ? "translateY(20px)" : "translateY(100px)",
                                  }}
                                  /* className="animate-bar1" */
                                />
                                <rect
                                  x="110"
                                  y="210"
                                  width="30"
                                  height={isVisible ? "150" : "0"}
                                  /* height="0" */
                                  fill="url(#barGradient)"
                                  style={{
                                    transition: "height 3s ease-out, transform 1s ease-out",
                                    transform: isVisible ? "translateY(-10px)" : "translateY(150px)",
                                  }}
                                  /* className="animate-bar1" */
                                />
                                <rect
                                  x="150"
                                  y="210"
                                  width="30"
                                  height={isVisible ? "200" : "0"}
                                  /* height="0" */
                                  fill="url(#barGradient)"
                                  style={{
                                    transition: "height 3s ease-out, transform 1.2s ease-out",
                                    transform: isVisible ? "translateY(-40px)" : "translateY(200px)",
                                  }}
                                  /* className="animate-bar2" */
                                />
                                <rect
                                  x="190"
                                  y="210"
                                  width="30"
                                  height={isVisible ? "250" : "0"}
                                  /* height="0" */
                                  fill="url(#barGradient)"
                                  style={{
                                    transition: "height 3s ease-out, transform 1.4s ease-out",
                                    transform: isVisible ? "translateY(-70px)" : "translateY(250px)",
                                  }}
                                  /* className="animate-bar3" */
                                />
                                <rect
                                  x="230"
                                  y="210"
                                  width="30"
                                  height={isVisible ? "300" : "0"}
                                  /* height="0" */
                                  fill="url(#barGradient)"
                                  style={{
                                    transition: "height 3s ease-out, transform 1.6s ease-out",
                                    transform: isVisible ? "translateY(-90px)" : "translateY(300px)",
                                  }}
                                  /* className="animate-bar3" */
                                />
                            </g>

                            {/* Estrellas parpadeantes */}
                            <circle
                              cx="70"
                              cy="70"
                              r="5"
                              fill="#FFF"
                              opacity="0.8"
                              className="animate-twinkle"
                            />
                            <circle
                              cx="220"
                              cy="50"
                              r="4"
                              fill="#FFF"
                              opacity="0.6"
                              className="animate-twinkle"
                            />
                            <circle
                              cx="160"
                              cy="240"
                              r="3"
                              fill="#FFF"
                              opacity="0.7"
                              className="animate-twinkle"
                            />

                        </g>  
                    </svg>
                </div>
            </div>
        </section>
    );
}

                {/* <div className="relative flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                        className="w-80 h-80 animate-pulse"
                        style={{
                            filter: "drop-shadow(0px 0px 20px rgba(56, 189, 248, 0.8))",
                        }}
                    >
                         Fondo circular 
                        <circle cx="100" cy="100" r="90" fill="#1E3A8A" />
                        Circuitos 
                        <path
                            d="M100 10 v30 M100 190 v-30 M10 100 h30 M190 100 h-30"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            className="animate-fadeIn"
                        />
                         Icono central (Startup rocket) 
                        <path
                            d="M100 50 L120 90 H80 Z M95 90 H105 V140 H95 Z"
                            fill="#38BDF8"
                            className="animate-bounce"
                        />
                         Estrellas 
                        <circle cx="50" cy="50" r="5" fill="white" />
                        <circle cx="150" cy="150" r="3" fill="white" />
                        <circle cx="130" cy="70" r="2" fill="white" />
                        <circle cx="70" cy="130" r="2.5" fill="white" />
                    </svg>
                    <p className="absolute top-full mt-4 text-center text-gray-800 font-semibold">
                        Innovación y Tecnología
                    </p>
                </div> */}

/* import React from 'react';
import 'tailwindcss/tailwind.css';

export default function AboutUs() {
    return (
        <section id="about" className="py-16 bg-gray-100">
            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
                
                <div className="text-left">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">Quiénes Somos</h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        En <span className="font-semibold text-primary">Kreatit</span>, nos especializamos en transformar ideas en realidades digitales. Nuestro objetivo es 
                        <span className="text-secondary"> impulsar la presencia en línea</span> de empresas mediante soluciones tecnológicas innovadoras. Creamos sitios web funcionales, personalizados y visualmente atractivos para garantizar que tu marca se destaque.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-700">
                        Con un enfoque en <span className="font-semibold text-accent">tecnología de vanguardia</span> y un equipo apasionado, ayudamos a empresas de todos los tamaños a conectar con sus audiencias y alcanzar sus metas estratégicas.
                    </p>
                </div>

                
                <div className="relative flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                        className="w-72 h-72 animate-pulse"
                        style={{
                            filter: "drop-shadow(0px 0px 10px rgba(56, 189, 248, 0.8))",
                        }}
                    >
                        <circle cx="100" cy="100" r="80" fill="#38BDF8" />
                        <path
                            d="M100,40 L140,160 L60,160 Z"
                            fill="white"
                            className="animate-bounce"
                        />
                    </svg>
               
                    <p className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl text-white">
                        Innovación
                    </p>
                </div>
            </div>
        </section> */
        /* <div className="about-us py-16 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-4">Quiénes Somos</h2>
            <p className="text-lg">En Kreatit, nos dedicamos a impulsar la presencia en línea de empresas mediante la creación de sitios web atractivos, funcionales y personalizados.</p>
        </div> */