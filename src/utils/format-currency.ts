export interface FormatCurrencyOptions {
  locale?: string;
  currency?: string;
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
}

export function formatCurrency(
  amount: number,
  options: FormatCurrencyOptions = {},
) {
  const {
    locale = "en-IN",
    currency = "INR",
    maximumFractionDigits = 0,
    minimumFractionDigits = 0,
  } = options;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits,
    minimumFractionDigits,
  }).format(amount);
}
