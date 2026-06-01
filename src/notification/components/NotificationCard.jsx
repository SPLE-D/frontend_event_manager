
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const NotificationCard = ({ 
    listNotification}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listNotification]}
  	
  	itemsAttrs={[
          {
            id: "notificationId",
            condition: "",
            label: "notificationId",
            featureName: "notifiationId",
            editable: false
          }
  ,        {
            id: "content",
            condition: "",
            label: "content",
            featureName: "content",
            editable: false
          }
  ]}
      itemsEvents={(notificationItem) => [
  	]}
    />
  )	
};

export default NotificationCard;
