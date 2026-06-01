
import React from 'react';
import TableEventCreationPage from './containers/TableEventCreationPage'
import DetailEventCreationPage from './containers/DetailEventCreationPage'
import AddEventCreationPage from './containers/AddEventCreationPage'
import EditEventCreationPage from './containers/EditEventCreationPage'

const eventCreationRoutes = [
{ 
    path: "/eventcreation",
    element: <TableEventCreationPage />,
  }	
,
{ 
    path: "/eventcreation/add",
    element: <AddEventCreationPage />,
  }	
,
{ 
    path: "/eventcreation/:id_eventcreation/edit",
    element: <EditEventCreationPage />,
  }	
,
{ 
    path: "/eventcreation/:id_eventcreation",
    element: <DetailEventCreationPage />,
  }	

]

export default eventCreationRoutes
