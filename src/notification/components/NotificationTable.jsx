
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import deleteNotification from '../services/deleteNotification'
import * as Layouts from "@/commons/layouts";
const NotificationTable = ({ listNotification,
		 
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  const [selectedKonfirmasiHapusNotification, setSelectedKonfirmasiHapusNotification] = React.useState(null);
  const navigate = useNavigate();
  const detail = async (notificationItem) => {
    isMobile() && navigate(`/notification/${notificationItem.id_notification}`
    );
  };
  const [showModalKonfirmasiHapusNotification, setShowModalKonfirmasiHapusNotification] = React.useState(false);
  
  const konfirmasi = async (selectedKonfirmasiHapusNotification) => {
      await deleteNotification({
        id_notification: selectedKonfirmasiHapusNotification.id_notification,
      });
  		navigate('/notification');
    }
  
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
              id="_VqZMOV1yEfGDTcMRWoUIdw"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to=''>
    <Button
      id="_VqZMPV1yEfGDTcMRWoUIdw"
      size="sm"
      variant=
                  "secondary"
      onClick={() => {
        setSelectedKonfirmasiHapusNotification(notificationItem);
        setShowModalKonfirmasiHapusNotification(true);
      }}
    >
      Delete
    </Button>
  </Link>
  ,
          <Link to={`/notification/${notificationItem.id_notification}/edit`}>
    <Button
      id="_VqZMWV1yEfGDTcMRWoUIdw"
      size="sm"
      variant=
          "primary"
    >
      Edit
    </Button>
  </Link>
        ]}
  	/>
  		<Modal
  		isShow={showModalKonfirmasiHapusNotification}
  		title={"Konfirmasi Hapus Notification"}
  		>
  		
  				<Link to=''><Button id="batal" className={`w-full`} variant="tertiary" onClick={() => setShowModalKonfirmasiHapusNotification(false)}>Batal</Button></Link>
  		
  		<Button
  		  id="_VqZMQl1yEfGDTcMRWoUIdw"
  		  variant="primary"
  		  onClick={() => konfirmasi(selectedKonfirmasiHapusNotification)}
  		>
  		  Konfirmasi
  		</Button>
  		</Modal>,
  </>
  )
};

export default NotificationTable;
