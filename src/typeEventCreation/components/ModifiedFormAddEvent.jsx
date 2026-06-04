
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
import saveTypeEventCreation from '../services/saveTypeEventCreation'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormAddEvent = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    saveTypeEventCreation({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/TypeEventCreation`)
  	notifySuccess(`Save TypeEventCreation berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Event" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="startDate"
	        name="startDate"
	        control={control}
	        rules={{ required: "Harap masukkan start date" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Start Date"
	          placeholder="Masukkan start date"
	          type="date"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="endDate"
	        name="endDate"
	        control={control}
	        rules={{ required: "Harap masukkan end date" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="End Date"
	          placeholder="Masukkan end date"
	          type="date"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="capacity"
	        name="capacity"
	        control={control}
	        rules={{ required: "Harap masukkan capacity" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Capacity"
	          placeholder="Masukkan capacity"
	          type="number"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="name"
	        name="name"
	        control={control}
	        rules={{ required: "Harap masukkan name" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Name"
	          placeholder="Masukkan name"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="location"
	        name="location"
	        control={control}
	        rules={{ required: "Harap masukkan location" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Location"
	          placeholder="Masukkan location"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
		  ,
	
	
	      <Controller
	        key="eventType"
	        name="eventType"
	        control={control}
	        rules={{ required: "Harap pilih event type" }} 
	        render={({ field, fieldState }) => (
	        <SelectionField
	          
	          label="Event Type"
	          options={eventType}
	          optionKey="eventType"
	          optionLabel="PRIVATE"
	          placeholder="Masukkan event type"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_LqH8wF1UEfG1jsIIA6EoYA" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormAddEvent
