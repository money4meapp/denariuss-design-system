import * as React from "react";

/** Tiny solid label — ribbon for featured plans or a status pill. */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "neutral" */
  tone?: "popular" | "positive" | "negative" | "warning" | "neutral";
}

export function Badge(props: BadgeProps): JSX.Element;
