import * as React from "react";

/** Small rounded tag for inline metadata or category labels. */
export interface ChipProps {
  children: React.ReactNode;
  /** Leading icon node. */
  icon?: React.ReactNode;
  /** Green-tinted category variant. @default false */
  accent?: boolean;
}

export function Chip(props: ChipProps): JSX.Element;
