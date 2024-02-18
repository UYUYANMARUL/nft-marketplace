import { qwikify$ } from "@builder.io/qwik-react";

import { Button as ReactButton } from "./ui/button";

export const Button = qwikify$(ReactButton, { eagerness: "hover" });
