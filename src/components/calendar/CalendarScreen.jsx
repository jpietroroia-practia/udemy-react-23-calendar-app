import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import addHours from 'date-fns/addHours'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import es from 'date-fns/locale/es'

import 'react-big-calendar/lib/css/react-big-calendar.css';


import Navbar from '../ui/Navbar'

const CalendarScreen = () => {

  const locales = {
    'es': es,
  }
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })
  

  const events=[{
    title: 'Cumpleaños de Pepe',
    start: new Date(),
    end: addHours(new Date(), 2)
  }];



  return (
    <div className='calendar-screen'>
      <Navbar/>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
     />
    </div>
  )
}

export default CalendarScreen
