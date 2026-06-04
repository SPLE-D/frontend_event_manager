
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
import updateEventCreation from '../services/updateEventCreation'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditEvent = ({ 
	detailEventCreation
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: detailEventCreation })
  
  
  
  
  const navigate = useNavigate()
  
  const update = (data) => {
    const cleanData = cleanFormData(data)
    updateEventCreation({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/eventcreation`)
  	notifySuccess(`Update EventCreation berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Event" 
		  onSubmit={handleSubmit(update)}
	
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
	          defaultValue={detailEventCreation.startDate}
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
	          defaultValue={detailEventCreation.endDate}
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
	          defaultValue={detailEventCreation.capacity}
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
	          defaultValue={detailEventCreation.name}
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
	          defaultValue={detailEventCreation.location}
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_02RgYF0lEfGopNoBf7UyRw" key="Update" type="submit" variant="primary">Update</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditEvent
