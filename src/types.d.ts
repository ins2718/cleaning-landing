interface ItemsWrapperProps {
    items: ReactNode[] | ReactNode;
    style?: CSSProperties;
    className?: string;
}

type PropsWithOnClick = {
    onClick?: () => void;
}