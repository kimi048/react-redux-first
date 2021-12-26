import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
  // actions.moviesList()
  componentDidMount() {
    this.props.dispatch(actions.moviesList())
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        {
          this.props.movies ?
            this.props.movies.map((item) => (
              <div key={item.id}>
                {item.name}
              </div>
            ))  
          : null
        }
      </div>
    )
  }
}
function mapStateToProps(state) {
  // console.log(state)
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(App)