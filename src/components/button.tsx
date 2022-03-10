import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ComponentPropsWithRef} from "react";
import { createElement, forwardRef } from "react";

// Types
type Tag = "button" | "input" | "a";
type Element = HTMLButtonElement | HTMLInputElement | HTMLAnchorElement;

type ButtonProps = {
  tag: "button";
  type?: ComponentPropsWithRef<"button">["type"];
  role?: never;
};
type AnchorProps = {
  tag: "a";
  linkProps: LinkProps;
  href?: never;
  ref?: never;
  target?: never;
  role?: never;
};
type InputProps = {
  tag: "input";
  value: ComponentPropsWithRef<"input">["value"];
  type: ComponentPropsWithRef<"input">["type"];
  children?: never;
  role?: never;
};

type Props<T extends Tag> = ComponentPropsWithRef<T> &
  (T extends "button" ? ButtonProps : T extends "a" ? AnchorProps : InputProps);

// Utils
const isExternalLink = (href: LinkProps["href"]) => {
  const target = typeof href === "string" ? href : href.href;
  return target?.startsWith("http") || target?.startsWith("//");
};

// Component
// eslint-disable-next-line react/display-name
export const Button = forwardRef<Element, Props<Tag>>((props, ref) => {
  if (props.tag === "a") {
    const { tag, linkProps, ...otherProps } = props;
    return (
      <Link {...linkProps}>
        {createElement(tag, {
          ref,
          ...otherProps,
          role: "button",
          target: isExternalLink(linkProps.href) ? "_blank" : undefined,
          rel: isExternalLink(linkProps.href)
            ? "noopener noreferrer"
            : undefined,
        })}
      </Link>
    );
  }

  const { tag, ...otherProps } = props;
  return createElement(tag, { ref, type: "button", ...otherProps });
});
