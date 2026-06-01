
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const ClassAttendeeManagementTable = ({ 
    classattendeemanagement}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (classAttendeeManagementItem) => {
    isMobile() && navigate(`/classattendeemanagement/${classAttendeeManagementItem.id_attendeemanagement}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[classattendeemanagement]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "attendeeid",
            condition: "",
            label: "Attendeeid",
            featureName: "attendeeId",
            editable: false
          }
  ,        {
            id: "phonenumber",
            condition: "",
            label: "Phonenumber",
            featureName: "phoneNumber",
            editable: false
          }
  ,        {
            id: "email",
            condition: "",
            label: "Email",
            featureName: "email",
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
            id: "attendeeclass",
            condition: "",
            label: "Attendeeclass",
            featureName: "attendeeClass",
            editable: false
          }
  ]}
        itemsEvents={(classAttendeeManagementItem) => [
          <Link to={`/classattendeemanagement/${classAttendeeManagementItem.id_attendeemanagement}`}>
            <Button
              id="_WMLqBV3HEfGIzuKUdlAhJw"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/classattendeemanagement/${classAttendeeManagementItem.id_attendeemanagement}/edit`}>
    <Button
      id="_WMMREV3HEfGIzuKUdlAhJw"
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

export default ClassAttendeeManagementTable;
