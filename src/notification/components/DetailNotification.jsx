
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteNotification from '../services/deleteNotification'
import * as Layouts from "@/commons/layouts";

const DetailNotification = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusNotification, setShowModalKonfirmasiHapusNotification] = React.useState(false); 
  
    const konfirmasi = async () => {
      await deleteNotification({
        id_notification: data.id_notification,
      });
      navigate('/notification');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "notifiationid",
                  condition: "",
                  label: "Notifiationid",
                  featureName: "notifiationId",
                }
        ,        {
                  id: "content",
                  condition: "",
                  label: "Content",
                  featureName: "content",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_V2aOXV3HEfGIzuKUdlAhJw"
            variant="secondary"
            onClick={() => setShowModalKonfirmasiHapusNotification(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusNotification}
           title={"Konfirmasi Hapus Notification"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusNotification(false)}>Batal</Button></Link>
          <Button
            id="_V2aOYl3HEfGIzuKUdlAhJw"
            variant="secondary"
            onClick={() => konfirmasi()}
          >
            Konfirmasi
          </Button>
        </Modal>
        
      ]}
    />
  );
};

export default DetailNotification;
