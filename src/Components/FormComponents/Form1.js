import React, { Component } from 'react'
import classes from '../Components.module.css'
import InputText from './InputText'
import InputRadio from './InputRadio'

class Form1 extends Component {
  data = {
    busname: {
      mm: '',
      en: '',
    },
    bustype: '',
  }
  putRdoData(label) {
    this.data.bustype = label
  }
  render() {
    return (
      <div className={classes.formback}>
        <h2 className={classes.header}>ပင်မစာမျက်နှာ</h2>
        <div>
          <InputText
            header="လုပ်ငန်းအမည် (MM)"
            type="text"
            required={true}
            lang="mm"
            className={classes.inputsec}
          />
          <InputText
            header="လုပ်ငန်းအမည် (EN)"
            type="text"
            required={true}
            lang="en"
            className={classes.inputsec}
          />
          <InputRadio
            header="လုပ်ငန်းအမျိုးအစား"
            required={true}
            name="type"
            radioGp={['ထုတ်လုပ်မှု', 'ရောင်းဝယ်မှု', 'ဝန်ဆောင်မှု', 'အခြား']}
            selection={(label) => this.putRdoData(label)}
            className={classes.inputsec}
          />
          <InputText
            header="လိပ်စာ (MM)"
            type="text"
            required={true}
            lang="mm"
            className={classes.inputsec}
          />
          <InputText
            header="အီးမေးလ်"
            type="email"
            required={false}
            lang="en"
            className={classes.inputsec}
          />
          <InputText
            header="ဆက်သွယ်ရန်ပုဂ္ဂိုလ်အမည်"
            type="text"
            required={true}
            lang="mm"
            className={classes.inputsec}
          />
          <InputText
            header="ဖုန်းနံပါတ်"
            type="text"
            required={true}
            lang="en"
            className={classes.inputsec}
          />
        </div>
      </div>
    )
  }
}

export default Form1
