export type Locale = 'en' | 'zh'

export type LocalizedString = {
  en: string
  zh: string
}

export const defaultLocale: Locale = 'en'

export function selectText(
  value: string | LocalizedString,
  locale: Locale,
): string {
  if (typeof value === 'string') return value
  return value[locale] ?? value.en
}

export function isLocalizedString(
  value: unknown,
): value is LocalizedString {
  return (
    typeof value === 'object' &&
    value !== null &&
    'en' in (value as Record<string, unknown>) &&
    'zh' in (value as Record<string, unknown>)
  )
}
