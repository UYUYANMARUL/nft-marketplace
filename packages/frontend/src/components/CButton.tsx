import { component$ } from "@builder.io/qwik";

export const CButton = component$(() => {
  return (
    <>
      <button
        class="my-auto max-w-2xl h-28 bg-neutral-800 rounded-lg inline-flex items-center border-0  p-6"
        type="button"
        data-id="UnstyledButton"
      >
        <div class="h-16 flex flex-col justify-between">
          <div class="flex text-white items-center">
            <span>
              <svg
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                class="text-white fill-current"
              >
                <path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" />
              </svg>
            </span>
            <span class="ml-4 text-xl items-center">Drop a Collection</span>
          </div>
          <span class="text-white">
            Launch your NFT collection for others to mint.
          </span>
        </div>
        <span class="ml-12 w-6 h-6  fill-curret text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </button>
      ;
    </>
  );
});
