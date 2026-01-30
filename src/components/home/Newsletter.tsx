"use client"

import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"

import { EnvelopeSimple } from '@phosphor-icons/react'
import { useLanguage } from '@/app/providers'
import { selectText } from '@/lib/i18n'


export default function Newsletter() {
    const { locale } = useLanguage()
    const title = { en: 'Stay up to date', zh: '获取最新更新' }
    const desc = { en: 'Get notified when I publish something new, and unsubscribe at any time.', zh: '发布新内容时收到通知，随时可退订。' }
    const placeholder = { en: 'Email address', zh: '邮箱地址' }
    const btn = { en: 'Join', zh: '订阅' }

    return (
      <form
        action="/subscribe"
        className="rounded-2xl border p-6 border-muted"
      >
        <h2 className="flex text-sm font-semibold ">
          <EnvelopeSimple size={26} weight="duotone" />
          <span className="ml-3">{selectText(title, locale)}</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {selectText(desc, locale)}
        </p>
        <div className="mt-6 flex">
          <Input
            type="email"
            placeholder={selectText(placeholder, locale)}
            aria-label={selectText(placeholder, locale)}
            required
            className="min-w-0 flex-auto appearance-none rounded-md focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 sm:text-sm"
          />
          <Button type="submit" className="ml-4 flex-none bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary">
            {selectText(btn, locale)}
          </Button>
        </div>
      </form>
    )
  }
