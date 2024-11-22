import { useAppDispatch } from "@/hooks";
import ButtonBasic from "./button-basic";
import { showOrderForm } from "@/reducers/header-reducer";

function ButtonOrder() {
    const dispatch = useAppDispatch();
    return <ButtonBasic onClick={() => dispatch(showOrderForm())} content="Solicitar presupuesto" className="border-[#1b88d8] bg-[#1b88d8] hover:shadow-[0_10px_15px_rgba(27,136,216,0.22)]" />;
}

export default ButtonOrder;