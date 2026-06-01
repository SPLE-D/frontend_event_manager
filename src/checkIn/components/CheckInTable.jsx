import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import deleteCheckIn from '../services/deleteCheckIn'
import * as Layouts from "@/commons/layouts";

const CheckInTable = ({ listCheckIn }) => {
  const { checkPermission } = useAuth();
  const [selectedKonfirmasiHapusCheckIn, setSelectedKonfirmasiHapusCheckIn] = React.useState(null);
  const navigate = useNavigate();
  
  const detail = async (checkInItem) => {
    isMobile() && navigate(`/checkin/${checkInItem.checkInId}`);
  };
  
  const [showModalKonfirmasiHapusCheckIn, setShowModalKonfirmasiHapusCheckIn] = React.useState(false);
  
  const konfirmasi = async (selectedKonfirmasiHapusCheckIn) => {
    await deleteCheckIn({
      checkInId: selectedKonfirmasiHapusCheckIn.checkInId,
    });
    window.location.reload();
  }
  
  return (
    <>
      <Layouts.ListComponentTableLayout
        items={[listCheckIn]}
        detail={detail}
        itemsAttrs={[
          {
            id: "checkinid",
            condition: "",
            label: "Checkinid",
            featureName: "checkInId",
            editable: false
          },
          {
            id: "attended",
            condition: "",
            label: "Attended",
            featureName: "attended",
            editable: false
          },
          {
            id: "attendeeid",
            condition: "",
            label: "Attendeeid",
            featureName: "attendeeId",
            editable: false
          }
        ]}
        itemsEvents={(checkInItem) => [
          <Link to={`/checkin/${checkInItem.checkInId}`} key="detail">
            <Button
              id="_VdbHOV1yEfGDTcMRWoUIdw"
              size="sm"
              variant="primary"
            >
              Detail
            </Button>
          </Link>,
          <Link to='' key="delete">
            <Button
              id="_VdbHPV1yEfGDTcMRWoUIdw"
              size="sm"
              variant="secondary"
              onClick={() => {
                setSelectedKonfirmasiHapusCheckIn(checkInItem);
                setShowModalKonfirmasiHapusCheckIn(true);
              }}
            >
              Delete
            </Button>
          </Link>,
          <Link to={`/checkin/${checkInItem.checkInId}/edit`} key="edit">
            <Button
              id="_VdbHWV1yEfGDTcMRWoUIdw"
              size="sm"
              variant="primary"
            >
              Edit
            </Button>
          </Link>
        ]}
      />
      <Modal
        isShow={showModalKonfirmasiHapusCheckIn}
        title={"Konfirmasi Hapus CheckIn"}
      >
        <Link to=''>
          <Button id="batal" className={`w-full`} variant="tertiary" onClick={() => setShowModalKonfirmasiHapusCheckIn(false)}>
            Batal
          </Button>
        </Link>
        <Button
          id="_VdbHQl1yEfGDTcMRWoUIdw"
          variant="primary"
          onClick={() => konfirmasi(selectedKonfirmasiHapusCheckIn)}
        >
          Konfirmasi
        </Button>
      </Modal>
    </>
  )
};

export default CheckInTable;
