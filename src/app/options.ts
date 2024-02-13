const options = {
    cloudImages: false,
    logoHeight: 52,

    phone: "+34637247740",
    whatsAppPlaceholder: "Hola, estoy interesado en la limpieza de muebles.",
    whatsAppText: "Pedir cotización por WhatsApp",
    workingHoursText: "Horario de trabajo",
    workingHours: "Lun-Dom: 10.00 -22.00",

    menuItems: [
        { title: "INICIO", href: "#first-section" },
        { title: "¿QUÉ LIMPIAMOS?", href: "#what-we-clean-section" },
        { title: "SOBRE NOSOTROS", href: "#why-us-section" },
        { title: "ejemplos", href: "#our-works-section" },
        { title: "preguntas", href: "#faq-section" },
    ],

    firstSection: {
        title: "Limpieza profesional de muebles a domicilio.",
    },

    chooseFurnitureSection: {
        title: "choose your furniture",
        subtitle: "¿Cuál se parece al tuyo?",
        // @see "../components/main/choose-furnitute-section/right-side.tsx"
    },

    whyUsSection: {
        title: "15 años de experiencia en limpieza profesional ",
        root: "/images/why-us/",
        cards: [
            {
                title: "Expertos en limpieza:",
                text: `
                Contamos con un equipo de técnicos altamente cualificados y experimentados en la limpieza de todo tipo de muebles, colchones y alfombras.
                Más de 5000 clientes satisfechos avalan nuestro trabajo.`,
                image: "money.png",
            }, {
                title: "Limpieza segura y eficaz:",
                text: `
                Utilizamos equipos profesionales Karcher y productos de limpieza profesionales de fabricación alemana y suiza, hipoalergénicos, inofensivos para personas y animales, con un ligero aroma que desaparece a los 20 minutos.`,
                image: "hand.png",
            }, {
                title: "Limpieza honesta:",
                text: `No prometemos lo imposible. Si hay manchas o suciedad que no se pueden eliminar, te lo avisaremos con antelación. Nuestros especialistas siempre se esfuerzan al máximo para eliminar las manchas y la suciedad.`,
                image: "thumb.png",
            },
        ],
    },

    whatWeCleanSection: {
        title: "Nuestros servicios:",
        root: "/images/what-we-clean/",
        cards: [
            {
                title: "Limpieza de sofás desde 60€ por sofá de dos plazas",
                image: "sofa.jpg"
            }, {
                title: "Limpieza de colchones desde 25€",
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
        root: "/images/how-to-order-easy/",
        cards: [
            {
                title: "1. Envíanos fotos y tu dirección:",
                text: `Haz clic en el botón de WhatsApp para enviar fotos de tu sofá/ colchón/ alfombra/ silla/ sillón.
                IndIndica tu código postal.`,
                image: "money.png",
            }, {
                title: "2. Cálculo del precio:",
                text: `Te haremos algunas preguntas para calcular el precio exacto de la limpieza.
                El precio no cambiará durante el proceso.`,
                image: "hand.png",
            }, {
                title: "3. Confirmación del pedido:",
                text: `•	Si te parece bien el precio, acordaremos una fecha y hora convenientes para la limpieza.
                Confirmaremos tu dirección.`,
                image: "thumb.png",
            },
        ],
    },

    ourWorksSection: {
        title: "Aquí tenemos ejemplos de nuestro trabajo",
        compareImages: {
            root: '/images/compare/',
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
                original: "//www.youtube.com/embed/9X9FFHy6hZg?autoplay=0&html5=1",
                thumbnail: "/images/video-thumbs/sofa-light.png",
            }, {
                original: "//www.youtube.com/embed/-eUt39qBxFw?autoplay=0&loop=1&html5=1",
                thumbnail: "/images/video-thumbs/sofa-gray.png",
            }, {
                original: "//www.youtube.com/embed/a2np9IDDTHQ?autoplay=0&loop=1&html5=1",
                thumbnail: "/images/video-thumbs/sofa-brown.png",
            }
        ],
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
};

export default options;