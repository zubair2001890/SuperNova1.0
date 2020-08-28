// const AWS = require('aws-sdk');

export default function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
