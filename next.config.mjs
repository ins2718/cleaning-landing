/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        loader: "custom",
        loaderFile: "./src/image-loader.ts",
    },
};

export default nextConfig;
