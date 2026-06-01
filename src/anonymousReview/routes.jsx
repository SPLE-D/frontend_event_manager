
import React from 'react';
import TableAnonymousReviewPage from './containers/TableAnonymousReviewPage'
import AddAnonymousReview from './containers/AddAnonymousReview'

const anonymousReviewRoutes = [
{ 
    path: "/anonymousreview",
    element: <TableAnonymousReviewPage />,
  }	
,
{ 
    path: "/anonymousreview/add",
    element: <AddAnonymousReview />,
  }	

]

export default anonymousReviewRoutes
