import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export type NftCardProps = {
  img: string;
  id: string;
  name: string;
};

export const NftCard = component$<NftCardProps>((props) => {
  return (
    <>
      <div
        class="flex flex-col gap-2  "
        style="background-color:rgb(30,35,35);"
      >
        <Link
          href="`/watch?v=${props.id}`"
          class="relative my-auto aspect-video"
        >
          <img
            width="720"
            height="720"
            src={props.img}
            class={`block h-full w-full rounded-lg object-cover transition-[border-radius] duration-200`}
          />
          <div class="bg-secondary-dark text-secondary absolute bottom-1 right-1 rounded px-0.5 text-sm">
            {/* { $formatDuration(props.duration) } */}
          </div>
        </Link>
        <div class="flex gap-2">
          <Link href="`/@${props.channel.id}`" class="flex-shrink-0"></Link>
          <div class="flex flex-col">
            <a class="font-bold">{/* { props.title } */}</a>
            <Link
              href="`/@${props.channel.id}`"
              class="text-secondary-text text-sm"
            >
              asdasd
            </Link>
            <div class="text-secondary-text text-sm">
              {/* { VIEW_FORMATTER.format(props.views) } Views • */}
              {/* { $formatTimeAgo(props.postedAt) } */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
