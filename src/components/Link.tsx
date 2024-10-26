import type { JSX } from "solid-js";

import "./Link.css";


type LinkProps = {
  href: string;
  target?: string
  children: JSX.Element;
};

export default function Link(link: LinkProps) {
  return (
    <a href={link.href} target={link.target ?? '_blank'}>
      start.solidjs.com
    </a>
  );
}
