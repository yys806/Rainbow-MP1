// site config
import { LocalizedString } from '@/lib/i18n'

export const utm_source = 'rainbow-mp1'

// navigation config
export type NavItemType = {
  name: LocalizedString
  href: string
}

const navHome: LocalizedString = { en: 'Home', zh: '首页' }
const navAbout: LocalizedString = { en: 'About', zh: '关于' }
const navProjects: LocalizedString = { en: 'Score', zh: '成绩' }
const navBlogs: LocalizedString = { en: 'Blogs', zh: '博客' }

export const footerItems: Array<NavItemType> = [
  {
    name: navHome,
    href: '/'
  },
  {
    name: navAbout,
    href: '/about'
  },
  {
    name: navProjects,
    href: '/projects'
  },
  {
    name: navBlogs,
    href: '/blogs'
  }
]

export const navItems: Array<NavItemType> = [
  {
    name: navHome,
    href: '/'
  },
  {
    name: navAbout,
    href: '/about'
  },
  {
    name: navProjects,
    href: '/projects'
  },
  {
    name: navBlogs,
    href: '/blogs'
  }
]
