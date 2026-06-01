
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const CheckInTable = ({ 
    listCheckIn}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (checkInItem) => {
    isMobile() && navigate(`/checkin/${checkInItem.id_checkin}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listCheckIn]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "checkinid",
            condition: "",
            label: "Checkinid",
            featureName: "checkInId",
            editable: false
          }
  ,        {
            id: "attended",
            condition: "",
            label: "Attended",
            featureName: "attended",
            editable: false
          }
  ]}
        itemsEvents={(checkInItem) => [
          <Link to={`/checkin/${checkInItem.id_checkin}`}>
            <Button
              id="_VgAghl3HEfGIzuKUdlAhJw"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/checkin/${checkInItem.id_checkin}/edit`}>
    <Button
      id="_VgAgpl3HEfGIzuKUdlAhJw"
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

export default CheckInTable;
