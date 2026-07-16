export type ProgressKey =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "End"
  | "Home"
  | "PageDown"
  | "PageUp";

export function normalizeProgress(value: number): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(0, Math.min(100, Math.round(value)));
}

export function progressForKey(currentProgress: number, key: string, shiftKey = false): number | undefined {
  const progress = normalizeProgress(currentProgress);
  const step = shiftKey ? 10 : 1;

  switch (key satisfies string) {
    case "Home":
      return 0;
    case "End":
      return 100;
    case "ArrowLeft":
    case "ArrowDown":
      return normalizeProgress(progress - step);
    case "ArrowRight":
    case "ArrowUp":
      return normalizeProgress(progress + step);
    case "PageDown":
      return normalizeProgress(progress - 10);
    case "PageUp":
      return normalizeProgress(progress + 10);
    default:
      return undefined;
  }
}

export function rangeValueForKey(
  currentValue: number,
  key: string,
  step: number,
  min: number,
  max: number,
): number | undefined {
  const clampValue = (value: number) => Math.max(min, Math.min(max, value));

  switch (key satisfies string) {
    case "Home":
      return min;
    case "End":
      return max;
    case "ArrowLeft":
    case "ArrowDown":
      return clampValue(currentValue - step);
    case "ArrowRight":
    case "ArrowUp":
      return clampValue(currentValue + step);
    case "PageDown":
      return clampValue(currentValue - step * 5);
    case "PageUp":
      return clampValue(currentValue + step * 5);
    default:
      return undefined;
  }
}
