import { hideOrderForm } from "@/reducers/header-reducer";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Overlay from "../overlay";
import { useState } from "react";
import Form from "./form";

function OrderDialog() {
    const dispatch = useAppDispatch();
    const hideForm = () => dispatch(hideOrderForm());
    const { isOrderFormVisible } = useAppSelector(state => state.header);
    const [loaded, setLoaded] = useState(false);
    if (isOrderFormVisible && !loaded) {
        setLoaded(true);
    }
    return <Overlay onClick={hideForm} isVisible={isOrderFormVisible}>
        <Form />
    </Overlay>;
}

export default OrderDialog;