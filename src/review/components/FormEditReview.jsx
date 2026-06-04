
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
import updateReview from '../services/updateReview'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditReview = ({ 
	reviewData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: reviewData })
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    updateReview({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/review`)
  	notifySuccess(`Update Review berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Review" 
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
	          defaultValue={reviewData.reviewId}
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
	          defaultValue={reviewData.eventId}
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
	          defaultValue={reviewData.attendeeId}
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
	          defaultValue={reviewData.rating}
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
	          defaultValue={reviewData.comment}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_t4vpAV8uEfGropGdd4B6sg" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditReview
