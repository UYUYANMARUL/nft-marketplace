import { component$, $, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { ReactNftCollectionSlideBar } from "./ReactNftCollectionSlideBar";
import { useNavigate } from "@builder.io/qwik-city";

type NftCollectionSliderProps = {};

export const NftCollectionSlider = component$<NftCollectionSliderProps>(() => {
  const nav = useNavigate();
  const navigate = $((path: string) => {
    nav(path);
  });
  return (
    <>
      <div class="max-w-screen-2xl m-auto mt-16 mb-16 flex flex-col items-center">
        <span class="text-3xl text-white p-6">Top Collections</span>
        <ReactNftCollectionSlideBar navigate={navigate} />
      </div>
    </>
  );
});
