
import React from 'react';
import TablePriorityReportPage from './containers/TablePriorityReportPage'
import AddPriorityReportPage from './containers/AddPriorityReportPage'

const priorityReportRoutes = [
{ 
    path: "",
    element: <TablePriorityReportPage />,
  }	
,
{ 
    path: "/priorityreport/add",
    element: <AddPriorityReportPage />,
  }	

]

export default priorityReportRoutes
