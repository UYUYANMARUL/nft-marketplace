import { $ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export const display = $((path: string) => {
  const nav = useNavigate();
  if (!document.startViewTransition) {
    nav(path);
  } else {
    document.startViewTransition(() => nav(path));
  }
});
