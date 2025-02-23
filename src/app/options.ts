const options = {
    cloudImages: false || process.env.NODE_ENV === "production",
    logoHeight: 52,

    title: "Ремонт в Барселоне – работаем для вас с 2009 года! | aurorareforma.es",
    description: "Комплексные ремонтные услуги в Барселоне для квартир, домов и коммерческих помещений. В aurorareforma.es мы гарантируем качество, индивидуальный дизайн и безупречную отделку. Запросите бесплатную смету и преобразите свое пространство уже сегодня. Посетите нас сейчас!",

    facebookPixelId: "476803044879423",
    yandexMetricaIds: [99118025],
    gtmId: "",

    phone: "+34600350787",
    email: "nadim200763@gmail.com",
    form_id: " UC_URV7WO",
    whatsAppPlaceholder: "Здравствуйте! Меня интересует ремонт.",
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
        title: "Ремонт в Барселоне, гарантия и сроки по договору, работаем с 2009 года!",
        showTitlePicture: true,
        showLogoTitle: false,
        showGallery: true,
        topMargin: "150px",
        bottomMargin: "70px",
        leftSideText: `[b]
Планируете обновить квартиру или дом в Барселоне или окрестностях?
Посмотрите наши работы до и после. [/b]
✅ 15 лет опыта
✅ Ремонт под ключ 
✅ Прозрачная смета
✅ Бесплатный выезд и замеры

📅 Гарантируем качество и соблюдение сроков по договору.

💬 Наишите нами в WhatsApp и получите бесплатную консультацию!`,
        leftSideButtonMarginTop: "60px",
    },

    chooseFurnitureSection: {
        title: "Бесплатный технический осмотр и замеры  для вашего ремонта!",
        subtitle: "Наш специалист оценит ваше помещение и подготовит подробную смету. Оставьте заявку сейчас!",
        showImage: false
        ,
        // @see "../components/main/choose-furnitute-section/right-side.tsx"
    },

    whyUsSection: {
        title: "Почему мы?",
        root: "/images/why-us/",
        cards: [
            {
                title: "Контроль качества.",
                text: `Эксперты контролируют каждый этап проекта, гарантируя соблюдение сроков и высоких стандартов. Мы заботимся о вашем спокойствии.`,
                image: "list.png",
            }, {
                title: "Персональный менеджер.",
                text: `
                Мы предоставляем вам выделенного менеджера, который обеспечит эффективное управление проектом и оперативное решение всех возникающих вопросов.






`,
                image: "three-people.png",
            }, {
                title: "Честная и прозрачная смета.",
                text: `Мы составляем детальный бюджет после консультации, гарантируя фиксированные цены и соблюдение сроков.`,
                image: "receive-euro.png",
            }, {
                title: "Гибкая система оплаты.",
                text: `
                Оплата поэтапно, только за выполненные и принятые работы.Ы`,
                image: "web-analytics.png",
            }, {
                title: "Профессиональная команда.",
                text: `
                Наши сотрудники имеют не менее 5 лет опыта и регулярно проходят обязательное обучение и сертификацию.






`,
                image: "professional.png",
            }, {
                title: "Четкие гарантии.",
                text: `Мы предоставляем стандартную гарантию 2 года на наши работы, которую можно расширить до 5 лет в зависимости от ваших потребностей. Все условия фиксируются в договоре.`,
                image: "guarantee.png",
            }, {
                title: "Качественные материалы по выгодным ценам.",
                text: `Благодаря нашей сети партнеров-поставщиков, мы предлагаем конкурентоспособные цены на материалы. Мы также берем на себя логистику доставки и приемки материалов.`,
                image: "good-quality.png",
            }, {
                title: "Уборка после ремонта.",
                text: `Уборка и вывоза мусора, чтобы вы могли наслаждаться обновленным пространством без забот.`,
                image: "cleaning.png",
            },
        ],
    },

    whatWeCleanSection: {
        title: "Ремонт. Сколько это стоит?",
        subtitle: `
           Каждый ремонт уникален, и стоимость может значительно варьироваться в зависимости от проекта. Мы не предлагаем общие оценки за квадратный метр, так как считаем, что этот подход не отражает реальность. Наша цель – предоставить точные сметы на основе детальных измерений и конкретных потребностей. Ниже представлены ориентировочные цены на различные виды ремонта, чтобы вы могли получить представление о необходимом уровне инвестиций.`,
        root: "/images/what-we-clean/",
        cards: [
            {
                title: "Стоимость комплексного ремонта квартиры площадью (до 80 м²) начинается от 6 000€.",
                image: "reforma.jpg"
            }, {
                title: "Косметический ремонт квартиры  (до 80 м²) — от 5 000€",
                image: "mattress.jpg"
            }, {
                title: "Ремонт комнаты (~10 м²) — от 1 500€",
                image: "carpet.jpg"
            }, {
                title: "Покраска стен (за м²) — от 15€",
                image: "sofa.jpg"
            },  {
                title: "Ремонт ванной комнаты — от 2 500€",
                image: "chair.jpg"
            },  {
                title: "Укладка напольного покрытия (за м²) — от 20€",
                image: "floor.jpg"
            },
        ]
    },

    howToOrderEasySection: {
        title: "Как мы работаем?",
        subtitle: "",
        root: "/images/how-to-order-easy/",
        cards: [
            {
                title: "1. Замер бесплатно.",
                text: `Мы приедем к вам, чтобы обсудить все аспекты вашего проекта и провести необходимые замеры. Это абсолютно бесплатно.`,
                image: "tape-measure.png",
            }, {
                title: "2. Составление сметы.",
                text: `Наш специалист совместно с техническим и производственным отделами разработает смету проекта, учитывая ваши пожелания и потребности.`,
                image: "calculator.png",
            }, {
                title: "3. Официальный договор.",
                text: `	Все работы выполняются только по договору, в котором прописаны все условия, стоимость и сроки выполнения.`,
                image: "checked.png",
            }, {
                title: "4. Покупка и доставка материалов.",
                text: `Вы можете самостоятельно приобрести строительные и отделочные материалы или доверить их закупку, доставку и приемку нашей компании.`,
                image: "building-material.png",
            }, {
                title: "5. Ремонтно-отделочные работы.",
                text: `Мы начинаем работы в соответствии с договором и выполняем их поэтапно, обеспечивая контроль качества на каждом этапе.`,
                image: "worker.png",
            }, {
                title: "6. Приемка и оплата работ.",
                text: `	После завершения каждого этапа работ предоставляется акт выполненных работ. Оплата производится только после приемки и утверждения каждого этапа.`,
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
        title: "Видео, которое расскажет больше, чем слова...",
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
        title: "Часто задаваемые вопросы.",
        questions: [
            {
                question: "Почему нам доверяют?",
                answer: `Официальный договор.
            <ol style="list-style: inside decimal">
            <li>Оплата по факту выполненных работ.</li>
            <li>Безупречная репутация и рекомендации клиентов.</li>
            <li>15 лет опыта и команда профессионалов..</li>
            
            </ol>`,
                answerInHtml: true,
            }, {
                question: "Может ли измениться стоимость ремонта в процессе?",
                answer: `Да, это возможно, но всегда есть объяснение:

Стоимость по договору может измениться как в большую, так и в меньшую сторону.
Например, если изначально планировалась стандартная плитка (30x30 см), а затем выбрали крупноформатный керамогранит (120x60 см), то укладка крупной плитки потребует больше времени и ресурсов, что увеличит стоимость.
Также стоимость может уменьшиться, если отменены запланированные работы, например, возведение перегородки.
Если вы самостоятельно выбираете материалы, проконсультируйтесь с нашим специалистом, чтобы не выйти за рамки бюджета.`,
            }, {
                question: "Могут ли измениться сроки ремонта?",
                answer: `Да, сроки могут корректироваться из-за различных факторов:

Время высыхания материалов (штукатурка, шпаклевка), которое зависит от влажности и вентиляции.
Сроки поставки материалов, особенно заказных.
При необходимости, изменения сроков фиксируются в дополнительном соглашении к договору.
Мы не заинтересованы в затягивании сроков, так как вы платите только за выполненные этапы.
Сроки фиксируются в договоре, и мы стремимся их соблюдать!`,
            }, {
                question: "Сколько стоит выезд спецалиста для замеров и консультации?",
                answer: `Выезд специалиста – бесплатно!

Выезд специалиста и замеры – абсолютно бесплатны и ни к чему вас не обязывают. Это возможность осмотреть квартиру, познакомиться с нами, получить консультацию по вашему проекту и узнать реальную стоимость ремонта. После этого вы сможете принять взвешенное решение.`,
            }, {
                question: "Сколько стоит ремонт за квадратный метр?",
                answer: `Это один из самых частых вопросов, и ответ на него прост. Каждый ремонт уникален, поэтому цена может варьироваться. Указывать "случайные" цифры некорректно и нечестно. Цены за квадратный метр обычно называют дилетанты, чтобы привлечь внимание и начать проект, но в итоге это не соответствует действительности. Мы считаем правильным и честным подходом точные замеры объекта и составление сметы.`,
            }, {
                question: "Как производится оплата?",
                answer: `Оплата производится поэтапно, после завершения и приемки каждого этапа работ или по договоренности`,
            }, {
                question: "Является ли смета окончательной?",
                answer: `Стоимость сметы может измениться только в случае, если вы решите изменить объем работ или материалы, указанные в смете.`,
            }, {
                question: "Можно ли заказать дизайн-проект?",
                answer: `Да, конечно. Наш дизайнер приедет к вам для консультации и предложит оптимальное решение, учитывая особенности планировки вашей квартиры.`,
            }, {
                question: "Кто закупает материалы?",
                answer: `Мы можем взять на себя закупку материалов или работать с вашими материалами.`,
            }, {
                question: "Вывоз мусора после ремонта.",
                answer: `Да, по завершении ремонта мы по желанию клиента выполняем сухую и/или влажную уборку и вывозим мусор. Также мы проводим регулярную уборку в процессе ремонта.`,
            }, {
                question: "Как контролировать ход ремонта?",
                answer: `Вы можете контролировать ход работ лично или удаленно. Мы регулярно отправляем фото- и видеоотчеты через WhatsApp.`,
            }, 
        ],
    },

    testimonialsSection: {
        title: "Что говорят наши клиенты...",
        subTitle: "За 15 лет успешной работы мы выстроили прочные партнерские отношения с клиентами, которые продолжают сотрудничать с нами на постоянной основе.",
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