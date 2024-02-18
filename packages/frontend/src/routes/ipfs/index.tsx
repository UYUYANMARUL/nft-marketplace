import { component$ } from "@builder.io/qwik";
import { ImageUploadComponent } from "~/components/ImageUploadComponent";

// This will only run on the server when the user submits the form (or when the action is called programmatically)
export default component$(() => {
  return (
    <>
      <ImageUploadComponent />
    </>
  );
});
