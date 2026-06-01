
import React from 'react';
import TableAttendeeManagementPage from './containers/TableAttendeeManagementPage'
import DetailAttendeeManagementPage from './containers/DetailAttendeeManagementPage'
import AddAttendeeManagementPage from './containers/AddAttendeeManagementPage'
import EditAttendeeManagementPage from './containers/EditAttendeeManagementPage'

const attendeeManagementRoutes = [
{ 
    path: "/attendeemanagement",
    element: <TableAttendeeManagementPage />,
  }	
,
{ 
    path: "/attendeemanagement/add",
    element: <AddAttendeeManagementPage />,
  }	
,
{ 
    path: "/attendeemanagement/:id_attendeemanagement/edit",
    element: <EditAttendeeManagementPage />,
  }	
,
{ 
    path: "/attendeemanagement/:id_attendeemanagement",
    element: <DetailAttendeeManagementPage />,
  }	

]

export default attendeeManagementRoutes
