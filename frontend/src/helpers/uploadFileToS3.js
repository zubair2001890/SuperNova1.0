import {sendUpdateAccount} from '../store/slices/middlewareAPI/middlewareAPI';
const AWS = require('aws-sdk');
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
  });

  s3.upload(params, handleUpload);
} 

function handleUpload(err, data)
  {
    if (err) {
        throw err;
      }
      const location = data.location;
      console.log("File uploaded successfully to " + location);
      const { loginWithRedirect, isAuthenticated, logout, user, getAccessTokenSilently } = useAuth0();
      if (isAuthenticated) {
          getAccessTokenSilently({
             audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
             scope: "read:current_user",
             // So in the below code the imageURL property of the given user should be updated with the ID.
          }).then(authToken => dispatch(sendUpdateAccount({ data: { imageURL: location }, authToken: authToken })));
      }
  }
  

