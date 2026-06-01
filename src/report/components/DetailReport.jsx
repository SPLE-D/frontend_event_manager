
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";

const DetailReport = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
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
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailReport;
