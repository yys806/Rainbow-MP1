"use client"

import { Calendar, Clock, MapPin } from 'lucide-react'
import { ActivityItemType } from '@/config/projects'
import Link from 'next/link'
import { useLanguage } from '@/app/providers'
import { selectText } from '@/lib/i18n'

export function ActivityCard({ activity, titleAs }: { activity: ActivityItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  const { locale } = useLanguage()
  const rawHref = activity.link?.href ?? (activity as any).href
  const resolvedHref = rawHref
    ? /^https?:\/\//.test(rawHref)
      ? rawHref
      : `https://${rawHref}`
    : undefined
  let Component = titleAs ?? 'h2'
  return (
    <li className='group relative flex flex-col items-start h-full'>
      <div className="relative flex flex-col justify-between h-full w-full py-5 px-6 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div className=''>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-2'>
            <Calendar size={20} />
            <Component className="text-sm font-semibold tracking-tight">
              {selectText(activity.name, locale)}
            </Component>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground">
            {selectText(activity.description, locale)}
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-4">
          <div className='flex flex-row items-center gap-4 text-xs font-semibold opacity-80'>
            <div className="flex items-center gap-1">
              <Clock size={16} /> 
              {selectText(activity.date, locale)}
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} /> 
              {selectText(activity.location, locale)}
            </div>
          </div>
          {resolvedHref && (
            <Link
              href={resolvedHref}
              target='_blank'
              rel='noopener noreferrer'
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition hover:brightness-110"
            >
              {selectText(activity.link?.label ?? { en: 'View detail', zh: '查看详情' }, locale)}
              <span aria-hidden className="text-sm leading-none">→</span>
            </Link>
          )}
        </div>
      </div>
    </li>
  )
}
