
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
import saveAnonymousReview from '../services/saveAnonymousReview'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormAddReview = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    saveAnonymousReview({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/anonymousreview`)
  	notifySuccess(`Save AnonymousReview berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Review" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="eventId"
	        name="eventId"
	        control={control}
	        rules={{ required: "Harap masukkan event id" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Event ID"
	          placeholder="Masukkan event id"
	          type="number"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="attendeeId"
	        name="attendeeId"
	        control={control}
	        rules={{ required: "Harap masukkan attendee id" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Attendee ID"
	          placeholder="Masukkan attendee id"
	          type="number"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="rating"
	        name="rating"
	        control={control}
	        rules={{ required: "Harap masukkan rating" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Rating"
	          placeholder="Masukkan rating"
	          type="number"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="comment"
	        name="comment"
	        control={control}
	        rules={{ required: "Harap masukkan comment" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Comment"
	          placeholder="Masukkan comment"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
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
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_c7tMQFw2EfG_oZ2RSrBgqg" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormAddReview
