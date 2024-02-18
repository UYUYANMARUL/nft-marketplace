import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex flex-col justify-center blur-none bg-zinc-800">
      <div class="flex overflow-hidden relative flex-col px-10 pt-4 pb-12 w-full min-h-[1024px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" class="object-cover absolute inset-0 size-full" />
        <div class="flex relative gap-5 justify-between pr-3 w-full text-2xl font-medium text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6207725d907656c4955ba5ec57feaaacb5854e978555dfb4325b16db26bcb0aa?"
            class="max-w-full aspect-square w-[115px]"
          />
          <div class="flex gap-5 justify-between items-center self-end mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div class="grow self-stretch my-auto">AUCTION</div>
            <div class="flex-auto self-stretch my-auto">COLLECTIONS</div>
            <div class="flex-auto self-stretch my-auto">ARTISTS</div>
            <div class="flex gap-2.5 justify-between self-stretch px-3 py-3.5 text-base text-center bg-blue-600 rounded-2xl">
              <div class="grow">CONNECT WALLET</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d24a318a0108bd23870af37f86756efdd46f01266881ffa3a5ab918dd0b37c1?"
                class="aspect-square w-[21px]"
              />
            </div>
          </div>
        </div>
        <div class="relative mt-44 max-md:mt-10 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div class="flex relative flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                <div class="text-8xl font-black max-md:max-w-full max-md:text-4xl">
                  MINT, SELL, TRANSFER & BID
                </div>
                <div class="flex gap-5 justify-between self-start pr-4 mt-16 ml-8 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div class="overflow-hidden relative flex-col justify-center px-9 py-6 text-2xl aspect-[3.52] max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ce4da32e627da1ca8e905916c8d7df929bbe37e40372fe927cd3b27704368c1?"
                      class="object-cover absolute inset-0 size-full"
                    />
                    EXPLORE
                  </div>
                  <div class="overflow-hidden relative flex-col justify-center px-8 py-6 text-xl aspect-[3.52] max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a97dfb528b3c02b4e8d14089894405a2cbb8b32823c327153218c52578dfbe42?"
                      class="object-cover absolute inset-0 size-full"
                    />
                    CREATE NFT
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                class="grow w-full aspect-[1.04] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div class="flex relative gap-5 justify-between items-start self-center mt-8 mb-6 w-full text-white max-w-[1232px] max-md:flex-wrap max-md:max-w-full">
          <div class="flex gap-5 justify-between items-start whitespace-nowrap">
            <div class="flex flex-col flex-1">
              <div class="text-2xl">15K+</div>
              <div class="mt-4 text-base">ARTISTS</div>
            </div>
            <div class="flex flex-col flex-1">
              <div class="text-2xl">75K+</div>
              <div class="mt-3.5 text-base">NFTs</div>
            </div>
            <div class="flex flex-col flex-1">
              <div class="text-2xl">1M+</div>
              <div class="mt-4 text-base">USERS</div>
            </div>
          </div>
          <div class="flex gap-2.5 justify-between self-stretch my-auto text-2xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2f6a7ca0191f9f098e7f5de9b1612ba80a5a589579ea9e1e8f52d8abf6a981f?"
              class="my-auto max-w-full aspect-[8.33] fill-white w-[180px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e35c3c3ea7561c8a7b957d6c56fe7a0a4ace32971c8b92fca4051d424fd4c3cf?"
              class="my-auto aspect-[3.57] fill-white w-[68px]"
            />
            <div class="w-px bg-white h-[31px]" />
            <div class="self-start mt-3">0,1 </div>
            <img loading="lazy" class="self-start aspect-square w-[30px]" />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6a4eb1ca9433a3e5eab3cd67b8d4b9c3a91b337bbd413398da32f1fadab8f92?"
            class="w-11 aspect-square"
          />
        </div>
      </div>
    </div>
  );
});
