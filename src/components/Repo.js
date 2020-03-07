import React from 'react'
import styled from 'styled-components'

const StyledRepo = styled.div`
  padding: 0.6rem 1rem;
  min-width: 200px;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
`
const StyledRepoTitle = styled.div`
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 4px;
  font-size: 2.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
`

const StyledAside = styled.aside`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
`

const StyledDescription = styled.p`
  color: #525661;
  color: rgba(255, 255, 255, 0.75);
`

const Repo = ({ name, stars, watchers, description }) => (
  <StyledRepo>
    <StyledRepoTitle>{name}</StyledRepoTitle>
    <StyledAside>
      <div>{`${stars} Stargazers`}</div>
      <div>{`${watchers} People Watching`}</div>
    </StyledAside>
    <StyledDescription>{description}</StyledDescription>
  </StyledRepo>
)

export default Repo
