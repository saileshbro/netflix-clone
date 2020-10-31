import React from 'react'
import PropTypes from 'prop-types'
import { Container, Error, Title, Text, Link, Input, Submit, Base, TextSmall } from './styles/form'

const Form = ({ children, ...props }) => <Container {...props}>{children}</Container>
Form.Error = function FormError({ children, ...props }) {
  return <Error {...props}>{children}</Error>
}
Form.Base = function FormBase({ children, ...props }) {
  return <Base {...props}>{children}</Base>
}
Form.Title = function FormTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>
}
Form.Text = function FormText({ children, ...props }) {
  return <Text {...props}>{children}</Text>
}
Form.TextSmall = function FormTextSmall({ children, ...props }) {
  return <TextSmall {...props}>{children}</TextSmall>
}
Form.Link = function FormLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>
}
Form.Input = function FormInput({ ...props }) {
  return <Input {...props} />
}
Form.Submit = function FormSubmit({ children, ...props }) {
  return <Submit {...props}>{children}</Submit>
}
Form.propTypes = {
  children: PropTypes.node,
}
Form.Error.propTypes = {
  children: PropTypes.node,
}
Form.Base.propTypes = {
  children: PropTypes.node,
}
Form.Title.propTypes = {
  children: PropTypes.node,
}
Form.Text.propTypes = {
  children: PropTypes.node,
}
Form.TextSmall.propTypes = {
  children: PropTypes.node,
}
Form.Submit.propTypes = {
  children: PropTypes.node,
}
Form.Link.propTypes = {
  children: PropTypes.node,
}

export default Form
