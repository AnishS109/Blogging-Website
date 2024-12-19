

import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";

const storage = new GridFsStorage({
  url: "mongodb+srv://root:root@lms.8dvli.mongodb.net/BLOG",
  file: (req, file) => {
    // console.log("File Info:", file);  

    const match = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    
    if (match.indexOf(file.mimetype) === -1) {
      console.error("Invalid file type:", file.mimetype);
      return `${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${file.originalname}`,
    };
  },
});

export default multer({ storage });