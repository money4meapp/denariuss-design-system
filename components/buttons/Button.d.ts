import * as React from "react";

/**
 * Pill button with the Denariuss green gradient (primary) or glass outline (ghost).
 *
 * @startingPoint section="Buttons" subtitle="Primary & ghost CTA buttons" viewport="700x150"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "ghost";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render as a link to this URL instead of a <button>. */
  href?: string;
  /** Leading icon node (an SVG element). */
  icon?: React.ReactNode;
  /** Trailing icon node (e.g. an arrow). */
  iconRight?: React.ReactNode;
  /** Dim and disable interaction. @default false */
  disabled?: boolean;
  /** Stretch to fill the container width. @default false */
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** Button type when not a link. @default "button" */
  type?: "button" | "submit" | "reset";
}

export function Button(props: ButtonProps): JSX.Element;
