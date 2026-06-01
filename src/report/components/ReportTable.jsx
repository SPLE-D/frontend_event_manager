
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import deleteReport from '../services/deleteReport'
import * as Layouts from "@/commons/layouts";
const ReportTable = ({ listReport,
		 
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  const [selectedKonfirmasiHapusReport, setSelectedKonfirmasiHapusReport] = React.useState(null);
  const navigate = useNavigate();
  const detail = async (reportItem) => {
    isMobile() && navigate(`/report/${reportItem.id_report}`
    );
  };
  const [showModalKonfirmasiHapusReport, setShowModalKonfirmasiHapusReport] = React.useState(false);
  
  const konfirmasi = async (selectedKonfirmasiHapusReport) => {
      await deleteReport({
        id_report: selectedKonfirmasiHapusReport.id_report,
      });
  		navigate('/report');
    }
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listReport]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "reportid",
            condition: "",
            label: "Reportid",
            featureName: "reportId",
            editable: false
          }
  ,        {
            id: "eventid",
            condition: "",
            label: "Eventid",
            featureName: "eventId",
            editable: false
          }
  ,        {
            id: "totalattendee",
            condition: "",
            label: "Totalattendee",
            featureName: "totalAttendee",
            editable: false
          }
  ,        {
            id: "totalrevenue",
            condition: "",
            label: "Totalrevenue",
            featureName: "totalRevenue",
            editable: false
          }
  ,        {
            id: "summary",
            condition: "",
            label: "Summary",
            featureName: "summary",
            editable: false
          }
  ]}
        itemsEvents={(reportItem) => [
          <Link to={`/report/${reportItem.id_report}`}>
            <Button
              id="_VtjN6V1yEfGDTcMRWoUIdw"
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
      id="_VtjN7V1yEfGDTcMRWoUIdw"
      size="sm"
      variant=
                  "secondary"
      onClick={() => {
        setSelectedKonfirmasiHapusReport(reportItem);
        setShowModalKonfirmasiHapusReport(true);
      }}
    >
      Delete
    </Button>
  </Link>
  ,
          <Link to={`/report/${reportItem.id_report}/edit`}>
    <Button
      id="_VtjOCV1yEfGDTcMRWoUIdw"
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
  		isShow={showModalKonfirmasiHapusReport}
  		title={"Konfirmasi Hapus Report"}
  		>
  		
  				<Link to=''><Button id="batal" className={`w-full`} variant="tertiary" onClick={() => setShowModalKonfirmasiHapusReport(false)}>Batal</Button></Link>
  		
  		<Button
  		  id="_VtjN8l1yEfGDTcMRWoUIdw"
  		  variant="primary"
  		  onClick={() => konfirmasi(selectedKonfirmasiHapusReport)}
  		>
  		  Konfirmasi
  		</Button>
  		</Modal>,
  </>
  )
};

export default ReportTable;
