import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";

// We import deleteCheckIn from core checkIn to cascade-delete correctly
import deleteCheckIn from '../../checkIn/services/deleteCheckIn';

const TimeStampCheckInTable = ({ timestampcheckin }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const [selectedKonfirmasiHapusCheckIn, setSelectedKonfirmasiHapusCheckIn] = React.useState(null);
  const [showModalKonfirmasiHapusCheckIn, setShowModalKonfirmasiHapusCheckIn] = React.useState(false);
  
  const detail = async (timeStampCheckInItem) => {
    isMobile() && navigate(`/timestampcheckin/${timeStampCheckInItem.checkInId}`);
  };
  
  const konfirmasi = async (selectedKonfirmasiHapusCheckIn) => {
    await deleteCheckIn({
      checkInId: selectedKonfirmasiHapusCheckIn.checkInId,
    });
    window.location.reload();
  };
  
  return (
    <>
      <Layouts.ListComponentTableLayout
        items={[timestampcheckin]}
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
            editable: false,
            render: (value) => value === true ? "Ya" : value === false ? "Tidak" : String(value ?? "")
          },
          {
            id: "attendeeid",
            condition: "",
            label: "Attendeeid",
            featureName: "attendeeId",
            editable: false
          },
          {
            id: "timestamp",
            condition: "",
            label: "Timestamp",
            featureName: "timestamp",
            editable: false
          }
        ]}
        itemsEvents={(timeStampCheckInItem) => [
          <Link to={`/timestampcheckin/${timeStampCheckInItem.checkInId}`} key="detail">
            <Button
              id="_V0hYlF1yEfGDTcMRWoUIdw"
              size="sm"
              variant="primary"
            >
              Detail
            </Button>
          </Link>,
          <Link to='' key="delete">
            <Button
              id="_delete_timestamp"
              size="sm"
              variant="secondary"
              onClick={() => {
                setSelectedKonfirmasiHapusCheckIn(timeStampCheckInItem);
                setShowModalKonfirmasiHapusCheckIn(true);
              }}
            >
              Delete
            </Button>
          </Link>,
          <Link to={`/timestampcheckin/${timeStampCheckInItem.checkInId}/edit`} key="edit">
            <Button
              id="_V0h_oV1yEfGDTcMRWoUIdw"
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
        title={"Konfirmasi Hapus TimeStampCheckIn"}
      >
        <Link to=''>
          <Button id="batal" className={`w-full`} variant="tertiary" onClick={() => setShowModalKonfirmasiHapusCheckIn(false)}>
            Batal
          </Button>
        </Link>
        <Button
          id="_confirm_delete_timestamp"
          variant="primary"
          onClick={() => konfirmasi(selectedKonfirmasiHapusCheckIn)}
        >
          Konfirmasi
        </Button>
      </Modal>
    </>
  )
};

export default TimeStampCheckInTable;
