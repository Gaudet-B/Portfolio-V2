import { StyledText } from './styles'
import { CaseStudy } from '../../../../../../../scripts/getCaseStudy'
import userresearch from '../../../../../../../assets/epochit/userresearch.webp'
import restauranttech from '../../../../../../../assets/epochit/restauranttech-02.webp'
import pythonlogo from '../../../../../../../assets/epochit/hero_01.PNG'
import awslogo from '../../../../../../../assets/epochit/aws_logo.png'

export const EpochSummary = () => {
  return (
    <StyledText>
      Epoch IT Solutions is a small business based in Chicago, IL that provides
      IT services to local businesses. I was subcontracted for three months to
      meet the unique needs of one of their clients - a small restaurant group.
    </StyledText>
  )
}

export const EpochCaseStudy: CaseStudy = {
  title: 'Epoch',
  sections: [
    {
      type: 'default',
      image: {
        source: userresearch,
        width: 250,
        height: 250,
        alt: 'user research icon',
      },
      text: (
        <StyledText>
          The biggest challenge I encountered with this job was discovering
          exactly what the end users really wanted and how to fit that within
          the technical constraints Epoch IT had provided.
        </StyledText>
      ),
    },
    {
      type: 'reverse',
      image: {
        source: restauranttech,
        width: 250,
        height: 200,
        alt: 'restaurant technology icon',
      },
      text: (
        <StyledText>
          My prior career in hospitality and restaurant operations allowed me to
          empathize with the end users - who were all restaurant managers -
          despite having no access to them due to the nature of the subcontract
          agreement between myself and Epoch IT.
        </StyledText>
      ),
    },
    {
      type: 'sandwich',
      images: [
        // {
        //   source: pythonlogo,
        //   width: 80,
        //   height: 100,
        //   alt: 'placeholder',
        // },
        {
          source: awslogo,
          width: 170,
          height: 100,
          alt: 'AWS logo',
        },
        {
          source: pythonlogo,
          width: 100,
          height: 100,
          alt: 'Python logo',
        },
      ],
      text: (
        <StyledText>
          Once the scope and details of the work were understood, the technical
          side of the job was pretty straightforward. The vendor used for point
          of sale was one I had familiarity with, which made interacting with
          their APIs easier.
        </StyledText>
      ),
      secondaryText: (
        <StyledText>
          A Python script was set to run daily. It used an API key to pull daily
          timeclock data in CSV format and upload it to an AWS S3 bucket. From
          there, the CSV data was converted to JSON, formatted as per the
          standards of the client's payroll provider, encripted, and uploaded
          via their API.
        </StyledText>
      ),
    },
  ],
}

export const EpochTempPlaceholder = {
  title: 'Placeholder - SHOULD NOT RENDER',
  sections: [],
} as CaseStudy
