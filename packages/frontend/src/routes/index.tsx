import { component$, $, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { ethers, getDefaultProvider } from "ethers";
import type { NftCardProps } from "~/components/NftCard";
import { NftCollectionSlider } from "~/components/NftCollectionSlider";
import { NftGrid } from "~/components/NftGrid";
//
// const { chains, provider } = configureChains(
//   [chain.mainnet, chain.sepolia],
//   [publicProvider()],
// );
//
import { viewCollections, viewUserCollections } from "~/utils/metamask";
export const useData = routeLoader$(async () => {
  return { nftData: videos };
});

export default component$(() => {
  const collectionsData = useStore<{ data: Array<any> }>({ data: [] });
  useVisibleTask$(async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const data = await viewCollections(signer);
    collectionsData.data = data;
  });
  const NftGridData = useData();
  return (
    <>
      <div class="mx-6">
        {<NftCollectionSlider data={collectionsData?.data} />}
        <NftGrid data={NftGridData?.value?.nftData} />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

export const videos: NftCardProps[] = [
  {
    id: "1a2dsa287gfd3",
    name: "HMMM",
    price: 0.42,
    img: "https://i.seadn.io/s/raw/files/c43f2d06c168b926f25e7f5f008ea827.jpg?auto=format&dpr=1&h=500&fr=1",
    collectionName: "The Bananas",
    collectionAddress: "2a200x8as622fd032as3786a32",
    ownerAddress: "2s29fjd233165dsfa2x67a028zea8a8",
    tokenId: "2",
  },
  {
    id: "2sd1290fdhjk",
    name: "HIHI",
    price: 0.23,
    img: "https://i.seadn.io/s/raw/files/c43f2d06c168b926f25e7f5f008ea827.jpg?auto=format&dpr=1&h=500&fr=1",
    collectionName: "The Bananas",
    collectionAddress: "2a200x8as622fd032as3786a32",
    ownerAddress: "2s29fjd233165dsfa2x67a028zea8a8",
    tokenId: "2",
  },
  {
    id: "32fdsjk32093fdj",
    name: "WHYNOT",
    price: 0.33,
    img: "https://i.seadn.io/s/raw/files/c43f2d06c168b926f25e7f5f008ea827.jpg?auto=format&dpr=1&h=500&fr=1",
    collectionName: "The Bananas",
    collectionAddress: "2a200x8as622fd032as3786a32",
    ownerAddress: "2s29fjd233165dsfa2x67a028zea8a8",
    tokenId: "2",
  },
  {
    id: "129fdjkhl435yfj",
    name: "Quick",
    price: 0.5,
    img: "https://i.seadn.io/gae/eUfns98DnUkgRQPvpsA55LeTCkF8_t6EWUflo3KOTYSbFUgZd3SBm9_-fFIKpD1Tp1xNyBjHDfhS5-b7qfQwX2nPIAp4WC_twZ7bTQ?auto=format&dpr=1&h=500&fr=1",
    collectionName: "The Bananas",
    collectionAddress: "2a200x8as622fd032as3786a32",
    ownerAddress: "2s29fjd233165dsfa2x67a028zea8a8",
    tokenId: "2",
  },
  {
    id: "190jhkdfjk4389213",
    name: "Isaid",
    price: 0.7,
    img: "https://i.seadn.io/s/raw/files/38cf27c2c294f7a21856e7a6852a1f0c.jpg?auto=format&dpr=1&h=500&fr=1",
    collectionName: "The Bananas",
    collectionAddress: "2a200x8as622fd032as3786a32",
    ownerAddress: "2s29fjd233165dsfa2x67a028zea8a8",
    tokenId: "2",
  },
  {
    id: "awjduidjfdre",
    name: "IGot",
    price: 3.7,
    img: "https://i.ytimg.com/vi/i2JVQdLnkAY/maxresdefault.jpg",
    collectionName: "The Bananas",
    collectionAddress: "2a200x8as622fd032as3786a32",
    ownerAddress: "2s29fjd233165dsfa2x67a028zea8a8",
    tokenId: "2",
  },
  {
    id: "adaw82vcmsdf342",
    name: "Tails",
    price: 0.4,
    img: "https://i.ytimg.com/vi/mVKAyw0xqxw/maxresdefault.jpg",
    collectionName: "The Bananas",
    collectionAddress: "2a200x8as622fd032as3786a32",
    ownerAddress: "2s29fjd233165dsfa2x67a028zea8a8",
    tokenId: "2",
  },
  {
    id: "289fdsajk48dewfjdk",
    name: "Zig",
    price: 2.3,
    img: "https://i.ytimg.com/vi/kxT8-C1vmd4/maxresdefault.jpg",
    collectionName: "The Bananas",
    collectionAddress: "2a200x8as622fd032as3786a32",
    ownerAddress: "2s29fjd233165dsfa2x67a028zea8a8",
    tokenId: "2",
  },
];
