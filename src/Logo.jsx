import React, { Component } from 'react'
import LogoSvg from './logo.svg'

export default class Logo extends Component {
  render() {
    return (
      <div>Logo
        <img src={LogoSvg} alt='Logo' />
      </div>
    )
  }
}
