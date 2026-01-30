import { Container } from '@/components/layout/Container'
import Newsletter from '@/components/home/Newsletter'
import Career from '@/components/home/Career'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import { headline, introduction } from '@/config/infoConfig'
import { BlogCard } from '@/components/home/BlogCard'
import { getAllBlogs, type BlogType } from '@/lib/blogs'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ActivityCard } from '@/components/home/ActivityCard'
import { projectHeadLine, projectIntro, projectSections, blogHeadLine, blogIntro, techIcons, semesterGpa, overallGpa } from '@/config/infoConfig'
import { awards, awardsHeadLine, awardsIntro, activities, activitiesHeadLine, activitiesIntro } from '@/config/projects'
import IconCloud from "@/components/ui/icon-cloud"
import { Award, Briefcase, Heart } from 'lucide-react'
import { cookies } from 'next/headers'
import { Locale, defaultLocale, selectText } from '@/lib/i18n'

export default async function Home() {
  let blogList = (await getAllBlogs()).slice(0, 4)
  const cookieLocale = cookies().get('lang')?.value as Locale | undefined
  const locale: Locale = cookieLocale === 'zh' ? 'zh' : defaultLocale

  return (
    <>
      <Container className="mt-9">
        {/* personal info */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className='md:mt-20'>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl opacity-80">
              {selectText(headline, locale)}
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              {selectText(introduction, locale)}
            </p>
            <SocialLinks className='md:mt-24'/>
          </div>
          <div className="relative flex size-full items-center justify-center overflow-hidden w-full px-20 md:px-0 md:w-2/3 ml-auto md:mr-8">
            <IconCloud iconSlugs={techIcons} />
          </div>
        </div>

        {/* Awards */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Award size={28}/>
            {selectText(awardsHeadLine, locale)}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            {selectText(awardsIntro, locale)}
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {awards.map((award) => (
              <ActivityCard key={award.name.en} activity={award} titleAs='h3'/>
            ))}
          </ul>
        </div>

        {/* Research & Projects */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Briefcase size={28}/>
            {selectText(projectHeadLine, locale)}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {selectText(projectIntro, locale)}
          </p>
          <div className="inline-flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4">
            {locale === 'zh' ? '总加权绩点' : 'Overall GPA'}: {overallGpa.toFixed(2)}
          </div>
          <div className="space-y-10">
            {projectSections.map((section, idx) => (
              <div key={section.title.en}>
                <h3 className="flex items-center gap-3 text-lg font-semibold tracking-tight md:text-xl opacity-80 mb-4">
                  {selectText(section.title, locale)}
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {locale === 'zh' ? '学期均绩' : 'GPA'} {semesterGpa[idx]?.toFixed(2) ?? '--'}
                  </span>
                </h3>
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
                >
                  {section.items.map((project) => (
                    <ProjectCard key={project.name.en} project={project} titleAs='h4'/>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies & Volunteer */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Heart size={28}/>
            {selectText(activitiesHeadLine, locale)}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {selectText(activitiesIntro, locale)}
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {activities.map((activity) => (
              <ActivityCard key={activity.name.en} activity={activity} titleAs='h3'/>
            ))}
          </ul>
        </div>

        {/* Blog Section */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 py-8 my-8 lg:max-w-none border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            {selectText(blogHeadLine, locale)}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {selectText(blogIntro, locale)}
          </p>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          {/* left column */}
          {/* blog */}
          <div className="flex flex-col gap-16">
            {blogList.map((blog: BlogType) => (
              <BlogCard key={blog.slug} blog={blog} titleAs='h3'/>
            ))}
          </div>

          {/* right column */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Career />
            <Education />
          </div>
        </div>
      </Container>
    </>
  )
}
