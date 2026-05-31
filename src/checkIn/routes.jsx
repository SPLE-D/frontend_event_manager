
import React from 'react';
import TableCheckInPage from './containers/TableCheckInPage'
import AddCheckInPage from './containers/AddCheckInPage'

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

]

export default checkInRoutes
