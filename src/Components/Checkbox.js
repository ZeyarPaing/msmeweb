import React, { useState, useEffect, Component } from 'react'
import PropTypes from 'prop-types'

class Checkbox extends Component {
  state = { checked: false }

  handleCheck = async () => {
    await this.setState({ checked: !this.state.checked })
    this.props.checkBoxChange(this.state.checked)
  }

  returnValue = (c) => {}
  render() {
    return (
      <React.Fragment>
        <input
          type="checkbox"
          id="check"
          name="check"
          onChange={this.handleCheck}
          defaultChecked={this.state.checked}
        />
        <label
          htmlFor="check"
          style={
            this.props.light
              ? { color: '#fff', fontSize: '14px', margin: '0px 0 2px 5px' }
              : { color: '#000', fontSize: '14px', margin: '0px 0 2px 5px' }
          }
        >
          {this.props.label}
        </label>
      </React.Fragment>
    )
  }
}
Checkbox.propTypes = {
  light: PropTypes.bool,
  label: PropTypes.string,
  checkBoxChange: PropTypes.func,
}
export default Checkbox
