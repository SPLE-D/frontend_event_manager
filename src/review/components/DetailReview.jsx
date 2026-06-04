
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";

const DetailReview = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "reviewid",
                  condition: "",
                  label: "Reviewid",
                  featureName: "reviewId",
                }
        ,        {
                  id: "eventid",
                  condition: "",
                  label: "Eventid",
                  featureName: "eventId",
                }
        ,        {
                  id: "attendeeid",
                  condition: "",
                  label: "Attendeeid",
                  featureName: "attendeeId",
                }
        ,        {
                  id: "rating",
                  condition: "",
                  label: "Rating",
                  featureName: "rating",
                }
        ,        {
                  id: "comment",
                  condition: "",
                  label: "Comment",
                  featureName: "comment",
                }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailReview;
