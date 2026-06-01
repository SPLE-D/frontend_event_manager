
import React from 'react';
import TableEventCreationPage from './containers/TableEventCreationPage'
import AddEventPage from './containers/AddEventPage'

const eventCreationRoutes = [
{ 
    path: "/eventcreation",
    element: <TableEventCreationPage />,
  }	
,
{ 
    path: "/eventcreation/add",
    element: <AddEventPage />,
  }	

]

export default eventCreationRoutes
