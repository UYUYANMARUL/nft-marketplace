import { component$, $, useStore } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import type { NftCardProps } from "~/components/NftCard";
import { NftGrid } from "~/components/NftGrid";
//
// const { chains, provider } = configureChains(
//   [chain.mainnet, chain.sepolia],
//   [publicProvider()],
// );
//
export const useData = routeLoader$(() => videos);

export default component$(() => {
  const NftGridData = useData();
  return (
    <>
      <div class="mx-6">
        <NftGrid data={NftGridData.value} />
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

const videos: NftCardProps[] = [
  {
    id: "1",
    name: "CSS Anchor Is The Best New CSS Feature Since Flexbox",

    img: "https://i.ytimg.com/vi/B4Y9Ed4lLAI/maxresdefault.jpg",
  },
  {
    id: "2",
    name: "NEW Way To Create Variables In JavaScript",

    img: "https://f8n-production.imgix.net/worlds/zfwnpehvs.jpeg?q=70&w=1080&fit=crop&dpr=2",
  },
  {
    id: "3",
    name: "Front-end developer takes on a CSS battle",

    img: "https://i.seadn.io/s/raw/files/c43f2d06c168b926f25e7f5f008ea827.jpg?auto=format&dpr=1&h=500&fr=1",
  },
  {
    id: "4",
    name: "Quick guide to CSS focus states",

    img: "https://i.seadn.io/gae/eUfns98DnUkgRQPvpsA55LeTCkF8_t6EWUflo3KOTYSbFUgZd3SBm9_-fFIKpD1Tp1xNyBjHDfhS5-b7qfQwX2nPIAp4WC_twZ7bTQ?auto=format&dpr=1&h=500&fr=1",
  },
  {
    id: "5",
    name: "I Cannot Believe React Made A Hook For This",

    img: "https://i.seadn.io/s/raw/files/38cf27c2c294f7a21856e7a6852a1f0c.jpg?auto=format&dpr=1&h=500&fr=1",
  },
  {
    id: "6",
    name: "I Got Laid Off...",

    img: "https://i.ytimg.com/vi/i2JVQdLnkAY/maxresdefault.jpg",
  },
  {
    id: "7",
    name: "Tails OS in 100 Seconds",

    img: "https://i.ytimg.com/vi/mVKAyw0xqxw/maxresdefault.jpg",
  },
  {
    id: "8",
    name: "Zig in 100 Seconds",

    img: "https://i.ytimg.com/vi/kxT8-C1vmd4/maxresdefault.jpg",
  },
];
