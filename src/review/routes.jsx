
import React from 'react';
import TableReviewPage from './containers/TableReviewPage'
import AddReviewPage from './containers/AddReviewPage'

const reviewRoutes = [
{ 
    path: "/review",
    element: <TableReviewPage />,
  }	
,
{ 
    path: "/review/add",
    element: <AddReviewPage />,
  }	

]

export default reviewRoutes
