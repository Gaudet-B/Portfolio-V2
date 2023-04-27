import styles from '../../../styles/loading.style.module.css'

import {
  StyledLoadingContainer,
  StyledSpinner,
  StyledSpinnerReverse,
} from './styles'

const Loading = (props: { size: string }) => {
  return (
    <StyledLoadingContainer size={props.size}>
      <StyledSpinner size={props.size}>
        <StyledSpinnerReverse size={props.size} />
      </StyledSpinner>
    </StyledLoadingContainer>
  )
}

export default Loading
