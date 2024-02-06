const options = {
    phone: "+34637247740",
    whatsAppPlaceholder: "Hola, estoy interesado en la limpieza de muebles.",

    menuItems: [
        { title: "INICIO", href: "#first-section" },
        { title: "¿QUÉ LIMPIAMOS?", href: "#what-we-clean-section" },
        { title: "SOBRE NOSOTROS", href: "#why-us-section" },
        { title: "ejemplos", href: "#our-works-section" },
        { title: "preguntas", href: "#faq-section" },
    ],

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

    firstSection: {
        title: "LIMPIEZA PROFESIONAL DE SOFÁS, SILLAS, COLCHONES, Y ALFOMBRAS EN CASA",
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
            },
            {
                question: "¿Es seguro para la salud?",
                answer: `¡INDUDABLEMENTE!
            Para el trabajo, utilizamos solo productos especializados, son hipoalergénicos y sin peligro para los niños y animales. Tenemos todos los certificados.
            
            Además, somos una de las pocas empresas en las que los expertos lavan los muebles con un acondicionador especial que neutraliza los residuos de detergente.`,
            },
            {
                question: "Que está incluido en el precio?",
                answer: `TODAS LAS ETAPAS DE LIMPIEZA REQUERIDAS
            El costo anunciado por el operador por teléfono o por correspondencia es definitivo.
            
            El precio incluye todos los pasos de limpieza necesarios.
            
            Nuestro experto llega a la hora acordada, limpia y solo después del trabajo se paga el servicio.`,
            },
            {
                question: "¿Se irán todas las manchas?",
                answer: `HACEMOS TODO LO POSIBLE
            Muchas empresas dan garantía de que limpiarán todas las manchas y el sofá "quedará como nuevo". Esto es deshonesto. Las manchas son diferentes en origen y edad. Algunas manchas no se pueden quitar. Por ejemplo, puede haber problemas con sangre vieja (a partir de los 2 años).
            
            Mucho también depende del material del sofá. Por ejemplo, algunas telas no se pueden limpiar con agua en absoluto. Sin embargo, algunos contaminantes no se pueden eliminar sin agua.
            
            Y otro factor es la autolimpieza. Algunas manchas y suciedad de los productos del hogar "enlatados" en la tapicería también pueden causar muchos problemas.
            Pero, hacemos nuestro mejor esfuerzo para librar a sus muebles de toda contaminación. Y en casos severos, definitivamente advertiremos que el resultado puede no ser el ideal.`,
            },
            {
                question: "¿Elimina los malos olores?",
                answer: `¡SI, OBVIAMENTE!
            Sí, tenemos métodos especiales.
            En el asunto de eliminar el olor, lo más importante no es solo enmascararlo, sino eliminar la fuente. Le ayudaremos con esto.`,
            },
            {
                question: "¿Trabajan con personas jurídicas?",
                answer: `Sí, trabajamos con personas jurídicas`,
            },
            {
                question: "¿Llegan a las afueras de la ciudad?",
                answer: `TRABAJAMOS PARA USTED
            Sí. Dígale a nuestros operadores la localidad y ellos calcularán el costo de la salida para usted.`,
            },
            {
                question: "¿Cuánto tiempo se secan los muebles después de limpiarlos?",
                answer: `TODO ES DIFERENTE

            En promedio, los muebles se secan en 6 a 12 horas, depende del material, el grado de contaminación, la temperatura del aire y su circulación en la habitación.
            
            Si tiene un calentador o un ventilador en su casa, esto ayudará a acelerar el proceso de secado.`,
            },
            {
                question: "¿Cuánto dura la limpieza?",
                answer: `VARIOS FACTORES SON RESPONSABLES DE ESTO:
            La duración del trabajo depende del tipo de mueble, material, grado de contaminación.
            
            Por ejemplo, limpiar un pequeño sofá rinconero lleva de media a una hora y media.`,
            },
            {
                question: "HORARIO DIARIO",
                answer: `Trabajamos a diario.
            Siete días a la semana.
            La salida nocturna también es posible.`,
            },
            {
                question: "¿Con qué frecuencia debo lavar en seco?",
                answer: `RECOMENDACIÓN:
            Recomendamos limpiar sus muebles al menos una vez al año.`,
            },
        ],
    },
};

export default options;