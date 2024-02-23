/** @jsxImportSource react */
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { qwikify$ } from "@builder.io/qwik-react";

function onValueChangeF(value: any) {
  console.log(value);
}

export function ReactSelectScrollable() {
  return (
    <Select
      onValueChange={(value) => {
        onValueChangeF(value);
      }}
    >
      <SelectTrigger className="w-full h-16">
        <SelectValue />
        <div className="flex bg-gray-50 w-full">asd</div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="est">
            <div className="flex h-16">Central Standard Time (CST) </div>
          </SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export const SelectComponent = qwikify$(ReactSelectScrollable, {
  eagerness: "hover",
});
