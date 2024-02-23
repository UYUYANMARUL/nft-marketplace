import { globalAction$ } from "@builder.io/qwik-city";
import { pinFileToIPFS } from "./ipfs";

export const useImageUploadtoIPFS = globalAction$(async (data) => {
  const res = await pinFileToIPFS(data);
  // console.log(res);
});
