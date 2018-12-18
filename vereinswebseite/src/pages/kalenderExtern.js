import React, { Component } from 'react'
import Iframe from 'react-iframe'

class kalenderExtern extends Component {
  render() {
    return (
      <div class="kalender-mainbody-content">
      <div class="page-header">
          <Iframe url = "/web/viewer.html?file=Kurse.pdf">
           allowFullScreen/></Iframe> 
      </div> 
      </div>
    );
  }
}

export default kalenderExtern;