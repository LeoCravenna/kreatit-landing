import React, { useEffect, useState, useRef } from "react";
import "tailwindcss/tailwind.css";

const services = [
    {
      title: "Aplicaciones Web",
      description:
        "Transforma tu negocio con aplicaciones web modernas, rápidas y escalables, diseñadas para ofrecer experiencias de usuario excepcionales. Creamos soluciones personalizadas que se adaptan perfectamente a tus necesidades empresariales y objetivos estratégicos.",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          className="w-14 h-14 mx-auto mb-4 text-accent group-hover:text-white transition-colors duration-300"
          fill="none" 
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
            <path  
              d="M19.5,1H4.5C2.019,1,0,3.019,0,5.5V14.5c0,2.481,2.019,4.5,4.5,4.5h7v3H7c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h10c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-4.5v-3h7c2.481,0,4.5-2.019,4.5-4.5V5.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,13.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V5.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5V14.5Zm-4.732-6.266c.975,.975,.975,2.562,0,3.536l-3.083,3.083c-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l3.083-3.083c.585-.585,.585-1.537,0-2.122l-3.088-3.088c-.195-.195-.195-.512,0-.707s.512-.195,.707,0l3.088,3.088Zm-11.828,.707c-.585,.585-.585,1.537,0,2.122l3.083,3.083c.195,.195,.195,.512,0,.707-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146l-3.083-3.083c-.975-.975-.975-2.562,0-3.536l3.088-3.088c.195-.195,.512-.195,.707,0s.195,.512,0,.707l-3.088,3.088Z"
            />
        </svg>
      ),
    },
    {
      title: "Aplicaciones Mobile (iOS/Android)",
      description:
        "Lleva tu idea a las manos de tus usuarios con aplicaciones móviles nativas y multiplataforma que combinan diseño atractivo, rendimiento impecable y funcionalidades avanzadas. Ideal para captar nuevos mercados y fidelizar a tus clientes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14 h-14 mx-auto mb-4 text-accent group-hover:text-white transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path 
            d="M19.5,0h-6c-2.481,0-4.5,2.019-4.5,4.5v5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V4.5c0-1.93,1.57-3.5,3.5-3.5h6c1.93,0,3.5,1.57,3.5,3.5V15H14.614c.655-1.089,.453-2.523-.545-3.371-.996-.846-2.484-.832-3.467,.038l-4.438,4c-.205,.185-.222,.501-.036,.707,.184,.205,.5,.221,.706,.037l4.434-3.997c.607-.538,1.532-.547,2.153-.022,.689,.586,.773,1.625,.157,2.353l-3.776,5.443c-.525,.757-.803,1.644-.803,2.565v.748c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-.748c0-.672,.197-1.317,.557-1.88,.814,.71,1.849,1.128,2.943,1.128h6c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,17.5c0,1.93-1.57,3.5-3.5,3.5h-6c-.891,0-1.733-.356-2.379-.959l2.81-4.054c.023,.003,9.068,.014,9.068,.014v1.5Zm-8.5,1c0-.276,.224-.5,.5-.5h3c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5h-3c-.276,0-.5-.224-.5-.5ZM6.838,7.869l-2.757,2.527c-1.958,1.794-3.081,4.347-3.081,7.003v6.101c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-6.101c0-2.936,1.241-5.756,3.405-7.74l2.757-2.527c.203-.185,.519-.172,.706,.031,.187,.204,.173,.52-.03,.707Z"
          />
        </svg>
      ),
    },
    {
      title: "Desarrollo Software",
      description:
        "Creamos soluciones de software a medida que automatizan procesos, optimizan recursos y resuelven desafíos complejos. Nuestro enfoque garantiza productos innovadores, seguros y altamente eficientes para empresas de cualquier tamaño.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14 h-14 mx-auto mb-4 text-accent group-hover:text-white transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path 
            d="m19.5 0h-15c-2.481 0-4.5 2.019-4.5 4.5v8c0 .276.224.5.5.5s.5-.224.5-.5v-4.5h22v3.5c0 .276.224.5.5.5s.5-.224.5-.5v-7c0-2.481-2.019-4.5-4.5-4.5zm-18.5 7v-2.5c0-1.93 1.57-3.5 3.5-3.5h15c1.93 0 3.5 1.57 3.5 3.5v2.5zm4-3c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-5 12c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm0 3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm5.336-2.891c.102-.388.046-.792-.156-1.137-.202-.346-.526-.593-.914-.694-.39-.102-.793-.046-1.138.156l-.225.131c-.41-.344-.886-.612-1.403-.794v-.271c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v.271c-.518.182-.993.45-1.403.794l-.225-.131c-.345-.202-.748-.258-1.138-.156-.388.102-.712.349-.914.693-.202.346-.258.75-.156 1.138s.348.712.694.915l.233.137c-.062.296-.092.568-.092.839s.029.543.092.839l-.234.137c-.346.203-.592.527-.693.915-.102.388-.046.792.156 1.137.202.346.526.593.914.694.39.103.793.047 1.138-.156l.225-.131c.41.344.886.612 1.403.794v.271c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-.271c.518-.182.993-.45 1.403-.794l.225.131c.345.203.748.259 1.138.156.388-.102.712-.349.914-.693.202-.346.258-.75.156-1.138s-.348-.712-.694-.915l-.233-.137c.062-.296.092-.568.092-.839s-.029-.543-.092-.839l.234-.137c.346-.203.592-.527.693-.915zm-1.984.944c.102.358.148.658.148.946s-.047.588-.148.946c-.062.219.032.452.229.567l.556.325c.238.14.319.446.18.685-.131.235-.455.321-.685.179l-.542-.316c-.194-.114-.445-.082-.606.079-.432.435-.988.749-1.608.909-.221.058-.375.257-.375.484v.642c0 .275-.225.5-.5.5s-.5-.225-.5-.5v-.642c0-.228-.154-.427-.375-.484-.62-.16-1.177-.475-1.608-.909-.097-.097-.225-.147-.354-.147-.087 0-.174.022-.252.068l-.542.316c-.234.14-.552.057-.685-.18-.14-.237-.059-.544.179-.684l.557-.325c.197-.115.291-.349.229-.567-.102-.358-.148-.658-.148-.946s.047-.588.148-.946c.062-.219-.032-.452-.229-.567l-.556-.325c-.238-.14-.319-.446-.18-.685.131-.236.456-.318.685-.179l.542.316c.195.114.445.083.606-.079.432-.435.988-.749 1.608-.909.221-.058.375-.257.375-.484v-.642c0-.275.225-.5.5-.5s.5.225.5.5v.642c0 .228.154.427.375.484.62.16 1.177.475 1.608.909.161.162.412.193.606.079l.542-.316c.233-.141.553-.057.685.18.14.237.059.544-.179.684l-.557.325c-.197.115-.291.349-.229.567zm11.848.754 1.938-.969c.515-.258.84-.795.828-1.366-.009-.576-.354-1.103-.923-1.357l-8.784-3.023c-.634-.213-1.318-.053-1.782.415-.479.479-.629 1.157-.402 1.815 0 0 3.021 8.778 3.026 8.793.238.526.771.872 1.366.881.571 0 1.085-.317 1.342-.829l.983-1.968 2.311 2.302c.631.656 1.774.655 2.401 0 .658-.631.657-1.773-.002-2.401l-2.303-2.291zm1.597 3.986c-.26.259-.725.263-.988-.002l-2.801-2.79c-.112-.113-.271-.169-.434-.139-.158.025-.294.126-.366.27l-1.293 2.586c-.085.171-.257.277-.439.277-.195-.003-.371-.11-.454-.275l-3.001-8.725c-.101-.292-.041-.577.166-.783.195-.198.486-.265.751-.174l8.737 3.004c.175.079.289.254.292.447.004.19-.104.368-.275.454l-2.561 1.279c-.144.072-.244.209-.27.368-.026.158.026.32.141.434l2.796 2.782c.131.131.203.306.203.492s-.072.362-.204.494z"
          /> 
        </svg>
      ),
    },
    {
      title: "Consultoría",
      description:
        "Nuestro equipo de expertos en tecnología te ayudará a tomar decisiones informadas para impulsar el crecimiento de tu negocio. Identificamos oportunidades de mejora y trazamos estrategias digitales que te colocan a la vanguardia del mercado.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14 h-14 mx-auto mb-4 text-accent group-hover:text-white transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path 
            d="M6.96,14c2.21,0,4-1.79,4-4s-1.79-4-4-4-4,1.79-4,4,1.79,4,4,4Zm0-7c1.65,0,3,1.35,3,3s-1.35,3-3,3-3-1.35-3-3,1.35-3,3-3Zm7,16v.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-.5c0-3.31-2.69-6-6-6S.96,19.69,.96,23v.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-.5c0-3.86,3.14-7,7-7s7,3.14,7,7ZM24,4.5l-.04,9c0,2.48-2.02,4.5-4.5,4.5h-5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5c1.93,0,3.5-1.57,3.5-3.5l.04-9c0-1.93-1.57-3.5-3.5-3.5H9.46c-1.6,0-2.99,1.08-3.39,2.62-.07,.27-.34,.43-.61,.36-.27-.07-.43-.34-.36-.61,.51-1.99,2.3-3.38,4.36-3.38h10.04c2.48,0,4.5,2.02,4.5,4.5Zm-9.64,6.4l4.9-4.9h-3.79c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h4c.83,0,1.5,.67,1.5,1.5v4c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-3.79l-4.9,4.9c-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44l-.29-.29c-.2-.2-.2-.51,0-.71s.51-.2,.71,0l.29,.29c.2,.19,.51,.19,.71,0Z"
          />
        </svg>
      ),
    },
    {
      title: "Soporte IT",
      description:
        "Garantiza la continuidad de tu negocio con un soporte técnico proactivo y confiable. Nuestro equipo resuelve problemas rápidamente, realiza mantenimiento preventivo y asegura que tu infraestructura esté siempre operativa.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14 h-14 mx-auto mb-4 text-accent group-hover:text-white transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >  
          <path 
            d="m12,8c1.103,0,2-.897,2-2s-.897-2-2-2-2,.897-2,2,.897,2,2,2Zm0-3c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm8,14c1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5-2.5,1.121-2.5,2.5,1.121,2.5,2.5,2.5Zm0-4c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm-18.5,1.5c0,1.379,1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5-1.121-2.5-2.5-2.5-2.5,1.121-2.5,2.5Zm4,0c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5.673-1.5,1.5-1.5,1.5.673,1.5,1.5Zm18.456,6.924c.042.273-.184.534-.456.576-.242,0-.494-.177-.532-.424-.225-1.469-1.608-2.576-3.218-2.576s-2.993,1.107-3.218,2.576c-.037.244-.292.418-.532.424-.24,0-.493-.174-.533-.419-.241-1.472-1.731-2.581-3.467-2.581s-3.226,1.109-3.467,2.581c-.04.243-.3.417-.533.419-.242,0-.494-.177-.532-.424-.225-1.469-1.608-2.576-3.218-2.576s-2.993,1.107-3.218,2.576c-.042.273-.292.459-.57.418-.272-.042-.46-.297-.418-.57.299-1.952,2.107-3.424,4.206-3.424,1.613,0,3.048.874,3.764,2.163.759-1.289,2.278-2.163,3.986-2.163s3.227.874,3.986,2.163c.716-1.289,2.151-2.163,3.764-2.163,2.099,0,3.907,1.472,4.206,3.424Zm.044-13.924v3c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-3c0-1.379-1.121-2.5-2.5-2.5h-1c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h1c1.93,0,3.5,1.57,3.5,3.5Zm-17.331-1.597c-.101.389-.044.792.158,1.137.203.346.528.592.916.692.389.104.792.045,1.139-.159l.223-.131c.407.34.881.606,1.396.786v.271c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5v-.271c.515-.18.988-.446,1.396-.786l.223.131c.347.204.75.263,1.139.159.388-.101.713-.347.915-.691.203-.346.26-.749.159-1.138-.101-.388-.347-.713-.692-.917l-.232-.137c.063-.299.094-.575.094-.85s-.03-.551-.095-.851l.233-.137c.346-.203.592-.528.692-.916.101-.389.044-.792-.158-1.137-.203-.346-.528-.592-.916-.692-.389-.103-.792-.045-1.139.159l-.223.131c-.407-.34-.881-.606-1.396-.786v-.271c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5v.271c-.515.18-.988.446-1.396.786l-.223-.131c-.347-.204-.75-.262-1.139-.159-.388.101-.713.347-.915.691-.203.346-.26.749-.159,1.138.101.388.347.713.691.915l.234.138c-.064.3-.095.576-.095.851s.03.551.094.85l-.233.138c-.345.203-.591.528-.691.916Zm1.981-.948c-.103-.361-.15-.665-.15-.955s.048-.594.15-.955c.062-.219-.03-.452-.227-.567l-.557-.328c-.115-.067-.197-.176-.23-.305s-.015-.264.054-.379c.067-.115.175-.197.305-.23.13-.034.264-.015.379.053l.54.318c.197.116.448.085.607-.077.431-.432.984-.743,1.604-.903.221-.058.375-.257.375-.484v-.642c0-.275.225-.5.5-.5s.5.225.5.5v.642c0,.228.154.427.375.484.619.16,1.173.472,1.604.903.16.161.41.192.607.077l.54-.318c.114-.067.249-.086.379-.053s.237.115.306.231c.067.114.086.249.053.378s-.115.237-.231.306l-.556.327c-.196.115-.289.349-.227.567.103.361.15.665.15.955s-.048.594-.15.955c-.062.219.031.452.228.568l.555.325c.116.068.198.177.231.307.033.129.015.264-.054.379-.067.115-.175.197-.305.23-.132.033-.264.015-.379-.053l-.54-.318c-.196-.115-.446-.084-.607.077-.431.432-.984.743-1.604.903-.221.058-.375.257-.375.484v.642c0,.275-.225.5-.5.5s-.5-.225-.5-.5v-.642c0-.228-.154-.427-.375-.484-.619-.16-1.173-.472-1.604-.903-.096-.097-.225-.146-.354-.146-.087,0-.175.022-.254.069l-.54.318c-.113.067-.247.087-.379.053-.13-.033-.237-.115-.306-.231-.067-.114-.086-.249-.053-.378.033-.13.115-.238.23-.306l.556-.326c.196-.116.29-.35.228-.568ZM0,12.5v-3c0-1.93,1.57-3.5,3.5-3.5h1c.276,0,.5.224.5.5s-.224.5-.5.5h-1c-1.379,0-2.5,1.121-2.5,2.5v3c0,.276-.224.5-.5.5s-.5-.224-.5-.5Zm9.5,4c0,1.379,1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5-1.121-2.5-2.5-2.5-2.5,1.121-2.5,2.5Zm4,0c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5.673-1.5,1.5-1.5,1.5.673,1.5,1.5Z"
          />
        </svg>
      ),
    },
    {
      title: "Administración de Servidores",
      description:
        "Nos encargamos de la gestión y monitoreo de tus servidores para que puedas concentrarte en tu negocio. Implementamos configuraciones seguras, soluciones de alta disponibilidad y optimización de recursos.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14 h-14 mx-auto mb-4 text-accent group-hover:text-white transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path 
            d="m17 15c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm0 3c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1zm5.506.478-.646-.377c.094-.386.14-.748.14-1.101s-.046-.715-.14-1.101l.646-.377c.346-.202.593-.526.695-.914s.046-.792-.156-1.138c-.417-.714-1.337-.957-2.052-.539l-.64.374c-.537-.488-1.167-.851-1.853-1.068v-.738c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v.738c-.687.217-1.316.58-1.853 1.068l-.641-.374c-.716-.417-1.635-.175-2.051.539-.202.346-.257.75-.156 1.138.102.388.349.712.695.914l.646.377c-.094.386-.14.748-.14 1.101s.046.715.14 1.101l-.646.377c-.346.202-.593.526-.695.914s-.046.792.156 1.138c.416.715 1.336.957 2.052.539l.64-.374c.537.488 1.167.852 1.853 1.067v.738c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-.738c.686-.216 1.316-.579 1.853-1.067l.641.374c.715.418 1.635.175 2.051-.539.202-.346.257-.75.156-1.138-.102-.388-.349-.712-.695-.914zm-.324 1.548c-.14.237-.447.317-.684.18l-.971-.567c-.201-.117-.458-.08-.617.09-.55.586-1.249.989-2.021 1.165-.228.052-.389.254-.389.487v1.12c0 .275-.224.5-.5.5s-.5-.225-.5-.5v-1.12c0-.233-.162-.436-.389-.487-.772-.176-1.471-.579-2.021-1.165-.097-.104-.23-.158-.365-.158-.086 0-.174.022-.252.068l-.97.567c-.238.138-.545.059-.684-.18-.14-.23-.055-.554.18-.685l.979-.571c.202-.117.295-.358.225-.581-.138-.44-.202-.818-.202-1.188s.064-.748.202-1.188c.07-.223-.023-.464-.225-.581l-.979-.571c-.235-.131-.32-.455-.18-.685.138-.238.445-.318.684-.18l.971.567c.2.118.458.08.617-.09.549-.586 1.249-.988 2.021-1.165.228-.052.389-.254.389-.487v-1.12c0-.276.224-.5.5-.5s.5.224.5.5v1.12c0 .233.161.436.389.487.773.177 1.472.579 2.021 1.165.16.17.417.208.617.09l.97-.567c.237-.138.545-.06.684.18.14.23.055.554-.18.685l-.979.571c-.202.117-.295.358-.225.581.138.44.202.818.202 1.188s-.064.748-.202 1.188c-.07.223.023.464.225.581l.979.571c.235.131.32.455.18.685zm-11.745 2.853c-.63.081-1.282.122-1.937.122-4.065 0-7.5-1.603-7.5-3.5v-2.851c1.419 1.411 4.213 2.351 7.5 2.351.276 0 .5-.224.5-.5s-.224-.5-.5-.5c-4.065 0-7.5-1.603-7.5-3.5v-2.851c1.419 1.411 4.213 2.351 7.5 2.351.276 0 .5-.224.5-.5s-.224-.5-.5-.5c-4.065 0-7.5-1.603-7.5-3.5v-2.851c1.419 1.411 4.213 2.351 7.5 2.351s6.081-.94 7.5-2.351v.851c0 .276.224.5.5.5s.5-.224.5-.5v-3c0-2.524-3.733-4.501-8.5-4.501s-8.5 1.977-8.5 4.5v15c0 2.523 3.733 4.5 8.5 4.5.697 0 1.391-.044 2.063-.13.274-.035.468-.286.433-.56s-.284-.467-.56-.433zm-1.937-21.879c4.065 0 7.5 1.603 7.5 3.5s-3.435 3.5-7.5 3.5-7.5-1.603-7.5-3.5 3.435-3.5 7.5-3.5z"
          />  
        </svg>
      ),
    },
];

export default function Services() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section id="services"
             className="py-16 bg-gray-50"
             ref={sectionRef}
    >
      <h2 className="text-3xl font-bold text-center mb-12 font-heading text-gray-800">
        Nuestros Servicios
      </h2>
      <div className="grid md:grid-cols-3 gap-10 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative group p-6 bg-white rounded-3xl shadow-lg transform transition-transform transition-opacity duration-700 overflow-hidden ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{
                transitionDelay: `${index * 150}ms`,
            }}

            /* key={index}
            className={`relative group p-6 bg-white rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:rotate-1 hover:shadow-2xl ${
                isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }} */
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 rounded-3xl"></div>
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary opacity-10 group-hover:opacity-30 transition-opacity rounded-3xl"></div> */}
            {/* {service.icon} */}
            <div className="relative z-10">
              {React.cloneElement(service.icon, {
                className: `${service.icon.props.className} group-hover:text-white`,
              })}
                <h3 className="text-2xl font-semibold mb-4 text-blue-900 group-hover:text-white z-10 relative">{service.title}</h3>
                <p className="text-gray-700 group-hover:text-white z-10 relative">{service.description}</p>
            </div>    
          </div>
        ))}
      </div>
    </section>

/* import React from "react";
import "tailwindcss/tailwind.css";

// Íconos SVG personalizados
const serviceIcons = {
  "Sitios Web": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 mx-auto mb-4 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  ),
  Sistemas: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 mx-auto mb-4 text-secondary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10h11M9 21H3M21 3v10m-6 4l4 4m0 0l4-4m-4 4V14"
      />
    </svg>
  ),
  Consultoría: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 mx-auto mb-4 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 16l-4-4m0 0l4-4m-4 4h16"
      />
    </svg>
  ),
};

const services = [
  {
    title: "Sitios Web",
    description: "Desarrollamos sitios web modernos y responsivos.",
  },
  {
    title: "Sistemas",
    description: "Creamos sistemas a medida según las necesidades de tu empresa.",
  },
  {
    title: "Consultoría",
    description: "Brindamos asesoramiento profesional para mejorar tu presencia digital.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 font-heading">
        Nuestros Servicios
      </h2>
      <div className="grid md:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white text-center rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:rotate-2 hover:shadow-2xl"
          >
           
            {serviceIcons[service.title]}
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section> */

        /* <div className="services py-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {services.map((service, index) => (
                    <div key={index} className="service-item border p-4 rounded">
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div> */
    );
}