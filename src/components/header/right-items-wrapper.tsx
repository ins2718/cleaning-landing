function RightItemsWrapper({ items, style = {}, className = "" }: ItemsWrapperProps) {
    return <div style={style} className={"flex justify-center content-end " + className} >{items}</div>
}

export default RightItemsWrapper;