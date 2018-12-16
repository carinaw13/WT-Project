import React, { Component } from 'react'
import '../App.css'

class AbtStockschützen extends Component {
    render() {
        return (

            <div class="abt-mainbody-content">
                <div class="page-header">
                    <h1>Stockschützen</h1>
                </div>
                <div class="page-body">
                    <h4>Abteilungsleiter</h4>
                    <div>
                        Peter Dittert
                    <br />
                        Mobil: 0171/209 55 84
                    <br />
                        E-Mail:&nbsp;
                    <span>
                            <a href="mailto:pd@dittert-baierbrunn.de">pd@dittert-baierbrunn.de</a>
                        </span>
                    </div>
                    <h4>Trainingszeiten</h4>
                    <div>
                        Mittwoch und Samstag
                    <br />
                        von 13:00 - ca. 17:00 Uhr
                    </div>
                </div>
            </div>
        );
    }
}

export default AbtStockschützen;