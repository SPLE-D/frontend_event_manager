
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";

const DetailEventCreation = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "eventid",
                  condition: "",
                  label: "Eventid",
                  featureName: "eventId",
                }
        ,        {
                  id: "startdate",
                  condition: "",
                  label: "Startdate",
                  featureName: "startDate",
                }
        ,        {
                  id: "enddate",
                  condition: "",
                  label: "Enddate",
                  featureName: "endDate",
                }
        ,        {
                  id: "capacity",
                  condition: "",
                  label: "Capacity",
                  featureName: "capacity",
                }
        ,        {
                  id: "name",
                  condition: "",
                  label: "Name",
                  featureName: "name",
                }
        ,        {
                  id: "location",
                  condition: "",
                  label: "Location",
                  featureName: "location",
                }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailEventCreation;
