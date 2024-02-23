import { component$, $, useSignal, type QRL } from "@builder.io/qwik";

interface ImageUploadComponentProps {
  returnImage$: QRL<(file: any) => void>;
}

export const ImageUploadComponent = component$(
  (props: ImageUploadComponentProps) => {
    const dropzone = useSignal<Element>();

    const preview = useSignal<Element>();

    const input = useSignal<Element>();

    const textzone = useSignal<Element>();

    const displayPreview = $(async (file: File) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      console.log(file);
      reader.onload = () => {
        props.returnImage$(reader.result);
        preview.value!.src = reader.result;
        preview.value!.classList.remove("hidden");
        textzone.value!.classList.add("hidden");
      };
    });

    const onDragOverF = $((e: any) => {
      e.preventDefault();

      dropzone.value!.classList.add("border-indigo-600");
    });

    const onDragLeaveF = $((e: any) => {
      e.preventDefault();

      dropzone.value!.classList.remove("border-indigo-600");
    });

    const onDropF = $((e: any) => {
      e.preventDefault();

      dropzone.value!.classList.remove("border-indigo-600");
      const file = e.dataTransfer.files[0];
      displayPreview(file);
    });

    const onDeleteF = $(() => {
      preview.value!.classList.add("hidden");
      textzone.value!.classList.remove("hidden");
    });

    const onInputChangeF = $((e: any) => {
      const file = e.target.files[0];
      displayPreview(file);
    });

    return (
      <div
        class="w-full aspect-square relative border-2 border-gray-300 border-dashed rounded-xl"
        ref={dropzone}
        onDragOver$={(event) => onDragOverF(event)}
        onDragLeave$={(event) => onDragLeaveF(event)}
        onDrop$={(event) => onDropF(event)}
      >
        <input
          type="file"
          class="absolute inset-0 w-full h-full opacity-0 z-50"
          onInput$={(event) => onInputChangeF(event)}
        />
        <div class="text-center" ref={textzone}>
          <h3 class="mt-2 text-sm font-medium text-gray-900">
            <label for="file-upload" class="relative cursor-pointer">
              <span>Drag and drop</span>
              <span class="text-indigo-600"> or browse</span>
              <span>to upload</span>
              <input
                ref={input}
                name="file-upload"
                type="file"
                class="sr-only"
              />
            </label>
          </h3>
          <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          <img
            width="100"
            height="100"
            src="https://www.svgrepo.com/show/357902/image-upload.svg"
            class="w-3/4 mt-4 mx-auto object-cover object-center rounded-xl"
          />
        </div>

        <img
          width="100"
          height="100"
          src="https://www.svgrepo.com/show/357902/image-upload.svg"
          class="w-full h-full hidden object-cover overflow-hidden object-center rounded-xl"
          ref={preview}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 absolute top-2 right-2 cursor-pointer z-50 hover:bg-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          onClick$={onDeleteF}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    );
  },
);
