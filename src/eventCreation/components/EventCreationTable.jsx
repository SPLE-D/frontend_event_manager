
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import deleteEventCreation from '../services/deleteEventCreation'
import * as Layouts from "@/commons/layouts";
const EventCreationTable = ({ listEventCreation,
		 
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  const [selectedKonfirmasiHapusEventCreation, setSelectedKonfirmasiHapusEventCreation] = React.useState(null);
  const navigate = useNavigate();
  const detail = async (eventCreationItem) => {
    isMobile() && navigate(`/eventcreation/${eventCreationItem.id_eventcreation}`
    );
  };
  const [showModalKonfirmasiHapusEventCreation, setShowModalKonfirmasiHapusEventCreation] = React.useState(false);
  
  const konfirmasi = async (selectedKonfirmasiHapusEventCreation) => {
      await deleteEventCreation({
        id_eventcreation: selectedKonfirmasiHapusEventCreation.id_eventcreation,
      });
  		navigate('/eventcreation');
    }
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listEventCreation]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "eventid",
            condition: "",
            label: "Eventid",
            featureName: "eventId",
            editable: false
          }
  ,        {
            id: "startdate",
            condition: "",
            label: "Startdate",
            featureName: "startDate",
            editable: false
          }
  ,        {
            id: "enddate",
            condition: "",
            label: "Enddate",
            featureName: "endDate",
            editable: false
          }
  ,        {
            id: "capacity",
            condition: "",
            label: "Capacity",
            featureName: "capacity",
            editable: false
          }
  ,        {
            id: "name",
            condition: "",
            label: "Name",
            featureName: "name",
            editable: false
          }
  ,        {
            id: "location",
            condition: "",
            label: "Location",
            featureName: "location",
            editable: false
          }
  ]}
        itemsEvents={(eventCreationItem) => [
          <Link to={`/eventcreation/${eventCreationItem.id_eventcreation}`}>
            <Button
              id="_VjONOV1yEfGDTcMRWoUIdw"
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
      id="_VjONPV1yEfGDTcMRWoUIdw"
      size="sm"
      variant=
                  "secondary"
      onClick={() => {
        setSelectedKonfirmasiHapusEventCreation(eventCreationItem);
        setShowModalKonfirmasiHapusEventCreation(true);
      }}
    >
      Delete
    </Button>
  </Link>
  ,
          <Link to={`/eventcreation/${eventCreationItem.id_eventcreation}/edit`}>
    <Button
      id="_VjONWV1yEfGDTcMRWoUIdw"
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
  		isShow={showModalKonfirmasiHapusEventCreation}
  		title={"Konfirmasi Hapus EventCreation"}
  		>
  		
  				<Link to=''><Button id="batal" className={`w-full`} variant="tertiary" onClick={() => setShowModalKonfirmasiHapusEventCreation(false)}>Batal</Button></Link>
  		
  		<Button
  		  id="_VjONQl1yEfGDTcMRWoUIdw"
  		  variant="primary"
  		  onClick={() => konfirmasi(selectedKonfirmasiHapusEventCreation)}
  		>
  		  Konfirmasi
  		</Button>
  		</Modal>,
  </>
  )
};

export default EventCreationTable;
