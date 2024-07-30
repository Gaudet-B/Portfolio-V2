import { StyledTypewriter, StyledTypewriterText } from './styles'

const Typewriter = ({
  text,
  loaded,
  windowWidth,
}: {
  text: Array<string>
  loaded: boolean
  windowWidth: number
}) => {
  const getLineId = (line: number) => {
    if (line === 0) return 'name'
    if (line === 1) return 'line-two'
    if (line === 2) return 'line-three'
    if (line === 3) return 'line-four'
  }

  return (
    <StyledTypewriter>
      {text
        ? text.map((text, index) => {
            const id = getLineId(index)
            return (
              <StyledTypewriterText
                id={id}
                key={index}
                // loaded={loaded}
                $responsive={windowWidth < 800}
                $responsiveSubtext={windowWidth < 800 && index > 1}
                $invisible={index === 1}
                $heading={index === 0}
              >
                {loaded ? text : null}
                {loaded && index === 3 ? (
                  <span aria-hidden="true"></span>
                ) : null}
              </StyledTypewriterText>
            )
          })
        : null}
    </StyledTypewriter>
  )
}

export default Typewriter
