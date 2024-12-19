
import grid from "gridfs-stream"
import mongoose from "mongoose"

let gfs, gridfsBucket;

const conn = mongoose.connection;

conn.once("open", () => {
  // Initialize GridFSBucket
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "photos", // Base bucket name, MongoDB appends `.files` and `.chunks`
  });

  // Initialize GridFS stream
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("photos"); // Base bucket name without `.files`
});


const url = "http://localhost:5000"

export const UploadImage = (req,res) => {

  // console.log(req.file)

  if(!req.file){
    return res.status(404).json({message: "File is not Found"})
  }

  const imageUrl = `${url}/file/${req.file.originalname}`

  return res.status(200).json({imageUrl});

}

export const getImage = async (req, res) => {

  console.log(req.params.filename);
  try {
    // Find the file in the database by filename
    const file = await gfs.files.findOne({ filename: `${req.params.filename}` });

    // Check if the file exists
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    // Open a stream to download the file
    const stream = gridfsBucket.openDownloadStream(file._id);
    stream.pipe(res); // Pipe the file to the response
  } catch (error) {
    console.error("Error fetching image:", error.message); // Log the exact error for debugging
    return res.status(500).json({ message: "Error while getting image from database" });
  }
};
