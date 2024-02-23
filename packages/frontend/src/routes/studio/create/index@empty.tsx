import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { CButton } from "~/components/CButton";

export default component$(() => {
  return (
    <>
      <div class=" grid min-[1200px]:grid-cols-2 ">
        <div class=" h-screen  row-start-2 row-end-3 min-[1200px]:row-start-1 min-[1200px]:row-end-3  ">
          <div class="h-screen">
            <div class="h-32 pl-16 text-4xl flex  items-center">
              <Link href="/">
                <span class="bg-gray-600 hover:bg-gray-300 rounded-full w-10 h-10 flex  items-center justify-center">
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
            <div class="h-screen justify-center items-center flex flex-col">
              <CButton />
              <CButton />
            </div>
          </div>
        </div>

        <div class=" h-screen ">asd</div>
      </div>
      ;
    </>
  );
});
