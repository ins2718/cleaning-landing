import ButtonBasic from "@/components/buttons/button-basic";

type LicenceDialogProps = {
    hide: () => void;
}

function LicenceDialog({ hide }: LicenceDialogProps) {
    return <div className="size-full top-0 left-0 z-40 absolute p-[46px_58px_48px_59px] bg-white">
        <div onClick={hide} className="cursor-pointer absolute top-[32px] right-[24px] size-[20px] z-[3]
before:bg-[#91a5be] before:content-[''] before:rotate-45 before:left-0 before:h-[2px] before:mt-px before:bottom-1/2 before:w-full before:absolute before:hover:bg-black before:hover:duration-200 before:hover:transition-colors
after:bg-[#91a5be] after:content-[''] after:-rotate-45 after:left-0 after:h-[2px] after:mt-px after:bottom-1/2 after:w-full after:absolute after:hover:bg-black after:hover:duration-200 after:hover:transition-colors"/>
        <div className="bg-white size-full flex flex-col">
            <h2 className="font-primary text-[20px] leading-[23px] text-left min-[480px]:text-center text-[#444b54] ">INFORMACIÓN DEL USO DE COOKIES</h2>
            <div className="overflow-y-auto">
                <p>INFORMACIÓN DEL USO DE COOKIES Sincro proyectos y obras S.L como responsable de este Sitio Web les informa de que esta página utiliza cookies propias y de terceros para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico. Además, compartimos información sobre el uso que haga del Sitio Web con nuestros colaboradores de redes sociales, publicidad y análisis web, quienes pueden combinarla con otra información que les haya proporcionado o que hayan recopilado a través del uso que haya hecho de sus servicios. ¿Qué son las cookies? Una cookie es un fichero que se descarga en el ordenador del usuario al acceder a determinadas páginas web para almacenar y recuperar información sobre la navegación que se efectúa desde dicho equipo. Las cookies son procedimientos automáticos de recogida de datos sobre la navegación por la web con el fin de reconocer al usuario como visitante recurrente y personalizar su experiencia. Entre otros, se pueden obtener datos tales como el idioma de navegación del usuario, el país, el inicio de sesión, las características del navegador, o incluso información acerca de la fecha y hora de la última visita, parámetros de tráfico dentro de la página web y el número de visitas. Prácticamente todas las páginas web utilizan cookies, ya que muchas de ellas son imprescindibles para el correcto funcionamiento de distintos servicios y utilidades, como por ejemplo los servicios de compra o registro. ¿Qué tipo de cookies utilizamos? Según la entidad que las gestione, las cookies pueden ser: Cookies propias: Son aquéllas que se envían al equipo terminal del interesado desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario. Cookies de terceros: Son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies. El Sitio Web utiliza tanto cookies propias como de terceros. Según el plazo de tiempo que permanecen activadas: Cookies de sesión: Son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión. Cookies persistentes: Son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años. El Sitio Web utiliza tanto cookies persistentes como cookies de sesión. ¿Para qué finalidades pueden ser utilizadas las cookies? Cookies técnicas: Son aquéllas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales. Cookies de personalización: Son aquéllas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc. Cookies de análisis: Son aquéllas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio. Cookies publicitarias: Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios. Cookies de publicidad comportamental: Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo. A continuación, se recoge una tabla con la información de las cookies utilizadas en el Sitio Web: Nombre de la cookie Proveedor Tipo Finalidad Duración _gid bysincro.com / Google Analytics Analítica La cookie se utiliza para almacenar información sobre cómo los visitantes usan un sitio web y ayuda a crear un informe analítico de cómo funciona el sitio web. Los datos recopilados, incluidos el número de visitantes, la fuente de donde provienen y las páginas, aparecen de forma anónima. 1 día _gat bysincro.com / Google Analytics Analítica Se utiliza para diferenciar entre los diferentes objetos de seguimiento creados en la sesión. La cookie se actualiza cada vez que envía los datos a Google Analytics. 1 día _ga bysincro.com / Google Analytics Analítica Se utiliza para identificar y distinguir a un usuario. Almacenan un identificador de cliente único (ID de cliente), que se genera aleatoriamente. Se utiliza para calcular las interacciones de los usuarios (visitas, los datos de usuarios, sesiones y campañas), con el fin de optimizar los servicios que ofrecen. 2 años _fbp bysincro.com / Facebook Publicitària Cookie de Facebook utilizadas para recoger estadísticas sobre las visitas al sitio y el rendimiento de las campañas publicitarias. 3 meses sb Facebook Publicitària Cookie de Facebook que identifica al navegador con fines de autenticación del inicio de sesión. 2 años datr Facebok Publicitària Cookie de Facebook para identificar el sitio y compartir contenidos a través de Facebook. 2 años viewed_cookie_policy bysincro.com/ GDPR Cookie Consent Técnica Establecida por el Plugin GDPR Cookie Consent. De uso interno necesarias para el funcionamiento de la visualización de la política de cookies de la web. 1 año CookieLawInfoConsent bysincro.com / GDPR Cookie Consent Técnica Establecida por el Plugin GDPR Cookie Consent para almacenar el consentimiento de cookies del usuario. 1 año cookielawinfo-checkbox-publicitarias bysincro.com / GDPR Cookie Consent Técnica Establecida por el Plugin GDPR Cookie Consent. Se emplea para recordar el consentimiento del usuario de las cookies categorizadas como «Publicitarias». 1 año cookielawinfo-checkbox-analisis bysincro.com / GDPR Cookie Consent Técnica Establecida por el Plugin GDPR Cookie Consent. Se emplea para recordar el consentimiento del usuario de las cookies categorizadas como «Analíticas». 1 año cookielawinfo-checkbox-tecnicas bysincro.com / GDPR Cookie Consent Técnica Establecida por el Plugin GDPR Cookie Consent. Se emplea para recordar el consentimiento del usuario de las cookies categorizadas como «Técnicas». 1 año _tawuuid bysincro.com / Tawk.to Técnica Se usa por la plataforma de chat de Tawk.to para distinguir a los usuarios. 4 meses IDE Doubleclick Publicitària Google Adsense (DoubleClick): El uso de la cookie de DoubleClick permite a Google y a sus socios publicar anuncios basados en las visitas que los usuarios realizan en sus sitios o en otros sitios de Internet. 1 año SIDCC (x2) Google / Youtube Publicitària Se utiliza para almacenar información sobre cómo usa el sitio web y cualquier publicidad que haya visto antes de visitar este sitio web, además de para ayudar a personalizar la publicidad en las propiedades de Google recordando sus búsquedas más recientes, sus interacciones anteriores con los anuncios de un anunciante o resultados de búsqueda y sus visitas al sitio web de un anunciante. 1 año SID (x2) Google / Youtube Publicitària Se utiliza con fines de seguridad para almacenar registros cifrados y firmados digitalmente del ID de la cuenta de Google de un usuario y la hora de inicio de sesión más reciente, lo que permite a Google autenticar a los usuarios, evitar el uso fraudulento de las credenciales de inicio de sesión y proteger los datos de los usuarios de terceros no autorizados. Esto también se puede utilizar con fines de segmentación para mostrar contenido publicitario relevante y personalizado. 1 año __Secure-3PSID (x2) Google / Youtube Publicitària Se utiliza con fines de orientación para crear un perfil de los intereses del visitante del sitio web con el fin de mostrar publicidad de Google relevante y personalizada. 2 años __Secure-3PSIDCC (x2) Google / Youtube Publicitària Se utiliza con fines de orientación para crear un perfil de los intereses del visitante del sitio web con el fin de mostrar publicidad de Google relevante y personalizada. 2 años NID Google Publicitària Usado para guardar preferencias en un ID único de Google para recordar información tal como idoma preferido, cuantos resultados de búsqueda deseas ver o si se prefiere no tener el filtro de Google’s SafeSearch activado. 6 meses 1P_JAR Google Publicitària Usado para guardar información sobre como el usuario usa la web y cualquier anuncio que pueda haber visto previamente a visitar la web. Además se usa para ayudar a personalizar los productos de Google para el usuario. 1 mes OGP Google Publicitària Google utiliza esta cookie para activar y controlar la función de Google Maps. 1 mes OGPC Google Publicitària Utilizada por Google para almacenar las preferencias del usuario y la información durante la visualización de las páginas con los mapas de Google. 1 mes CONSENT (x2) Google / Youtube Técnica Para controlar la aceptación de cookies. 20 años APISID (x2) Google / Youtube Publicitària Se utiliza con fines de orientación para almacenar ID de Google de modo que su actividad se pueda vincular a través de dispositivos (si ya inició sesión en su cuenta de Google en otro dispositivo), con el fin de mostrar publicidad relevante y personalizada en todos los dispositivos. 2 años HSID (x2) Google / Youtube Publicitaria Se utiliza con fines de seguridad para almacenar registros cifrados y firmados digitalmente del ID de la cuenta de Google de un usuario y la hora de inicio de sesión más reciente, lo que permite a Google autenticar a los usuarios, evitar el uso fraudulento de las credenciales de inicio de sesión y proteger los datos de los usuarios de terceros no autorizados. Esto también se puede utilizar con fines de segmentación para mostrar contenido publicitario relevante y personalizado. 2 años SSID (x2) Google / Youtube Publicitaria Se utiliza para almacenar información sobre cómo usa el sitio web y cualquier publicidad que haya visto antes de visitar este sitio web, además de para ayudar a personalizar la publicidad en las propiedades de Google recordando sus búsquedas más recientes, sus interacciones anteriores con los anuncios de un anunciante o resultados de búsqueda y sus visitas al sitio web de un anunciante. 2 años ANID Google Publicitaria Usado para construir un perfil sobre los intereses del usuario de la web con el objetivo de mostrar anuncios de Google relevantes y personalizados. 1 año SAPISID (x2) Google / Youtube Publicitaria Se utiliza con fines de orientación para crear un perfil de los intereses del visitante del sitio web con el fin de mostrar publicidad de Google relevante y personalizada. 1 año __Secure-3PAPISID (x2) Google / Youtube Publicitaria Estas cookies se utilizan para entregar anuncios más relevantes para usted y sus intereses. 1 año YSC Youtube Publicitaria Registra una identificación única para mantener estadísticas de qué vídeos de Youtube ha visto el usuario. Cierre de sesión VISITOR_INFO1_LIVE Youtube Técnica Intenta calcular el ancho de banda del usuario en páginas con vídeos de Youtube integrados. 179 días PREF Youtube Publicitaria Es una cookie que almacena las preferencias de visualización y de búsqueda de los videos de youtube: idioma preferido, filtro safe-search, etc. 8 meses LOGIN_INFO Youtube Publicitaria El servicio de vídeo de YouTube utiliza esta cookie en páginas web con vídeos de YouTube incrustados. 2 años Consentimiento Cuando Ud. accede por primera vez a este Sitio Web, o no siendo la primera vez, accede a través de un dispositivo o navegador diferente al utilizado previamente, o si Ud. ha eliminado las cookies de su ordenador, Ud. podrá aceptar, rechazar la instalación de cookies, clicando en los botones establecidos al efecto. Al aceptar nuestras cookies a través del botón establecido al efecto, las cookies se guardarán en su disco duro de forma temporal o hasta que Ud. las elimine. Cambiar su consentimiento Configuración y deshabiltación de cookies En todo momento podrá acceder a la configuración de su navegador aceptando o rechazando todas las cookies, o bien seleccionar aquéllas cuya instalación admite y cuáles no, siguiendo uno de los siguientes procedimientos, que depende del navegador que utilice: A continuación le explicamos cómo hacerlo en los principales navegadores: Si utiliza Microsoft Internet Explorer, en la opción de menú Herramientas &gt; Opciones de Internet &gt; Privacidad &gt; Configuración Si utiliza Firefox, en la opción de menú Herramientas &gt; Opciones &gt; Privacidad Si utiliza Google Chrome, en la opción de menú Configuración &gt; Privacidad Si utiliza Safari, en la opción de menú Preferencias &gt; Menú de Seguridad En el caso de que su navegador no figure en la lista anterior, en la sección “Ayuda” del mismo encontrará las instrucciones necesarias para modificar los ajustes. Una alternativa al bloqueo de las cookies sería la activación del “modo privado” de su navegador. Este modo permite navegar a través de las páginas, pero éstas no quedarán registradas en el historial del navegador, en el almacén de las cookies ni en el historial de búsquedas una vez el usuario haya cerrado todas las pestañas de incógnito. Ud. podrá seguir visitando nuestro Sitio Web aunque su navegador esté en “modo privado”; sin embargo, la experiencia del usuario puede no ser óptima y algunas prestaciones pueden no funcionar. Por favor, consulte la sección de Ayuda de su navegador para obtener más información sobre cómo activar el “modo privado”. Esta política de cookies ha sido actualizada por última vez el 7 de marzo de 2021.</p>
            </div>
            <ButtonBasic onClick={hide} content="Принять" className="border-green-600 bg-green-600 hover:shadow-[0_10px_15px_rgba(226,57,54,0.22)] mt-2" />;
        </div>
    </div>;
}

export default LicenceDialog;