import * as React from "react";

/**
 * Glass panel on navy — the default container for content blocks.
 *
 * @startingPoint section="Surfaces" subtitle="Glass card with optional hover & accent" viewport="700x260"
 */
export interface CardProps {
  children: React.ReactNode;
  /** Lift + green border on hover. @default false */
  hover?: boolean;
  /** Green-tinted gradient fill for featured cards. @default false */
  accent?: boolean;
  /** Element tag to render. @default "div" */
  as?: keyof JSX.IntrinsicElements;
  /** Inner padding in px (or any CSS length). @default 26 */
  padding?: number | string;
  onClick?: (e: React.MouseEvent) => void;
}

export function Card(props: CardProps): JSX.Element;
