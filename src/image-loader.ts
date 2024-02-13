type CloudinaryLoaderProps = {
    src: string
    width: number
    quality?: number
};

export default function cloudinaryLoader({ src }: React.ImgHTMLAttributes<HTMLImageElement>) {
    return src;
}