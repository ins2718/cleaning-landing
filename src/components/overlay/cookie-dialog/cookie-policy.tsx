import options from "@/app/options";
import ButtonAccept from "@/components/buttons/button-accept";

type CookiePolicyProps = {
    hide: () => void;
}

function CookiePolicy({ hide }: CookiePolicyProps) {
    const { email } = options;
    return <div className="size-full top-[3vh] left-1/2 -translate-x-1/2 z-40 absolute p-[46px_58px_48px_59px] bg-white max-w-xl w-full max-h-[94vh] rounded-[12px]">
        <div onClick={hide} className="cursor-pointer absolute top-[32px] right-[24px] size-[20px] z-[3]
before:bg-[#91a5be] before:content-[''] before:rotate-45 before:left-0 before:h-[2px] before:mt-px before:bottom-1/2 before:w-full before:absolute before:hover:bg-black before:hover:duration-200 before:hover:transition-colors
after:bg-[#91a5be] after:content-[''] after:-rotate-45 after:left-0 after:h-[2px] after:mt-px after:bottom-1/2 after:w-full after:absolute after:hover:bg-black after:hover:duration-200 after:hover:transition-colors"/>
        <div className="bg-white size-full flex flex-col">
            <h2 className="font-primary text-[20px] leading-[23px] text-left min-[480px]:text-center text-[#444b54] ">Política de cookies</h2>
            <div className="overflow-y-auto">
                <ol className="list-decimal list-inside">
                    <li className=" ">¿Qué son las cookies?
                        <p>Las cookies son pequeños archivos de texto que un sitio web guarda en su computadora o dispositivo móvil. Se utilizan ampliamente para que los sitios web funcionen correctamente y para recopilar información sobre cómo los visitantes usan esos sitios.</p>
                    </li>
                    <li> ¿Qué cookies utilizamos?
                        <p>Utilizamos dos tipos de cookies:</p>
                        <ul className="ml-[20px] list-disc list-inside">
                            <li>Cookies necesarias: Estas cookies son necesarias para que el sitio web funcione. Le permiten navegar por el sitio y utilizar sus funciones.</li>
                            <li>Cookies de análisis: Estas cookies recopilan información sobre cómo utiliza el sitio web. Esta información se utiliza para estadísticas generales y para mejorar el funcionamiento del sitio web.</li>
                        </ul>
                    </li>
                    <li>¿Cómo deshabilitar las cookies?
                        <p>Puede deshabilitar las cookies en la configuración de su navegador. Sin embargo, deshabilitar las cookies puede provocar que algunas funciones del sitio web no funcionen correctamente.</p>
                    </li>
                    {/* <li>Política de privacidad
                        <p>Para obtener más información sobre cómo utilizamos sus datos personales, consulte nuestra Política de privacidad: https://policies.google.com/privacy?hl=es-419.</p>
                    </li> */}
                    <li>Información de contacto
                        <p>Si tiene alguna pregunta sobre nuestra política de cookies, comuníquese con nosotros a {email}</p>
                    </li>
                    <li>Actualizaciones
                        <p>Podemos cambiar esta política de cookies en cualquier momento. Le informaremos sobre cualquier cambio sustancial actualizando la fecha en la parte superior de esta política.</p>
                    </li>
                    <li>Más información
                        <ul className="ml-[20px] list-disc list-inside">
                            <li>Información sobre cookies de Google: <a className="text-blue-500" href="https://policies.google.com/technologies/cookies">https://policies.google.com/technologies/cookies</a></li>
                            <li>Información sobre cookies de Mozilla: <a className="text-blue-500" href="https://developer.mozilla.org/es/docs/Web/HTTP/Cookies">https://developer.mozilla.org/es/docs/Web/HTTP/Cookies</a></li>
                        </ul>
                    </li>
                </ol>
            </div>
            <ButtonAccept onClick={hide} text="close" />
        </div>
    </div>;
}

export default CookiePolicy;