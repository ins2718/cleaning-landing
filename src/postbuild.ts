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
            if ([".png", ".jpg"].includes(fullName.substring(fullName.length - 4))) {
                ret.push(fullName);
            }
        }
    });
    return ret;
}

async function main() {
    if (!prefix) {
        return;
    }
    const localFiles = getAllImages("out/_next/static/media");
    const serverFiles = await cloudinary.v2.api.resources({
        type: "upload",
        prefix: prefix,
    });
    const localFilesNames = localFiles.map(fileName => fileName.substring(fileName.lastIndexOf("/") + 1));
    const serverFilesNames: string[] = serverFiles.resources.map((f: any) => (`${f.public_id}.${f.format}`).substring(prefix.length));
    const deleteArray = serverFilesNames.filter(fileName => !localFilesNames.includes(fileName));
    const addArray = localFilesNames.filter(fileName => !serverFilesNames.includes(fileName));
    console.log("upload files:", addArray);
    addArray.forEach(async fileName => {
        await cloudinary.v2.uploader.upload("out/_next/static/media/" + fileName, {
            public_id: prefix + fileName.substring(0, fileName.lastIndexOf("."))
        });
    });
    deleteArray.forEach(async fileName => {
        await cloudinary.v2.uploader.destroy(prefix + fileName.substring(0, fileName.lastIndexOf(".")));
    });
    console.log("delete files:", deleteArray);
}


main();