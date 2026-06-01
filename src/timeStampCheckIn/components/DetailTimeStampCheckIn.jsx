
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteTimeStampCheckIn from '../services/deleteTimeStampCheckIn'
import * as Layouts from "@/commons/layouts";

const DetailTimeStampCheckIn = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusTimeStampCheckIn, setShowModalKonfirmasiHapusTimeStampCheckIn] = React.useState(false); 
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "checkinid",
                  condition: "",
                  label: "Check In ID",
                  featureName: "checkInId",
                }
        ,        {
                  id: "attended",
                  condition: "",
                  label: "Attended",
                  featureName: "attended",
                }
        ,        {
                  id: "attendeeid",
                  condition: "",
                  label: "Attendee ID",
                  featureName: "attendeeId",
                }
        ,        {
                  id: "timestamp",
                  condition: "",
                  label: "Timestamp",
                  featureName: "timestamp",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_V0j01l1yEfGDTcMRWoUIdw"
            variant="secondary"
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusTimeStampCheckIn}
           title={"Konfirmasi Hapus TimeStampCheckIn"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusTimeStampCheckIn(false)}>Batal</Button></Link>
          <Button
            id="_V0j03V1yEfGDTcMRWoUIdw"
            variant="secondary"
          >
            Konfirmasi
          </Button>
        </Modal>
        
      ]}
    />
  );
};

export default DetailTimeStampCheckIn;
