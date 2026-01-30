import { awards, awardsHeadLine } from "@/config/projects"
import { Card } from "@/components/shared/Card"
import { Section } from "@/components/layout/Section"
import { useLanguage } from "@/app/providers"
import { selectText } from "@/lib/i18n"

export function Awards() {
  const { locale } = useLanguage()
  return (
    <Section title={selectText(awardsHeadLine, locale)}>
      <div className="grid grid-cols-1 gap-4">
        {awards.map((award, index) => {
          const rawHref = award.link?.href ?? (award as any).href
          const resolvedHref = rawHref
            ? /^https?:\/\//.test(rawHref)
              ? rawHref
              : `https://${rawHref}`
            : undefined

          return (
            <Card
              key={award.name.en ?? index}
              className="group transition"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{selectText(award.name, locale)}</h3>
                  <span className="text-sm text-muted-foreground">
                    {selectText(award.date, locale)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectText(award.description, locale)}
                </p>
                {resolvedHref && (
                  <a
                    href={resolvedHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:brightness-110"
                  >
                    {selectText(award.link?.label ?? { en: 'View detail', zh: '查看详情' }, locale)}
                    <span aria-hidden className="text-base leading-none">→</span>
                  </a>
                )}
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
