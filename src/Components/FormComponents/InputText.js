import React, { Component } from 'react'
import classes from '../Components.module.css'

class InputText extends Component {
  state = {
    showAlert: false,
    value: '',
  }
  handleFocus() {
    if (this.props.required && !this.state.value.length > 0) {
      this.setState({ showAlert: true })
    }
    if (this.props.lang === 'mm') {
      this.isMyanmar = true //8 => \b    46 => Del   32 => space
    }
  }
  async handleChange(e) {
    let val = e.target.value
    // if (this.isMyanmar) {
    //   if (val.charCodeAt(0) >= 4096 || val.charCodeAt(0) < 65) {
    //     this.setState({ value: val })
    //   }
    // } else if (val.charCodeAt(0) < 4096) {
    //   this.setState({ value: val })
    // } else if (isNaN(val.charCodeAt(0))) {
    //   this.setState({ value: '' })
    // }
    await this.setState({ value: val })
    if (this.state.value.length > 0) {
      this.setState({ showAlert: false })
    } else {
      this.setState({ showAlert: true })
    }
  }
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
        <input
          style={this.state.showAlert ? { borderColor: 'red' } : {}}
          value={this.state.value}
          type={this.props.type}
          placeholder="သင့်အဖြေ"
          required={this.props.required}
          onFocus={() => this.handleFocus()}
          onChange={(e) => this.handleChange(e)}
        />
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

export default InputText
