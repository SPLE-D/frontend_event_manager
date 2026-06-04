
import React from 'react';
import TableReviewAnonymousPage from './containers/TableReviewAnonymousPage'
import DetailReviewAnonymousPage from './containers/DetailReviewAnonymousPage'
import AddReviewAnonymousPage from './containers/AddReviewAnonymousPage'
import EditReviewAnonymousPage from './containers/EditReviewAnonymousPage'

const reviewAnonymousRoutes = [
{ 
    path: "/reviewanonymous",
    element: <TableReviewAnonymousPage />,
  }	
,
{ 
    path: "/reviewanonymous/:reviewId",
    element: <DetailReviewAnonymousPage />,
  }	
,
{ 
    path: "/reviewanonymous/add",
    element: <AddReviewAnonymousPage />,
  }	
,
{ 
    path: "/reviewanonymous/:reviewId/edit",
    element: <EditReviewAnonymousPage />,
  }	

]

export default reviewAnonymousRoutes
