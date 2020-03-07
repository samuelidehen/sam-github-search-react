import React from 'react'
import { Route } from 'react-router-dom'
import StyledReposContainer from './StyledReposContainer'
import ReposContainer from '../containers/ReposContainer'

const App = () => {
  return (
    <StyledReposContainer>
      <Route exact path='/' component={ReposContainer} />
      {/* a much larger project will have more Route links in here. */}
    </StyledReposContainer>
  )
}

export default App
