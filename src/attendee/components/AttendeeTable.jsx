
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const AttendeeTable = ({ 
    listAttendee}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (attendeeItem) => {
    isMobile() && navigate(`/attendee/${attendeeItem.id_account}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listAttendee]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "attendeeId",
            condition: "",
            label: "attendeeId",
            featureName: "attendeeId",
            editable: false
          }
  ,        {
            id: "phoneNumber",
            condition: "",
            label: "phoneNumber",
            featureName: "phoneNumber",
            editable: false
          }
  ,        {
            id: "email",
            condition: "",
            label: "email",
            featureName: "email",
            editable: false
          }
  ]}
        itemsEvents={(attendeeItem) => [
          <Link to={`/attendee/${attendeeItem.id_account}`}>
            <Button
              id="_uQTSwFz1EfGAHPx_4k6vAQ"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
        ]}
  	/>
  </>
  )
};

export default AttendeeTable;
