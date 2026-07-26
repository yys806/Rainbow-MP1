"use client"

import { ArrowRightIcon, HashIcon } from 'lucide-react'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { Favicon } from "favicon-stealer";
import { useLanguage } from '@/app/providers'
import { selectText } from '@/lib/i18n'

export function ProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  const { locale } = useLanguage()
  const rawHref = project.link?.href
  const utmLink = rawHref
    ? /^https?:\/\//.test(rawHref)
      ? `${rawHref}${rawHref.includes('?') ? '&' : '?'}utm_source=${utm_source}`
      : `https://${rawHref}?utm_source=${utm_source}`
    : null
  const siteLink = project.website
    ? project.website.startsWith('http')
      ? project.website
      : `https://${project.website}`
    : null
  let Component = titleAs ?? 'h2'
  return (
    <li className='group relative flex flex-col items-start h-full'>
      <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div className=''>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4'>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
              {project.icon ? (
                <Image
                  src={project.icon}
                  alt={`${selectText(project.name, locale)} icon`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : utmLink ? (
                <Favicon url={utmLink} />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <HashIcon className="w-4 h-4" />
                </div>
              )}
            </div>
            <Component className="text-base font-semibold">
              {selectText(project.name, locale)}
            </Component>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
            {selectText(project.description, locale)}
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-4 ml-1">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-x-2 items-center">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-0.5 group"
                >
                  <span
                    className={`text-xs tracking-tighter ${index === 0 ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
                  >
                    {selectText(tag, locale)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        {siteLink && (
          <div className="relative z-30 mt-4 ml-1 flex gap-3">
            <Link
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-primary/30 px-3 py-1 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary/10"
              onClick={(e) => e.stopPropagation()}
            >
              {locale === 'zh' ? '访问网站' : 'Visit site'}
              <ArrowUpRight size={16} weight="duotone" />
            </Link>
          </div>
        )}
        {utmLink && (
          <Link
            href={utmLink}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={selectText(project.name, locale)}
            className='absolute inset-0 z-20'>
            <ArrowUpRight size={32} weight="duotone" className="absolute top-4 right-4 h-4 w-4 group-hover:text-primary group-hover:cursor-pointer" />
          </Link>
        )}
      </div>
    </li>
  )
}
