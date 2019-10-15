import React, {Component} from 'react'

class App extends Component {
  render () {
    return (
      <ul className="my-list">
        <li>{false ? 'miss SKY' : 'sigai1'}</li>
        <li>I love react</li>
      </ul>
    )
}
  }
export default App