type ArrowProps = React.PropsWithChildren & PropsWithOnClick & {
    className?: string;
}

function Arrow({ onClick, className = "", children }: ArrowProps) {
    return <button onClick={onClick} className={"before:bg-no-repeat before:bg-center before:flex before:duration-300 before:size-[75px] before:rounded-[50%] before:bg-[rgba(255,255,255,0.7)] xl:before:bg-white before:absolute before:left-0 before:top-0 absolute top-1/2 block -translate-y-1/2 cursor-pointer text-transparent border-none outline-none bg-transparent size-[75px] rounded-[50%] z-10 hover:before:bg-[#1B88D8] " + className}>{children}</button>;
}

function NextArrow({ onClick }: PropsWithOnClick) {
    return <Arrow className="before:bg-[url(/images/our-works/sl-r.svg)] right-[-37px]" onClick={onClick}>Next</Arrow>;
}

function PrevArrow({ onClick }: PropsWithOnClick) {
    return <Arrow className="before:bg-[url(/images/our-works/sl-l.svg)] left-[-37px]" onClick={onClick}>Previous</Arrow>;
}

export { NextArrow, PrevArrow };