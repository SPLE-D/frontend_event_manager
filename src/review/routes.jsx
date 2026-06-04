
import React from 'react';
import TableReviewPage from './containers/TableReviewPage'
import DetailReviewPage from './containers/DetailReviewPage'
import AddReviewPage from './containers/AddReviewPage'
import EditReviewPage from './containers/EditReviewPage'

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
,
{ 
    path: "/review/:reviewId/edit",
    element: <EditReviewPage />,
  }	
,
{ 
    path: "/review/:reviewId",
    element: <DetailReviewPage />,
  }	

]

export default reviewRoutes
