
import React from 'react';
import ListNotificationPage from './containers/ListNotificationPage'
import AddNotificationPage from './containers/AddNotificationPage'

const notificationRoutes = [
{ 
    path: "/notification",
    element: <ListNotificationPage />,
  }	
,
{ 
    path: "/notification/add",
    element: <AddNotificationPage />,
  }	

]

export default notificationRoutes
