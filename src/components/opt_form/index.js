import React from 'react'
import PropTypes from 'prop-types'
import { Container, Input, Button, Text, Break } from './styles/opt_form'

function OptForm({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}
OptForm.Input = function OptFormInput({ ...props }) {
  return <Input {...props} />
}
OptForm.Button = function OptFormButton({ children, ...props }) {
  return (
    <Button {...props}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  )
}
OptForm.Text = function OptFormText({ children, ...props }) {
  return <Text {...props}>{children}</Text>
}
OptForm.Break = function OptFormText({ ...props }) {
  return <Break {...props} />
}
OptForm.propTypes = {
  children: PropTypes.node,
}
OptForm.Button.propTypes = {
  children: PropTypes.node,
}
OptForm.Text.propTypes = {
  children: PropTypes.node,
}

export default OptForm
