import ImageGallery from "react-image-gallery";
import React from "react";
import "../App.css";

import BannerLaufbahn from "../img/Banner1.jpg";
import BannerSki from "../img/Banner2.jpg";
import BannerSonnenuntergang from "../img/Banner3.jpg";
import BannerBerge from "../img/Banner4.jpg";


class Startseite extends React.Component {
  render() {
    const images = [
      {
        original: BannerBerge,
        originalAlt: "Banner Berge"
      },
      {
        original: BannerSonnenuntergang,
        originalAlt: "Banner Sonnenuntergang"
      },
      {
        original: BannerLaufbahn,
        originalAlt: "Banner Laufbahn"
      },
      {
        original: BannerSki,
        originalAlt: "Banner Ski"
      }
    ];

    return (
      <div className="mainbody-content">
        <div className="page-header-home">
          <div id="fullWidthSlider">
            <ImageGallery items={images} />
          </div>
        </div>
        <div className="page-body, centered-text">
          <h2>
            Wir freuen uns, dass Sie den Weg zu uns gefunden haben und heißen
            Sie herzlich willkommen
          </h2>
          <p>
            Sie möchten Ihre freie Zeit möglichst angenehm gestalten,
            Gleichgesinnte treffen, Freundschaften schließen? Sie legen Wert auf
            sportliche Aktivität in der Gemeinschaft, auf Unterhaltung und Spaß
            in familiärer und freundschaftlicher Atmosphäre? … dann sind Sie bei
            uns genau richtig!
          </p>
          <h3>
            Sprechen Sie uns an, besuchen Sie uns "vor Ort", wir nehmen uns Zeit
            für Sie!
          </h3>
          <p>
            Ach ja, und wenn Sie eine verantwortungsvolle, abwechslungsreiche,
            sportlich interessante Herausforderung suchen und gern mit Kindern,
            Jugendlichen oder Erwachsenen arbeiten, dann bieten wir Ihnen als
            Trainer oder als ehrenamtlicher Helfer hierzu die Möglichkeit.
          </p>
        </div>
      </div>
    );
  }
}
export default Startseite;
