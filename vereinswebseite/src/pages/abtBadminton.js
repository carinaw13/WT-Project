import React, { Component } from 'react'
import './App.css'


class AbtBadminton extends Component {
    render() {
        return (
            <div class="abt-mainbody-content">
                <div class="page-header">
                    <h1>Badminton</h1>
                </div>
                <div class="page-body">
                    <h4>Abteilungsleiter</h4>
                    <div>
                        Peter Breitfelder
                        <br />
                        Telefon: 089-7930289
                        <br />
                        E-Mail:
                        <span>
                            <a href="mailto:badminton@sc-baierbrunn.de">badminton@sc-baierbrunn.de</a>
                        </span>
                    </div>
                    <h4>Übungsleiter</h4>
                    <div>
                        Peter Breitfelder
                    </div>
                    <h4>Trainingszeiten</h4>
                    <div>
                        Spielbetrieb jeden Donnerstag
                        <br />
                        von 20 - 22 Uhr
                    </div>
                    <h2>
                        Taktik und Technik
                    </h2>
                    <p>Im Einzel</p>
                    <ul class="list">
                        <li>sollte man seinen Gegner laufen lassen</li>
                        <li>selber möglichst immer wieder in die Mitte zurückkehren</li>
                    </ul>
                    <p>Im Doppel</p>
                    <ul class="list">
                        <li>sollte man den Ball möglichst früh spielen, möglichst schon am Netz</li>
                        <li>teilt sich eine Mannschaft ihr Feld beim Angriff am besten nach "vorne/hinten", beim Abwehr-Spiel in linke/rechte Hälfte</li>
                    </ul>
                    <h3>
                        Spielarten
                    </h3>
                    <ul class="list">
                        <li>
                            <strong>Drop:</strong>
                            Kurzer Ball hinters Netz, um den Gegner zu hetzen - wenn man die Zeit hat ihn zu platzieren.
                        </li>
                        <li>
                            <strong>Smash:</strong>
                            Schmetterball ins Feld, nachdem der Gegner einen Drive zu hoch oder einen Clear zu kurz gespielt hat.
                        </li>
                        <li>
                            <strong>Clear:</strong>
                            Hoher, weiter Ball an die Grundlinie. Wegen der langen Flugzeit gewinnt man Zeit.
                        </li>
                        <li>
                            <strong>Drive:</strong>
                            Schneller Ball aus der Feldmitte in die Feldmitte: steht beim Doppel der Gegner "vorne/hinten", erreicht der Vordere den Ball nur selten und der Hintere kann nicht schmettern.
                        </li>
                        <li>
                            <strong>Töten:</strong>
                            Ball gleich am Netz abfangen und schnell ins Feld schlagen. Geht gut, wenn der Gegner einen Drop zu hoch spielt.
                        </li>
                    </ul>
                    <h3>
                        Trainingsmethoden
                    </h3>
                    <p>Nicht nur wenn das Spielfeldangebot etwas begrenzt ist, bieten sich folgende Trainingsmöglichkeiten zur Verbesserung der Spielfähigkeit, Taktik und Koordination an:</p>
                    <p>Alleine</p>
                    <ul class="list">
                        <li>gegen die Wand spielen (evtl. mit Gummiball), dabei möglichst immer die gleiche Stelle treffen, wechselweise Vorhand/Rückhand, ...</li>
                        <li>Ball möglichst lange auf dem Schläger hüpfen lassen, dabei Wechsel Vorhand/Rückhand, rechte/linke Seite, ...</li>
                        <li>mit mehreren Bällen hintereinander Angabe über Schnur üben: möglichst immer den gleichen Fleck treffen (mal vorne rechts, dann hinten links, ...), möglichst flach über die Schnur spielen</li>
                    </ul>
                    <p>Mit Partner</p>
                    <ul class="list">
                        <li>Wechsel Zuspiel: Hoch/Tief, Vorhand/Rückhand, ...</li>
                        <li>Ball erst stoppen, dann weiterspielen</li>
                        <li>ein Partner schmettert immer auf die gleiche Stelle, der andere stoppt und spielt hoch zurück</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AbtBadminton;