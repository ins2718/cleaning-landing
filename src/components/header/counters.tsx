import { YMInitializer } from "react-yandex-metrika";
import options from "@/app/options";
import ReactPixel from 'react-facebook-pixel';

function Counters() {
    const { facebookPixelId, yandexMetricaIds } = options;
    ReactPixel.init(facebookPixelId);
    ReactPixel.pageView();
    const metricaOptions = { webvisor: true, clickmap: true, trackLinks: true, accurateTrackBounce: true };
    return <YMInitializer accounts={yandexMetricaIds} options={metricaOptions} version="2" />;
}

export default Counters;