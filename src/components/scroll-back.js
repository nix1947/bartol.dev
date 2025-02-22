import React, { useState, useEffect, Component } from 'react'
import styled from '@emotion/styled'

class ScrollBack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: true,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.unHide)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.unHide)
  }

  unHide = () => {
    // if (window.scrollY > window.innerHeight) {
    if (
      document.body.scrollTop > window.innerHeight ||
      document.documentElement.scrollTop > window.innerHeight
    ) {
      this.setState({ hidden: false })
    } else {
      this.setState({ hidden: true })
    }
  }

  handleClick = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  render() {
    const { hidden } = this.state

    return <Wrapper>{hidden ? '' : <Circle onClick={this.handleClick}>&uarr;</Circle>}</Wrapper>
  }
}

export default ScrollBack

const Wrapper = styled.div`
  position: fixed;
  right: 3vw;
  bottom: 5vh;

  @media (max-width: 640px) {
    right: 5vw;
    bottom: 3vh;
  }
  -webkit-transform: translateZ(0);

  z-index: 200130;
`

const Circle = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  background-color: var(--nav);
  border-radius: 50%;
  border: 0;
  box-shadow: var(--shadow);

  color: #a0a0a0;
  font-size: 1.55rem;
  font-weight: 400;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  :focus {
    outline: 0;
    color: var(--main);
  }

  :active {
    color: var(--main);
  }
`
