import axios from "axios";
// const pinataSDK = require("@pinata/sdk");
import pinataSDK from "@pinata/sdk";
import { createReadStream } from "streamifier";

import { $ } from "@builder.io/qwik";

const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxZmYyMjYyNC05NTBmLTQ1YjEtOWU4MS01Nzg4ZDJlOWVhNWQiLCJlbWFpbCI6ImF0YWJlcmtjZWtpY0B5YWhvby5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiOTIwYjUwZDBkNTc3NTE4NGExYTciLCJzY29wZWRLZXlTZWNyZXQiOiJiMGI4NWU3NDkzN2QyMTc2ZTBhOGQyYTdiYzRiYWY4NWE3MTJlN2YxZGNlOGY2OWU2ZTNkNDg4YjEwZmE5NzU4IiwiaWF0IjoxNzA4NDYzODMyfQ.aT-lqLWZHswoUMgPQgKqvwKtUC-OX-NEU2Ji904Frac";

const getBase64StringFromDataURL = (dataURL: string) =>
  dataURL.replace("data:", "").replace(/^.+,/, "");

const pinata = new pinataSDK({ pinataJWTKey: JWT });

export const pinFileToIPFS = $(async (img: any) => {
  try {
    console.log(img);
    console.log(getBase64StringFromDataURL(img.file));
    let buffer = Buffer.from(getBase64StringFromDataURL(img.file), "base64");
    let stream = createReadStream(buffer);
    const body = {
      name: "File",
      imgData: img,
    };

    const options = {
      pinataMetadata: {
        name: "asd",
        keyvalues: {
          customKey: "customValue",
          customKey2: "customValue2",
        },
      },
      pinataOptions: {
        cidVersion: 0,
      },
    };
    const res = await pinata.pinFileToIPFS(stream, options);
    console.log(res);
  } catch (error) {
    console.log("err", error);
  }
});

export const pinJsonToIPFS = $(async (img: any) => {
  try {
    var buffer = Buffer.from(img, "base64");
    var stream = createReadStream(buffer);
    const body = {
      name: "File",
      imgData: img,
    };

    const pinata = new pinataSDK({ pinataJWTKey: JWT });

    const options = {
      pinataMetadata: {
        name: "asd",
        keyvalues: {
          customKey: "customValue",
          customKey2: "customValue2",
        },
      },
      pinataOptions: {
        cidVersion: 0,
      },
    };
    const res = await pinata.pinJSONToIPFS(body, options);
    console.log(res);
  } catch (error) {
    console.log("err", error);
  }
});
