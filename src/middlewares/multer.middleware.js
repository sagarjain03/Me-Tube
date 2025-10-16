import multer from "multer"
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) { 
    cb(null, file.originalname) // yha aap apne hisab se file name set kar sakte ho
  }
})

export const upload = multer({ storage ,})