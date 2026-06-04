
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
import updateReviewAnonymous from '../services/updateReviewAnonymous'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormEditReviewAnonymous = ({ 
	reviewAnonymousData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: reviewAnonymousData })
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    updateReviewAnonymous({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/reviewanonymous`)
  	notifySuccess(`Update ReviewAnonymous berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit ReviewAnonymous" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="reviewId"
	        name="reviewId"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Reviewid"
	          placeholder="Masukkan reviewid"
	          defaultValue={reviewAnonymousData.reviewId}
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
	        <InputField
	          label="Eventid"
	          placeholder="Masukkan eventid"
	          defaultValue={reviewAnonymousData.eventId}
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
	        <InputField
	          label="Attendeeid"
	          placeholder="Masukkan attendeeid"
	          defaultValue={reviewAnonymousData.attendeeId}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="rating"
	        name="rating"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Rating"
	          placeholder="Masukkan rating"
	          defaultValue={reviewAnonymousData.rating}
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
	          defaultValue={reviewAnonymousData.comment}
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
	          defaultValue={reviewAnonymousData.anonymous}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_uAM7t18uEfGropGdd4B6sg" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormEditReviewAnonymous
