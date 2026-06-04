
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
import saveReviewAnonymous from '../services/saveReviewAnonymous'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormAddReviewAnonymous = ({ 
	eventListData
, 	attendeListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    saveReviewAnonymous({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/reviewanonymous`)
  	notifySuccess(`Save ReviewAnonymous berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add ReviewAnonymous" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
	,	  ]}
	
		  formFields={[
	
	      <Controller
	        key="rating"
	        name="rating"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Rating"
	          placeholder="Masukkan rating"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="comment"
	        name="comment"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Comment"
	          placeholder="Masukkan comment"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="anonymous"
	        name="anonymous"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Anonymous"
	          placeholder="Masukkan anonymous"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
	
	      <Controller
	        key="eventId"
	        name="eventId"
	        control={control}
	        render={({ field, fieldState }) => (
	        <SelectionField
	          
	          label="Event Name"
	          options={eventListData}
	          optionKey="eventId"
	          optionLabel="name"
	          placeholder="Masukkan event name"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	,
	      <Controller
	        key="attendeeId"
	        name="attendeeId"
	        control={control}
	        render={({ field, fieldState }) => (
	        <SelectionField
	          
	          label="Attende Name"
	          options={attendeListData}
	          optionKey="attendeeId"
	          optionLabel="email"
	          placeholder="Masukkan attende name"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_uALtkl8uEfGropGdd4B6sg" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormAddReviewAnonymous
