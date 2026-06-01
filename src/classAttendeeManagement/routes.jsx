
import React from 'react';
import TableClassAttendeeManagementPage from './containers/TableClassAttendeeManagementPage'
import DetailClassAttendeeManagementPage from './containers/DetailClassAttendeeManagementPage'
import AddClassAttendeeManagementPage from './containers/AddClassAttendeeManagementPage'
import EditClassAttendeeManagementPage from './containers/EditClassAttendeeManagementPage'

const classAttendeeManagementRoutes = [
{ 
    path: "/classattendeemanagement",
    element: <TableClassAttendeeManagementPage />,
  }	
,
{ 
    path: "/classattendeemanagement/:id_attendeemanagement",
    element: <DetailClassAttendeeManagementPage />,
  }	
,
{ 
    path: "/classattendeemanagement/add",
    element: <AddClassAttendeeManagementPage />,
  }	
,
{ 
    path: "/classattendeemanagement/:id_attendeemanagement/edit",
    element: <EditClassAttendeeManagementPage />,
  }	

]

export default classAttendeeManagementRoutes
