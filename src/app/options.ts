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

    menuItems: [
        { title: "Inicio", href: "#first-section" },
        { title: "Calcula el precio", href: "#choose-furniture" },
        { title: "Servicios", href: "#what-we-clean-section" },
        { title: "Sobre nosotros", href: "#why-us-section" },
        { title: "Ejemplos de trabajos", href: "#our-works-section" },
        { title: "Preguntas frecuentes", href: "#faq-section" },
    ],

    firstSection: {
        title: "Limpio Muebles: Servicios Profesionales de Limpieza de Tapicerías en Madrid",
        showTitlePicture: false,
        showLogoTitle: false,
        showGallery: false,
        topMargin: "130px",
        bottomMargin: "170px",
        leftSideText: `[b]¿Tus muebles, colchón o alfombra necesitan una limpieza profunda?[/b]
¡Dales una nueva vida!
En limpiarmuebles.pro, ofrecemos servicios de lavado de muebles a domicilio con resultados profesionales.
Utilizamos técnicas avanzadas, incluyendo limpieza de mobiliario con vapor si es necesario, para renovar tus muebles, colchones y alfombras.
Eliminamos manchas, olores, bacterias, ácaros de polvo y alergénicos, devolviéndoles su frescura original.`,
        leftSideButtonMarginTop: "60px",
    },

    chooseFurnitureSection: {
        title: "Calcula el precio de la limpieza de tu sofá en minutos",
        subtitle: "¿Cuál se parece al tuyo?",
        showImage: true,
        // @see "../components/main/choose-furnitute-section/right-side.tsx"
    },

    whyUsSection: {
        title: "15 años de experiencia en limpieza profesional ",
        root: "/images/why-us/",
        cards: [
            {
                title: "Expertos en limpieza:",
                text: `
                Contamos con un equipo de técnicos altamente cualificados y experimentados en la limpieza de todo tipo de muebles, colchones, alfombras y tapizados. Nuestro servicio de limpieza de tapizados es confiable y efectivo. Más de 5000 clientes satisfechos avalan nuestro trabajo. Más de 5000 sofás, colchones, sillas y alfombras han quedado como nuevos.`,
                image: "three-people.png",
            }, {
                title: "Limpieza segura y eficaz:",
                text: `
                Utilizamos equipos profesionales Karcher y productos de limpieza alemanes y suizos que desinfectan la tapicería, eliminan ácaros y alérgenos, son hipoalergénicos y seguros para personas y animales, con un aroma ligero que desaparece en 20 minutos.






`,
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
        subtitle: "Entendemos que cada mueble es único, por lo que no podemos ofrecer un precio exacto para la limpieza de tapizados sin ver fotos de tu mobiliario. Para garantizar un servicio de calidad y un precio justo, te invitamos a enviarnos imágenes de tus sofás, sillones, colchones u otros muebles. Así podremos proporcionarte una cotización precisa y adaptada a tus necesidades específicas.",
        root: "/images/what-we-clean/",
        cards: [
            {
                title: "Limpieza de sofás desde 60€ por sofá de dos plazas",
                image: "sofa.jpg"
            }, {
                title: "Limpieza de colchones desde 40€",
                image: "mattress.jpg"
            }, {
                title: "Limpieza de alfombras desde 8€/m²",
                image: "carpet.jpg"
            }, {
                title: "Limpieza de sillones y sillas desde 10€",
                image: "chair.jpg"
            },
        ]
    },

    howToOrderEasySection: {
        title: "¡Cómo hacer un pedido fácilmente!",
        subtitle: "",
        root: "/images/how-to-order-easy/",
        cards: [
            {
                title: "1. Envíanos fotos y tu dirección:",
                text: `Haz clic en el botón de WhatsApp para enviar fotos de tu sofá, colchón, alfombra, silla, sillón.
                IndIndica tu código postal.`,
                image: "whats-app.png",
            }, {
                title: "2. Cálculo del precio:",
                text: `Te haremos algunas preguntas para calcular el precio exacto de la limpieza.
                El precio no cambiará durante el proceso.`,
                image: "calculator.png",
            }, {
                title: "3. Confirmación del pedido:",
                text: `	Si te parece bien el precio, acordaremos una fecha y hora convenientes para la limpieza.
                Confirmaremos tu dirección.`,
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
        title: "PREGUNTAS FRECUENTES Y SUS RESPUESTAS",
        questions: [
            {
                question: "¿Qué método utilizamos?",
                answer: `LA LIMPIEZA DE MUEBLES SE REALIZA EN VARIAS ETAPAS:
            <ol style="list-style: inside decimal">
            <li>Si es necesario, aspiramos tus muebles</li>
            <li>Se aplica el primer componente del producto de limpieza, la solución.</li>
            <li>Se aplica el segundo componente del producto de limpieza, la espuma.</li>
            <li>La limpieza con cepillos eléctricos y manuales.</li>
            <li>Con un aparato especial con otro producto, lavamos toda la suciedad disuelta.</li>
            <li>Se elimina manchas u olores específicos</li>
            <li>Lavamos los muebles y eliminamos todos los residuos químicos</li>
            </ol>`,
                answerInHtml: true,
            }, {
                question: "¿Es seguro para la salud?",
                answer: `¡INDUDABLEMENTE!
            Para el trabajo, utilizamos solo productos especializados, son hipoalergénicos y sin peligro para los niños y animales. Tenemos todos los certificados.
            
            Además, somos una de las pocas empresas en las que los expertos lavan los muebles con un acondicionador especial que neutraliza los residuos de detergente.`,
            }, {
                question: "Que está incluido en el precio?",
                answer: `TODAS LAS ETAPAS DE LIMPIEZA REQUERIDAS
            El costo anunciado por el operador por teléfono o por correspondencia es definitivo.
            
            El precio incluye todos los pasos de limpieza necesarios.
            
            Nuestro experto llega a la hora acordada, limpia y solo después del trabajo se paga el servicio.`,
            }, {
                question: "¿Se irán todas las manchas?",
                answer: `HACEMOS TODO LO POSIBLE
            Muchas empresas dan garantía de que limpiarán todas las manchas y el sofá "quedará como nuevo". Esto es deshonesto. Las manchas son diferentes en origen y edad. Algunas manchas no se pueden quitar. Por ejemplo, puede haber problemas con sangre vieja (a partir de los 2 años).
            
            Mucho también depende del material del sofá. Por ejemplo, algunas telas no se pueden limpiar con agua en absoluto. Sin embargo, algunos contaminantes no se pueden eliminar sin agua.
            
            Y otro factor es la autolimpieza. Algunas manchas y suciedad de los productos del hogar "enlatados" en la tapicería también pueden causar muchos problemas.
            Pero, hacemos nuestro mejor esfuerzo para librar a sus muebles de toda contaminación. Y en casos severos, definitivamente advertiremos que el resultado puede no ser el ideal.`,
            }, {
                question: "¿Elimina los malos olores?",
                answer: `¡SI, OBVIAMENTE!
            Sí, tenemos métodos especiales.
            En el asunto de eliminar el olor, lo más importante no es solo enmascararlo, sino eliminar la fuente. Le ayudaremos con esto.`,
            }, {
                question: "¿Trabajan con personas jurídicas?",
                answer: `Sí, trabajamos con personas jurídicas`,
            }, {
                question: "¿Llegan a las afueras de la ciudad?",
                answer: `TRABAJAMOS PARA USTED
            Sí. Dígale a nuestros operadores la localidad y ellos calcularán el costo de la salida para usted.`,
            }, {
                question: "¿Cuánto tiempo se secan los muebles después de limpiarlos?",
                answer: `TODO ES DIFERENTE

            En promedio, los muebles se secan en 6 a 12 horas, depende del material, el grado de contaminación, la temperatura del aire y su circulación en la habitación.
            
            Si tiene un calentador o un ventilador en su casa, esto ayudará a acelerar el proceso de secado.`,
            }, {
                question: "¿Cuánto dura la limpieza?",
                answer: `VARIOS FACTORES SON RESPONSABLES DE ESTO:
            La duración del trabajo depende del tipo de mueble, material, grado de contaminación.
            
            Por ejemplo, limpiar un pequeño sofá rinconero lleva de media a una hora y media.`,
            }, {
                question: "HORARIO DIARIO",
                answer: `Trabajamos a diario.
            Siete días a la semana.
            La salida nocturna también es posible.`,
            }, {
                question: "¿Con qué frecuencia debo lavar en seco?",
                answer: `RECOMENDACIÓN:
            Recomendamos limpiar sus muebles al menos una vez al año.`,
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
                text: "Gracias por el excelente y buen coordinado trabajo. Fue muy cómodo comunicarse con el operador: me explicó todo de manera clara y sencilla, sin apresurarse con la tecnología y, al mismo tiempo, sin retrasar el proceso. El precio fue muy razonable en mi opinión. El de otras empresas es mucho más alto. Gracias por la calidad y por ser como sois. Definitivamente os recomendaré a mis amigos y familiares.",
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