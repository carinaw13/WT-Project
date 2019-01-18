import React, { Component } from 'react'
import Iframe from 'react-iframe'

//  install "npm i react-iframe" for react iframe working

class Gemeinde extends Component {
  render() {
    return (
      
      <div className="ueberUns-mainbody-content">
      <div className="page-header">
      <Iframe url="http://www.baierbrunn.de/"
        allowFullScreen/>
        
      </div> 
      </div>

    );
  }
}

export default Gemeinde;