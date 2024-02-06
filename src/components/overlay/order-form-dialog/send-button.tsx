import ButtonBasic from "@/components/buttons/button-basic";

function SendButton({ onClick }: PropsWithOnClick) {
    return <ButtonBasic type="submit" onClick={onClick} content="Ordenar limpieza" className="border-[#e23936] bg-[#e23936] hover:shadow-[0_10px_15px_rgba(226,57,54,0.22)]" />;
}

export default SendButton;