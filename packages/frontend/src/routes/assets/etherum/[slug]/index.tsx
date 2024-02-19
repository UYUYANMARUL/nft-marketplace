import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation();

  console.log();
  console.log(loc.url);
  return (
    <>
      <div class="pt-32 gap-[2vw] flex flex-col lg:flex-row justify-center px-8 sm:px-16 2xl:px-32">
        <div class="h-full w-full max-w-[1000px] mx-auto">
          <div class="relative my-auto aspect-square">
            <img
              style={{ viewTransitionName: `nftImg${loc.params.slug}` }}
              width="720"
              height="720"
              src="https://i.seadn.io/gae/eUfns98DnUkgRQPvpsA55LeTCkF8_t6EWUflo3KOTYSbFUgZd3SBm9_-fFIKpD1Tp1xNyBjHDfhS5-b7qfQwX2nPIAp4WC_twZ7bTQ?auto=format&dpr=1&h=500&fr=1"
              class={`child block h-full w-full  object-cover transition-[border-radius] duration-200 disabledrag disableselect border-#444 border-solid border-1 rounded-lg`}
            />
          </div>
        </div>
        <div class="bg-sky-50 h-full w-full max-w-[1000px] mx-auto">
          <div class="flex flex-col">
            <span class="self-start py-4 text-lg">Collection Name</span>

            <span class="self-start py-1 text-3xl">Nft Name</span>

            <span class="self-start py-1 text-lg">Owned By</span>
            <div class="flex flex-col p-4 bg-red-300">
              <span>Price</span>
              <div class="flex flex-col lg:flex-row bg-#444 items-center justify-evenly">
                <button class="w-[70%] lg:w-[33%] p-4 bg-#333">Buy</button>
                <button class="w-[70%] lg:w-[33%] p-4 bg-#333">
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
