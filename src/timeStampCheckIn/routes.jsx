
import React from 'react';
import TableTimeStampCheckInPage from './containers/TableTimeStampCheckInPage'
import DetailTimeStampCheckInPage from './containers/DetailTimeStampCheckInPage'
import AddTimeStampCheckInPage from './containers/AddTimeStampCheckInPage'
import EditTimeStampCheckInPage from './containers/EditTimeStampCheckInPage'

const timeStampCheckInRoutes = [
{ 
    path: "/timestampcheckin",
    element: <TableTimeStampCheckInPage />,
  }	
,
{ 
    path: "/timestampcheckin/:id_checkin",
    element: <DetailTimeStampCheckInPage />,
  }	
,
{ 
    path: "/timestampcheckin/add",
    element: <AddTimeStampCheckInPage />,
  }	
,
{ 
    path: "/timestampcheckin/:id_checkin/edit",
    element: <EditTimeStampCheckInPage />,
  }	

]

export default timeStampCheckInRoutes
