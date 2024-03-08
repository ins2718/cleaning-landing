import ButtonBasic from "./button-basic";

function ButtonAccept({ onClick, text = "Aceptar y continuar" }: PropsWithOnClick) {
    return <ButtonBasic onClick={onClick} content={text} className="border-[#eee3ad] bg-[#eee3ad] !text-black h-[45px] p-[10px] w-full whitespace-nowrap rounded-[6px] cursor-pointer text-[15px] font-medium leading-[20px] text-center hover:border-black hover:border-solid hover:border-[1px]" />;
}

export default ButtonAccept;