
import React from 'react';
import TableNotificationPage from './containers/TableNotificationPage'
import DetailNotificationPage from './containers/DetailNotificationPage'
import AddNotificationPage from './containers/AddNotificationPage'
import EditNotificationPage from './containers/EditNotificationPage'

const notificationRoutes = [
{ 
    path: "/notification",
    element: <TableNotificationPage />,
  }	
,
{ 
    path: "/notification/add",
    element: <AddNotificationPage />,
  }	
,
{ 
    path: "/notification/:id_notification/edit",
    element: <EditNotificationPage />,
  }	
,
{ 
    path: "/notification/:id_notification",
    element: <DetailNotificationPage />,
  }	

]

export default notificationRoutes
