export interface Metric {
  name: string;
  value: number;
  delta: number;
  id: string;
  entries: PerformanceEntry[];
  navigationType?: string;
}

export interface CLSMetric extends Metric {
  value: number;
  entries: PerformanceEntry[];
}

export interface FCPMetric extends Metric {
  value: number;
  entries: PerformanceEntry[];
}

export interface FIDMetric extends Metric {
  value: number;
  entries: PerformanceEventTiming[];
}

export interface LCPMetric extends Metric {
  value: number;
  entries: PerformanceEntry[];
}

export interface TTFBMetric extends Metric {
  value: number;
  entries: PerformanceNavigationTiming[];
}

export type ReportHandler = (metric: Metric) => void;
