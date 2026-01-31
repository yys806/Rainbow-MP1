export * from './projects'
export * from './education'
export * from './career'

import { LocalizedString } from '@/lib/i18n'

// personal info
export const name = 'Rainbow'
export const headline: LocalizedString = { en: 'Economics student at Yunnan Minzu University.', zh: '云南民族大学经济学专业学生' }
export const introduction: LocalizedString = {
  en: "Hi, I'm Zhu Caihong from Baoshan, Yunnan. I'm an Economics undergraduate at Yunnan Minzu University, enrolled in 2023.",
  zh: '你好，我是朱彩虹，来自云南保山，2023 年入学云南民族大学经济学本科。',
}
export const email = '3314108712@qq.com'
export const githubUsername = 'yys806'

// about page
export const aboutMeHeadline: LocalizedString = { en: 'Who Are You and Why Should I Care?', zh: '我是谁，为什么值得关注？' }
export const aboutParagraphs: LocalizedString[] = [
  {
    en: "I'm Zhu Caihong, an Economics undergraduate at Yunnan Minzu University (class of 2023) from Baoshan, Yunnan.",
    zh: '我是朱彩虹，云南保山人，云南民族大学经济学专业 2023 级本科生。',
  },
  {
    en: 'My coursework covers micro and macroeconomics, statistics, econometrics, finance, and international trade, with a growing focus on data analysis and quantitative modeling.',
    zh: '课程涉及微观/宏观经济学、统计学、计量经济学、金融学、国际贸易等，并逐步加强数据分析与量化建模能力。',
  },
  {
    en: "I keep this site to share what I learn in economics and related fields, and to record the key insights from classes and projects.",
    zh: '我在这里分享经济学及相关领域的学习心得，也记录课堂与项目中的重要收获。',
  },
]

// blog
export const blogHeadLine: LocalizedString = { en: "What I'm thinking about.", zh: '我最近在想什么' }
export const blogIntro: LocalizedString = {
  en: "I've written something about economics, finance, and life.",
  zh: '我写了一些关于经济学、金融和生活的内容。',
}

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.douyin.com/user/MS4wLjABAAAARPOi25w_Mw_ULRG5o4Z8-IySidMaIGkoCT1KfFZe6Z8Yozx_W314WdYAx9Fswykz?from_tab_name=main&is_search=0&list_name=fans&nt=0',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'googlegemini',
  'netlify',
  'steam',
  'android',
  'apple',
  'wechat',
]
