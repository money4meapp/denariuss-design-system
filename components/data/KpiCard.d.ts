import * as React from "react";

/**
 * Single metric tile (label · big figure · delta) for the dashboard.
 *
 * @startingPoint section="Data" subtitle="KPI metric tile with delta" viewport="700x180"
 */
export interface KpiCardProps {
  /** Small caption above the figure, e.g. "Entradas". */
  label: React.ReactNode;
  /** The metric, e.g. "R$ 8.400". */
  value: React.ReactNode;
  /** Delta / context line, e.g. "▲ +12% vs mês ant.". */
  delta?: React.ReactNode;
  /** Color of the delta line. @default "up" */
  trend?: "up" | "down";
  /** Render the figure with the green gradient (use for the hero metric). @default false */
  accent?: boolean;
  /** Leading icon node in the label row. */
  icon?: React.ReactNode;
}

export function KpiCard(props: KpiCardProps): JSX.Element;
