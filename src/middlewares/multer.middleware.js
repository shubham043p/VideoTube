import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
  
export const upload = multer({
    storage,
})







  // filename: filename kya hona chahiye uske liye function hai
  //destination ke neeche
  //cb: callback
  //original : server par thodi der ke liye hota hai phir cloudinary pr upload ho jata hai
