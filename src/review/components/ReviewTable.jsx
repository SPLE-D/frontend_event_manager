
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const ReviewTable = ({ 
    listReview}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (reviewItem) => {
    isMobile() && navigate(`/review/${reviewItem.id_review}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listReview]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "reviewid",
            condition: "",
            label: "Reviewid",
            featureName: "reviewId",
            editable: false
          }
  ,        {
            id: "eventid",
            condition: "",
            label: "Eventid",
            featureName: "eventId",
            editable: false
          }
  ,        {
            id: "attendeeid",
            condition: "",
            label: "Attendeeid",
            featureName: "attendeeId",
            editable: false
          }
  ,        {
            id: "rating",
            condition: "",
            label: "Rating",
            featureName: "rating",
            editable: false
          }
  ,        {
            id: "comment",
            condition: "",
            label: "Comment",
            featureName: "comment",
            editable: false
          }
  ]}
        itemsEvents={(reviewItem) => [
          <Link to={`/review/${reviewItem.id_review}`}>
            <Button
              id="_WEIhSV3HEfGIzuKUdlAhJw"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/review/${reviewItem.id_review}/edit`}>
    <Button
      id="_WEIhaV3HEfGIzuKUdlAhJw"
      size="sm"
      variant=
          "primary"
    >
      Edit
    </Button>
  </Link>
        ]}
  	/>
  </>
  )
};

export default ReviewTable;
