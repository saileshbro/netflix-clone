import React, { useState, useContext, createContext } from 'react'
import PropTypes from 'prop-types'
import { Container, Inner, Title, Item, Header, Body } from './styles/accordian'

const ToggleContext = createContext()
const Accordian = ({ children, ...props }) => (
  <Container {...props}>
    <Inner>{children}</Inner>
  </Container>
)
Accordian.Title = function AccordianTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>
}
Accordian.Item = function AccordianItem({ children, ...props }) {
  const [toggleShow, setToggleShow] = useState(false)
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...props}>{children}</Item>
    </ToggleContext.Provider>
  )
}
Accordian.Header = function AccordianHeader({ children, ...props }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)
  return (
    <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...props}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="close" />
      ) : (
        <img src="/images/icons/add.png" alt="open" />
      )}
    </Header>
  )
}
Accordian.Body = function AccordianBody({ children, ...props }) {
  const { toggleShow } = useContext(ToggleContext)
  return toggleShow && <Body {...props}>{children}</Body>
}
Accordian.propTypes = {
  children: PropTypes.node,
}
Accordian.Title.propTypes = {
  children: PropTypes.node,
}

Accordian.Item.propTypes = {
  children: PropTypes.node,
}
Accordian.Header.propTypes = {
  children: PropTypes.node,
}
Accordian.Body.propTypes = {
  children: PropTypes.node,
}
export default Accordian
