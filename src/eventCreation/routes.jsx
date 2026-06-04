
import React from 'react';
import TableEventCreationPage from './containers/TableEventCreationPage'
import AddEventPage from './containers/AddEventPage'
import DetailEventCreationPage from './containers/DetailEventCreationPage'
import EditEventCreationPage from './containers/EditEventCreationPage'

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
,
{ 
    path: "/eventcreation/:eventId/edit",
    element: <EditEventCreationPage />,
  }	
,
{ 
    path: "/eventcreation/:eventId",
    element: <DetailEventCreationPage />,
  }	

]

export default eventCreationRoutes
