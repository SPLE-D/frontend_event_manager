
import React from 'react';
import TableReportPage from './containers/TableReportPage'
import AddReportPage from './containers/AddReportPage'

const reportRoutes = [
{ 
    path: "/report",
    element: <TableReportPage />,
  }	
,
{ 
    path: "/report/add",
    element: <AddReportPage />,
  }	

]

export default reportRoutes
