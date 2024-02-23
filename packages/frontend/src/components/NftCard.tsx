import { component$, $, useStylesScoped$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { NftCardInfo, NftCardInfoProps } from "./NftCardInfo";

export type NftCardProps = {
  img: string;
  id: string;
  name: string;
  price: number;
  collectionName: string;
  collectionAddress: string;
  ownerAddress: string;
  tokenId: string;
};

export const NftCard = component$<NftCardProps>((props) => {
  const nftCardInfoProps: NftCardInfoProps = {
    nftName: props.name,
    nftPrice: props.price,
    nftCollectionName: props.collectionName,
    nftCollectionAddress: props.collectionAddress,
  };
  const nav = useNavigate();
  const display = $((path: string) => {
    if (!document.startViewTransition) {
      nav(path);
    } else {
      document.startViewTransition(() => nav(path));
    }
  });
  useStylesScoped$(`
.child {transition: 0.5s ease-in-out;
}


    .container:hover .child {
transform:scale(1.05);
z-index:99;

border:  solid 2px rgb(70,70,70);
    }
  `);
  return (
    <>
      <div class="container flex flex-col gap-2 rounded-xl py-8 bg-#BC6C25">
        <Link
          onClick$={() => display(`/assets/etherum/${props.id}`)}
          class="relative hover:cursor-pointer my-auto aspect-square"
        >
          <img
            style={{ viewTransitionName: `nftImg${props.name}` }}
            width="720"
            height="720"
            src={props.img}
            class={`child block h-full w-full rounded-lg object-cover transition-[border-radius] duration-200 disabledrag disableselect`}
          />
          <div class="bg-secondary-dark text-secondary absolute bottom-1 right-1 rounded px-0.5 text-sm">
            {/* { $formatDuration(props.duration) } */}
          </div>
        </Link>
        <NftCardInfo {...nftCardInfoProps} />
        {/* <Link href="`/@${props.channel.id}`" class="flex-shrink-0"></Link> */}
      </div>
    </>
  );
});
