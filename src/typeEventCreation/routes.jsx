
import React from 'react';
import TableTypeEventCreationPage from './containers/TableTypeEventCreationPage'
import DetailTypeEventCreationPage from './containers/DetailTypeEventCreationPage'
import AddEventPage from './containers/AddEventPage'
import EditEventCreationPage from './containers/EditEventCreationPage'

const typeEventCreationRoutes = [
{ 
    path: "/TypeEventCreation",
    element: <TableTypeEventCreationPage />,
  }	
,
{ 
    path: "/TypeEventCreation/:eventId",
    element: <DetailTypeEventCreationPage />,
  }	
,
{ 
    path: "/TypeEventCreation/add",
    element: <AddEventPage />,
  }	
,
{ 
    path: "/TypeEventCreation/:eventId/edit",
    element: <EditEventCreationPage />,
  }	

]

export default typeEventCreationRoutes
