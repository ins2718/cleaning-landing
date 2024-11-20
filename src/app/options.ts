const options = {
    cloudImages: false || process.env.NODE_ENV === "production",
    logoHeight: 52,

    title: "Limpiamos sofás, colchones, sillas, sillones y alfombras",
    description: "Limpieza de muebles profesional: sofás, colchones, sillas y alfombras. Eliminamos ácaros, manchas, olores y suciedad. Productos seguros, bajo olor. ¡Presupuesto gratuito y desplazamiento del especialista sin costo!",

    facebookPixelId: "347504069641224",
    yandexMetricaIds: [96729923],

    phone: "+34603450377",
    email: "nadim200763@gmail.com",
    whatsAppPlaceholder: "Hola, estoy interesado en la limpieza de muebles.",
    whatsAppText: "Pedir cotización por WhatsApp",
    workingHoursText: "Horario de trabajo",
    workingHours: "Lun-Dom: 10.00 - 22.00",

    buttonWhatsAppCircle: { // круглая кнопка whatsApp
        mobileTop: "100px", // отступ сверху на мобильных
        desktopBottom: "2.5rem", // отступ снизу на десктопах
        right: "2.5rem", // отступ справа
    },

    menuItems: [
        { title: "Inicio", href: "#first-section" },
        { title: "Calcula el precio", href: "#choose-furniture" },
        { title: "Servicios", href: "#what-we-clean-section" },
        { title: "Sobre nosotros", href: "#why-us-section" },
        { title: "Ejemplos de trabajos", href: "#our-works-section" },
        { title: "Preguntas frecuentes", href: "#faq-section" },
    ],

    firstSection: {
        title: "Reformas y construcción de calidad: 20 años de experiencia en proyectos de todas las escalas, desde la pintura de paredes hasta la construcción de casas completas y el diseño de interiores.",
        showTitlePicture: true,
        showLogoTitle: false,
        showGallery: true,
        topMargin: "150px",
        bottomMargin: "170px",
        leftSideText: `[b]
  Reformas integrales de apartamentos en Barcelona desde 580 €/m²[/b]
 Calidad garantizada con presupuesto transparente y garantía de hasta 5 años bajo contrato oficial.
  ¡Visita gratuita de un especialista y presupuesto sin compromiso!`,
        leftSideButtonMarginTop: "60px",
    },

    chooseFurnitureSection: {
        title: "Calcule el costo y los plazos preliminares de la reforma de su espacio con un 95% de precisión.",
        subtitle: "Responda algunas preguntas y obtenga un cálculo del costo de su reforma.",
        showImage: true,
        // @see "../components/main/choose-furnitute-section/right-side.tsx"
    },

    whyUsSection: {
        title: "¿Por qué somos la mejor opción para realizar su reforma? Al trabajar con nosotros, usted recibirá: ",
        root: "/images/why-us/",
        cards: [
            {
                title: "Control de calidad en cada etapa:",
                text: `Supervisión exhaustiva por especialistas independientes en cada fase del proyecto para garantizar el cumplimiento de los plazos y los estándares de calidad.`,
                image: "list.png",
            }, {
                title: "Gestión personalizada:",
                text: `
                Asignación de un gestor de proyecto dedicado, disponible para resolver cualquier consulta y coordinar las tareas.






`,
                image: "three-people.png",
            }, {
                title: "Presupuesto transparente:",
                text: `Elaboramos un presupuesto detallado tras una consulta inicial, garantizando precios fijos y fechas límite estrictas.`,
                image: "receive-euro.png",
            }, {
                title: "Esquema de pago flexible:",
                text: `
                Realiza pagos por etapas únicamente por los trabajos completados y aprobados.`,
                image: "web-analytics.png",
            }, {
                title: "Equipo profesional:",
                text: `
                Nuestro personal cuenta con al menos 5 años de experiencia y participa regularmente en capacitaciones y certificaciones obligatorias.






`,
                image: "professional.png",
            }, {
                title: "Garantías claras:",
                text: `Ofrecemos una garantía estándar de 2 años en nuestros trabajos, ampliable hasta 5 años según tus necesidades. Todo queda registrado en el contrato.`,
                image: "guarantee.png",
            }, {
                title: "Materiales de calidad:",
                text: `Accede a precios competitivos gracias a nuestra red de proveedores asociados. También nos encargamos de la logística de entrega y recepción de materiales.`,
                image: "good-quality.png",
            }, {
                title: "Limpieza postobra:",
                text: `Servicio adicional de limpieza y retiro de escombros para que puedas disfrutar de tu espacio renovado sin preocupaciones.`,
                image: "cleaning.png",
            },
        ],
    },

    whatWeCleanSection: {
        title: "¿Cómo seguir el progreso de la reforma?:",
        subtitle: "Enviamos informes regulares con fotos y videos sobre el progreso de la reforma. Antes de comenzar el proyecto, creamos un chat para intercambiar toda la información importante. En el chat, enviamos fotos y videos de los trabajos realizados, para que siempre esté al tanto de lo que ocurre en su propiedad. La comunicación en el chat es fácil y rápida. Si tiene alguna pregunta, simplemente escríbala en el chat, y le responderemos de inmediato. Antes de enviar el informe, el jefe de proyecto realiza una supervisión técnica adicional y controla nuevamente la calidad y los plazos de las obras. También puede visitar el sitio en cualquier momento para verificar el progreso de los trabajos.",
        root: "/images/what-we-clean/",
        cards: [
            {
                title: "Limpieza de sofás desde 60€ por sofá de dos plazas",
                image: "sofa.jpg"
            }, 
        ]
    },

    howToOrderEasySection: {
        title: "¿Cómo trabajamos?",
        subtitle: "",
        root: "/images/how-to-order-easy/",
        cards: [
            {
                title: "1. Medición:",
                text: `Un especialista visita su propiedad, discute con usted todos los aspectos del futuro proyecto de reforma y realiza la medición. Todo esto es completamente gratuito para usted.`,
                image: "tape-measure.png",
            }, {
                title: "2. Presupuesto:",
                text: `El especialista, junto con los departamentos técnico y de producción, elabora el presupuesto del proyecto de reforma en base a sus deseos y necesidades.`,
                image: "calculator.png",
            }, {
                title: "3. Contrato:",
                text: `	Todos los trabajos se realizan únicamente bajo un contrato, en el cual se especifican todas las condiciones, el costo de los trabajos y los plazos de ejecución.`,
                image: "checked.png",
            }, {
                title: "4. Compra y entrega de materiales:",
                text: `Puede proporcionar los materiales de construcción y acabados por su cuenta o puede contar con nuestra empresa para la compra, entrega y recepción de los mismos.`,
                image: "building-material.png",
            }, {
                title: "5.Trabajos de reparación y acabados:",
                text: `Comenzamos los trabajos de acuerdo con el contrato. Todos los trabajos se realizan por etapas.`,
                image: "worker.png",
            }, {
                title: "6. Recepción y pago de trabajos:",
                text: `	Después de completar cada etapa del trabajo, se proporciona un Acta de trabajos realizados. El pago se realiza solo después de la recepción y aprobación de cada etapa.`,
                image: "checked.png",
            },
        ],
    },

    ourWorksSection: {
        title: "Aquí tenemos ejemplos de nuestro trabajo",
        subtitle: "",
        compareImages: {
            root: '/images/our-works/compare/',
            images: [
                {
                    path: 'sofa_light/',
                    before: 'before.jpg',
                    after: 'after.jpg',
                }, {
                    path: 'mattress/',
                    before: 'before.jpg',
                    after: 'after.jpg',
                }, {
                    path: 'sofa_brown/',
                    before: 'before.jpg',
                    after: 'after.jpg',
                }, {
                    path: 'sofa_corner/',
                    before: 'before.jpg',
                    after: 'after.jpg',
                }, {
                    path: 'sofa_corner_black/',
                    before: 'before.jpg',
                    after: 'after.jpg',
                },
            ],
        },
    },

    videoSection: {
        title: "Un vídeo que dice más que mil palabras...",
        subtitle: "",
        videos: [
            {
                original: "9X9FFHy6hZg",
                thumbnail: "/images/video-thumbs/sofa-light.png",
            }, {
                original: "-eUt39qBxFw",
                thumbnail: "/images/video-thumbs/sofa-gray.png",
            }, {
                original: "a2np9IDDTHQ",
                thumbnail: "/images/video-thumbs/sofa-brown.png",
            },
        ],
        mute: true,
    },

    faqSection: {
        title: "Nos preguntan a menudo:",
        questions: [
            {
                question: "¿Por qué puedes confiar en nosotros?",
                answer: `Firmamos un contrato oficial.
            <ol style="list-style: inside decimal">
            <li>Si Todos los trabajos se pagan al finalizar y aceptar cada fase.</li>
            <li>Se Valoramos nuestra reputación. La mayoría de nuestros clientes han llegado a nosotros por recomendaciones de amigos, que son nuestros anteriores clientes.</li>
            <li>Se Con 20 años de experiencia y relaciones de largo plazo con los principales proveedores y fabricantes de materiales de construcción, acabados y elementos decorativos, además de contar con un equipo propio de empleados, podemos realizar reformas "llave en mano" de cualquier complejidad..</li>
            
            </ol>`,
                answerInHtml: true,
            }, {
                question: "¿Puede cambiar el costo de la reforma durante el proceso?",
                answer: `¡Sí, es posible, pero hay una explicación para ello:
El costo del contrato puede cambiar, tanto en aumento como en disminución.
Por ejemplo, si al principio, durante la medición y la elaboración del presupuesto, se especificó que el tamaño de las baldosas sería estándar (30x30 cm), pero luego se decidió cambiar por un porcelanato más grande de 120x60 cm, la instalación de baldosas de mayor tamaño requerirá más tiempo y recursos técnicos, lo que aumentará el costo.
También es posible que el costo disminuya si, al principio, se había decidido levantar una pared adicional, pero luego, tras reconsiderarlo, se decidió no construirla, lo que reducirá el costo final.
Si va a seleccionar o comprar los materiales de acabado por su cuenta, le recomendamos que consulte con nuestro especialista para evitar exceder el presupuesto acordado.`,
            }, {
                question: "¿Pueden cambiar los plazos?",
                answer: `Sí, los plazos, al igual que el precio, dependen de muchos factores: por ejemplo, del tiempo de secado del yeso o la masilla (desafortunadamente, en clima húmedo, en paredes sombreadas o en habitaciones con ventilación insuficiente, el secado puede llevar mucho más tiempo), del pago y la entrega de materiales (los materiales fabricados a medida pueden no llegar al sitio en el tiempo previsto, etc.).
Si por alguna razón los plazos deben cambiar, este cambio se reflejará en un acuerdo adicional que se adjuntará al contrato, previa consulta y firma con usted.
Nosotros NO ESTAMOS INTERESADOS EN retrasar los plazos, ya que usted paga por cada etapa solo cuando se ha completado. ¡Por lo tanto, cumplimos con los plazos y los fijamos en el contrato!`,
            }, {
                question: "¿Cuánto cuesta la visita de un especialista?",
                answer: `La visita del especialista es gratuita. La medición no lo compromete en absoluto. 
            
            Es una oportunidad para inspeccionar el apartamento, conocernos, recibir asesoramiento profesional sobre su proyecto y conocer el costo real de la reforma.

            
            Después de eso, podrá reflexionar y tomar decisiones basadas en cifras reales.`,
            }, {
                question: "¿Cuánto cuesta la reforma por metro cuadrado?",
                answer: `Una de las preguntas más frecuentes, y la respuesta es muy simple. Cada proyecto/reforma es único, por lo que el precio puede variar. Dar cifras 'al azar' no es correcto ni justo. Las cifras por metro cuadrado solo las mencionan los amateurs, generalmente solo para captar su atención e iniciar el proyecto, pero al final, no es así. Tomar medidas precisas del sitio y elaborar un presupuesto es el enfoque que consideramos correcto y honesto.`,
            }, {
                question: "¿Cómo se realiza el pago?",
                answer: `El pago se realiza por etapas, al finalizar y recibir cada fase del trabajo.`,
            }, {
                question: "¿Es el costo del presupuesto definitivo?",
                answer: `Los cambios solo son posibles si usted decide modificar el conjunto de trabajos o los materiales establecidos en el presupuesto.`,
            }, {
                question: "¿Se puede pedir un proyecto de diseño?",
                answer: `Sí. Además, el diseñador se desplazará hasta su propiedad para una consulta y le sugerirá/propondrá la mejor solución según el tipo de distribución de su vivienda.`,
            }, {
                question: "¿Quién debe comprar los materiales?",
                answer: `Podemos encargarnos de la compra de los materiales o trabajar con los materiales que usted proporcione.`,
            }, {
                question: "¿Se retira la basura después de la reforma?",
                answer: `Sí. Al finalizar la reforma, por encargo del cliente, realizamos la limpieza en seco y/o húmeda y retiramos la basura. Además, llevamos a cabo limpiezas regulares durante el proceso de reforma.`,
            }, {
                question: "¿Cómo se puede supervisar el progreso de la reforma?",
                answer: `Se puede controlar el progreso de los trabajos tanto en persona como de forma remota. Regularmente enviamos informes fotográficos y videos a través de WhatsApp.`,
            }, 
        ],
    },

    testimonialsSection: {
        title: "Comentarios de nuestros clientes",
        subTitle: "Durante 15 años de trabajo exitoso, hemos logrado ganar credibilidad entre los clientes. La mayoría de nuestros clientes, tras el primer contacto con la empresa, colaboran con nosotros de forma continua.",
        imagesPath: '/images/testimonials/',
        testimonials: [
            {
                name: "Adriana González",
                text: "18/11 2024 Gracias por el excelente y buen coordinado trabajo. Fue muy cómodo comunicarse con el operador: me explicó todo de manera clara y sencilla, sin apresurarse con la tecnología y, al mismo tiempo, sin retrasar el proceso. El precio fue muy razonable en mi opinión. El de otras empresas es mucho más alto. Gracias por la calidad y por ser como sois. Definitivamente os recomendaré a mis amigos y familiares.",
                image: "adriana-gonzalez.png"
            },
            {
                name: "Alba Lago",
                text: "Gracias, estamos muy contentos con el resultado. ¡Ahora todos las sillas y el sofá se ven preciosos! Están limpios y da placer sentarse en ellos.",
                image: "alba-lago.png"
            },
            {
                name: "Ana Navarro Ramos",
                text: "¡El resultado superó todas las expectativas! Los chicos llegaron puntualmente. ¡Todo fue rápido, de buena fe y excelente! Lo recomiendo. No se apresure a tirar los sofás viejos, ¡confíelos a los profesionales! :)",
                image: "ana-navarro-ramos.jpg"
            },
            {
                name: "Christian Gálvez",
                text: "¡¡Estoy muy agradecida con los chicos por el trabajo!! ¡Todo fue rápido, claro y profesional! Gracias a Manuel, por responder, venir y transformar mi sofá favorito. ¡El resultado es una maravilla! La diferencia entre el antes y el después es muy obvia. ¡Éxitos y prosperidad para vuestra empresa!",
                image: "christian-galvez.png"
            },
            {
                name: "Diana Martínez",
                text: "Pedimos la limpieza del sofá, sinceramente, no creíamos mucho en el resultado ¡Pero superaron todas las expectativas! ¡Estamos muy satisfechos! Queríamos tirar el sofá, ¡pero quedó como nuevo! ¡Muchas gracias, sois unos auténticos profesionales!",
                image: "diana-martinez.jpg"
            },
            {
                name: "Paz Juárez Olmos",
                text: "¡Gracias por la gran limpieza del sofá! Estamos muy contentos con el resultado. ¡Les recomendaremos a nuestros amigos y familiares!",
                image: "paz-juarez-olmos.png"
            },
            {
                name: "Pilar Fernández-Palma",
                text: "Hoy me limpiaron un par de sillas grandes. Manuel lo hizo maravillosamente rápido, precisa y eficientemente. Prácticamente sin olor. Agradezco al equipo por el servicio profesional y por ser muy amable con nosotros. Y nuestros tres gatos, en mi opinión, ni siquiera sintieron nada.",
                image: "pilar-fernandez-palma.png"
            },
            {
                name: "esperanza Calviño",
                text: "¡Gracias por su rapidez, cortesía y trabajo de calidad! El sofá está como nuevo",
                image: "esperanza-calvino.jpg"
            },
            {
                name: "Judith Arnal Martínez",
                text: "Gracias al especialista Alex, llegó puntualmente, hizo el trabajo muy delicadamente y con calidad. ¡Ojalá hubiese más como ustedes!",
                image: "judith-arnal-martinez.jpg"
            },
            {
                name: "Cristina Yeste",
                text: `Buenas tardes. ¡Quiero agradecerles por el trabajo de calidad!
El sofá está casi como si fuera nuevo.😊
¡Y gracias al maestro por esperarme!`,
                image: "cristina-yeste.jpg"
            },
            {
                name: "Hermosa Aguirre",
                text: `Buenas tardes.
¡Muchas gracias a Miguel!
Estoy muy contenta con su trabajo.
El sofá, el sillón y las alfombras están tan limpias como si fueran nuevas`,
                image: "hermosa-aguirre.jpg"
            },
            {
                name: "Irene Junquera",
                text: `¡Muchas gracias al equipo de Limpiarmuebles.pro! ¡Las alfombras están divinamente limpias! ¡El maestro Alex es incomparable! ¡Definitivamente os contactaré de nuevo!`,
                image: "irene-junquera.png"
            },
        ],
    },

    orderFormDialog: {
        title: "Ordenar limpieza",
        sendedOrderTitle: "¡Gracias por realizar tu pedido!",
        subTitle: "No dudes en contactarnos. Rellena el formulario y nuestro especialista se pondrá en contacto contigo a través de WhatsApp en breve para responder a tus preguntas.¡Esperamos tu consulta!",
        sendedOrderSubTitle: "¡Hemos recibido tu pedido y nuestros operadores se pondrán en contacto contigo a la mayor brevedad posible a través del chat de WhatsApp! ¡Gracias por tu atención y que tengas un buen día!",
        phonePlaceholder: "Número de telf",
        namePlaceholder: "Nombre",
        zipPlaceholder: "Zip",
        buttonText: "Ordenar limpieza",
        sendedOrderButtonText: "Modificar datos",
        // @see "../components/overlay/order-form-dialog/agree-checkbox.tsx"
        // @see "../components/overlay/order-form-dialog/licence-dialog.tsx"
    },

    cookieDialog: {
        title: "Gestionar el consentimiento de las cookies",
        text: "Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies para almacenar y/o acceder a la información del dispositivo. El consentimiento de estas tecnologías nos permitirá procesar datos como el comportamiento de navegación o las identificaciones únicas en este sitio. No consentir o retirar el consentimiento, puede afectar negativamente a ciertas características y funciones.",
        urls: [
            {
                text: "Política de cookies",
            },
            {
                text: "Política de Privacidad",
            },
        ],
    },
};

export default options;