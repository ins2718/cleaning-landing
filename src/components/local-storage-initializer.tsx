import { useAppDispatch } from "@/hooks";
import { setIsCookieConfirmed } from "@/reducers/header-reducer";
import { ReactNode, useEffect } from "react";

interface LocalStorageInitializer {
    children: ReactNode;
};

const LocalStorageInitializer = ({ children }: LocalStorageInitializer) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (typeof window !== "undefined") {
            dispatch(setIsCookieConfirmed(Boolean(window.localStorage.getItem("cookie"))));
        }
    }, [dispatch]);

    return <>{children}</>;
};

export default LocalStorageInitializer;