import React, { Component } from 'react'
import '../App.css'


class AbtBasketball extends Component {
    render() {
        return (
            <div class="abt-mainbody-content">
                <div class="page-header">
                    <h1>Basketball</h1>
                </div>
                <div class="page-body">
                    <h4>Abteilungsleiter</h4>
                    <div>
                        Peter Schröder
                        <br />
                        Mobil: 0171 209 55 84
                        <br />
                        E-Mail:
                    <span>
                            <a href="mailto:basketball@sc-baierbrunn.de">basketball@sc-baierbrunn.de</a>
                        </span>
                    </div>
                    <h4>Trainingszeiten</h4>
                    <div>
                        Jugend Mittwochs 17:30 - 19:00 Uhr
                        <br />
                        Erwachsene Mittwochs 21:00 - 22:00 Uhr
                    </div>
                    <h2>Was macht die Abteilung Basketball?</h2>
                    <p>Wir trainieren wöchentlich Mittwoch von 17:30 - 19:00 Uhr, mit Mädchen und Jungen im Alter von 10 bis 13 Jahren.</p>
                    <p>In diesem Jahr nehmen wir auch  mit einer Mannschaft an den Punktspielen des bayerischen Basketballvernbandes teil. Hier spielt eine Mixmannschaft U14 (unter 14) ab dem 01.10., wo wir mit einem Heimspiel in der Grundschule Baierbrunn um 16:15 Uhr beginnen, um Spaß und Punkte.</p>
                    <h2>Wir suchen noch...</h2>
                    <p>...Erwachsene Damen und Herren, die Mittwochs von 21:00 - 22:00 Uhr Lust auf Basketball haben.</p>
                    <p>Treffpunkt ist die Halle in der Grundschule Baierbrunn. Spaß garantiert!</p>
                </div>
            </div>
        );
    }
}

export default AbtBasketball;