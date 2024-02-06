interface ItemsWrapperProps {
    items: ReactNode[] | ReactNode;
    style?: CSSProperties;
    className?: string;
}

type PropsWithOnClick = {
    onClick?: () => void;
}

type FormItemProps = {
    register: UseFormRegister<FieldValues>;
    errorText?: string;
}