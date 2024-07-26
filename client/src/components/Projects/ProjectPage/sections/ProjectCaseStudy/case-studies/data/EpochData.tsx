import { StyledSummaryText } from '../../styles'
import { CaseStudy } from '../../../../../../../scripts/getCaseStudy'

export const EpochSummary = () => {
  return (
    <StyledSummaryText>
      Epoch IT Solutions is a small business based in Chicago, IL that provides
      IT services to local businesses. I was subcontracted for three months to
      meet the unique needs of one of their clients - a small restaurant group.
    </StyledSummaryText>
  )
}

export const EpochCaseStudy: CaseStudy = {
  title: 'Epoch',
  sections: [
    {
      type: 'default',
      image: {
        source: 'https://via.placeholder.com/250',
        width: 250,
        height: 250,
        alt: 'placeholder',
      },
      text: (
        <StyledSummaryText>
          The biggest challenge I encountered with this job was discovering
          exactly what the end users really wanted and how to fit that within
          the technical constraints Epoch IT had provided.
        </StyledSummaryText>
      ),
    },
    {
      type: 'reverse',
      image: {
        source: 'https://via.placeholder.com/250x150',
        width: 250,
        height: 150,
        alt: 'placeholder',
      },
      text: (
        <StyledSummaryText>
          My prior career in hospitality and restaurant operations allowed me to
          empathize with the end users - who were all restaurant managers -
          despite having no access to them due to the nature of the subcontract
          agreement between myself and Epoch IT.
        </StyledSummaryText>
      ),
    },
    {
      type: 'sandwich',
      images: [
        {
          source: 'https://via.placeholder.com/80x100',
          width: 80,
          height: 100,
          alt: 'placeholder',
        },
        {
          source: 'https://via.placeholder.com/150x100',
          width: 150,
          height: 100,
          alt: 'placeholder',
        },
        {
          source: 'https://via.placeholder.com/100',
          width: 100,
          height: 100,
          alt: 'placeholder',
        },
      ],
      text: (
        <StyledSummaryText>
          Once the scope and details of the work were understood, the technical
          side of the job was pretty straightforward. The vendor used for point
          of sale was one I had familiarity with, which made interacting with
          their APIs easier.
        </StyledSummaryText>
      ),
      secondaryText: (
        <StyledSummaryText>
          A Python script was set to run daily. It used an API key to pull daily
          timeclock data in CSV format and upload it to an AWS S3 bucket. From
          there, the CSV data was converted to JSON, formatted as per the
          standards of the client's payroll provider, encripted, and uploaded
          via their API.
        </StyledSummaryText>
      ),
    },
  ],
}

export const EpochTempPlaceholder = {
  title: 'Placeholder - SHOULD NOT RENDER',
  sections: [],
} as CaseStudy
