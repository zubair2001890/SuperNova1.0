const AWS = require('aws-sdk');

export default function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default uploadFileToS3 = function(fileContent, id)
{
  const params = {
    Bucket: "supernova",
    Key: "Image saved from user with id " + id,
    Body: fileContent 
  };

  const s3 = new AWS.S3({
    // I thought it would would be more secure to store them as environment variables.
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  })

  s3.upload(params, function(err, data) {
    if (err) {
      throw err;
    }
    const location = data.location;
    console.log("File uploaded successfully to " + location);
  });
}
