
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteCheckIn from '../services/deleteCheckIn'
import * as Layouts from "@/commons/layouts";

const DetailCheckIn = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusCheckIn, setShowModalKonfirmasiHapusCheckIn] = React.useState(false); 
  
    const konfirmasi = async () => {
      await deleteCheckIn({
        id_checkin: data.id_checkin,
      });
      navigate('/checkin');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "checkinid",
                  condition: "",
                  label: "Checkinid",
                  featureName: "checkInId",
                }
        ,        {
                  id: "attended",
                  condition: "",
                  label: "Attended",
                  featureName: "attended",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_VgAgil3HEfGIzuKUdlAhJw"
            variant="secondary"
            onClick={() => setShowModalKonfirmasiHapusCheckIn(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusCheckIn}
           title={"Konfirmasi Hapus CheckIn"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusCheckIn(false)}>Batal</Button></Link>
          <Button
            id="_VgAgj13HEfGIzuKUdlAhJw"
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

export default DetailCheckIn;
