import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { ReactNftCollectionSlideBar } from "./ReactNftCollectionSlideBar";

type NftCollectionSliderProps = {};

export const NftCollectionSlider = component$<NftCollectionSliderProps>(() => {
  return (
    <>
      <div class="max-w-screen-2xl m-auto mt-16 mb-16">
        <ReactNftCollectionSlideBar />
      </div>
    </>
  );
});
