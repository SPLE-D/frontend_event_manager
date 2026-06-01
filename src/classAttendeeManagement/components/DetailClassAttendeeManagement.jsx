
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteClassAttendeeManagement from '../services/deleteClassAttendeeManagement'
import * as Layouts from "@/commons/layouts";

const DetailClassAttendeeManagement = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusClassAttendeeManagement, setShowModalKonfirmasiHapusClassAttendeeManagement] = React.useState(false); 
  
    const konfirmasi = async () => {
      await deleteClassAttendeeManagement({
        id_attendeemanagement: data.id_attendeemanagement,
        id_attendeemanagement: data.id_attendeemanagement,
      });
      navigate('/classattendeemanagement');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "attendeeid",
                  condition: "",
                  label: "Attendeeid",
                  featureName: "attendeeId",
                }
        ,        {
                  id: "phonenumber",
                  condition: "",
                  label: "Phonenumber",
                  featureName: "phoneNumber",
                }
        ,        {
                  id: "email",
                  condition: "",
                  label: "Email",
                  featureName: "email",
                }
        ,        {
                  id: "eventid",
                  condition: "",
                  label: "Eventid",
                  featureName: "eventId",
                }
        ,        {
                  id: "attendeeclass",
                  condition: "",
                  label: "Attendeeclass",
                  featureName: "attendeeClass",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_WMS-xl3HEfGIzuKUdlAhJw"
            variant="secondary"
            onClick={() => setShowModalKonfirmasiHapusClassAttendeeManagement(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusClassAttendeeManagement}
           title={"Konfirmasi Hapus ClassAttendeeManagement"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusClassAttendeeManagement(false)}>Batal</Button></Link>
          <Button
            id="_WMS-zV3HEfGIzuKUdlAhJw"
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

export default DetailClassAttendeeManagement;
