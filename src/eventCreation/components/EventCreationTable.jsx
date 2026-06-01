
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const EventCreationTable = ({ 
    listEventCreation}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listEventCreation]}
  	  itemsAttrs={[
          {
            id: "eventId",
            condition: "",
            label: "eventId",
            featureName: "eventId",
            editable: false
          }
  ,        {
            id: "startDate",
            condition: "",
            label: "startDate",
            featureName: "startDate",
            editable: false
          }
  ,        {
            id: "endDate",
            condition: "",
            label: "endDate",
            featureName: "endDate",
            editable: false
          }
  ,        {
            id: "capacity",
            condition: "",
            label: "capacity",
            featureName: "capacity",
            editable: false
          }
  ,        {
            id: "name",
            condition: "",
            label: "name",
            featureName: "name",
            editable: false
          }
  ,        {
            id: "location",
            condition: "",
            label: "location",
            featureName: "location",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default EventCreationTable;
