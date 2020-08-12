export const getPictureUrl = (imageURL = "") => {
  const { REACT_APP_BUCKET_URL } = process.env;
  return `${REACT_APP_BUCKET_URL}${imageURL}`;
};
