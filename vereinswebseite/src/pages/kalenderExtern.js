import React, { Component } from 'react'
import Iframe from 'react-iframe'

class kalenderExtern extends Component {
  render() {
    return (
      <div className="kalender-mainbody-content">
      <div className="page-header">
          <Iframe url = "/web/viewer.html?file=Kurse.pdf">
           allowFullScreen/></Iframe> 
      </div> 
      </div>
    );
  }
}

export default kalenderExtern;