import Image from "@/components/Image";

type TestimonialProps = {
    name: string;
    text: string;
    image: string;
};

function Testimonial({ name, text, image }: TestimonialProps) {
    return <div className="flex justify-center content-center">
        <div className="pr-8 flex-[0_0_150px] h-[120px] my-auto">
            <Image width={120} height={120} src={image} alt={name} className="rounded-full border-[6px] border-[#777] object-cover size-[120px]" />
        </div>
        <div className="flex flex-col justify-evenly max-w-4xl">
            <p className="font-secondary whitespace-break-spaces text-black">{text}</p>
            <h6 className="leading-[25px] text-[20px] font-primary capitalize">{name}</h6>
        </div>
    </div>;
}

export default Testimonial;