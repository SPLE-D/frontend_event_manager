
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteEventCreation from '../services/deleteEventCreation'
import * as Layouts from "@/commons/layouts";

const DetailEventCreation = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusEventCreation, setShowModalKonfirmasiHapusEventCreation] = React.useState(false); 
  
    const konfirmasi = async () => {
      await deleteEventCreation({
        id_eventcreation: data.id_eventcreation,
      });
      navigate('/eventcreation');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "eventid",
                  condition: "",
                  label: "Eventid",
                  featureName: "eventId",
                }
        ,        {
                  id: "startdate",
                  condition: "",
                  label: "Startdate",
                  featureName: "startDate",
                }
        ,        {
                  id: "enddate",
                  condition: "",
                  label: "Enddate",
                  featureName: "endDate",
                }
        ,        {
                  id: "capacity",
                  condition: "",
                  label: "Capacity",
                  featureName: "capacity",
                }
        ,        {
                  id: "name",
                  condition: "",
                  label: "Name",
                  featureName: "name",
                }
        ,        {
                  id: "location",
                  condition: "",
                  label: "Location",
                  featureName: "location",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_VnwHTV3HEfGIzuKUdlAhJw"
            variant="secondary"
            onClick={() => setShowModalKonfirmasiHapusEventCreation(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusEventCreation}
           title={"Konfirmasi Hapus EventCreation"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusEventCreation(false)}>Batal</Button></Link>
          <Button
            id="_VnwHUl3HEfGIzuKUdlAhJw"
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

export default DetailEventCreation;
