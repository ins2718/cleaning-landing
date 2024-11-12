const cloudinary = require("cloudinary");
require("dotenv").config();
const fs = require("fs");

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true
});

const prefix = process.env.NEXT_PUBLIC_CLOUDINARY_PATH;

function getAllImages(path: string): string[] {
    const ret: string[] = [];
    fs.readdirSync(path).forEach((fname: string) => {
        const fullName = `${path}/${fname}`;
        if (fs.lstatSync(fullName).isDirectory()) {
            ret.push(...getAllImages(fullName));
        } else {
            if ([".png", ".jpg", ".svg"].includes(fullName.substring(fullName.length - 4))) {
                ret.push(fullName);
            }
        }
    });
    return ret;
}

function getAllImagesObject(baseDir: string) {
    const localFiles = getAllImages(baseDir);
    const localFilesNames = Object.fromEntries(localFiles.map(fileName => [fileName.substring(baseDir.length + 1), fileName]));
    return localFilesNames;
}

async function main() {
    if (!prefix) {
        return;
    }
    const localFilesNames = ["public/images", "out/_next/static/media"].reduce<{ [key: string]: string }>((result, fileName) => ({ ...result, ...getAllImagesObject(fileName) }), {});
    const serverFiles = await cloudinary.v2.api.resources({
        type: "upload",
        prefix: prefix,
        max_results: 500,
    });
    // console.log(serverFiles);
    const serverFilesNames = Object.fromEntries(serverFiles.resources.map((f: any) => [(`${f.public_id}.${f.format}`).substring(prefix.length), `${f.public_id}.${f.format}`]));
    // console.log(Object.keys(localFilesNames), Object.keys(serverFilesNames))
    const deleteArray = Object.keys(serverFilesNames).filter(fileName => !Object.keys(localFilesNames).includes(fileName));
    const addArray = Object.keys(localFilesNames); // Object.keys(localFilesNames).filter(fileName => !Object.keys(serverFilesNames).includes(fileName));
    // console.log(addArray, deleteArray)
    console.log("upload files:", addArray);
    addArray.forEach(async fileName => {
        try {
            await cloudinary.v2.uploader.upload(localFilesNames[fileName], {
                public_id: prefix + fileName.substring(0, fileName.lastIndexOf("."))
            });
        } catch (e) {
            console.log(fileName, e);
        }
    });
    deleteArray.forEach(async fileName => {
        await cloudinary.v2.uploader.destroy(prefix + fileName.substring(0, fileName.lastIndexOf(".")));
    });
    console.log("delete files:", deleteArray);
}


main();