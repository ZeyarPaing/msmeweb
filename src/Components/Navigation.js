import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Navigation.module.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap'
//import PropTypes from 'prop-types';

const Navigation = (props) => {
  console.log('props > ', props)
  // const navItems = () => props.routes.map((route) => {
  // 	console.log('route', route)
  // 	return (
  // 		<NavItem key={route.name}>
  // 			<NavLink href={route.to}>{route.name}</NavLink>
  // 		</NavItem>
  // 	)
  // })
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={classes.navb}>
      <Navbar color="primary" dark expand="lg" className="navbar">
        <NavbarBrand href="/" className={classes.navbrand}>
          MSME Web Portal
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">
                <span className={classes.link}>မူလစာမျက်နှာ</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">
                <span className={classes.link}>ဌာနအကြောင်း</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/policy">
                <span className={classes.link}>ဥပဒေများ၊ နည်းပဒေများ</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/offices">
                <span className={classes.link}>ရုံးချုပ်နှင့်ဌာနခွဲများ</span>
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <span className={classes.link}>မှတ်ပုံတင်လျှောက်ထားခြင်း</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/regproc">
                    <span style={{ color: 'black' }}>
                      မှတ်ပုံတင်ရန်လုပ်ဆောင်ရမည့် အဆင့်များ
                    </span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/regrule">
                    <span style={{ color: 'black' }}>
                      မှတ်ပုံတင်ရန် လိုက်နာရမည့် သတ်မှတ်ချက်များ
                    </span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/paymentinfo">
                    <span style={{ color: 'black' }}>
                      ငွေပေးသွင်းရန် လိုအပ်သည့်အဆင့်များ
                    </span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/register">
                    <span style={{ color: 'black' }}>
                      မှတ်ပုံတင်လျှောက်ထားရန်
                    </span>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/contact">
                <span className={classes.link}>ဆက်သွယ်ရန်</span>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            {props.authState.loggedin ? (
              <NavLink href="/" onClick={props.authState.signout}>
                ထွက်ရန်
              </NavLink>
            ) : (
              <NavLink href="/login">ဝင်ရန်</NavLink>
            )}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

// Navigation.propTypes = {
// 	routes: PropTypes.array.isRequired
// }

export default Navigation
