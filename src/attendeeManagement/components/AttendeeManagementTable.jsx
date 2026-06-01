
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const AttendeeManagementTable = ({ 
    listAttendeeManagement}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (attendeeManagementItem) => {
    isMobile() && navigate(`/attendeemanagement/${attendeeManagementItem.id_attendeemanagement}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listAttendeeManagement]}
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
  ]}
        itemsEvents={(attendeeManagementItem) => [
          <Link to={`/attendeemanagement/${attendeeManagementItem.id_attendeemanagement}`}>
            <Button
              id="_UWwmCV2yEfGIzuKUdlAhJw"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/attendeemanagement/${attendeeManagementItem.id_attendeemanagement}/edit`}>
    <Button
      id="_UWwmKV2yEfGIzuKUdlAhJw"
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

export default AttendeeManagementTable;
