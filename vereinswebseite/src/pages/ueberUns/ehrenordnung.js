import React, { Component } from 'react'
import Iframe from 'react-iframe'

class Ehrenordnung extends Component {
  render() {
    return (
      <div class="ueberUns-mainbody-content">
      <div class="page-header">
          <Iframe url = "/web/viewer.html?file=Ehrenordnung.pdf">
           allowFullScreen/></Iframe>
      </div> 
      </div>
    );
  }
}

export default Ehrenordnung;