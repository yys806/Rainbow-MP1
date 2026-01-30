'use client'

import { createContext, useEffect, useRef, useState, useContext } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ThemeProvider, useTheme } from 'next-themes'
import { Locale, defaultLocale } from '@/lib/i18n'

function usePrevious<T>(value: T) {
  let ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    let media = window.matchMedia('(prefers-color-scheme: dark)')

    function onMediaChange() {
      let systemTheme = media.matches ? 'dark' : 'light'
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }

    onMediaChange()
    media.addEventListener('change', onMediaChange)

    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export const AppContext = createContext<{ previousPathname?: string }>({})

type LanguageContextType = {
  locale: Locale
  toggleLocale: () => void
  setLocale: (next: Locale) => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  toggleLocale: () => {},
  setLocale: () => {},
})

export function useLanguage() {
  return useContext(LanguageContext)
}

export function Providers({
  children,
  initialLocale = defaultLocale,
}: {
  children: React.ReactNode
  initialLocale?: Locale
}) {
  let pathname = usePathname()
  let previousPathname = usePrevious(pathname)
  const router = useRouter()
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    document.cookie = `lang=${next};path=/;max-age=${60 * 60 * 24 * 365}`
    router.refresh()
  }

  const toggleLocale = () => setLocale(locale === 'en' ? 'zh' : 'en')

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <LanguageContext.Provider value={{ locale, toggleLocale, setLocale }}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <ThemeWatcher />
          {children}
        </ThemeProvider>
      </LanguageContext.Provider>
    </AppContext.Provider>
  )
}
