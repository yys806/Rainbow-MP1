import { type Metadata } from 'next'
import { cookies } from 'next/headers'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { projectHeadLine, projectIntro, projectSections, semesterGpa, overallGpa } from '@/config/infoConfig'
import { activities } from '@/config/projects'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ActivityCard } from '@/components/home/ActivityCard'
import { Calendar } from 'lucide-react'
import { Locale, defaultLocale, selectText } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Score',
  description: selectText(projectIntro, 'en'),
}

export default function Projects() {
  const cookieLocale = cookies().get('lang')?.value as Locale | undefined
  const locale: Locale = cookieLocale === 'zh' ? 'zh' : defaultLocale

  return (
    <SimpleLayout
      title={selectText(projectHeadLine, locale)}
      intro={selectText(projectIntro, locale)}
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
        {locale === 'zh' ? '总加权绩点' : 'Overall GPA'}: {overallGpa.toFixed(2)}
      </div>
      <div className="space-y-12 pb-10">
        {projectSections.map((section, idx) => (
          <section key={section.title.en} className="space-y-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold tracking-tight md:text-xl opacity-80">
              {selectText(section.title, locale)}
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                {locale === 'zh' ? '学期均绩' : 'GPA'} {semesterGpa[idx]?.toFixed(2) ?? '--'}
              </span>
            </h2>
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
            >
              {section.items.map((project) => (
                <ProjectCard key={project.name.en} project={project} />
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Calendar size={28}/>
            {locale === 'en' ? 'Hobbies & Volunteer' : '兴趣与志愿'}
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {activities.map((activity) => (
              <ActivityCard key={activity.name.en} activity={activity} titleAs='h3'/>
            ))}
          </ul>
        </div>
    </SimpleLayout>
  )
}
