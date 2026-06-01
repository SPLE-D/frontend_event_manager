
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
import saveAttendeemanagement from '../services/saveAttendeemanagement'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddAttendee = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    saveAttendeemanagement({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/attendee`)
  	notifySuccess(`Save Attendeemanagement berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Attendee" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="phoneNumber"
	        name="phoneNumber"
	        control={control}
	        rules={{ required: "Harap masukkan phonenumber" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="phoneNumber"
	          placeholder="Masukkan phonenumber"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="email"
	        name="email"
	        control={control}
	        rules={{ required: "Harap masukkan email" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="email"
	          placeholder="Masukkan email"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_mxsooFz0EfGAHPx_4k6vAQ" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddAttendee
