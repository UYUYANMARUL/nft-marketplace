import { component$ } from "@builder.io/qwik";
import { qwikify$ } from "@builder.io/qwik-react";
import { ImageUploadComponent } from "~/components/ImageUploadComponent";
import { SelectComponent } from "~/components/SelectComponent";
import { Label as ReactLabel } from "~/components/ui/label";

const Label = qwikify$(ReactLabel);

export default component$(() => {
  return (
    <>
      <div class=" mx-auto px-4 sm:px-8 2xl:px-16">
        <div class="flex flex-col">
          <span class="text-xl">Create NFT</span>
          <span class="text-s">
            Once your item is minted you will not be able to change any of its
            information.
          </span>
        </div>
        <div class="gap-[8vw] flex flex-col md:flex-row justify-center items-center">
          <div class="h-full w-full max-w-[600px]">
            <div>
              <ImageUploadComponent />
            </div>
          </div>
          <div class="bg-sky-50 h-full w-full max-w-[600px]">
            <SelectComponent />
            <div class="grid w-full max-w-sm items-center gap-1.5"></div>
          </div>
        </div>
      </div>
    </>
  );
});
