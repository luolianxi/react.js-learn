import React, {Component, Fragment} from 'react'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'sky',
      list: ['service13', 'service24']
    }
  }

  inputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  addList () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('div').length)
    })
  }

  deletItem (index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  render () {
    return (
      <Fragment>
        <div>
          <label>加入服务：</label>
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}className="my-list">
          {
            this.state.list.map((item, index) => {
              return (
                <XiaojiejieItem
                  content={item}
                  key={index}
                  index={index}
                  deletItem={this.deletItem.bind(this)}
                />
              )
                    // <li 
                    //   key={index}
                    //   onClick={this.deletItem.bind(this, index)}
                    //   dangerouslySetInnerHTML={{__html: item}}
                    //  >
                    //  </li>
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default Xiaojiejie