import { component$, useSignal, $, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Contract, ethers, parseEther } from "ethers";

export type NftCardProps = {
  img: string;
  id: string;
  name: string;
};

export const Navbar = component$(() => {
  const connection = useStore({
    account: "",
    status: false,
  });

  const connectToMetaMask = $(async () => {
    // const ethereum = window.ethereum;
    // const provider = new ethers.JsonRpcProvider("https://rpc2.sepolia.org");

    // Get write access as an account by getting the signer
    // const signer = await provider.getSigner();
    const provider = new ethers.BrowserProvider(window.ethereum);
    // const provider = ethers.getDefaultProvider();

    // It also provides an opportunity to request access to write
    // operations, which will be performed by the private key
    // that MetaMask manages for the user.
    const signer = await provider.getSigner();

    // console.log(signer);
    // const tx = await signer.sendTransaction({
    //   to: "0x1bb98172f268F6e3F966c16D4988e0837ADf89Ce",
    //   value: parseEther("0.2"),
    // });
    const NftMarketPlaceAbi = [
      "function buyNFT(address collectionAddress, uint256 tokenId, address tokenOwner)",
      "function cancelSale(address collectionAddress, uint256 tokenId, address tokenOwner)",
      "function startsaleNFT(address collectionAddress, string memory collectionName, uint256 price, uint256 tokenId)",
      "function returnCollections() public view returns (address[] memory)",
      "function createCollection(string memory name, string memory tokenSymbol, string memory logo)",
      "function viewNFTs() public view returns (TokenStructs.ListedToken[] memory)",
      "function viewUserCollection(address userAddr, address collectionAddr) public view returns (NFTCollection memory)",
    ];
    const NftCollectionAbi = [
      "function mint(address to, uint256 tokenId, uint256 amount) public",
    ];

    // Create a contract; connected to a Provider, so it may
    // only access read-only methods (like view and pure)
    const NftMarketPlaceContract = new Contract(
      "0xd2a47Ed9C5D417fb2858bC0B689fbF61c6B4D7d3",
      NftMarketPlaceAbi,
      signer,
    );

    const NftCollectionContract = new Contract(
      "0xd2a47Ed9C5D417fb2858bC0B689fbF61c6B4D7d3",
      NftCollectionAbi,
      signer,
    );
    //
    // const tx = await contract.call(
    //   "0x1bb98172f268F6e3F966c16D4988e0837ADf89Ce",
    //   { value: ethers.parseEther("0.1") },
    // );
    // console.log(tx);

    console.log(await NftMarketPlaceContract.print());

    await NftCollectionContract.mint(
      "0x26C063B43d2d46CAc149dEE9BbcAD9e768FdEF9b",
      1,
      1,
    );
    // await tx.wait();
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
    //
    //   connection.account = wallet[0];
    //   connection.status = true;
    //
    //   console.log("Welcome Guest");
    //   console.log(connection.account);
    //   console.log(sign);
    // }
  });

  return (
    <>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/asd"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </Link>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick$={connectToMetaMask}
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
});
