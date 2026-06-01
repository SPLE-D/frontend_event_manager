
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";

const DetailTableTypeEventCreation = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "eventId",
                  condition: "",
                  label: "eventId",
                  featureName: "eventId",
                }
        ,        {
                  id: "startDate",
                  condition: "",
                  label: "startDate",
                  featureName: "startDate",
                }
        ,        {
                  id: "endDate",
                  condition: "",
                  label: "endDate",
                  featureName: "endDate",
                }
        ,        {
                  id: "capacity",
                  condition: "",
                  label: "capacity",
                  featureName: "capacity",
                }
        ,        {
                  id: "name",
                  condition: "",
                  label: "name",
                  featureName: "name",
                }
        ,        {
                  id: "location",
                  condition: "",
                  label: "location",
                  featureName: "location",
                }
        ,        {
                  id: "eventType",
                  condition: "",
                  label: "eventType",
                  featureName: "eventType",
                }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailTableTypeEventCreation;
