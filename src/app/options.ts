const options = {
    cloudImages: false || process.env.NODE_ENV === "production",
    logoHeight: 52,

    title: "Limpieza Profesional de Toldos | Servicios de Toldo",
    description: "Limpieza de muebles profesional: sofás, colchones, sillas y alfombras. Eliminamos ácaros, manchas, olores y suciedad. Productos seguros, bajo olor. ¡Presupuesto gratuito y desplazamiento del especialista sin costo!",

    facebookPixelId: "347504069641224",
    yandexMetricaIds: [96729923],

    phone: "+34603423958",
    email: "nadim200763@gmail.com",
    whatsAppPlaceholder: "Hola, estoy interesado en la limpieza de muebles.",
    whatsAppText: "Pedir cotización por WhatsApp",
    workingHoursText: "Horario de trabajo",
    workingHours: "Lun-Dom: 10.00 - 22.00",

    menuItems: [
        { title: "Inicio", href: "#first-section" },
        { title: "Calcula el precio", href: "#choose-furniture" },
        { title: "Servicios", href: "#what-we-clean-section" },
        { title: "Sobre nosotros", href: "#why-us-section" },
        { title: "Ejemplos de trabajos", href: "#our-works-section" },
        { title: "Preguntas frecuentes", href: "#faq-section" },
    ],

    firstSection: {
        title: "Servicio de limpieza de toldos a domicilio",
    },

    chooseFurnitureSection: {
        title: "Consigue una cotización rápida para la limpieza de tu toldo",
        subtitle: "",
        // @see "../components/main/choose-furnitute-section/right-side.tsx"
    },

    whyUsSection: {
        title: "15 años de experiencia en limpieza profesional ",
        root: "/images/why-us/",
        cards: [
            {
                title: "Expertos en limpieza:",
                text: `
                Nuestro equipo de expertos ofrece un servicio profesional de limpieza de toldos, eliminando manchas y suciedad. Más de 5000 clientes satisfechos avalan nuestro trabajo eficiente y de calidad.`,
                image: "three-people.png",
            }, {
                title: "Limpieza segura y eficaz:",
                text: `
                Empleamos tecnología avanzada y productos especializados de Alemania y Suiza para la limpieza de toldos. Nuestros materiales son seguros para personas y mascotas, garantizando un entorno limpio y saludable.`,
                image: "hand.png",
            }, {
                title: "Limpieza honesta:",
                text: `No prometemos lo imposible. Si hay manchas o suciedad que no se pueden eliminar, te lo avisaremos con antelación. Nuestros especialistas siempre se esfuerzan al máximo para eliminar las manchas y la suciedad.`,
                image: "handshake.png",
            },
        ],
    },

    whatWeCleanSection: {
        title: "Nuestros servicios:",
        root: "/images/what-we-clean/",
        cards: [
            {
                title: "Precio desde 10€ a 15€/m² según tamaño, tipo y suciedad.",
                image: "sofa.jpg"
            }, {
                title: "Precio desde 8€ a 12€/m² según tamaño, tipo y suciedad.",
                image: "mattress.jpg"
            }, {
                title: "Precio desde 10€ a 12€/m² según tamaño, tipo y suciedad.",
                image: "carpet.jpg"
            }, {
                title: "Limpieza de sillones y sillas desde 10€",
                image: "chair.jpg"
            },
        ]
    },

    howToOrderEasySection: {
        title: "Solicitar la limpieza de toldo es fácil.",
        root: "/images/how-to-order-easy/",
        cards: [
            {
                title: "1. Envíanos fotos del toldo y tu dirección:",
                text: `Haz clic en el botón de WhatsApp para enviar fotos de tu toldo y su tamaño. Indica también tu código postal.`,
                image: "whats-app.png",
            }, {
                title: "2. Cálculo del precio:",
                text: `Evaluaremos el costo de la limpieza en función de las fotos y las dimensiones del toldo, así como tu código postal.`,
                image: "calculator.png",
            }, {
                title: "3. Confirmación del pedido:",
                text: `	Una vez que apruebes el precio, fijaremos una fecha y hora convenientes para la limpieza. Confirmaremos tu dirección y el horario.`,
                image: "checked.png",
            },
        ],
    },

    ourWorksSection: {
        title: "Aquí tenemos ejemplos de nuestro trabajo",
        compareImages: {
            root: '/images/our-works/compare/',
            images: [
                {
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
                }, {
                    path: 'sofa_light/',
                    before: 'before.jpg',
                    after: 'after.jpg',
                }, {
                    path: 'sofa_orange/',
                    before: 'before.jpg',
                    after: 'after.jpg',
                },
            ],
        },
    },

    videoSection: {
        title: "Un vídeo que dice más que mil palabras...",
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
    },

    faqSection: {
        title: "Preguntas Frecuentes sobre la Limpieza de Toldos",
        questions: [
            {
                question: "¿Qué es un toldo y por qué necesita limpieza?",
                answer: `Un toldo es una estructura de tela o material sintético que se usa para proporcionar sombra y protección contra el sol y la lluvia. 
            <ol style="list-style: inside decimal">
             Con el tiempo, los toldos acumulan polvo, manchas y manchas de moho que pueden afectar su apariencia y funcionalidad. La limpieza regular ayuda a mantener su aspecto y prolonga su vida útil.</li>
            
            </ol>`,
                answerInHtml: true,
            }, {
                question: "¿Con qué frecuencia debo limpiar mi toldo?",
                answer: `¡Se recomienda limpiar el toldo al menos una vez al año. Sin embargo, si vives en una zona con mucho polvo o humedad, o si el toldo se ensucia rápidamente, es posible que necesite limpiezas más frecuentes.
            
            `,
            }, {
                question: "Que está incluido en el precio?",
                answer: `TODAS LAS ETAPAS DE LIMPIEZA REQUERIDAS
            El costo anunciado por el operador por teléfono o por correspondencia es definitivo.
            
            El precio incluye todos los pasos de limpieza necesarios.
            
            Nuestro experto llega a la hora acordada, limpia y solo después del trabajo se paga el servicio.`,
            }, {
                question: "¿Qué tipo de limpieza utilizan para los toldos?",
                answer: `Utilizamos equipos de limpieza profesionales y productos específicos para toldos que son seguros y eficaces.
            Nuestros métodos incluyen el uso de detergentes especializados y técnicas de limpieza a presión o a mano, dependiendo del tipo de material del toldo.`,
            }, {
                question: "¿Los productos de limpieza son seguros para el toldo?",
                answer: `Sí, utilizamos productos de limpieza diseñados específicamente para toldos que son suaves y seguros para los materiales. Estos productos eliminan la suciedad y las manchas sin dañar el tejido del toldo.`,
            }, {
                question: "¿Trabajan con personas jurídicas?",
                answer: `Sí, trabajamos con personas jurídicas`,
            }, {
                question: "¿Llegan a las afueras de la ciudad?",
                answer: `TRABAJAMOS PARA USTED
            Sí. Dígale a nuestros operadores la localidad y ellos calcularán el costo de la salida para usted.`,
            }, {
                question: "¿Puedo limpiar el toldo yo mismo?",
                answer: `Aunque es posible realizar una limpieza básica en casa, recomendamos confiar en profesionales para una limpieza profunda. Los especialistas tienen el equipo adecuado y la experiencia para limpiar eficazmente sin dañar el toldo.`,
            }, {
                question: "¿Cuánto tiempo dura el proceso de limpieza?",
                answer: `El tiempo de limpieza puede variar según el tamaño del toldo y el grado de suciedad. Generalmente, el proceso dura entre 1 y 3 horas. Nosotros te proporcionaremos un estimado del tiempo necesario cuando programemos la limpieza.`,
            },  {
                question: "¿Es necesario retirar el toldo antes de la limpieza?",
                answer: `No, en la mayoría de los casos, la limpieza se realiza sin necesidad de retirar el toldo. Nuestros técnicos tienen el equipo adecuado para limpiar el toldo en su lugar.`,
            },{
                question: "¿Cómo puedo preparar mi toldo para la limpieza?",
                answer: `Antes de la limpieza, asegúrate de que el toldo esté completamente extendido y libre de objetos. Si es posible, retira cualquier mueble o decoración cerca del toldo para facilitar el acceso.`,
            },{
                question: "¿Qué pasa si mi toldo tiene manchas difíciles?",
                answer: `Nuestros expertos están capacitados para manejar una variedad de manchas difíciles. Si las manchas persisten después de la limpieza, ofrecemos servicios adicionales para tratar manchas específicas.`,
            },{
                question: "¿Cómo puedo programar una limpieza?",
                answer: `Puedes contactarnos a través de nuestro número de teléfono o enviarnos un mensaje por WhatsApp con fotos de tu toldo y su tamaño. Indica tu código postal y nuestro equipo te proporcionará una cotización y coordinará una fecha para la limpieza.`,
            },{
                question: "¿Cuál es el costo de la limpieza de toldos?",
                answer: `El costo de la limpieza varía según el tamaño del toldo y el grado de suciedad. Te proporcionaremos una cotización precisa después de recibir fotos y detalles de tu toldo.`,
            },{
                question: "HORARIO DIARIO",
                answer: `Trabajamos a diario.
            Siete días a la semana.
            La salida nocturna también es posible.`,
            },
        ],
    },

    testimonialsSection: {
        title: "Comentarios de nuestros clientes",
        subTitle: "Durante 15 años de trabajo exitoso, hemos logrado ganar credibilidad entre los clientes. La mayoría de nuestros clientes, tras el primer contacto con la empresa, colaboran con nosotros de forma continua.",
        imagesPath: '/images/testimonials/',
        testimonials: [
            {
                name: "Lucía",
                text: "La limpieza del toldo fue perfecta. Los técnicos fueron puntuales y dejaron todo muy limpio. Estoy muy satisfecha.",
                image: "adriana-gonzalez.png"
            },
            {
                name: "Sofía",
                text: "Qué buena onda los chicos de la limpieza! Hicieron un trabajo increíble con mi toldo. Definitivamente los volveré a llamar.",
                image: "alba-lago.png"
            },
            {
                name: "Elena",
                text: "Mi toldo tenía manchas difíciles de quitar, pero los profesionales lo dejaron como nuevo. Un servicio muy profesional y amable. :)",
                image: "ana-navarro-ramos.jpg"
            },
            {
                name: "Luis Hernández",
                text: "Muy buen trabajo, superó mis expectativas. La limpieza del toldo fue rápida y efectiva. Me quedé sorprendido de cómo mejoró el aspecto de mi casa.",
                image: "christian-galvez.png"
            },
            {
                name: "Ana",
                text: "¡Increíble! El toldo estaba muy sucio, y ahora parece nuevo. El servicio fue rápido y sin complicaciones.",
                image: "diana-martinez.jpg"
            },
            {
                name: "Marta Gómez",
                text: "Increíble servicio! Mi toldo quedó como nuevo y se nota la calidad de los productos que usan. Los recomendaré a todos mis amigos. Gracias por la amabilidad del equipo.",
                image: "paz-juarez-olmos.png"
            },
            {
                name: "Laura Pérez",
                text: "Perfecto! Me encantó el servicio. El personal fue muy atento y profesional. Mi toldo luce impecable y me siento mucho más cómoda en mi terraza.",
                image: "pilar-fernandez-palma.png"
            },
            {
                name: "Ana López",
                text: "Tenía dudas, pero el resultado fue sorprendente. Mi toldo estaba bastante sucio y ahora está impecable. Gracias por un trabajo tan bien hecho!",
                image: "esperanza-calvino.jpg"
            },
            {
                name: "Patricia Moreno",
                text: "Nunca había visto mi toldo tan limpio. Me encantó la rapidez y eficiencia del servicio. Definitivamente volveré a utilizar sus servicios en el futuro.",
                image: "judith-arnal-martinez.jpg"
            },
            {
                name: "Carmen Ruiz",
                text: `El toldo de mi balcón estaba en muy mal estado, pero después de la limpieza quedó perfecto. ¡Muy agradecida con el servicio y la atención recibida!😊
`,
                image: "cristina-yeste.jpg"
            },
            {
                name: "Raquel Fernández",
                text: `Un servicio de calidad, realmente cumplió con mis expectativas. El toldo quedó como nuevo. Además, el personal fue muy amable y puntual.`,
                image: "hermosa-aguirre.jpg"
            },
            {
                name: "Isabel Sánchez",
                text: `La mejor decisión que pude tomar. Mi toldo estaba lleno de manchas y ahora parece nuevo. Los profesionales que vinieron fueron amables y muy eficientes.`,
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