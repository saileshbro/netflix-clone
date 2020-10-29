import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Column, Link, Title, Text, Break } from './styles/footer'

const Footer = ({ children, ...props }) => <Container {...props}>{children}</Container>
Footer.Row = function FooterRow({ children, ...props }) {
  return <Row {...props}>{children}</Row>
}
Footer.Column = function FooterColumn({ children, ...props }) {
  return <Column {...props}>{children}</Column>
}
Footer.Link = function FooterLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>
}
Footer.Title = function FooterTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>
}
Footer.Text = function FooterText({ children, ...props }) {
  return <Text {...props}>{children}</Text>
}
Footer.Break = function FooterText({ children, ...props }) {
  return <Break {...props}>{children}</Break>
}

Footer.propTypes = {
  children: PropTypes.node,
}
Footer.Row.propTypes = {
  children: PropTypes.node,
}
Footer.Column.propTypes = {
  children: PropTypes.node,
}
Footer.Link.propTypes = {
  children: PropTypes.node,
}
Footer.Title.propTypes = {
  children: PropTypes.node,
}
Footer.Text.propTypes = {
  children: PropTypes.node,
}
Footer.Break.propTypes = {
  children: PropTypes.node,
}
export default Footer
