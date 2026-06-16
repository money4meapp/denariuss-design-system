import * as React from "react";

export type SelectOption = string | { value: string; label: string };

/** Dropdown matching the Denariuss dark field style. */
export interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Disabled first option shown when nothing is selected. */
  placeholder?: string;
  id?: string;
}

export function Select(props: SelectProps): JSX.Element;
