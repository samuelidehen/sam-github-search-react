import React, { useState } from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from './FontAwesomeIcon'
import StyledHeader from './StyledHeader'
import HelpMenuContainer from '../containers/HelpMenuContainer'

const StyledForm = styled.form`
  flex: 1 1 0;
  padding: 0 1rem;

  input {
    height: 100%;
    width: 100%;
    font-size: 1rem;
    padding: 0.3rem 1rem;
    border-radius: 10px;
    border: 0;
    background: rgba(255, 255, 255, 0.95);
  }
`
const Header = ({ getRepos }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = evt => {
    setInputValue(evt.target.value)
  }

  const handleFormSubmit = evt => {
    evt.preventDefault()
    if (!inputValue.length) return
    getRepos(inputValue)
    setInputValue('')
  }

  return (
    <StyledHeader>
      <HelpMenuContainer />
      <StyledForm onSubmit={handleFormSubmit}>
        <input
          placeholder='Search Users / Orgs'
          value={inputValue}
          onChange={handleInputChange}
        />
      </StyledForm>
      <FontAwesomeIcon icon='search' text='search' onClick={handleFormSubmit} />
    </StyledHeader>
  )
}
export default Header
