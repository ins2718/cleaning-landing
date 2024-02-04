function LeftItemsWrapper({ items, style = {}, className = "" }: ItemsWrapperProps) {
    return <div className={"flex items-center " + className} style={style} >
        {items}
    </div>
}

export default LeftItemsWrapper;