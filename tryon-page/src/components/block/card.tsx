/**
 * @license apache-2.0
 * @author jxw
 * @description base card component for tryon.
 */

import React, { Component, useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export interface CardFill {
  title?: string;
  description?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
  href?: string;
  className?: string;
}

const defaultProps: CardFill = {
  title: "Default Title",
  description: "Default Description",
  target: "_self",
  rel: "noopener noreferrer",
  href: "#",
  className: "",
};

export const BaseCard: React.FC<CardFill> = (props) => {
  const { title, description, target, rel, href } = {
    ...defaultProps,
    ...props,
  };
  return (
    <a
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target={target}
      rel={rel}
    >
      <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}>
        {description}
      </p>
    </a>
  );
};

export const BaseImageCard: React.FC<
  CardFill & { img?: string; alt?: string }
> = (props) => {
  const defaultArgs = {
    img: "/nliolo.svg",
    alt: "Nliolo Logo",
  };
  const { description, img, alt } = {
    ...defaultArgs,
    ...defaultProps,
    ...props,
  };
  return (
    <div className="text-left">
      <span className="group rounded-lg border border-transparent py-4 transition-colors inline-block mb-20">
        <p className={`${inter.className} m-0 max-w-[30ch] text-md`}>
          {description}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </p>
      </span>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src={img}
        alt={alt}
        width={180}
        height={180}
        priority
      />
    </div>
  );
};

const TRANSITION_PROPERTY_CLICKABLE_CARD = "opacity";

export const ClickableCard: React.FC<
  CardFill & {
    onclick?: (
      state: boolean,
      action: React.Dispatch<React.SetStateAction<boolean>>
    ) => void;
  }
> = (props) => {
  let { onclick, className } = {
    ...defaultProps,
    ...props,
  };
  const [clicked, setClicked] = useState(false);
  const [transitionState, setTransitionState] = useState(false);
  const handleClick = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (onclick) {
      event.preventDefault();
      onclick(transitionState, setTransitionState);
    }
  };
  return (
    <div
      onClick={(e) => {
        if (clicked) return;
        setClicked(true);
        setTransitionState(true);
      }}
      onTransitionEnd={(e) => {
        if (e.propertyName === TRANSITION_PROPERTY_CLICKABLE_CARD) {
          handleClick(e);
        }
      }}
      className={`transition-opacity ${
        transitionState ? "opacity-0" : "opacity-100"
      } duration-500 hover:shadow-none ease-in-out hover:border-gray-300 hover:bg-gray-100 flex justify-start rounded-lg p-0 ${className}`}
    >
      <BaseCard {...props} />
    </div>
  );
};
