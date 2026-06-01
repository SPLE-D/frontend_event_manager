
import React from 'react';
import TableCheckInPage from './containers/TableCheckInPage'
import DetailCheckInPage from './containers/DetailCheckInPage'
import AddCheckInPage from './containers/AddCheckInPage'
import EditCheckInPage from './containers/EditCheckInPage'

const checkInRoutes = [
{ 
    path: "/checkin",
    element: <TableCheckInPage />,
  }	
,
{ 
    path: "/checkin/add",
    element: <AddCheckInPage />,
  }	
,
{ 
    path: "/checkin/:id_checkin/edit",
    element: <EditCheckInPage />,
  }	
,
{ 
    path: "/checkin/:id_checkin",
    element: <DetailCheckInPage />,
  }	

]

export default checkInRoutes
