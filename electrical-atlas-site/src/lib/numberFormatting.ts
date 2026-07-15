export type NumberLocale = "en" | "th";

export function formatLocalizedNumber(
  value: number,
  locale: NumberLocale,
  unit = "",
  maximumFractionDigits = 3,
) {
  const formattedValue = new Intl.NumberFormat(locale === "th" ? "th-TH" : "en-US", {
    maximumFractionDigits,
    notation: Math.abs(value) >= 1e6 ? "compact" : "standard",
  }).format(value);

  return `${formattedValue}${unit}`;
}
