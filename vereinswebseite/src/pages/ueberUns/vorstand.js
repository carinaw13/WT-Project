import React, { Component } from 'react'
//import './App.css'
/* import NavBar from './components/NavBar'*/


class Vorstand extends Component {
  
  render() {
    return (
        <div class="ueberUns-mainbody-content">
            <div class="page-header">
                <h1>Vorstand</h1>
                <img src={require("E:/FH INF/Sem3/WT/WT-Project/vereinswebseite/src/img/Vorstandsmitglieder.jpg")} 
                 alt={"Vorstandsmitglieder"}/><br></br>
            </div>            

            <div class="mitglied">
              
              <h3>1. Vorsitzender</h3>
             
              <img src={require("E:/FH INF/Sem3/WT/WT-Project/vereinswebseite/src/img/GeroldWehr.jpg")} 
              alt={"Gerold Wehr"}/><br></br>
             
              <adress>
                Gerold Wehr<br></br>
                Am Straßerberg 6<br></br>
                82065 Baierbrunn<br></br>
                <br></br>
                Tel: 089-79360736<br></br>
                Mobil: 0171-4114479<br></br>
                <a href="mailto:info@sc-baierbrunn.de">info@sc-baierbrunn.de</a><br></br>
                <br></br>
                <br></br>
                
              </adress>
            </div>

            <div class="mitglied">
              <h3>2. Vorsitzender</h3>
             
              <img src={require("E:/FH INF/Sem3/WT/WT-Project/vereinswebseite/src/img/AlexanderLechner.jpg")}
              alt={"Alexander Lechner"}/><br></br>
            
             <adress>
               Alexander Lechner<br></br>
               Am Wirthsfeld 2<br></br>
               82065 Baierbrunn<br></br>
               <br></br>
               Tel: 089-74442870<br></br>
               Mobil: 0160-97627684<br></br>
               <a href="mailto:zweiter_vorsitzender@sc-baierbrunn.de">zweiter_vorsitzender@sc-baierbrunn.de</a><br></br>
               <br></br>
               <br></br>
             </adress>
             </div>

             <div class="mitglied">             
              <h3>Mitgliederverwaltung</h3>
             
              <img src={require("E:/FH INF/Sem3/WT/WT-Project/vereinswebseite/src/img/UweHarfich.jpg")} 
              alt={"Uwe Harfich"}/><br></br>
             
              <adress>
                Uwe Harfich<br></br>
                Bahnhofstraße 24<br></br>
                82065 Baierbrunn<br></br>
                <br></br>
                Tel: 089-79078195<br></br>
                Mobil: 0171-8505050<br></br>
                <a href="mailto:kassier@sc-baierbrunn.de">kassier@sc-baierbrunn.de</a><br></br>
                <br></br>
                <br></br>
              </adress>
              </div>

            <div class="mitglied">
              <h3>Schriftführer</h3>
             
             <img src={require("E:/FH INF/Sem3/WT/WT-Project/vereinswebseite/src/img/images.jpg")} 
             alt={"kein Bild"}/><br></br>
            
             <adress>
               Frank Weyers<br></br>
               Am Waldsaum 13<br></br>
               82065 Baierbrunn<br></br>
               <br></br>
               Tel: 089-74442986<br></br>
               Mobil: 0160-90570748<br></br>
               <a href="mailto:schriftfuehrung@sc-baierbrunn.de">schriftfuehrung@sc-baierbrunn.de</a><br></br>
               <br></br>
               <br></br>
             </adress>
             </div>

         <div class="mitglied">
          <h3>Jugendleiter</h3>
             
             <img src={require("E:/FH INF/Sem3/WT/WT-Project/vereinswebseite/src/img/AndreasSchweitzer.jpg")} 
             alt={"Andreas Schweitzer"}/><br></br>
            
             <adress>
               Andreas Schweitzer<br></br>
               An der Ziegelei 3<br></br>
               82065 Baierbrunn<br></br>
               <br></br>
               Tel: 089-21111250<br></br>
               Mobil: 0179-7822999<br></br>
               <a href="mailto:jugendleitung@sc-baierbrunn.de">jugendleitung@sc-baierbrunn.de</a><br></br>
               <br></br>
               <br></br>
             </adress>
             </div>

            <div class="mitglied">
              <h3>Beisitzer Technik</h3>
             
             <img src={require("E:/FH INF/Sem3/WT/WT-Project/vereinswebseite/src/img/GerhardKreuzeder.jpg")} 
             alt={"Uwe Harfich"}/><br></br>
            
             <adress>
               Gerhard Kreuzeder<br></br>
               Kirchenstraße 14a<br></br>
               82065 Baierbrunn<br></br>
               <br></br>
               Tel: 089-74425115<br></br>
               Mobil: 0170-8676934<br></br>
               <a href="mailto:technik@sc-baierbrunn.de">technik@sc-baierbrunn.de</a><br></br>
               <br></br>
               <br></br>
             </adress>
             </div>

            <div class="mitglied">
             <h3>Beisitzer Sport</h3>
             <img src={require("E:/FH INF/Sem3/WT/WT-Project/vereinswebseite/src/img/KonradKastl.jpg")} 
            alt={"Konrad Kastl"}/>
            
            <adress>
              Konrad Kastl<br></br>
              Bernhard-Punkok-Weg 1<br></br>
              82065 Baierbrunn<br></br>
              <br></br>
              Tel: 089-12192892<br></br>
              Mobil: 0171-5695670<br></br>
              <a href="mailto:sport@sc-baierbrunn.de">sport@sc-baierbrunn.de</a><br></br>
              <br></br>
              <br></br>
            </adress>
            </div>


        </div>

        
    );
  }
}


export default Vorstand;