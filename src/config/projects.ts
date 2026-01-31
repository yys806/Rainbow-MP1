import { LocalizedString } from '@/lib/i18n'

export type ProjectItemType = {
  name: LocalizedString
  description: LocalizedString
  link?: { href: string; label?: LocalizedString }
  tags?: LocalizedString[]
  website?: string
  icon?: string
}

export type ActivityItemType = {
  name: LocalizedString
  description: LocalizedString
  date: LocalizedString
  location: LocalizedString
  link?: { href: string; label?: LocalizedString }
}

export type ProjectSectionType = {
  title: LocalizedString
  items: Array<ProjectItemType>
}

type RawCourse = {
  code: string
  title: string
  englishTitle?: string
  module: string
  nature: string
  score: number
  credit: number
  gpa: number
  creditGpa: number
  study: string
  minor: string
  remark?: string
}

const courseEnTitles: Record<string, string> = {
  '0201042': 'Introduction to the Community of the Chinese Nation',
  '0301023': 'College Career Development Planning',
  '0301036': 'Principles of Management',
  '0301055': 'Accounting',
  '0301134': 'Political Economy',
  '1001287': 'College English 1 (Reading/Writing/Translation)',
  '1001288': 'College English 1 (Listening & Speaking)',
  '0701220': 'Physical Education 1',
  '9901001': 'National Defense Education & Military Training',
  '03010001': 'Calculus I',
  '99010123': 'College Student Mental Health (Online GE)',
  '13010114': 'College Computer Science',
  '0201046': 'Ideology, Morality and Rule of Law',
  '0301024': 'Contemporary Chinese Economy',
  '0301025': 'E-commerce and Modern Logistics',
  '0301098': 'Marketing',
  '0301115': 'Microeconomics',
  '1001289': 'College English 2 (Reading/Writing/Translation)',
  '1001290': 'College English 2 (Listening & Speaking)',
  '0701223': 'Physical Education 2',
  '9901122': 'Food and Health (Online GE)',
  '9901123': 'Amazing World on the Dining Table (Online GE)',
  '03010002': 'Calculus II',
  '0201047': 'Outline of Modern Chinese History',
  '0301054': 'Macroeconomics',
  '0301095': 'Introduction to World Economy',
  '0301110': 'Statistics',
  '0301119': 'Linear Algebra',
  '1001291': 'College English 3',
  '0701226': 'Physical Education 3',
  '0201051': 'Situation & Policy 3',
  '9901086': 'Psychology of Love',
  '99010566': 'Where is Happiness (Online GE)',
  '03010054': 'Capital (Selected Readings)',
  '0201041': 'Basic Principles of Marxism',
  '0301012': 'Financial Management',
  '0301027': 'Development Economics',
  '0301031': 'Probability Theory & Mathematical Statistics',
  '0301040': 'International Economics (Bilingual)',
  '0301066': 'Finance',
  '0301088': 'Human Resource Management',
  '1001292': 'College English 4',
  '0701229': 'Physical Education 4',
  '0201052': 'Situation & Policy 4',
  '03010058': 'History of Economic Thought',
  '02010028': 'Mao Zedong Thought and the Chinese Socialist System',
  '99011002': 'Vocal Performance (Online GE)',
  '0301038': 'International Finance',
  '0301043': 'International Trade (Bilingual)',
  '0301062': 'Econometrics',
  '0301068': 'Economic Law',
  '0301079': 'Labor Economics',
  '0201053': 'Situation & Policy 5',
  '03010038': 'Econometrics Practicum',
  '02010025': 'Intro to Xi Jinping Thought on Socialism with Chinese Characteristics for a New Era',
}

const makeCourse = (course: RawCourse): ProjectItemType => ({
  name: { en: `[${course.code}] ${courseEnTitles[course.code] ?? course.title}`, zh: `[${course.code}] ${course.title}` },
  description: {
    en: `Module: ${course.module} | Nature: ${course.nature} | Study type: ${course.study} | Minor: ${course.minor}${course.remark ? ` | Note: ${course.remark}` : ''}`,
    zh: `模块：${course.module} | 性质：${course.nature} | 修读性质：${course.study} | 辅修标记：${course.minor}${course.remark ? ` | 备注：${course.remark}` : ''}`,
  },
  tags: [
    { en: `GPA ${course.gpa.toFixed(2)}`, zh: `绩点 ${course.gpa.toFixed(2)}` },
    { en: `Score ${course.score}`, zh: `成绩 ${course.score}` },
    { en: `Credits ${course.credit}`, zh: `学分 ${course.credit}` },
    { en: `Credit GPA ${course.creditGpa.toFixed(2)}`, zh: `学分绩点 ${course.creditGpa.toFixed(2)}` },
  ],
  icon: '/images/1.png',
})

const mapCourses = (courses: RawCourse[]): ProjectItemType[] => courses.map(makeCourse)

const weightedGpa = (courses: RawCourse[]): number => {
  const totals = courses.reduce(
    (acc, cur) => ({
      weighted: acc.weighted + cur.gpa * cur.credit,
      credits: acc.credits + cur.credit,
    }),
    { weighted: 0, credits: 0 }
  )
  return totals.credits > 0 ? Number((totals.weighted / totals.credits).toFixed(2)) : 0
}

// Awards
export const awardsHeadLine: LocalizedString = { en: 'Awards & Honors', zh: '奖项与荣誉' }
export const awardsIntro: LocalizedString = { en: 'Scholarships received during undergraduate study.', zh: '本科阶段获得的奖学金。' }
export const awards: Array<ActivityItemType> = [
  {
    name: { en: 'Mandarin Proficiency Test (Level 2-A)', zh: '普通话二级甲等' },
    description: { en: 'Certified Mandarin 2-A level.', zh: '普通话水平测试二级甲等证书。' },
    date: { en: '2025', zh: '2025' },
    location: { en: 'Yunnan', zh: '云南' },
  },
  {
    name: { en: 'Long Shengwen Scholarship', zh: '龙绳文奖学金' },
    description: { en: 'Scholarship awarded for academic excellence.', zh: '以学业表现获得的奖学金。' },
    date: { en: '2025', zh: '2025' },
    location: { en: 'Yunnan', zh: '云南' },
  },
  {
    name: { en: 'University-level Scholarship', zh: '校级奖学金' },
    description: { en: '￥1000,University scholarship for outstanding performance.', zh: '1000元，因综合表现优异获得的校级三等奖学金。' },
    date: { en: '2025.12', zh: '2025.12' },
    location: { en: 'Yunnan', zh: '云南' },
  },
]

// Course grades by semester
const raw2023Fall: RawCourse[] = [
  { code: '0201042', title: '中华民族共同体概论', module: '公共必修课', nature: '必修', score: 92.7, credit: 2.0, gpa: 3.9, creditGpa: 7.8, study: '初修', minor: '主修' },
  { code: '0301023', title: '大学生职业发展规划', module: '学科专业类基础课', nature: '必修', score: 85.2, credit: 1.0, gpa: 3.7, creditGpa: 3.7, study: '初修', minor: '主修' },
  { code: '0301036', title: '管理学原理', module: '专业选修课', nature: '选修', score: 74, credit: 2.0, gpa: 2.3, creditGpa: 4.6, study: '初修', minor: '主修' },
  { code: '0301055', title: '会计学', module: '专业基础课', nature: '必修', score: 76.65, credit: 3.0, gpa: 2.7, creditGpa: 8.1, study: '初修', minor: '主修' },
  { code: '0301134', title: '政治经济学', module: '专业基础课', nature: '必修', score: 92.6, credit: 4.0, gpa: 3.9, creditGpa: 15.6, study: '初修', minor: '主修' },
  { code: '1001287', title: '大学英语1（读写译）', module: '公共必修课', nature: '必修', score: 74.67, credit: 2.0, gpa: 2.3, creditGpa: 4.6, study: '初修', minor: '主修' },
  { code: '1001288', title: '大学英语1（视听说）', module: '公共必修课', nature: '必修', score: 84.86, credit: 2.0, gpa: 3.3, creditGpa: 6.6, study: '初修', minor: '主修' },
  { code: '0701220', title: '公共体育1', module: '公共必修课', nature: '必修', score: 91.3, credit: 1.0, gpa: 3.9, creditGpa: 3.9, study: '初修', minor: '主修' },
  { code: '9901001', title: '国防教育及军事训练', module: '素养教育课', nature: '选修', score: 84, credit: 2.0, gpa: 3.3, creditGpa: 6.6, study: '初修', minor: '主修' },
  { code: '03010001', title: '微积分（上）', module: '学科专业类基础课', nature: '必修', score: 93.9, credit: 3.0, gpa: 3.9, creditGpa: 11.7, study: '初修', minor: '主修' },
  { code: '99010123', title: '大学生心理健康（网络通识课-雨花）', module: '素养教育课', nature: '选修', score: 92.6, credit: 2.0, gpa: 3.9, creditGpa: 7.8, study: '初修', minor: '主修' },
  { code: '13010114', title: '大学计算机', module: '公共必修课', nature: '必修', score: 87.68, credit: 2.0, gpa: 3.7, creditGpa: 7.4, study: '初修', minor: '主修' },
]

const raw2023Spring: RawCourse[] = [
  { code: '0201046', title: '思想道德与法治', module: '公共必修课', nature: '必修', score: 83.5, credit: 3.0, gpa: 3.3, creditGpa: 9.9, study: '初修', minor: '主修' },
  { code: '0301024', title: '当代中国经济', module: '学科专业类基础课', nature: '必修', score: 77.25, credit: 2.0, gpa: 2.7, creditGpa: 5.4, study: '初修', minor: '主修' },
  { code: '0301025', title: '电子商务与现代物流', module: '专业选修课', nature: '选修', score: 88, credit: 2.0, gpa: 3.7, creditGpa: 7.4, study: '初修', minor: '主修' },
  { code: '0301098', title: '市场营销', module: '专业选修课', nature: '选修', score: 87.5, credit: 2.0, gpa: 3.7, creditGpa: 7.4, study: '初修', minor: '主修' },
  { code: '0301115', title: '微观经济学', module: '专业基础课', nature: '必修', score: 81.7, credit: 3.0, gpa: 3.0, creditGpa: 9.0, study: '初修', minor: '主修' },
  { code: '1001289', title: '大学英语2（读写译）', module: '公共必修课', nature: '必修', score: 75.46, credit: 2.0, gpa: 2.7, creditGpa: 5.4, study: '初修', minor: '主修' },
  { code: '1001290', title: '大学英语2（视听说）', module: '公共必修课', nature: '必修', score: 87.46, credit: 2.0, gpa: 3.7, creditGpa: 7.4, study: '初修', minor: '主修' },
  { code: '0701223', title: '公共体育2', module: '公共必修课', nature: '必修', score: 88.6, credit: 1.0, gpa: 3.7, creditGpa: 3.7, study: '初修', minor: '主修' },
  { code: '9901122', title: '食全·食美（网络通识课-雨花）', module: '素养教育课', nature: '选修', score: 96.4, credit: 2.0, gpa: 4.0, creditGpa: 8.0, study: '初修', minor: '主修' },
  { code: '9901123', title: '餐桌上的奇妙世界（网络通识课-雨花）', module: '素养教育课', nature: '选修', score: 95.95, credit: 2.0, gpa: 4.0, creditGpa: 8.0, study: '初修', minor: '主修' },
  { code: '03010002', title: '微积分（下）', module: '学科专业类基础课', nature: '必修', score: 86.9, credit: 3.0, gpa: 3.7, creditGpa: 11.1, study: '初修', minor: '主修' },
]

const raw2024Fall: RawCourse[] = [
  { code: '0201047', title: '中国近现代史纲要', module: '公共必修课', nature: '必修', score: 76.5, credit: 3.0, gpa: 2.7, creditGpa: 8.1, study: '初修', minor: '主修' },
  { code: '0301054', title: '宏观经济学', module: '专业基础课', nature: '必修', score: 87.38, credit: 3.0, gpa: 3.7, creditGpa: 11.1, study: '初修', minor: '主修' },
  { code: '0301095', title: '世界经济概论', module: '专业选修课', nature: '选修', score: 84.05, credit: 2.0, gpa: 3.3, creditGpa: 6.6, study: '初修', minor: '主修' },
  { code: '0301110', title: '统计学', module: '专业基础课', nature: '必修', score: 89.1, credit: 3.0, gpa: 3.7, creditGpa: 11.1, study: '初修', minor: '主修' },
  { code: '0301119', title: '线性代数', module: '学科专业类基础课', nature: '必修', score: 83.25, credit: 3.0, gpa: 3.3, creditGpa: 9.9, study: '初修', minor: '主修' },
  { code: '1001291', title: '大学英语3', module: '公共必修课', nature: '必修', score: 79.58, credit: 2.0, gpa: 3.0, creditGpa: 6.0, study: '初修', minor: '主修' },
  { code: '0701226', title: '公共体育3', module: '公共必修课', nature: '必修', score: 90.1, credit: 1.0, gpa: 3.9, creditGpa: 3.9, study: '初修', minor: '主修' },
  { code: '0201051', title: '形势与政策3', module: '选修', nature: '选修', score: 94.27, credit: 0.0, gpa: 4.0, creditGpa: 0.0, study: '初修', minor: '主修' },
  { code: '9901086', title: '爱情心理学（通）', module: '素养教育课', nature: '选修', score: 93, credit: 2.0, gpa: 3.9, creditGpa: 7.8, study: '初修', minor: '主修' },
  { code: '99010566', title: '幸福在哪里（网络通识课-雨花）', module: '素养教育课', nature: '选修', score: 98, credit: 2.0, gpa: 4.0, creditGpa: 8.0, study: '初修', minor: '主修' },
  { code: '03010054', title: '资本论（选读）', module: '专业基础课', nature: '必修', score: 78.9, credit: 3.0, gpa: 3.0, creditGpa: 9.0, study: '初修', minor: '主修' },
]

const raw2025Spring: RawCourse[] = [
  { code: '0201041', title: '马克思主义基本原理', module: '公共必修课', nature: '必修', score: 78.5, credit: 3.0, gpa: 3.0, creditGpa: 9.0, study: '初修', minor: '主修' },
  { code: '0301012', title: '财务管理', module: '专业选修课', nature: '选修', score: 70, credit: 2.0, gpa: 2.0, creditGpa: 4.0, study: '初修', minor: '主修' },
  { code: '0301027', title: '发展经济学', module: '专业基础课', nature: '必修', score: 80.8, credit: 3.0, gpa: 3.0, creditGpa: 9.0, study: '初修', minor: '主修' },
  { code: '0301031', title: '概率论与数理统计', module: '学科专业类基础课', nature: '必修', score: 93.48, credit: 3.0, gpa: 3.9, creditGpa: 11.7, study: '初修', minor: '主修' },
  { code: '0301040', title: '国际经济学（双语）', module: '专业选修课', nature: '选修', score: 82.5, credit: 3.0, gpa: 3.3, creditGpa: 9.9, study: '初修', minor: '主修' },
  { code: '0301066', title: '金融学', module: '专业基础课', nature: '必修', score: 78.45, credit: 3.0, gpa: 3.0, creditGpa: 9.0, study: '初修', minor: '主修' },
  { code: '0301088', title: '人力资源管理', module: '专业选修课', nature: '选修', score: 87.6, credit: 2.0, gpa: 3.7, creditGpa: 7.4, study: '初修', minor: '主修' },
  { code: '1001292', title: '大学英语4', module: '公共必修课', nature: '必修', score: 84.17, credit: 2.0, gpa: 3.3, creditGpa: 6.6, study: '初修', minor: '主修' },
  { code: '0701229', title: '公共体育4', module: '公共必修课', nature: '必修', score: 96.15, credit: 1.0, gpa: 4.0, creditGpa: 4.0, study: '初修', minor: '主修' },
  { code: '0201052', title: '形势与政策4', module: '选修', nature: '选修', score: 95.33, credit: 0.0, gpa: 4.0, creditGpa: 0.0, study: '初修', minor: '主修' },
  { code: '03010058', title: '经济思想史', module: '专业基础课', nature: '必修', score: 82.8, credit: 3.0, gpa: 3.3, creditGpa: 9.9, study: '初修', minor: '主修' },
  { code: '02010028', title: '毛泽东思想和中国特色社会主义理论体系概论', module: '公共必修课', nature: '必修', score: 83.5, credit: 3.0, gpa: 3.3, creditGpa: 9.9, study: '初修', minor: '主修' },
  { code: '99011002', title: '声乐演唱（网络通识课-雨花）', module: '素养教育课', nature: '选修', score: 91.6, credit: 2.0, gpa: 3.9, creditGpa: 7.8, study: '初修', minor: '主修' },
]

const raw2025Fall: RawCourse[] = [
  { code: '0301038', title: '国际金融学', module: '专业选修课', nature: '选修', score: 85.8, credit: 2.0, gpa: 3.7, creditGpa: 7.4, study: '初修', minor: '主修' },
  { code: '0301043', title: '国际贸易学（双语）', module: '专业选修课', nature: '选修', score: 93.5, credit: 2.0, gpa: 3.9, creditGpa: 7.8, study: '初修', minor: '主修' },
  { code: '0301062', title: '计量经济学', module: '专业基础课', nature: '必修', score: 88.8, credit: 3.0, gpa: 3.7, creditGpa: 11.1, study: '初修', minor: '主修' },
  { code: '0301068', title: '经济法', module: '专业选修课', nature: '选修', score: 94.5, credit: 2.0, gpa: 4.0, creditGpa: 8.0, study: '初修', minor: '主修' },
  { code: '0301079', title: '劳动经济学', module: '专业选修课', nature: '选修', score: 85.1, credit: 2.0, gpa: 3.7, creditGpa: 7.4, study: '初修', minor: '主修' },
  { code: '0201053', title: '形势与政策5', module: '选修', nature: '选修', score: 98.75, credit: 0.0, gpa: 4.0, creditGpa: 0.0, study: '初修', minor: '主修' },
  { code: '03010038', title: '计量经济学实训', module: '综合实践', nature: '必修', score: 93, credit: 1.0, gpa: 3.9, creditGpa: 3.9, study: '初修', minor: '主修' },
  { code: '02010025', title: '习近平新时代中国特色社会主义思想概论', module: '公共必修课', nature: '必修', score: 85.25, credit: 3.0, gpa: 3.7, creditGpa: 11.1, study: '初修', minor: '主修' },
]

const semester2023Fall = mapCourses(raw2023Fall)
const semester2023Spring = mapCourses(raw2023Spring)
const semester2024Fall = mapCourses(raw2024Fall)
const semester2025Spring = mapCourses(raw2025Spring)
const semester2025Fall = mapCourses(raw2025Fall)

// Headings and sections
export const projectHeadLine: LocalizedString = { en: 'Grades', zh: '成绩' }
export const projectIntro: LocalizedString = { en: 'Five semesters of undergraduate grades, grouped by term.', zh: '本科五个学期的课程成绩，按学期划分展示。' }

export const projectSections: Array<ProjectSectionType> = [
  { title: { en: '2025-2026 Fall', zh: '2025-2026（上）' }, items: semester2025Fall },
  { title: { en: '2024-2025 Spring', zh: '2024-2025（下）' }, items: semester2025Spring },
  { title: { en: '2024-2025 Fall', zh: '2024-2025（上）' }, items: semester2024Fall },
  { title: { en: '2023-2024 Spring', zh: '2023-2024（下）' }, items: semester2023Spring },
  { title: { en: '2023-2024 Fall', zh: '2023-2024（上）' }, items: semester2023Fall },
]

export const projects: Array<ProjectItemType> = projectSections.flatMap((section) => section.items)

// GPA stats
export const semesterGpa: number[] = [
  weightedGpa(raw2025Fall),
  weightedGpa(raw2025Spring),
  weightedGpa(raw2024Fall),
  weightedGpa(raw2023Spring),
  weightedGpa(raw2023Fall),
]
export const overallGpa: number = weightedGpa([
  ...raw2025Fall,
  ...raw2025Spring,
  ...raw2024Fall,
  ...raw2023Spring,
  ...raw2023Fall,
])

// Interests & skills
export const activitiesHeadLine: LocalizedString = { en: 'Interests & Skills', zh: '兴趣与技能' }
export const activitiesIntro: LocalizedString = { en: 'Practices I enjoy beyond coursework.', zh: '课余持续投入的兴趣与技能。' }
export const activities: Array<ActivityItemType> = [
  {
    name: { en: 'Piano', zh: '钢琴' },
    description: { en: 'Classical repertoire practice and performance pieces.', zh: '以古典曲目为主的练习与演奏。' },
    date: { en: 'Long-term', zh: '长期' },
    location: { en: 'Practice room & home', zh: '琴房与家中' },
  },
  {
    name: { en: 'Swimming', zh: '游泳（蛙泳 / 自由泳）' },
    description: { en: 'Regular training focusing on breaststroke and freestyle.', zh: '以蛙泳、自由泳为主的日常训练。' },
    date: { en: 'Long-term', zh: '长期' },
    location: { en: 'Pool', zh: '游泳馆' },
  },
  {
    name: { en: 'Styling & Makeup', zh: '妆造' },
    description: { en: 'Self-learning', zh: '自学' },
    date: { en: 'Long-term', zh: '长期' },
    location: { en: 'School', zh: '学校' },
  },
]
