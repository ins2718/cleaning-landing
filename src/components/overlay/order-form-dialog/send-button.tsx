import ButtonBasic from "@/components/buttons/button-basic";

function SendButton({ onClick, disabled = false, text = "Ordenar limpieza" }: PropsWithOnClick) {
    return <ButtonBasic disabled={disabled} type="submit" onClick={onClick} content={text} className="border-[#e23936] bg-[#e23936] hover:shadow-[0_10px_15px_rgba(226,57,54,0.22)]" />;
}

export default SendButton;