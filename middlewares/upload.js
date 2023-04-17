const multer = require("multer");
let imageName = "";
const storage = multer.diskStorage({
 destination: (req, file, cb) => {
  cb(null, "./storages");
 },
 filename: (req, file, cb) => {
   // imageName = Date.now() + path.extname(file.originalname)
   // cb(null, imageName)
  cb(null, file.originalname);
 },

});
const fileFilter = (req, file, cb) => {
 if (
  file.mimetype == "image/jpeg" ||
  file.mimetype == "image/png" ||
  file.mimetype == "image/jpg"
 ) {
  cb(null, true);
 } else {
  cb(null, false);
 }
};


const upload = multer({
    storage: storage,
    limits: { fileSize: 3000000 },fileFilter: fileFilter
  });
//const upload = multer({ storage: storage, fileFilter: fileFilter });
module.exports = upload;