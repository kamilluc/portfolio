import React from 'react'
// import '../assets/scss/main.scss'

// import Header from './Header'

class Projects extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props

    return (
      <div>
        hello
        {console.log(data)}
      </div>
    )
  }
}

export default Projects
