
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const ReportTable = ({ 
    listReport}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listReport]}
  	  itemsAttrs={[
          {
            id: "summary",
            condition: "",
            label: "Summary",
            featureName: "summary",
            editable: false
          }
  ,        {
            id: "totalRevenue",
            condition: "",
            label: "totalRevenue",
            featureName: "totalRevenue",
            editable: false
          }
  ,        {
            id: "totalAttendee",
            condition: "",
            label: "totalAttendee",
            featureName: "totalAttendee",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default ReportTable;
