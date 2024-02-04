type ItemCardProps = {
    imageUrl: string;
    title: string;
};

function ItemCard({ imageUrl, title }: ItemCardProps) {
    return <div className="relative pt-[38px] pb-[28px] mx-[10px] mb-[20px] mt-0 w-[calc(50%-20px)] min-[720px]:w-[calc(33.4%-10px)] min-[992px]:w-[calc(25%-20px)] break-words flex flex-col justify-between items-center h-[254px] px-0 bg-white cursor-pointer hover:shadow-[0_11px_22px_rgba(69,75,84,0.08)]">
        <div className="flex items-center justify-center text-[0] h-[158px] w-[189px] mx-auto mt-0 mb-[4px] max-w-full">
            <img src={imageUrl} alt={title} />
        </div>
        <div className="font-bold text-[16px] text-center text-black">{title}</div>
    </div>;
}

export default ItemCard;