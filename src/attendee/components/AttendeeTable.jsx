
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const AttendeeTable = ({ 
    dataBinding}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[dataBinding]}
  	  itemsAttrs={[
          {
            id: "attendeeId",
            condition: "",
            label: "attendeeId",
            featureName: "attendeeId",
            editable: false
          }
  ,        {
            id: "phoneNumber",
            condition: "",
            label: "phoneNumber",
            featureName: "phoneNumber",
            editable: false
          }
  ,        {
            id: "email",
            condition: "",
            label: "email",
            featureName: "email",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default AttendeeTable;
