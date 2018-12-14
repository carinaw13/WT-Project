import React, { Component } from 'react'
import '../App.css'


class AbtBasketball extends Component {
    render() {
        return (
            <div class="abt-mainbody-content">
                <div class="page-header">
                    <h1>Skiabteilung</h1>
                </div>
                <div class="page-body">
                    <h4>Abteilungsleiter</h4>
                    <div>
                        Tobias Rapp
                    <br />
                        Forstenrieder Weg 3a
                    <br />
                        82065 Baierbrunn
                    <br />
                        Telefon: 089-45345023
                    <br />
                        E-Mail:
                    <span>
                            <a href="mailto:tobiasrapp@t-online.de">tobiasxrapp@t-online.de</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default AbtBasketball;