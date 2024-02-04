type MenuItemProps = {
    title: string;
    href?: string;
};

function MenuItem({ title, href = "#" }: MenuItemProps) {
    return <li className="hidden relative lg:block before:hover:bg-[#1b88d8] before:content-[''] before:bottom-px before:absolute before:left-0 before:w-full before:h-px before:transition before:duration-300">
        <a className="py-[20px] block text-[#3c3d41] font-[museo500] list-none" title={title} href={href}>{title}</a>
    </li>;
}

export default MenuItem;