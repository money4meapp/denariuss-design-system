import * as React from "react";

/**
 * Text input styled for the dark fintech surface; border turns green on focus.
 *
 * @startingPoint section="Forms" subtitle="Dark text input & select fields" viewport="700x200"
 */
export interface InputProps {
  /** Field label rendered above the input. */
  label?: string;
  /** @default "text" */
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Helper or error text below the field. */
  helper?: string;
  /** Red border + red helper text. @default false */
  error?: boolean;
  id?: string;
}

export function Input(props: InputProps): JSX.Element;
