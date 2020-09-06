import React, { Component } from 'react'
import classes from './MainPage.module.css'
import RegRule from '../Components/RegRule'
import SMEDef from '../Components/SMEDef'
import { Button } from 'reactstrap'
import Checkbox from '../Components/Checkbox'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { withRouter } from 'react-router'

class Inform extends Component {
  state = {
    agree: false,
    content: 'regrule',
  }

  goToNext(e) {
    e.preventDefault()
    if (this.state.agree) {
      this.setState({ content: 'smedef' })
    } else {
      toast('အထက်ပါအချက်လက်များကိုနားလည်သဘောပေါက်ရန်လိုအပ်သည်။', {
        position: 'bottom-center',
        autoClose: 5000,
        type: 'error',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  goToBack(e) {
    e.preventDefault()
    this.setState({ content: 'regrule' })
  }

  async checkBoxChange(checkBoxState) {
    await this.setState({ agree: checkBoxState })
  }

  render() {
    return (
      <div className={classes.bg}>
        <section className={classes.backdrop}>
          {this.state.content === 'regrule' ? <RegRule /> : <SMEDef />}
        </section>
        <form>
          <Checkbox
            light={false}
            label="အထက်ပါအချက်များကို နားလည်သဘောပေါက်ပါသည်။"
            checkBoxChange={(checkBoxState) =>
              this.checkBoxChange(checkBoxState)
            }
          />
          <br />
          {this.state.content === 'regrule' ? (
            <Button
              color="primary"
              type="submit"
              outline
              onClick={(e) => this.goToNext(e)}
            >
              ရှေ့သို့
            </Button>
          ) : (
            <Button
              color="primary"
              type="submit"
              outline
              onClick={() => this.props.history.push('/regform')}
            >
              ရှေ့သို့
            </Button>
          )}

          {this.state.content === 'smedef' ? (
            <Button
              color="primary"
              type="submit"
              outline
              onClick={(e) => this.goToBack(e)}
              className={classes.backbtn}
            >
              နောက်သို့
            </Button>
          ) : (
            <React.Fragment />
          )}
        </form>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    )
  }
}

export default withRouter(Inform)
