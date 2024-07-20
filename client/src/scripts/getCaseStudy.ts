import caseStudies from '../components/Projects/ProjectPage/sections/ProjectCaseStudy/case-studies/data/CaseStudiesData'

export type CaseStudySection = {
  type: 'default' | 'reverse' | 'no-image'
  image?: string
  text: JSX.Element
}

export type CaseStudy = {
  title: string
  sections: Array<CaseStudySection>
}

export type CaseStudies = {
  summary: JSX.Element
  cases: Array<CaseStudy>
}

const _convertTitleToCaseStudyKey = (title: string) => {
  let caseStudy: string
  if (title.includes(' ')) caseStudy = title.split(' ')[0]
  else caseStudy = title
  return caseStudy as keyof typeof caseStudies
}

export const getCaseStudy = (title: string): CaseStudies => {
  const caseStudy = _convertTitleToCaseStudyKey(title)
  return caseStudies[caseStudy]
}
