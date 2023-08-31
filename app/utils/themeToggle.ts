import type { Dispatch, MutableRefObject, Ref, SetStateAction } from "react";

export function themeToggle(
  setMode: Dispatch<SetStateAction<string>>,
  mode: string,
  ref: MutableRefObject<null>
) {
  const html = document.querySelector("html");
  if (mode === "dark") {
    html?.classList.remove("dark");
    setMode("light");
  } else {
    html?.classList.add("dark");
    setMode("dark");
  }
}
