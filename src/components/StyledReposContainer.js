import styled from 'styled-components'
import { devices } from '../utils/styledUtils'

const StyledReposContainer = styled.section`
  background: ${props => props.theme.secondaryBg};
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  ${devices.md`
    width: 700px;
    min-height: 500px;
    border-radius: 15px;
  `};
`

export default StyledReposContainer
