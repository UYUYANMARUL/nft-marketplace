import { $ } from "@builder.io/qwik";
import { ethers } from "ethers";
import { notify } from "./notification";

export const connectToMetaMask = $(async () => {
  // const ethereum = window.ethereum;
  // const provider = new ethers.JsonRpcProvider("https://rpc2.sepolia.org");

  // Get write access as an account by getting the signer
  // const signer = await provider.getSigner();
  if (!window.etherum) {
    notify("hi", {});

    return "";
  } else {
    const provider = new ethers.BrowserProvider(window.ethereum);
    // const provider = ethers.getDefaultProvider();

    // It also provides an opportunity to request access to write
    // operations, which will be performed by the private key
    // that MetaMask manages for the user.
    const signer = await provider.getSigner();
    const message = "sign into ethers.org?";

    const sig = await signer.signMessage(message);
    console.log(sig);
    return sig;
  }
});

// if (ethereum) {
//   const wallet = await ethereum.request({
//     method: "eth_requestAccounts",
//   });
//   const sign = await ethereum.request({
//     method: "personal_sign",
//     params: [
//       "0x57656c636f6d6520746a20436572746966696361746520444170702e204b696e646c79207369676e2074686973206d65737361676520746f2070726f636565642e20546869732070726f63656475726520646f6573206e6f74207265717569726520616e792045544820746f2070726f636573732e",
//       wallet[0],
//     ],
//   });

// console.log(signer);
// const tx = await signer.sendTransaction({
//   to: "0x1bb98172f268F6e3F966c16D4988e0837ADf89Ce",
//   value: parseEther("0.2"),
// });
// const NftMarketPlaceAbi = [
//   "function buyNFT(address collectionAddress, uint256 tokenId, address tokenOwner)",
//   "function cancelSale(address collectionAddress, uint256 tokenId, address tokenOwner)",
//   "function startsaleNFT(address collectionAddress, string memory collectionName, uint256 price, uint256 tokenId)",
//   "function returnCollections() public view returns (address[] memory)",
//   "function createCollection(string memory name, string memory tokenSymbol, string memory logo)",
//   "function viewNFTs() public view returns ()",
// ];
//
// const NftCollectionAbi = [
//   "function mint(address to, uint256 tokenId, uint256 amount, string memory tokenURI) public",
// ];
//
// Create a contract; connected to a Provider, so it may
// only access read-only methods (like view and pure)
// const NftMarketPlaceContract = new Contract(
//   "0xa80E53DEF77767A3b7A6C00C4A77129575fe7DA2",
//   NftMarketPlaceAbi,
//   signer,
// );

// const NftCollectionContract = new Contract(
//   "0xb9Dc6c84a82d596473F4DCB3A7D56ACaC30A96e7",
//   NftCollectionAbi,
//   signer,
// );
//
// await NftCollectionContract.mint(
//   "0x1bb98172f268F6e3F966c16D4988e0837ADf89Ce",
//   1,
//   3,
//   "asd",
// );
// const tx = await contract.call(
//   "0x1bb98172f268F6e3F966c16D4988e0837ADf89Ce",
//   { value: ethers.parseEther("0.1") },
// );
// console.log(tx);
//
//
// console.log(await NftMarketPlaceContract.viewNFTs());
// console.log(await NftMarketPlaceContract.returnCollections());
// console.log(
//   await NftMarketPlaceContract.createCollection("asd", "asd", "asd"),
// );

//

// await NftMarketPlaceContract.startsaleNFT(
//   "0xb9Dc6c84a82d596473F4DCB3A7D56ACaC30A96e7",
//   "asd",
//   1,
//   1,
// );
//
//

// await tx.wait();
//
//   connection.account = wallet[0];
//   connection.status = true;
//
//   console.log("Welcome Guest");
//   console.log(connection.account);
//   console.log(sign);
// });
