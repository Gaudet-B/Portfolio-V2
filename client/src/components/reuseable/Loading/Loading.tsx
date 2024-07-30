import styles from '../../../styles/loading.style.module.css'

import {
  StyledLoadingContainer,
  StyledSpinner,
  StyledSpinnerReverse,
} from './styles'

const Loading = ({ size }: { size: string }) => {
  return (
    <StyledLoadingContainer>
      <StyledSpinner $size={size}>
        <StyledSpinnerReverse $size={size} />
      </StyledSpinner>
    </StyledLoadingContainer>
  )
}

export default Loading
