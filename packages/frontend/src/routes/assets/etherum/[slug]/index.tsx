import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, useLocation } from "@builder.io/qwik-city";
import { videos } from "~/routes";

import { viewCollections, viewUserCollections } from "~/utils/metamask";
export const useData = routeLoader$(async (requestEvent) => {
  const data = videos.find((data) => data.id == requestEvent.params.slug);
  return { data };
});

export default component$(() => {
  const loc = useLocation();

  const nftData = useData();
  console.log();
  console.log(loc.url);
  return (
    <>
      <div class="pt-32 lg:gap-[2vw] gap-8 flex flex-col lg:flex-row justify-center px-8 sm:px-16 2xl:px-32 mb-32">
        <div class="h-full w-full max-w-[1000px] mx-auto">
          <div class="max-h-4xl max-w-4xl relative my-auto aspect-square">
            <img
              style={{ viewTransitionName: `nftImg${nftData.value.data.id}` }}
              width="720"
              height="720"
              src={nftData.value.data.img}
              class={`child block h-full w-full  object-cover transition-[border-radius] duration-200 disabledrag disableselect border-#444 border-solid border-1 rounded-lg`}
            />
          </div>
        </div>
        <div class="bg-#BC6C25 h-full w-full max-w-[1000px] mx-auto rounded-xl">
          <div class="flex flex-col">
            <div class="flex lg:flex-col justify-between">
              <span class="py-1 pl-1 text-3xl">The Moneke</span>
              <span class="py-4 pr-1 lg:pl-1 lg:pr-0 text-lg">
                {`blabla`} collection
              </span>
            </div>

            <span class="self-start py-1 pl-1 text-xs mb-4">Owned By</span>
            <div class="flex flex-col p-4 border-t-#FEFAE0 border-t-2">
              <span class="pt-1">Current Price</span>
              <span class="py-3">1.25 ETH</span>
              <div class="flex flex-col lg:flex-row items-center justify-evenly py-6 ">
                <button class="w-[70%] lg:w-[40%] p-2 bg-#DDA15E rounded-2xl text-xl hover:bg-#606C38 hover:text-white">
                  Buy
                </button>
                <button class="w-[70%] lg:w-[40%] p-2 bg-#DDA15E  rounded-2xl mt-6 lg:mt-0 text-xl hover:bg-#606C38 hover:text-white">
                  Make Offer
                </button>
              </div>
            </div>
          </div>
          <div class="grid w-full max-w-sm items-center gap-1.5"></div>
        </div>
      </div>

      <div
        class="container flex flex-col gap-2 overflow-hidden"
        style="background-color:rgb(30,35,35);"
      ></div>
    </>
  );
});
