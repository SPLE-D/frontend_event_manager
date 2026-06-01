
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const EventCreationTable = ({ 
    listEventCreation}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (eventCreationItem) => {
    isMobile() && navigate(`/eventcreation/${eventCreationItem.id_eventcreation}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listEventCreation]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "eventid",
            condition: "",
            label: "Eventid",
            featureName: "eventId",
            editable: false
          }
  ,        {
            id: "startdate",
            condition: "",
            label: "Startdate",
            featureName: "startDate",
            editable: false
          }
  ,        {
            id: "enddate",
            condition: "",
            label: "Enddate",
            featureName: "endDate",
            editable: false
          }
  ,        {
            id: "capacity",
            condition: "",
            label: "Capacity",
            featureName: "capacity",
            editable: false
          }
  ,        {
            id: "name",
            condition: "",
            label: "Name",
            featureName: "name",
            editable: false
          }
  ,        {
            id: "location",
            condition: "",
            label: "Location",
            featureName: "location",
            editable: false
          }
  ]}
        itemsEvents={(eventCreationItem) => [
          <Link to={`/eventcreation/${eventCreationItem.id_eventcreation}`}>
            <Button
              id="_VnwHSV3HEfGIzuKUdlAhJw"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/eventcreation/${eventCreationItem.id_eventcreation}/edit`}>
    <Button
      id="_VnwuV13HEfGIzuKUdlAhJw"
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

export default EventCreationTable;
