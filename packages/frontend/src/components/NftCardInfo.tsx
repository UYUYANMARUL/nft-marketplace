import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button as ReactButton } from "./ui/button";
import { qwikify$ } from "@builder.io/qwik-react";

export type NftCardInfoProps = {
  nftName: string;
  nftCollectionName: string;
  nftCollectionAddress: string;
  nftPrice: number;
};

export const Button = qwikify$(ReactButton, { eagerness: "hover" });

export const NftCardInfo = component$<NftCardInfoProps>((props) => {
  useStylesScoped$(`
`);

  //grid gap-6 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] max-w-screen-2xl m-auto

  return (
    <>
      <div class="bg-#333 p-4 rounded-xl mt-8 mb-8 w-full justify-between flex flex-col items-center">
        <div class="w-5/6 flex justify-between">
          <span class="text-xl">Name: {props.nftName}</span>
          <Link href={props.nftCollectionAddress}>
            Collection Name: {props.nftCollectionName}
          </Link>
        </div>
        <div class="pt-4 w-3/4 flex justify-between">
          <span>Price: {props.nftPrice}</span>
          <Button className="bg-#DDA15E hover:bg-#606C38">Buy</Button>
        </div>
      </div>
    </>
  );
});
