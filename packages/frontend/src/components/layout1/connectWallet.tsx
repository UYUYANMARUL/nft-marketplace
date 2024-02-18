import { component$ } from "@builder.io/qwik";

export const ConnectWallet = component$(() => {
  return (
    <div class="flex flex-col pt-6 pb-11 text-2xl text-white border-solid shadow-sm bg-stone-950 border-[3px] border-neutral-700 max-w-[440px]">
      <div class="flex gap-5 justify-between ml-5 max-w-full text-center whitespace-nowrap w-[268px]">
        <img loading="lazy" srcSet="..." class="aspect-square w-[60px]" />
        <div class="flex-auto my-auto">metamask</div>
      </div>
      <div class="mt-7 w-full bg-neutral-700 min-h-[1px]" />
      <div class="flex flex-col self-center mt-8 w-full max-w-[303px]">
        <div class="flex gap-5 justify-between text-center">
          <img loading="lazy" srcSet="..." class="w-10 aspect-square" />
          <div class="flex-auto my-auto">coinbase wallet</div>
        </div>
        <div class="flex gap-5 justify-between mt-16 whitespace-nowrap">
          <img loading="lazy" srcSet="..." class="aspect-square w-[46px]" />
          <div class="flex-auto my-auto">walletconnect</div>
        </div>
        <div class="flex gap-5 justify-between mt-16">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/73427511e5c3bf1c6b51f64f05387f42dec712d3c4ac46b1742a7c7651c47248?"
            class="w-10 aspect-square"
          />
          <div class="flex-auto self-start mt-4">other wallets</div>
        </div>
      </div>
    </div>
  );
});
