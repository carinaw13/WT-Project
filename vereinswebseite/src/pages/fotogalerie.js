import ImageGallery from "react-image-gallery";
import React from "react";
import "../App.css";

import ElmauerAlm1 from "../img/ElmauerAlm1.JPG";
import ElmauerAlm2 from "../img/ElmauerAlm2.JPG";
import BadmintonTurnier1 from "../img/BadmintonTurnier1.jpg";
import BadmintonTurnier2 from "../img/BadmintonTurnier2.jpg";
import BadmintonTurnier3 from "../img/BadmintonTurnier3.jpg";
import BadmintonTurnier4 from "../img/BadmintonTurnier4.jpg";
import Stockschützen1 from "../img/Stockschützen1.jpg";

class Fotogalerie extends React.Component {
  render() {
    const images = [
      {
        original: ElmauerAlm1,
        thumbnail: ElmauerAlm1,
        originalAlt: "Elmauer Alm",
        thumbnailLabel: "Elmauer Alm"
      },
      {
        original: ElmauerAlm2,
        thumbnail: ElmauerAlm2,
        originalAlt: "Elmauer Alm",
        thumbnailLabel: "Elmauer Alm"
      },
      {
        original: BadmintonTurnier1,
        thumbnail: BadmintonTurnier1,
        originalAlt: "Badminton Turnier",
        thumbnailLabel: "Badminton Turnier"
      },
      {
        original: BadmintonTurnier2,
        thumbnail: BadmintonTurnier2,
        originalAlt: "Badminton Turnier",
        thumbnailLabel: "Badminton Turnier"
      },
      {
        original: BadmintonTurnier3,
        thumbnail: BadmintonTurnier3,
        originalAlt: "Badminton Turnier",
        thumbnailLabel: "Badminton Turnier"
      },
      {
        original: BadmintonTurnier4,
        thumbnail: BadmintonTurnier4,
        originalAlt: "Badminton Turnier",
        thumbnailLabel: "Badminton Turnier"
      },
      {
        original: Stockschützen1,
        thumbnail: Stockschützen1,
        originalAlt: "Stockschützen",
        thumbnailLabel: "Stockschützen"
      }
    ];

    return (
      <div id="galerie">
        <ImageGallery items={images} />
      </div>
    );
  }
}
export default Fotogalerie;
