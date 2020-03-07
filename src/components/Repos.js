import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import StyledHorizontalScroll from './StyledHorizontalScroll'
import Repo from './Repo'
import StyledLoader from './StyledLoader'
import HeaderContainer from '../containers/HeaderContainer'

const ALPHABETICALLY = 'ALPHABETICALLY'
const STARGAZERS = 'STARGAZERS'

class Repos extends Component {
  state = {
    sortType: null
  }
  static defaultProps = {
    repos: [],
    loading: false
  }

  static propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object)
  }

  get sortedRepos () {
    const { sortType } = this.state
    const { repos } = this.props

    if (!sortType) return repos

    // sort alphabeticalle
    if (sortType === ALPHABETICALLY) {
      return repos.sort((a, b) => {
        // ignore upper and lowercase
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    }
    // sort by stargazers
    if (sortType === STARGAZERS) {
      return repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
    }
  }

  setSortType = sortType => {
    this.setState({
      sortType
    })
  }

  render () {
    return (
      <Fragment>
        <HeaderContainer />
        <section style={{ textAlign: 'center' }}>
          <button
            onClick={this.setSortType.bind(null, ALPHABETICALLY)}
            style={{
              background:
                this.state.sortType === ALPHABETICALLY ? '#8cacea' : 'white'
            }}
          >
            Sort Alphabetically
          </button>
          <button
            onClick={this.setSortType.bind(null, STARGAZERS)}
            style={{
              background:
                this.state.sortType === STARGAZERS ? '#8cacea' : 'white'
            }}
          >
            Sort by Stargazers
          </button>
        </section>
        {/* the list of repos */}
        <StyledHorizontalScroll>
          {this.props.loading ? (
            <StyledLoader />
          ) : (
            this.sortedRepos.map(
              ({ name, stargazers_count, watchers_count, description }, i) => (
                <Repo
                  name={name}
                  stars={stargazers_count}
                  watchers={watchers_count}
                  description={description}
                  key={i}
                />
              )
            )
          )}
        </StyledHorizontalScroll>
      </Fragment>
    )
  }
}

export default Repos
