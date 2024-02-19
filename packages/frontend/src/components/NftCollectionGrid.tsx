import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { NftCard, NftCardProps } from "./NftCard";

type NftGridProps = {
  data: NftCardProps[];
};

export const NftCollectionGrid = component$<NftGridProps>((props) => {
  useStylesScoped$(`
.grid-container {
  /**
   * User input values.
   */
  --grid-layout-gap: 24px;
  --grid-column-count: 6;
  --grid-item--min-width: 200px;

  /**
   * Calculated values.
   */
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
  grid-gap: var(--grid-layout-gap);
}`);

  //grid gap-6 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] max-w-screen-2xl m-auto

  return (
    <>
      <div class="grid-container max-w-screen-2xl m-auto mt-8 mb-8">
        {props.data.map((NftItem) => (
          <NftCard {...NftItem} key={NftItem.id} />
        ))}
      </div>
    </>
  );
});
