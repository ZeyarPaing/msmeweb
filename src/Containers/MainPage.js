import React, { Component } from 'react'
import { Container, Row, Col, RowProps, ColProps } from 'reactstrap'
import asset from '../Resources/Images/asset.svg'
import pattern from '../Resources/Images/pattern.svg'
import mark from '../Resources/Images/mark.svg'
import classes from './MainPage.module.css'
import { Button } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'

class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Container
          fluid
          className={classes.mainContain}
          style={{ backgroundImage: `url(${pattern})` }}
        >
          <Row>
            <Col sm={12} lg={6}>
              <img
                src={asset}
                className={classes.assetImg}
                alt="Promo Design"
              />
            </Col>
            <Col sm={12} lg={6}>
              <div className={classes.promotext}>
                <p>သင့်စီးပွားရေးလုပ်ငန်းကို MSME အဖွဲ့ဝင်အဖြစ်</p>
                <h1>မှတ်ပုံတင်ပါ</h1> <img src={mark} alt="Blue Mark" />
                <p className={classes.sologan}>
                  သင့်လုပ်ငန်း ဖွံ့ဖြိုးတိုးတက်စေရန် လွယ်ကူလျင်မြန်သော <br />
                  အွန်လိုင်းမှတ်ပုံတင်ခြင်းဖြင့် အခုပဲမှတ်ပုံတင်လိုက်ပါ။
                </p>
                <a href="#incen">
                  <Button outline color="primary">
                    အကျိုးကျေးဇူးများ
                  </Button>
                </a>
                <Button
                  color="primary"
                  onClick={() => this.props.history.push('/register')}
                >
                  မှတ်ပုံတင်လျှောက်ထားရန်
                </Button>
                <Link className={classes.block} to="/regproc">
                  မှတ်ပုံတင်ရန် လုပ်ဆောင်ရမည့် အဆင့်များ
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <section className={classes.incentive}>
          <section>
            <h2>SME မူဝါဒ မျှော်မှန်းချက်</h2>
            <p>
              ကဏ္ဍအသီးသီးရှိ အသေးစားနှင့်အလတ်စား စီးပွားရေးလုပ်ငန်းများသည်
              ဒေသတွင်း စီးပွားရေး ကွန်ရက်အတွင်း၌ တီထွင်ဆန်းသစ်မှုနှင့်
              ယှဉ်ပြိုင်နိုင်မှု စွမ်းရည်ကောင်းများ မြင့်မားလာပြီး
              နိုင်ငံသားများ၏ အလုပ်အကိုင်အခွင့်အလမ်း တိုးပွားရေးနှင့်
              လူမှုစီးပွားရေးဘဝ ဖွံ့ဖြိုးတိုးတက်ရေးတို့ကို ဦးဆောင်သွားနိုင်ရန်။
            </p>
          </section>
          <section id="incen">
            <h2>အကျိုးကျေးဇူးများ</h2>
            <p>
              မှတ်ပုံတင်ခြင်းဖြင့်ရရှိနိုင်မည့် အကျိုးကျေးဇူးများ
              <ul>
                <li>လူ့စွမ်းအားအရင်းအမြစ်များ</li>
                <li>နည်းပညာဖွံ့ဖြိုးမှုနှင့် တီထွင်ဖန်တီးမှုများ</li>
                <li>ငွေကြေးအရင်းအမြစ်</li>
                <li>အခြေခံအဆောက်အအုံများ ဖွံ့ဖြိုးတိုးတက်ရေး</li>
                <li>လုပ်ငန်းစျေးကွက်ရရှိရေး</li>
                <li>အခြေခံအဆောက်အအုံများ ဖွံ့ဖြိုးတိုးတက်ရေး</li>
                <li>သင့်လျော်သောအခွန်အကောက်နှင့် လုပ်ထုံးလုပ်နည်းများ</li>
                <li>လုပ်သာကိုင်သာရှိသော စီးပွါးရေးဝန်းကျင်ကောင်းများ</li>
                <li>
                  အဖွဲ့အစည်းနှင့်လုပ်ငန်းတူအစုအဖွဲ့များ ဖွံ့ဖြိုး တိုးတက်ရေး
                </li>
              </ul>
            </p>
            <p>
              သက်ဆိုင်ရာဝန်ကြီးဋ္ဌာန၏ အားပေးမြင့်တင်ပေးမှုများ
              <ul>
                <li>
                  ပြည်တွင်းပြည်ပ ရင်းနှီးမြုပ်နှံမှုလုပ်ငန်း
                  စျေးကွက်များသို့ချိတ်ဆက်ဆောင်ရွက်နိုင်သည့် အထောက်အကူပြု
                  စီးပွါးရေးလုပ်ငန်းများကို အားပေးမြင့်တင်ခြင်း
                </li>
                <li>
                  နည်းပညာ၊ဗဟုသုတလွှဲပြောင်းမျှဝေခြင်းနှင့် ရင်းနှီးမမြုပ်နှံမှု
                  တိုးတက်စေရန် ပြည်တွင်းပြည်ပ အဖွဲ့အစည်းများနှင့်
                  ချိတ်ဆက်ပူးပေါင်းဆောင်ရွက်ခြင်း
                </li>
                <li>
                  အလုပ်အကိုင်အခွင့်အလမ်း ရရှိရေးကို အားပေးမြှင့်တင်ပေးခြင်း
                </li>
                <li>
                  သတင်းအချက်အလက်နှင့် သုတေသနလုပ်ငန်းများမြှင့်တင်ပြီး
                  အခက်အခဲများ လွယ်ကူချောမွေ့အောင် အားပေးဆောင်ရွက်ခြင်း
                </li>
                <li>
                  စွန့်ဦးတီထွင်သူများနှင့် အသေးစားနှင့် အလတ်စား
                  စီးပွါးရေးလုပ်ငန်းများကိုဒေသအလိုက် စီးပွါးရေး လှုပ်ရှားမှုတွက်
                  ပါဝင်ဆောင်ရွက်စေခြင်း
                </li>
                <li>
                  သွင်းကုန် အစားထိုးစနစ်မှ ပို့ကုန်ဦးစားပေးစနစ်ကို
                  ဦးတည်စေခြင်း
                </li>
              </ul>
            </p>
          </section>
        </section>
      </React.Fragment>
    )
  }
}

export default withRouter(MainPage)
