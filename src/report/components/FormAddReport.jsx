
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
import saveReport from '../services/saveReport'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddReport = ({ 
	eventListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    saveReport({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/report`)
  	notifySuccess(`Save Report berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Report" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="summary"
	        name="summary"
	        control={control}
	        rules={{ required: "Harap masukkan summary" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Summary"
	          placeholder="Masukkan summary"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="totalRevenue"
	        name="totalRevenue"
	        control={control}
	        rules={{ required: "Harap masukkan total revenue" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Total Revenue"
	          placeholder="Masukkan total revenue"
	          type="number"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="totalAttendee"
	        name="totalAttendee"
	        control={control}
	        rules={{ required: "Harap masukkan total attendee" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Total Attendee"
	          placeholder="Masukkan total attendee"
	          type="number"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
		  ,
	
	
	      <Controller
	        key="eventId"
	        name="eventId"
	        control={control}
	        rules={{ required: "Harap pilih event name" }} 
	        render={({ field, fieldState }) => (
	        <SelectionField
	          
	          label="Event Name"
	          options={eventListData}
	          optionKey="eventId"
	          optionLabel="name"
	          placeholder="Masukkan event name"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_HFxaUE4KEfGk1LLXzSRiFA" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddReport
