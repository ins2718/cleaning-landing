interface ItemsWrapperProps {
    items: ReactNode[] | ReactNode;
    style?: CSSProperties;
    className?: string;
}

type PropsWithOnClick = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
    text?: string;
}

type FormItemProps = {
    register: UseFormRegister<FieldValues>;
    errorText?: string;
    disabled?: boolean;
}

type SendOrderForm = {
    name?: string;
    phone: string;
    fbclid?: string;
    country?: string;
    city?: string;
    ip?: string;
    zip?: string;
}

type SendOrderFormResponse = {
    status: "ok";
}

type IpDetectAnswer = {
    status: "success" | "fail";
    countryCode: string;
    city: string;
    zip: string;
    query: string;
}