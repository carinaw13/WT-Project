import React, { Component } from 'react'
import './App.css'


class AbtBasketball extends Component {
    render() {
        return (
            <div class="abt-mainbody-content">
                <div class="page-header">
                    <h1>Leichtathletik</h1>
                </div>
                <div class="page-body">
                    <h4>Abteilungsleiter</h4>
                    <div>
                        Werner Tüting
                        <br />
                        Jahnstrasse 18
                        <br />
                        82069 Schäftlarn
                        <br />
                        Telefon: 08178-7555
                        <br />
                        Mobil: 0172-8527747
                        <br />
                        E-Mail:
                        <span>
                            <a href="mailto:werner@tueting.net" target="new">werner@tueting.net</a>
                        </span>
                    </div>
                    <h4>Übungsleiter</h4>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Kontakt</th>
                                    <th>Trainerlizenz</th>
                                    <th>Gruppe</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Werner Tüting</td>
                                    <td>08178-7555</td>
                                    <td>Lizensierter Leichtathletik-Trainer C und B</td>
                                    <td>Schüler/-innen U 12 sowie U 14 + U 16 und älter sowie Wettkampf-Training ab U 12</td>
                                </tr>
                                <tr>
                                    <td>Anna Kaleita</td>
                                    <td><a href="mailto:anna.kaleita@t-online.de">anna.kaleita@t-online.de</a></td>
                                    <td>Lizensierte Assistentin</td>
                                    <td>momentan Springerin</td>
                                </tr>
                                <tr>
                                    <td>Alessa Schmautz</td>
                                    <td>089-79367270<br />Lindenstrasse 1 A<br />82065 Baierbrunn</td>
                                    <td>Lizensierte Leichtathletik-Trainerin C</td>
                                    <td>momentan Springerin</td>
                                </tr>
                                <tr>
                                    <td>Veronika Thalhammer</td>
                                    <td>089-78078191<br />Parkstrasse 41 C<br />82049 Pullach</td>
                                    <td>Lizensierte Leichtathletik-Trainerin C</td>
                                    <td>momentan Springerin</td>
                                </tr>
                                <tr>
                                    <td>Angela Denzel</td>
                                    <td>0178 - 72 00 402</td>
                                    <td>Übungsleiterin</td>
                                    <td>Schüler/-innen U 10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default AbtBasketball;