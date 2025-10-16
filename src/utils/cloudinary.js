import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        //upload file on cloudinary

     const response =  await  cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto",
        })

        //file has been uploaded successfully on cloudinary

        console.log("file has been uploaded on cloudinary",response);
        return response.url;
    } catch (error) {
//remove the locally saved temporary file as the upload has failed
        fs.unlinkSync(localFilePath)
        console.error("Error uploading file to cloudinary", error);
        return null;
    }
}


export {uploadToCloudinary}