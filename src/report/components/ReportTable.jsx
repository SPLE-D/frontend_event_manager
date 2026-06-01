
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const ReportTable = ({ 
    listReport}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (reportItem) => {
    isMobile() && navigate(`/report/${reportItem.id_report}`
    );
  };
  
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
              id="_V88UJl3HEfGIzuKUdlAhJw"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/report/${reportItem.id_report}/edit`}>
    <Button
      id="_V88URl3HEfGIzuKUdlAhJw"
      size="sm"
      variant=
          "primary"
    >
      Edit
    </Button>
  </Link>
        ]}
  	/>
  </>
  )
};

export default ReportTable;
