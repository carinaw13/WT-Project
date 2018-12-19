import React, { Component } from 'react'
import Iframe from 'react-iframe'

class unsereGeschichte extends Component {
  render() {
    return (
      <div class="ueberUns-mainbody-content">
         <div class="page-header">
           <Iframe url = "/web/viewer.html?file=Unsere Geschichte.pdf">
           allowFullScreen/></Iframe>
         </div> 
      </div>
    );
  }
}

export default unsereGeschichte;