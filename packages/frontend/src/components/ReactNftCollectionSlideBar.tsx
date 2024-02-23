/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import "./ReactNftCollectionSlidebar.module.css";
import Autoplay from "embla-carousel-autoplay";

export function CarouselSize({
  navigate,
  data,
}: {
  navigate: (path: string) => any;
  data: any;
}) {
  let pos: { X: number; Y: number } = { X: -1, Y: -1 };
  const tolerance = 3;
  let canNavigate: boolean = false;
  function CancelNavigate(e: any, index: number) {
    if (
      !(
        Math.abs(e.pageX) - pos.X < tolerance &&
        Math.abs(e.pageY) - pos.Y < tolerance
      )
    ) {
      canNavigate = false;
    }
  }

  function SetPos(e: any, index: number) {
    pos = { X: e.pageX, Y: e.pageY };
    canNavigate = true;
  }

  function CheckToNavigate(e: any, path: string, index: number) {
    console.log(canNavigate);
    if (canNavigate) {
      navigate(path);
      canNavigate = false;
    }
  }
  function MouseEnter(index: number) {
    canNavigate = false;
  }
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full px-4"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {data &&
          data.map((value: any, index: number) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 hover:cursor-pointer "
            >
              <div>
                <Card
                  className="bg-#DDA15E border-none rounded-xl"
                  onMouseDown={(e) => SetPos(e, index)}
                  onMouseUp={(e) =>
                    CheckToNavigate(e, `/collection/${value[1]}`, index)
                  }
                  onMouseMove={(e) => CancelNavigate(e, index)}
                  onMouseEnter={(e) => MouseEnter(index)}
                >
                  <CardContent className="flex aspect-square items-center justify-center p-0 hover:bg-zinc-50 border border-#857E7B rounded-xl">
                    <img
                      width="1000"
                      height="1000"
                      src={value[2]}
                      className=" bg-#DDA15E w-full h-full object-cover overflow-hidden object-center rounded-xl"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="ml-7" />
      <CarouselNext className="mr-7" />
    </Carousel>
  );
}

export const ReactNftCollectionSlideBar = qwikify$(CarouselSize, {
  eagerness: "visible",
});
