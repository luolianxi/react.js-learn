import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
  render() { 
    return (
      <div onClick={this.handClick.bind(this)}>
        {this.props.avname}为你做{this.props.content}
      </div>
    )
  }

  handClick () {
    this.props.deletItem(this.props.index)
  }
}
 
XiaojiejieItem.propTypes = {
  content:PropTypes.string,
  deletItem: PropTypes.func,
  index: PropTypes.number,
  avname: PropTypes.string.isRequired
}

XiaojiejieItem.defaultProps = {
  avname: '的空间是否'
}
export default XiaojiejieItem