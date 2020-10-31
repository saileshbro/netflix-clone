import React from 'react'
import { PropTypes } from 'prop-types'
import { Header } from '../components'
import * as ROUTES from '../constant/routes'
import logo from '../logo.svg'

const HeaderContainer = ({ children }) => (
  <Header>
    <Header.Frame>
      <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
      <Header.ButtonLink to={ROUTES.SIGNIN}>Signin</Header.ButtonLink>
    </Header.Frame>
    {children}
  </Header>
)
HeaderContainer.propTypes = { children: PropTypes.node }

export default HeaderContainer
