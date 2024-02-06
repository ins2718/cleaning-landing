import options from "@/app/options";
import MenuItem from "./menu-item";

function Menu() {
    const { menuItems } = options;
    return <ul className="lg:flex justify-evenly items-center border-b-[#ededee] border-b-[1px] hidden">
        {menuItems.map(({ title, href }, i) => <MenuItem key={i} title={title} href={href} />)}
    </ul>;
}

export default Menu;