"use client"

import { useLanguage } from '@/app/providers'
import { Globe2 } from 'lucide-react'

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="inline-flex items-center gap-1 rounded-full border border-muted px-3 py-1 text-xs font-semibold shadow-sm hover:border-primary hover:text-primary"
      aria-label="Switch language"
    >
      <Globe2 size={14} />
      {locale === 'en' ? '中文' : 'EN'}
    </button>
  )
}
