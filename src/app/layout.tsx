import { type Metadata } from 'next'
import { cookies } from 'next/headers'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'
import { name, headline, introduction } from '@/config/infoConfig'
import { defaultLocale, Locale } from '@/lib/i18n'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: `%s - ${name}`,
    default:
      `${name} - ${headline.en}`,
  },
  description:
    `${introduction.en}`,
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const cookieLocale = cookieStore.get('lang')?.value as Locale | undefined
  const locale: Locale = cookieLocale === 'zh' ? 'zh' : defaultLocale

  return (
    <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full">
        <Providers initialLocale={locale}>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
