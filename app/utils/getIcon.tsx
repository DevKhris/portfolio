import { ReactElement } from "react";

import {
  TfiLinkedin,
  TfiGithub,
  TfiTwitterAlt,
  TfiAlert,
} from "react-icons/tfi";

type IconProps = {
  name: string;
  size?: number;
  children?: ReactElement;
};

export default function getIcon({
  name,
  size,
  children,
}: IconProps): ReactElement {
  switch (name) {
    case "linkedin":
      return <TfiLinkedin size={size}>{children}</TfiLinkedin>;
    case "twitter":
      return <TfiTwitterAlt size={size}>{children}</TfiTwitterAlt>;
    case "github":
      return <TfiGithub size={size}>{children}</TfiGithub>;
    default:
      return <TfiAlert size={size}>{children}</TfiAlert>;
  }
}
