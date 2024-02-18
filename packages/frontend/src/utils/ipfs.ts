const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const JWT =
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxZmYyMjYyNC05NTBmLTQ1YjEtOWU4MS01Nzg4ZDJlOWVhNWQiLCJlbWFpbCI6ImF0YWJlcmtjZWtpY0B5YWhvby5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiOWEzZDc3N2ZiODBjOTMxN2ExOTciLCJzY29wZWRLZXlTZWNyZXQiOiI4YmI2ODgxNzcxZDExZDI0YzRjNWFmNTY5MTY5N2ZkNzVjYjdkZjQ3ZmNiNTJhOGU3MzAxNTllZWUwNzdmMmIxIiwiaWF0IjoxNzA4MjA3NDM0fQ
    .YpSSk2FJj2ftxcIXFa0rZs7PWleJfazXPFwLEMlqzdA;

const pinFileToIPFS = async () => {
  const formData = new FormData();
  const src = "path/to/file.png";

  const file = fs.createReadStream(src);
  formData.append("file", file);

  const pinataMetadata = JSON.stringify({
    name: "File name",
  });
  formData.append("pinataMetadata", pinataMetadata);

  const pinataOptions = JSON.stringify({
    cidVersion: 0,
  });
  formData.append("pinataOptions", pinataOptions);

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        maxBodyLength: "Infinity",
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: `Bearer ${JWT}`,
        },
      },
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
pinFileToIPFS();