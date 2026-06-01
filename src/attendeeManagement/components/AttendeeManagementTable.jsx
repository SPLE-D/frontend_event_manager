
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import deleteAttendeeManagement from '../services/deleteAttendeeManagement'
import * as Layouts from "@/commons/layouts";
const AttendeeManagementTable = ({ listAttendeeManagement,
		 
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  const [selectedKonfirmasiHapusAttendeeManagement, setSelectedKonfirmasiHapusAttendeeManagement] = React.useState(null);
  const navigate = useNavigate();
  const detail = async (attendeeManagementItem) => {
    isMobile() && navigate(`/attendeemanagement/${attendeeManagementItem.id_attendeemanagement}`
    );
  };
  const [showModalKonfirmasiHapusAttendeeManagement, setShowModalKonfirmasiHapusAttendeeManagement] = React.useState(false);
  
  const konfirmasi = async (selectedKonfirmasiHapusAttendeeManagement) => {
      await deleteAttendeeManagement({
        id_attendeemanagement: selectedKonfirmasiHapusAttendeeManagement.id_attendeemanagement,
      });
  		navigate('/attendeemanagement');
    }
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listAttendeeManagement]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "attendeeid",
            condition: "",
            label: "Attendeeid",
            featureName: "attendeeId",
            editable: false
          }
  ,        {
            id: "phonenumber",
            condition: "",
            label: "Phonenumber",
            featureName: "phoneNumber",
            editable: false
          }
  ,        {
            id: "email",
            condition: "",
            label: "Email",
            featureName: "email",
            editable: false
          }
  ]}
        itemsEvents={(attendeeManagementItem) => [
          <Link to={`/attendeemanagement/${attendeeManagementItem.id_attendeemanagement}`}>
            <Button
              id="_VmwpaV1yEfGDTcMRWoUIdw"
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
      id="_VmwpbV1yEfGDTcMRWoUIdw"
      size="sm"
      variant=
                  "secondary"
      onClick={() => {
        setSelectedKonfirmasiHapusAttendeeManagement(attendeeManagementItem);
        setShowModalKonfirmasiHapusAttendeeManagement(true);
      }}
    >
      Delete
    </Button>
  </Link>
  ,
          <Link to={`/attendeemanagement/${attendeeManagementItem.id_attendeemanagement}/edit`}>
    <Button
      id="_VmwpiV1yEfGDTcMRWoUIdw"
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
  		isShow={showModalKonfirmasiHapusAttendeeManagement}
  		title={"Konfirmasi Hapus AttendeeManagement"}
  		>
  		
  				<Link to=''><Button id="batal" className={`w-full`} variant="tertiary" onClick={() => setShowModalKonfirmasiHapusAttendeeManagement(false)}>Batal</Button></Link>
  		
  		<Button
  		  id="_Vmwpcl1yEfGDTcMRWoUIdw"
  		  variant="primary"
  		  onClick={() => konfirmasi(selectedKonfirmasiHapusAttendeeManagement)}
  		>
  		  Konfirmasi
  		</Button>
  		</Modal>,
  </>
  )
};

export default AttendeeManagementTable;
