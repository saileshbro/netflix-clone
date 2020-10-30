import React from 'react'
import { PropTypes } from 'prop-types'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Background, Container, Logo, ButtonLink } from './styles/header'

const Header = ({ background = true, children, ...props }) =>
  background ? <Background {...props}>{children}</Background> : children
Header.Frame = function HeaderFrame({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}
Header.ButtonLink = function HeaderButton({ children, ...props }) {
  return <ButtonLink {...props}>{children}</ButtonLink>
}
Header.Logo = function HeaderLogo({ to, ...props }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...props} />
    </ReactRouterLink>
  )
}
Header.propTypes = {
  background: PropTypes.bool,
  children: PropTypes.node,
}
Header.Frame.propTypes = {
  children: PropTypes.node,
}
Header.ButtonLink.propTypes = {
  children: PropTypes.node,
}
Header.Logo.propTypes = {
  to: PropTypes.string,
}
export default Header
