"use client";

// React
import React from "react";

// Framer Motion
import { LazyMotion, domAnimation, m } from "framer-motion";

export const FramerDiv = m.div;
export const FramerSection = m.section;
export const FramerH1 = m.h1;
export const FramerLi = m.li;
export const FramerSpan = m.span;
export const FramerParagraph = m.p;

export const FramerWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};
