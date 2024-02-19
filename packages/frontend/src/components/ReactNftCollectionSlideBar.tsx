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
}: {
  navigate: (path: string) => any;
}) {
  let pos: { X: number; Y: number } = { X: -1, Y: -1 };
  const tolerance = 3;
  let canNavigate = false;
  function CancelNavigate(e: any) {
    if (
      !(
        Math.abs(e.pageX) - pos.X < tolerance &&
        Math.abs(e.pageY) - pos.Y < tolerance
      )
    ) {
      canNavigate = false;
    }
  }

  function SetPos(e: any) {
    pos = { X: e.pageX, Y: e.pageY };
    canNavigate = true;
  }

  function CheckToNavigate(e: any, path: string) {
    if (canNavigate) {
      navigate(path);
      canNavigate = false;
    }
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
      <CarouselContent className=" ">
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem
            key={index}
            className=" md:basis-1/2 lg:basis-1/3 hover:cursor-pointer "
          >
            <div>
              <Card
                className="bg-#333 border-none rounded-xl"
                onMouseDown={(e) => SetPos(e)}
                onMouseUp={(e) => CheckToNavigate(e, "asd")}
                onMouseMove={(e) => CancelNavigate(e)}
              >
                <CardContent className=" flex aspect-square items-center justify-center p-6 hover:bg-zinc-50 bg-#1E2323 rounded-xl">
                  <img
                    width="100"
                    height="100"
                    src="https://i.seadn.io/s/raw/files/c43f2d06c168b926f25e7f5f008ea827.jpg?auto=format&dpr=1&h=500&fr=1"
                    className=" bg-#333 w-full h-full object-cover overflow-hidden object-center rounded-xl"
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
