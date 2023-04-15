/**
 * @license apache-2.0
 * @author jxw
 * @description base card component for tryon.
 */

import React, { Component } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export interface CardFill {
  title: string;
  description: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel: string;
  href: string;
}

const defaultProps: CardFill = {
  title: "Default Title",
  description: "Default Description",
  target: "_blank",
  rel: "noopener noreferrer",
  href: "#",
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
