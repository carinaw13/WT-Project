import React, { Component } from 'react'
import Iframe from 'react-iframe'

class unsereGeschichte extends Component {
  render() {
    return (
      <div className="ueberUns-mainbody-content">
         <div className="page-header">
           <Iframe url = "/web/viewer.html?file=Unsere Geschichte.pdf">
           allowFullScreen/></Iframe>
         </div> 
      </div>
    );
  }
}

export default unsereGeschichte;