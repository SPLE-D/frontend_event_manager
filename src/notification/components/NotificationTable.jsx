
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const NotificationTable = ({ 
    listNotification}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (notificationItem) => {
    isMobile() && navigate(`/notification/${notificationItem.id_notification}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listNotification]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "notifiationid",
            condition: "",
            label: "Notifiationid",
            featureName: "notifiationId",
            editable: false
          }
  ,        {
            id: "content",
            condition: "",
            label: "Content",
            featureName: "content",
            editable: false
          }
  ]}
        itemsEvents={(notificationItem) => [
          <Link to={`/notification/${notificationItem.id_notification}`}>
            <Button
              id="_V2aOWV3HEfGIzuKUdlAhJw"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/notification/${notificationItem.id_notification}/edit`}>
    <Button
      id="_V2aOeV3HEfGIzuKUdlAhJw"
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

export default NotificationTable;
