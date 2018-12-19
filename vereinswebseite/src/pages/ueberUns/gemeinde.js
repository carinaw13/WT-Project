import React, { Component } from 'react'
import Iframe from 'react-iframe'

//  install "npm i react-iframe" for react iframe working

class Gemeinde extends Component {
  render() {
    return (
      
      <div class="ueberUns-mainbody-content">
      <div class="page-header">
      <Iframe url="http://www.baierbrunn.de/"
        allowFullScreen/>
        
      </div> 
      </div>

    );
  }
}

export default Gemeinde;