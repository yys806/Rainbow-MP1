// career
import { LocalizedString } from '@/lib/i18n'

export type CareerItemType = {
    company: LocalizedString
    title: LocalizedString
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
  {
    company: { en: 'Industrial and Commercial Bank of China, Baoshan (Sanguan Sub-branch)', zh: '中国工商银行保山三馆支行' },
    title: { en: 'Intern', zh: '实习生' },
    logo: 'bank',
    start: '2025.07',
    end: '2025.09',
  },
]
