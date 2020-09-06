import React, { Component } from 'react'
import classes from '../Components.module.css'

class InputRadio extends Component {
  state = {
    showAlert: true,
  }

  handleFocus() {
    if (this.props.required) {
      this.setState({ showAlert: false })
    }
  }
  handleChange(e, label) {
    console.log('radio val', e.target, label)
    this.props.selection(label)
  }
  renderRadio = this.props.radioGp.map((label, index) => (
    <div key={index}>
      <input
        type="radio"
        name={this.props.name}
        id={this.props.name + index}
        required={this.props.required}
        onFocus={() => this.handleFocus()}
        onChange={(e) => this.handleChange(e, label)}
      />
      <label htmlFor={this.props.name + index}>{label}</label>
    </div>
  ))
  render() {
    return (
      <div
        className={classes.input}
        style={this.state.showAlert ? { borderColor: 'red' } : {}}
      >
        <header>
          <span className={classes.inputheader}>{this.props.header}</span>
          {this.props.required ? (
            <span style={{ color: 'red' }}>*</span>
          ) : (
            <React.Fragment />
          )}
        </header>
        {this.renderRadio}
        <br />
        <p
          style={
            this.state.showAlert
              ? { visibility: 'visible', margin: '10px 0 -10px 0' }
              : { visibility: 'hidden', margin: '-10px 0 -10px 0' }
          }
        >
          ! ဤအချက်သည်လိုအပ်သည်။
        </p>
      </div>
    )
  }
}

export default InputRadio
