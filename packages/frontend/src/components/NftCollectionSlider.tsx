import { component$, $, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { ReactNftCollectionSlideBar } from "./ReactNftCollectionSlideBar";
import { useNavigate } from "@builder.io/qwik-city";

type NftCollectionSliderProps = {};

export const NftCollectionSlider = component$<any>((props: any) => {
  console.log(props.data.values);
  const nav = useNavigate();
  const navigate = $((path: string) => {
    nav(path);
  });
  return (
    <>
      <div class="max-w-screen-2xl m-auto mt-16 mb-16 flex flex-col items-center">
        <span class="text-3xl text-#FEFAE0 p-6">Top Collections</span>
        <ReactNftCollectionSlideBar navigate={navigate} data={props.data} />
      </div>
    </>
  );
});
