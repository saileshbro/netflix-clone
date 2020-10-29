import React from 'react'
import PropTypes from 'prop-types'
import { Container, Item, Inner, Pane, Title, SubTitle, Image } from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />
}
Jumbotron.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(['row', 'row-reverse']),
}
Jumbotron.Container.propTypes = {
  children: PropTypes.node,
}
Jumbotron.Pane.propTypes = {
  children: PropTypes.node,
}
Jumbotron.Title.propTypes = {
  children: PropTypes.node,
}
Jumbotron.SubTitle.propTypes = {
  children: PropTypes.node,
}
