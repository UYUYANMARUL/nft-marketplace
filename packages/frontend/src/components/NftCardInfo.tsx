import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button as ReactButton } from "./ui/button";
import { qwikify$ } from "@builder.io/qwik-react";

type NftCardInfo = {
  nftName: string;
  nftCollectionName: string;
  nftCollectionAddress: string;
  nftPrice: string;
};

export const Button = qwikify$(ReactButton, { eagerness: "hover" });

export const NftCardInfo = component$(() => {
  useStylesScoped$(`
`);

  //grid gap-6 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] max-w-screen-2xl m-auto

  return (
    <>
      <div class="bg-#333 p-4 rounded-xl mt-8 mb-8 w-full justify-between flex flex-col items-center">
        <div class="w-5/6 flex justify-between">
          <span class="text-xl">Name:{}</span>
          <Link>CollectionName</Link>
        </div>
        <div class="pt-4 w-3/4 flex justify-between">
          <span>Price</span>
          <Button>asd</Button>
        </div>
      </div>
    </>
  );
});
