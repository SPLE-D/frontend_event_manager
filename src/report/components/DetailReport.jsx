
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteReport from '../services/deleteReport'
import * as Layouts from "@/commons/layouts";

const DetailReport = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusReport, setShowModalKonfirmasiHapusReport] = React.useState(false); 
  
    const konfirmasi = async () => {
      await deleteReport({
        id_report: data.id_report,
      });
      navigate('/report');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "reportid",
                  condition: "",
                  label: "Reportid",
                  featureName: "reportId",
                }
        ,        {
                  id: "eventid",
                  condition: "",
                  label: "Eventid",
                  featureName: "eventId",
                }
        ,        {
                  id: "totalattendee",
                  condition: "",
                  label: "Totalattendee",
                  featureName: "totalAttendee",
                }
        ,        {
                  id: "totalrevenue",
                  condition: "",
                  label: "Totalrevenue",
                  featureName: "totalRevenue",
                }
        ,        {
                  id: "summary",
                  condition: "",
                  label: "Summary",
                  featureName: "summary",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_V88UKl3HEfGIzuKUdlAhJw"
            variant="secondary"
            onClick={() => setShowModalKonfirmasiHapusReport(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusReport}
           title={"Konfirmasi Hapus Report"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusReport(false)}>Batal</Button></Link>
          <Button
            id="_V88UL13HEfGIzuKUdlAhJw"
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

export default DetailReport;
