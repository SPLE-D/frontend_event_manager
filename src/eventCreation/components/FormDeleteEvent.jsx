
import React from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Form,
  InputField,
  SelectionField,
  MultiSelectionField,
  VisualizationAttr,
  Spinner,
  Modal,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import deleteEventCreation from '../services/deleteEventCreation'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormDeleteEvent = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const remove = (data) => {
    const cleanData = cleanFormData(data)
    deleteEventCreation({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/eventcreation`)
  	notifySuccess(`Delete EventCreation berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Delete Event" 
		  onSubmit={handleSubmit(remove)}
	
	    vas={[
		  ]}
	
		  formFields={[
		  
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_NsaWsF0qEfGopNoBf7UyRw" key="Remove" type="submit" variant="primary">Remove</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormDeleteEvent
