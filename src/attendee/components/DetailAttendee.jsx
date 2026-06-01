
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";

const DetailAttendee = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "attendeeId",
                  condition: "",
                  label: "attendeeId",
                  featureName: "attendeeId",
                }
        ,        {
                  id: "phoneNumber",
                  condition: "",
                  label: "phoneNumber",
                  featureName: "phoneNumber",
                }
        ,        {
                  id: "email",
                  condition: "",
                  label: "email",
                  featureName: "email",
                }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailAttendee;
