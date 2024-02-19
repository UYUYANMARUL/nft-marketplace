import { component$, $, useStore } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import type { NftCardProps } from "~/components/NftCard";
import { NftCollectionGrid } from "~/components/NftCollectionGrid";
//
// const { chains, provider } = configureChains(
//   [chain.mainnet, chain.sepolia],
//   [publicProvider()],
// );
//
export const useData = routeLoader$(() => {
  return videos;
});

export default component$(() => {
  const NftGridData = useData();
  return (
    <>
      <div class="flex flex-col">
        <div class="bg-white h-full top-0 w-64">asd</div>
        <div class="mx-6">
          <NftCollectionGrid data={NftGridData.value} />
        </div>
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

    img: "https://i.seadn.io/s/raw/files/c43f2d06c168b926f25e7f5f008ea827.jpg?auto=format&dpr=1&h=500&fr=1",
  },
  {
    id: "2",
    name: "NEW Way To Create Variables In JavaScript",

    img: "https://i.seadn.io/s/raw/files/c43f2d06c168b926f25e7f5f008ea827.jpg?auto=format&dpr=1&h=500&fr=1",
  },
  {
    id: "3",
    name: "Front-end developer takes on a CSS battle",

    img: "https://i.seadn.io/s/raw/files/c43f2d06c168b926f25e7f5f008ea827.jpg?auto=format&dpr=1&h=500&fr=1",
  },
  {
    id: "4",
    name: "Quick",

    img: "https://i.seadn.io/gae/eUfns98DnUkgRQPvpsA55LeTCkF8_t6EWUflo3KOTYSbFUgZd3SBm9_-fFIKpD1Tp1xNyBjHDfhS5-b7qfQwX2nPIAp4WC_twZ7bTQ?auto=format&dpr=1&h=500&fr=1",
  },
  {
    id: "5",
    name: "I",

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