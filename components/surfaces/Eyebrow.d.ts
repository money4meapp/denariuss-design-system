import * as React from "react";

/** Uppercase pill kicker placed above a section heading. */
export interface EyebrowProps {
  children: React.ReactNode;
  /** Show the pulsing green dot. @default false */
  dot?: boolean;
  /** Leading icon node (use instead of the dot). */
  icon?: React.ReactNode;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
