import React, { Component } from 'react'
import Iframe from 'react-iframe'

class Satzung extends Component {
  render() {
    return (
      <div className="ueberUns-mainbody-content">
      <div className="page-header">
          <Iframe url = "/web/viewer.html?file=Satzung.pdf">
           allowFullScreen/></Iframe>
      </div> 
      </div>
    );
  }
}

export default Satzung;