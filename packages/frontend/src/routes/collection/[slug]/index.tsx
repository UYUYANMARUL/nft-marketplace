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
import { videos } from "~/routes";
export const useData = routeLoader$(() => {
  return videos;
});

interface CollectionData {
  collectionImage: string;
  collectionName: string;
}

export const useCollectionData = routeLoader$(() => {
  const data: CollectionData = {
    collectionImage:
      "https://i.seadn.io/s/raw/files/c43f2d06c168b926f25e7f5f008ea827.jpg?auto=format&dpr=1&h=500&fr=1",
    collectionName: "itsa banana",
  };
  return data;
});

export default component$(() => {
  const NftGridData = useData();
  const NftCollectionData = useCollectionData();
  return (
    <>
      <div class="flex flex-col">
        <div class="w-full h-full top-0 flex aspect-auto">
          <img
            width="720"
            height="720"
            src={NftCollectionData.value.collectionImage}
            class={`max-h-96 opacity-40  child block h-full w-full rounded-lg object-cover transition-[border-radius] duration-200 disabledrag disableselect`}
          />
        </div>
        <div class="mx-6">
          <span></span>
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
