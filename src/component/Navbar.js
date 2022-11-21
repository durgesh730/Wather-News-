import React, { Component } from 'react'
import './Byclass.css'

export default class Navbar extends Component {
  render() {
    return (
      <>
          <nav class="navbar">
              <ul>
                   <span>Weather</span>
                   <a href='/'>About</a>
              </ul>
           </nav>
      </>
    )
  }
}
