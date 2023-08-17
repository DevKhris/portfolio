import { TfiLinkedin, TfiGithub, TfiTwitterAlt } from "react-icons/tfi";

export const getIcon = (name: string, size = 24) => {
  switch (name) {
    case "linkedin":
      return <TfiLinkedin size={size}></TfiLinkedin>;
    case "twitter":
      return <TfiTwitterAlt size={size}></TfiTwitterAlt>;
    case "github":
      return <TfiGithub size={size}></TfiGithub>;
  }
};
