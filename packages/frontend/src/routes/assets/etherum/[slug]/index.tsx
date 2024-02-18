import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation();

  console.log();
  console.log(loc.url);
  return (
    <>
      <div
        class="container flex flex-col gap-2 overflow-hidden"
        style="background-color:rgb(30,35,35);"
      >
        <Link
          href="`/watch?v=${props.id}`"
          class="relative my-auto aspect-video"
        >
          <img
            style={{ viewTransitionName: `nftImg${loc.params.slug}` }}
            width="720"
            height="720"
            src="https://i.seadn.io/gae/eUfns98DnUkgRQPvpsA55LeTCkF8_t6EWUflo3KOTYSbFUgZd3SBm9_-fFIKpD1Tp1xNyBjHDfhS5-b7qfQwX2nPIAp4WC_twZ7bTQ?auto=format&dpr=1&h=500&fr=1"
            class={`child block h-full w-full rounded-lg object-cover transition-[border-radius] duration-200 disabledrag disableselect`}
          />
          <div class="bg-secondary-dark text-secondary absolute bottom-1 right-1 rounded px-0.5 text-sm">
            {/* { $formatDuration(props.duration) } */}
          </div>
        </Link>
      </div>
    </>
  );
});
