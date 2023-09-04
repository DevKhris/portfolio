import type { MutableRefObject } from "react";

export function themeToggle(mode: string, ref: MutableRefObject<null>) {
  const html = document.querySelector("html");
  if (mode === "dark") {
    html?.classList.remove("dark");
    return "light";
  } else {
    html?.classList.add("dark");
    return "dark";
  }
}
