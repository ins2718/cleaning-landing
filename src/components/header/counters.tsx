import { YMInitializer } from "react-yandex-metrika";
import options from "@/app/options";
import ReactPixel from 'react-facebook-pixel';

function Counters() {
    const { facebookPixelId, yandexMetricaIds } = options;
    ReactPixel.init(facebookPixelId);
    ReactPixel.pageView();
    return <YMInitializer accounts={yandexMetricaIds} options={{ webvisor: true, defer: true }} version="2" />;
}

export default Counters;