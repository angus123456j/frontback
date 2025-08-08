const multer = require("multer");
const { S3Client } = require("@aws-sdk/client-s3");
const { Upload } = require("@aws-sdk/lib-storage");
const { randomUUID } = require("crypto");
const dotenv = require("dotenv");
dotenv.config();

const storage = multer.memoryStorage();
const upload = multer({ storage });

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const s3Uploader = [
  upload.single("image"),
  async (req, res, next) => {
    if (!req.file) return next();

    const file = req.file;
    const fileName = `${Date.now()}-${randomUUID()}-${file.originalname}`;
    // 2025-8-8-11-02-1231453523414-chiken
    try {
      const parallelUpload = new Upload({
        client: s3,
        params: {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: fileName,
          Body: file.buffer,
          ContentType: file.mimetype,
        },
      });

      await parallelUpload.done();

      const imageURL = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;

      req.imageURL = imageURL;
      next();
    } catch (err) {
      console.error("S3 Upload Error:", err);
      res.status(500).json({ error: "Image upload failed" });
    }
  },
];

module.exports = s3Uploader;
