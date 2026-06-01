
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const CheckinTable = ({ 
    listCheckIn}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listCheckIn]}
  	  itemsAttrs={[
          {
            id: "attended",
            condition: "",
            label: "attended",
            featureName: "attended",
            editable: false
          }
  ,        {
            id: "checkinId",
            condition: "",
            label: "checkinId",
            featureName: "checkInId",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default CheckinTable;
