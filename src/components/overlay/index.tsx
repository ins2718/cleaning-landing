import ButtonWhatsAppCircle from "../buttons/button-whats-app-circle";
import OrderDialog from "./order-form-dialog";
import LazyVideoGallery from "./video-gallery/lazy-video-gallery";

function Overlay() {
    return <>
        <OrderDialog />
        <LazyVideoGallery />
        <ButtonWhatsAppCircle />
    </>;
}

export default Overlay;