import React, { Component } from 'react'
import $ from 'jquery';
import 'fullcalendar';
import 'moment';



class kalenderIntern extends Component {
  render() {
    
    
    $(document).ready(function() {
        // page is now ready, initialize the calendar...
  
              $('#calendar').fullCalendar({
                        
                header: {
                    left: 'prev, next, today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },

                timezone:'local',
                minTime : '08:00:00',
                maxTime : '20:00:00',
                timeFormat: 'hh:mm',

                selectable: true,
                selectHelper: true,
                editable: true,
                eventLimit: true,

                events: [{
                    title: 'Neujahrsempfang Gemeinde Baierbrunn',
                    start: '2019-01-01'
                }, {
                    title: 'Besprechung Fasching',
                    start: '2019-01-07',
                    end: '2019-01-10'
                }, {
                    id: 999,
                    title: 'Vereinshaus putzen',
                    start: '2019-01-16T16:00'
                }, {
                    title: 'Skikurs SCB',
                    start: '2019-01-13'
                }, {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2019-01-28'
                }]
               
           })
        });
    

    return (
      <div className="kalender-mainbody-content">
        <div className="page-header">
            <div id="calendar"></div>
        </div> 
      </div>
    );
  }
}

export default kalenderIntern;