import Image from "next/image";

type ItemCardProps = {
    imageUrl: string;
    title: string;
    text: string;
};

function ItemCard({ imageUrl, title, text }: ItemCardProps) {
    return <div className="mx-[10px] w-[calc(100%-20px)] min-[480px]:w-[calc(41.7%-10px)] min-[992px]:w-[calc(25%-20px)] break-words">
        <div className="flex flex-col items-center justify-center">
            <div className="mb-[18px] h-[82px] flex justify-center items-end">
                <Image src={imageUrl} alt={title} />
            </div>
            <div className="leading-[1.3] mb-[11px] font-bold text-[17px] text-center text-[#3c3d41] h-[2.5em] flex items-center">{title}</div>
            <div className="text-[#3c3d41] text-[13px] leading-[1.7] text-left">{text}</div>
        </div>
    </div>;
}

export default ItemCard;