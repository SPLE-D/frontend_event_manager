
import React from 'react';
import TableAttendeePage from './containers/TableAttendeePage'
import DetailAttendeePage from './containers/DetailAttendeePage'
import AddAttendeePage from './containers/AddAttendeePage'

const attendeeRoutes = [
{ 
    path: "/attendee",
    element: <TableAttendeePage />,
  }	
,
{ 
    path: "/attendee/add",
    element: <AddAttendeePage />,
  }	
,
{ 
    path: "/attendee/:id_attendee",
    element: <DetailAttendeePage />,
  }	

]

export default attendeeRoutes
