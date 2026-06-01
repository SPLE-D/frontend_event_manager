
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const ReviewTable = ({ 
    listReview}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listReview]}
  	  itemsAttrs={[
          {
            id: "rating",
            condition: "",
            label: "rating",
            featureName: "rating",
            editable: false
          }
  ,        {
            id: "comment",
            condition: "",
            label: "comment",
            featureName: "comment",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default ReviewTable;
