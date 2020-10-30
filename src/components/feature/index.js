import React from 'react'
import PropTypes from 'prop-types'
import { Container, Title, SubTitle } from './styles/feature'

const Feature = ({ children, ...props }) => <Container {...props}>{children}</Container>
Feature.Title = function FeatureTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>
}
Feature.SubTitle = function FeatureSubTitle({ children, ...props }) {
  return <SubTitle {...props}>{children}</SubTitle>
}
Feature.propTypes = {
  children: PropTypes.node,
}
Feature.Title.propTypes = {
  children: PropTypes.node,
}
Feature.SubTitle.propTypes = {
  children: PropTypes.node,
}

export default Feature
