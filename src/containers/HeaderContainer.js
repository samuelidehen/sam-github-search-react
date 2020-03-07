import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { getRepos } from '../actions/movieActions'

const HeaderContainer = props => <Header {...props} />

export default connect(
  null,
  {
    getRepos
  }
)(HeaderContainer)
