
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteAttendeeManagement from '../services/deleteAttendeeManagement'
import * as Layouts from "@/commons/layouts";

const DetailAttendeeManagement = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusAttendeeManagement, setShowModalKonfirmasiHapusAttendeeManagement] = React.useState(false); 
  
    const konfirmasi = async () => {
      await deleteAttendeeManagement({
        id_attendeemanagement: data.id_attendeemanagement,
      });
      navigate('/attendeemanagement');
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
        
      ]}
      itemsEvents={[
          <Button
            id="_UWwmDV2yEfGIzuKUdlAhJw"
            variant="secondary"
            onClick={() => setShowModalKonfirmasiHapusAttendeeManagement(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusAttendeeManagement}
           title={"Konfirmasi Hapus AttendeeManagement"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusAttendeeManagement(false)}>Batal</Button></Link>
          <Button
            id="_UWwmEl2yEfGIzuKUdlAhJw"
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

export default DetailAttendeeManagement;
