import caseStudies from '../components/Projects/ProjectPage/sections/ProjectCaseStudy/case-studies/data/CaseStudiesData'

export type CaseStudyImage = {
  source?: string
  alt?: string
  height?: number
  width?: number
}

export type CaseStudySection = {
  type: 'default' | 'reverse' | 'no-image' | 'sandwich'
  image?: CaseStudyImage
  images?: Array<CaseStudyImage>
  text: JSX.Element
  secondaryText?: JSX.Element
}

export type CaseStudy = {
  title: string
  sections: Array<CaseStudySection>
}

export type CaseStudies = {
  summary: (onClick: (e: React.MouseEvent) => void) => JSX.Element
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
