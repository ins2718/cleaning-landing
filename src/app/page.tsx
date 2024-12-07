"use client";

import Header from "@/components/header";
import { Provider } from "react-redux";
import store from "../store";
import Main from "@/components/main";
import Overlay from "@/components/overlay";
import dynamic from "next/dynamic";
import LocalStorageInitializer from "@/components/local-storage-initializer";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import options from "./options";
const RenderOnViewportEntry = dynamic(() => import("@/components/render-on-viewport-entry"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

export default function Home() {
  useEffect(() => {
    const gtmId = options.gtmId;
    if (gtmId) {
      TagManager.initialize({ gtmId });
    }
  }, []);
  return (
    <Provider store={store}>
      <LocalStorageInitializer>
        <Header />
        <Main />
        <RenderOnViewportEntry className="min-h-72">
          <Footer />
        </RenderOnViewportEntry>
        <Overlay />
      </LocalStorageInitializer>
    </Provider>
  );
}
