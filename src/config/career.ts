// career
import { LocalizedString } from '@/lib/i18n'

export type CareerItemType = {
    company: LocalizedString
    title: LocalizedString
    description?: LocalizedString
    image?: string
    logo: string
    // 有明确起止日期时用 start/end；只有一个时间标签（如「2024.08」「暑期社会实践」）时用 period
    start?: string
    end?: string
    period?: LocalizedString
  }
  
export const careerList: Array<CareerItemType> = [
  {
    company: { en: 'Changning County Government Service Administration', zh: '昌宁县政务服务管理局' },
    title: { en: 'Government Service Center Intern', zh: '政务服务中心实习生' },
    description: {
      en: 'Handled front-desk requests and document processing at the county government service center, answered public policy inquiries, and joined outreach visits to townships and village communities for policy promotion and research.',
      zh: '在政务服务中心窗口受理材料、解答群众政策咨询，并随同走访乡镇、村社区开展政策宣传与调研。',
    },
    logo: 'government',
    start: '2026.07.20',
    end: '2026.08.20',
  },
  {
    company: { en: 'China Construction Bank, Baoshan Longyang Sanguan Sub-branch', zh: '中国建设银行保山隆阳三馆支行' },
    title: { en: 'Lobby Service & Market Research Intern', zh: '大堂服务与同业调研实习生' },
    description: {
      en: 'Guided customers through lobby services and self-service devices, answered basic banking questions, supported financial literacy outreach, and visited local bank branches for market research on service flow, products, and customer experience.',
      zh: '参与大堂客户引导、自助设备协助、基础业务咨询与金融知识普及，并走访保山隆阳区多家银行网点，调研服务流程、金融产品与客户体验。',
    },
    logo: 'bank',
    start: '2025.07.16',
    end: '2025.08.15',
  },
  {
    company: { en: 'China Mobile (Yunnan)', zh: '中国移动（云南）' },
    title: { en: 'Campus Marketing Staff', zh: '校园营销员' },
    description: {
      en: 'During the freshman enrolment season I handled the whole SIM-card application process on site, explained tariffs and plans to students and parents, and finished first in sales among the outlet staff.',
      zh: '新生入学季独立完成办卡全流程，面向新生与家长现场讲解资费与套餐，销售额位列该营业点第一。',
    },
    logo: 'phone',
    period: { en: '2024.08', zh: '2024.08' },
  },
  {
    company: { en: 'China International Innovation Competition for College Students', zh: '中国国际大学生创新大赛（大创赛）' },
    title: { en: 'Event Volunteer', zh: '赛事志愿者' },
    description: {
      en: 'Served as a volunteer for the China International Innovation Competition for College Students, supporting the event as part of the volunteer team.',
      zh: '担任「中国国际大学生创新大赛」（大创赛）赛事志愿者，参与大赛志愿服务工作。',
    },
    logo: 'volunteer',
    period: { en: 'Volunteering', zh: '志愿服务' },
  },
]
