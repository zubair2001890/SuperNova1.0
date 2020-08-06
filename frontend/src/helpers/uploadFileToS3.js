import { sendUpdateAccount } from '../store/slices/middlewareAPI/middlewareAPI';
import { useDispatch } from 'react-redux';
const dispatch = useDispatch();
const AWS = require('aws-sdk');
// Type is one of profileImage, projectImage, labNoteDocument
export default uploadFileToS3 = function (fileContent, type, id) {
  const params = {
    Bucket: "supernova",
    Key: "File saved from user/project with id " + id,
    Body: fileContent
  };

  const s3 = new AWS.S3({
    // I thought it would would be more secure to store them as environment variables.
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  });

  s3.upload(params, function (err, data) {
    handleUpload(err, data, type)
  });
}

function handleUpload(err, data, type) {
  if (err) {
    throw err;
  }
  const location = data.location;
  console.log("File uploaded successfully to " + location);
  const { loginWithRedirect, isAuthenticated, logout, user, getAccessTokenSilently } = useAuth0();
  if (isAuthenticated) {
    switch (type) {
      case "profileImage":
        getAccessTokenSilently({
          audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
          scope: "read:current_user",
        }).then(authToken => dispatch(sendUpdateAccount({ data: { imageURL: location }, authToken: authToken })));
        break;

      case "projectImage":
        getAccessTokenSilently({
          audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
          scope: "read:current_user",
        }).then(authToken => dispatch(sendUpdateProject({ data: { projectImage: location }, authToken: authToken })));

      case "labNoteDocument": // It can be handled the same whether it's text or an image.
        getAccessTokenSilently({
          audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
          scope: "read:current_user",
        }).then(authToken => dispatch(sendUpdateProject({ data: { labNotes: location }, authToken: authToken })));
      default:
        throw new Error("The String parameter passed in was not of the correct type.");
    }
  } // Ends the if block for if isAuthenticated()
}


