import options from "@/app/options";
import ButtonAccept from "@/components/buttons/button-accept";

type CookiePolicyProps = {
    hide: () => void;
}

function PrivatePolicy({ hide }: CookiePolicyProps) {
    const { email } = options;
    return <div className="size-full top-[3vh] left-1/2 -translate-x-1/2 z-40 absolute p-[46px_58px_48px_59px] bg-white max-w-xl w-full max-h-[94vh] rounded-[12px]">
        <div onClick={hide} className="cursor-pointer absolute top-[32px] right-[24px] size-[20px] z-[3]
before:bg-[#91a5be] before:content-[''] before:rotate-45 before:left-0 before:h-[2px] before:mt-px before:bottom-1/2 before:w-full before:absolute before:hover:bg-black before:hover:duration-200 before:hover:transition-colors
after:bg-[#91a5be] after:content-[''] after:-rotate-45 after:left-0 after:h-[2px] after:mt-px after:bottom-1/2 after:w-full after:absolute after:hover:bg-black after:hover:duration-200 after:hover:transition-colors"/>
        <div className="bg-white size-full flex flex-col">
            <h2 className="font-primary text-[20px] leading-[23px] text-left min-[480px]:text-center text-[#444b54] ">Política de Privacidad</h2>
            <div className="overflow-y-auto">
                <ol className="list-decimal list-inside">
                    <li className=" ">Introducción
                        <p>Nosotros, <b>limpiarmuebles.pro</b>, valoramos su privacidad. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos su información personal.</p>
                    </li>
                    <li> ¿Qué información recopilamos?
                        <p>Cuando utiliza nuestro sitio web o nuestros servicios, podemos recopilar la siguiente información:</p>
                        <ul className="ml-[20px] list-disc list-inside">
                            <li><b>Información personal:</b> Su nombre, dirección de correo electrónico, número de teléfono, dirección.</li>
                            <li><b>Información demográfica:</b> Su edad, sexo, intereses.</li>
                            <li><b>Información técnica:</b> Su dirección IP, tipo de navegador, sistema operativo.</li>
                            <li><b>Información de pedidos:</b> Información sobre los pedidos que realiza en nuestro sitio web.</li>
                            <li><b>Información de uso:</b> Cómo utiliza nuestro sitio web y nuestros servicios.</li>
                        </ul>
                    </li>
                    <li>¿Cómo utilizamos su información?
                        <p>Utilizamos su información:</p>
                        <ul className="ml-[20px] list-disc list-inside">
                            <li>Para contactarlo.</li>
                            <li>Para proporcionarle servicios.</li>
                            <li>Para mejorar nuestro sitio web y nuestros servicios.</li>
                            <li>Para proteger nuestros derechos e intereses legítimos.</li>
                        </ul>
                    </li>
                    <li>¿Con quién compartimos su información?
                        <ol className="ml-[20px] list-decimal list-inside">
                            <li>Disposiciones generales
                                <p>No compartiremos su información con terceros sin su consentimiento.</p>
                            </li>
                            <li>Excepciones
                                <p>En algunos casos, podemos compartir su información con terceros que:</p>
                                <ul className="ml-[20px] list-disc list-inside">
                                    <li>Nos brindan servicios necesarios para el funcionamiento de nuestro sitio web y nuestros servicios.</li>
                                    <li>Nos ayudan a mejorar nuestro sitio web y nuestros servicios.</li>
                                    <li>Nos ayudan a proteger nuestros derechos e intereses legítimos.</li>
                                </ul>
                            </li>
                            <li>Transferencia al ejecutor final
                                <p>En el caso de un pedido de servicio, podemos transferir sus datos de contacto (nombre, teléfono) al ejecutor final, quien le proporcionará directamente dicho servicio.</p>
                            </li>
                        </ol>
                    </li>
                    <li>¿Cómo protegemos su información?
                        <p>Tomamos todas las medidas necesarias para proteger su información contra pérdida, robo, uso no autorizado, acceso, divulgación, alteración o destrucción.</p>
                    </li>
                    <li>Sus derechos
                        <p>Usted tiene derecho a:</p>
                        <ul className="ml-[20px] list-disc list-inside">
                            <li>Acceder a su información.</li>
                            <li>Solicitar la corrección o eliminación de su información.</li>
                            <li>Oponerse al procesamiento de su información.</li>
                            <li>Restringir el procesamiento de su información.</li>
                            <li>Revocar su consentimiento para el procesamiento de su información.</li>
                        </ul>
                    </li>
                    <li>¿Cómo contactarnos?
                        <p>Si tiene alguna pregunta sobre esta política de privacidad, contáctenos en {email}</p>
                    </li>
                    <li>Cambios en esta política de privacidad
                        <p>Podemos cambiar esta política de privacidad en cualquier momento. Le informaremos sobre cualquier cambio sustancial actualizando la fecha en la parte superior de esta política.</p>
                    </li>
                    <li>Su consentimiento con esta Política de Privacidad
                        <p>Al utilizar nuestro sitio web o nuestros servicios, usted acepta los términos de esta Política de Privacidad.</p>
                    </li>
                </ol>
            </div>
            <ButtonAccept onClick={hide} text="close" />
        </div>
    </div>;
}

export default PrivatePolicy;