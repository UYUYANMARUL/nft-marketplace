import {
  component$,
  useSignal,
  $,
  noSerialize,
  type NoSerialize,
  useStore,
} from "@builder.io/qwik";
import { Link, routeAction$ } from "@builder.io/qwik-city";
import { qwikify$ } from "@builder.io/qwik-react";
import { ImageUploadComponent } from "~/components/ImageUploadComponent";
import { SelectComponent } from "~/components/SelectComponent";
import { Label as ReactLabel } from "~/components/ui/label";
import { useImageUploadtoIPFS } from "~/utils/actions";

const Label = qwikify$(ReactLabel);

export default component$(() => {
  const image = useStore({ file: "" });
  const nftData = useStore({ file: "", count: 1, name: "" });
  const returnImage = $((file: any) => {
    image.file = file;
  });

  const ImageUploadtoIPFSAction = useImageUploadtoIPFS();

  return (
    <>
      <div class="flex flex-col item-center px-4 sm:px-8 2xl:px-16">
        <div class="h-16 pl-16 text-4xl flex  items-center">
          <Link href="/">
            <span class="bg-#BC6C25 hover:bg-#FEFAE0 rounded-full w-10 h-10 flex  items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </span>
          </Link>
        </div>

        <div class="flex flex-col gap-3 mb-8 border-#BC6C25 border-4 w-[70%] md:w-[40%] lg:w-[35%] xl:w-[30%] self-center rounded-xl">
          <span class="text-xl text-center">Create NFT</span>
          <span class="text-s text-center">
            Once your item is minted you will not be able to change any of its
            information.
          </span>
        </div>
        <div class="gap-[8vw] flex flex-col md:flex-row justify-center items-center">
          <div class="h-full w-full max-w-[600px]">
            <div>
              <ImageUploadComponent returnImage$={returnImage} />
            </div>
          </div>
          <div class="flex flex-col bg-sky-50 h-full w-full max-w-[600px] justify-center">
            <SelectComponent />
            <div class="grid w-full max-w-sm items-center gap-1.5">
              <input placeholder="Nft Name" />
            </div>
            <div
              class="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
              data-hs-input-number
            >
              <div class="flex items-center gap-x-1.5">
                <button
                  type="button"
                  class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick$={() => {
                    nftData.count--;
                  }}
                >
                  <svg
                    class="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <input
                  class="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                  type="text"
                  value={nftData.count}
                  data-hs-input-number-input
                />
                <button
                  type="button"
                  class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick$={() => {
                    nftData.count++;
                  }}
                >
                  <svg
                    class="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </button>
              </div>
            </div>
            <button
              class="bg-#DDA15E p-3 rounded-xl text-xl self-center my-4"
              onClick$={() => {
                const value = ImageUploadtoIPFSAction.submit(image);
                console.log(value);
              }}
            >
              Mint Nft
            </button>
          </div>
        </div>
      </div>
    </>
  );
});
