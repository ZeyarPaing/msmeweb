import React from 'react'
import smedef from '../Resources/Images/smedef.svg'
import classes from './Components.module.css'

const SMEDef = () => {
  return (
    <div className={classes.regrule}>
      <h2>SME အဓိပ္ပါယ်ဖွင့်ဆိုချက်</h2>
      <div>
        <img src={smedef} alt="SME def table" />
      </div>
    </div>
  )
}

export default SMEDef
