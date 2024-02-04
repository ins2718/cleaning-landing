"use client";

import Header from "@/components/header";
import { Provider } from "react-redux";
import store from "../store";
import Main from "@/components/main";
import Overlay from "@/components/overlay";
import dynamic from "next/dynamic";
const RenderOnViewportEntry = dynamic(() => import("@/components/RenderOnViewportEntry"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <RenderOnViewportEntry className="min-h-72">
        <Footer />
      </RenderOnViewportEntry>
      <Overlay />
    </Provider>
  );
}
