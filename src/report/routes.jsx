
import React from 'react';
import TableReportPage from './containers/TableReportPage'
import DetailReportPage from './containers/DetailReportPage'
import AddReportPage from './containers/AddReportPage'
import EditReportPage from './containers/EditReportPage'

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
,
{ 
    path: "/report/:id_report/edit",
    element: <EditReportPage />,
  }	
,
{ 
    path: "/report/:id_report",
    element: <DetailReportPage />,
  }	

]

export default reportRoutes
