import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Repos from '../components/Repos'
import { GET_REPOS } from '../constants/labels'

const ReposContainer = props => <Repos {...props} />

const mapStateToProps = state => ({
  loading: state.isLoading[GET_REPOS],
  repos: _.values(state.repos)
})

export default connect(mapStateToProps)(ReposContainer)
