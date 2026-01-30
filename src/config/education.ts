// education 
import { LocalizedString } from '@/lib/i18n'

export type EducationItemType = {
    school: LocalizedString
    major: LocalizedString
    image?: string
    logo: string
    start: string
    end: string
  }
  
  export const educationList: Array<EducationItemType> = [
    {
      school: { en: 'Yunnan Minzu University', zh: '云南民族大学' },
      major: { en: 'Economics', zh: '经济学' },
      logo: 'college',
      start: '2023',
      end: 'now'
    },
    {
      school: { en: 'Baoshan Tianli Senior High School', zh: '保山天立高级中学' },
      major: { en: 'Study', zh: '学习' },
      logo: 'coffee',
      start: '2020',
      end: '2023'
    },
    {
      school: { en: 'Han Zhuang Middle School', zh: '汉庄中学' },
      major: { en: 'Study', zh: '学习' },
      logo: 'bank',
      start: '2018',
      end: '2020'
    },
  ]
