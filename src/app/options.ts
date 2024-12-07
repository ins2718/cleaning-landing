const options = {
    cloudImages: false || process.env.NODE_ENV === "production",
    logoHeight: 52,

    title: "LReformas Integrales en Barcelona: Pisos, Casas y Locales | aurorareforma.es",
    description: "Servicios de reformas integrales en Barcelona para pisos, casas y locales. En aurorareforma.es garantizamos calidad, diseño personalizado y acabados impecables. Solicita tu presupuesto gratis y transforma tu espacio hoy mismo. ¡Visítanos ahora!",

    facebookPixelId: "476803044879423",
    yandexMetricaIds: [99118025],
    gtmId: "",

    phone: "+34600350787",
    email: "nadim200763@gmail.com",
    form_id: " UC_URV7WO",
    whatsAppPlaceholder: "Hola, estoy interesado en una reforma.",
    whatsAppText: "Pedir cotización por WhatsApp",
    workingHoursText: "Horario de trabajo",
    workingHours: "Lun-Dom: 10.00 - 22.00",

    buttonWhatsAppCircle: { // круглая кнопка whatsApp
        mobileTop: "70px", // отступ сверху на мобильных
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
        title: "Especialistas en reformas y arquitectos con 15 años de experiencia a tu servicio en Barcelona.",
        showTitlePicture: true,
        showLogoTitle: false,
        showGallery: true,
        topMargin: "150px",
        bottomMargin: "70px",
        leftSideText: `[b]
   ¿Planeas renovar tu hogar en Barcelona?
  Somos especialistas con gran experiencia en reformas integrales. [/b]
  Cada proyecto es único, y nuestros resultados hablan por sí solos. 
  Echa un vistazo a nuestras fotos antes y después.`,
        leftSideButtonMarginTop: "60px",
    },

    chooseFurnitureSection: {
        title: "Solicita una visita técnica gratuita para tu reforma.",
        subtitle: "Un especialista evaluará tu espacio y te dará un presupuesto detallado. ¡Consulta ahora!",
        showImage: false
        ,
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
        title: "Reformas: ¿Cuánto Cuesta?",
        subtitle: `
           Cada reforma es única, y los costos pueden variar considerablemente según el proyecto. 
         No ofrecemos estimaciones generales por metro cuadrado, ya que consideramos que este enfoque no refleja la realidad. 
         Nuestro compromiso es ofrecer presupuestos precisos basados en mediciones detalladas y necesidades específicas. 
         A continuación, presentamos precios orientativos de diferentes tipos de reformas para que tengas una idea aproximada del nivel de inversión necesario.`,
        root: "/images/what-we-clean/",
        cards: [
            {
                title: "Reforma integral de un piso (hasta 80 m²) — desde 6,000 €",
                image: "reforma.jpg"
            }, {
                title: "Reforma cosmética de un piso (hasta 50 m²) — desde 6,000 €",
                image: "mattress.jpg"
            }, {
                title: "Reforma de una habitación — desde 1,500€",
                image: "carpet.jpg"
            }, {
                title: "Pintura de paredes (por m²) — desde 15€",
                image: "sofa.jpg"
            },  {
                title: "Reforma de baño — desde 2,500€",
                image: "chair.jpg"
            },  {
                title: "Instalación de suelo (por m²) — desde 20€",
                image: "floor.jpg"
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
                    path: 'sofa_corner_lather/',
                    before: 'before.jpg',
                    after: 'after.jpg',
                },{
                    path: 'sofa_orange/',
                    before: 'before.jpg',
                    after: 'after.jpg',
                },{
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
                },{
                    path: 'white_bags/',
                    before: 'before.jpg',
                    after: 'after.jpg',
                },{
                    path: 'gla_ses/',
                    before: 'before.jpg',
                    after: 'after.jpg',
                },{
                    path: 'sh_ot/',
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
                original: "NDQD4okeVLI",
                thumbnail: "/images/video-thumbs/men.png",
            }, {
                original: "9MRw5qDMNvc",
                thumbnail: "/images/video-thumbs/hand.png",
            },{
                original: "nr7qJV-KP4A",
                thumbnail: "/images/video-thumbs/nathing.png",
            }, {
                original: "Di44riJeHX4",
                thumbnail: "/images/video-thumbs/gray.png",
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
                text: "20/11/2024  Contraté la empresa para renovar mi cocina, y quedé impresionado con los resultados. Todo fue rápido y sin complicaciones. Además, siempre estuvieron atentos a mis solicitudes. ¡Recomiendo al 100%!",
                image: "adriana-gonzalez.png"
            },
            {
                name: "Alba Lago",
                text: "15/09/2024  Profesionales de verdad. Necesitaba reformar mi baño antes de alquilar el piso. Los trabajadores fueron puntuales, ordenados y muy atentos a los detalles. Estoy feliz con el resultado final.",
                image: "alba-lago.png"
            },
            {
                name: "Ana Navarro Ramos",
                text: "10/06/2024  Después de comparar varias opciones, elegí esta empresa. Reformaron el salón y el dormitorio. Todo quedó tal como lo habíamos planeado. Además, respetaron el presupuesto inicial. ¡Gracias por su dedicación!",
                image: "ana-navarro-ramos.jpg"
            },
            {
                name: "Christian Gálvez",
                text: "25/03/2024  Me ayudaron a diseñar mi cocina desde cero y luego la reformaron con mucho cuidado. Ahora tengo el espacio funcional y bonito que siempre quise. ¡Gracias al equipo!",
                image: "christian-galvez.png"
            },
            {
                name: "Diana Martínez",
                text: "03/01/2024  Contraté una reforma completa para mi piso. Aunque parecía un proyecto grande, todo fue según lo planeado y con un acabado profesional. Estoy encantado.",
                image: "diana-martinez.jpg"
            },
            {
                name: "Paz Juárez Olmos",
                text: "15/10/2023  Quería darle un toque nuevo a mi salón, y ellos lograron captar exactamente mi idea. Pintaron y colocaron el suelo nuevo. ¡Recomendados sin duda!",
                image: "paz-juarez-olmos.png"
            },
            {
                name: "Pilar Fernández-Palma",
                text: "20/07/2023  No sabía cómo organizar la reforma de mi casa, pero el equipo me ayudó en cada paso. El diseño, el presupuesto y la ejecución fueron perfectos. ¡Muy agradecida!",
                image: "pilar-fernandez-palma.png"
            },
            {
                name: "esperanza Calviño",
                text: "02/05/2023  Reformaron mi baño en tiempo récord, y el resultado fue excelente. Los precios son muy competitivos, pero lo mejor fue la calidad del trabajo.",
                image: "esperanza-calvino.jpg"
            },
            {
                name: "Judith Arnal Martínez",
                text: "14/03/2023  Tuve un problema urgente con las tuberías, y esta empresa lo resolvió al día siguiente. Después aproveché para hacer una reforma completa del baño. ¡Genial todo!",
                image: "judith-arnal-martinez.jpg"
            },
            {
                name: "Cristina Yeste",
                text: `10/12/2022  Mi piso necesitaba una renovación integral. Pintaron, arreglaron las paredes y colocaron el suelo. Todo quedó impecable y sin problemas durante el proceso`,
                image: "cristina-yeste.jpg"
            },
            {
                name: "Hermosa Aguirre",
                text: `15/09/2022  Quería algo moderno para mi cocina, y esta empresa logró exactamente lo que tenía en mente. El equipo fue profesional y cumplió con el plazo.`,
                image: "hermosa-aguirre.jpg"
            },
            {
                name: "Irene Junquera",
                text: `05/07/2022  Encargué un diseño de interiores y reforma para mi nuevo apartamento. Lo mejor fue que todo se adaptó a mi estilo y presupuesto. ¡Encantado con el resultado!.`,
                image: "irene-junquera.png"
            },
        ],
    },

    orderFormDialog: {
        title: "Solicitar presupuesto de reparación gratis",
        sendedOrderTitle: "¡Gracias por realizar tu pedido!",
        subTitle: "No dudes en contactarnos. Rellena el formulario y nuestro especialista se pondrá en contacto contigo a través de WhatsApp en breve para responder a tus preguntas.¡Esperamos tu consulta!",
        sendedOrderSubTitle: "¡Hemos recibido tu pedido y nuestros operadores se pondrán en contacto contigo a la mayor brevedad posible a través del chat de WhatsApp! ¡Gracias por tu atención y que tengas un buen día!",
        phonePlaceholder: "Número de telf",
        namePlaceholder: "Nombre",
        zipPlaceholder: "Zip",
        buttonText: " Solictar presupuesto",
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