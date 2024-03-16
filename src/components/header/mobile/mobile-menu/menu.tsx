import options from "@/app/options";
import { useAppDispatch } from "@/hooks";
import { hideMobileMenu } from "@/reducers/header-reducer";

export default function Menu() {
    const dispatch = useAppDispatch();
    const { menuItems } = options;
    return <ul className="pt-[40px] pl-[40px]">
        {menuItems.map(({ title, href }, i) => <li key={i} className="list-none mb-[15px] pr-[15px]">
            <a
                className="font-bold text-[20px] text-[#3c3d41] no-underline"
                onClick={() => dispatch(hideMobileMenu())}
                href={href}
            >{title}</a>
        </li>)}
    </ul>;
}