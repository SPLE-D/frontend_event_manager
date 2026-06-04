
import React from 'react';
import TableAttendeePage from './containers/TableAttendeePage'
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

]

export default attendeeRoutes
