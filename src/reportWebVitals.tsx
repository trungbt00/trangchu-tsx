import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';
import type { ReportCallback } from 'web-vitals'; // Sử dụng ReportCallback thay vì ReportHandler

const reportWebVitals = (onPerfEntry?: ReportCallback) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
