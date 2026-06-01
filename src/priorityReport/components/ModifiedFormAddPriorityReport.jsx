
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
import savePriorityReport from '../services/savePriorityReport'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const priorityReportOptions = [
  { value: "LOW", label: "LOW" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HIGH", label: "HIGH" },
  { value: "CRITICAL", label: "CRITICAL" },
];

const ModifiedFormAddPriorityReport = () => {
  const {
    control,
    handleSubmit,
  } = useForm();
  
  
  
  const navigate = useNavigate()
  
  const onSubmitEvent = (data) => {
    const cleanData = cleanFormData(data)
    savePriorityReport({
		eventId: String(cleanData.eventId),
		totalAttendee: String(cleanData.totalAttendee),
		totalRevenue: String(cleanData.totalRevenue),
		summary: cleanData.summary,
		PriorityReport: cleanData.priorityReport,
	})
    .then(({ data: { data } }) => {
  	notifySuccess(`Save PriorityReport berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add PriorityReport" 
		  onSubmit={handleSubmit(onSubmitEvent)}
	
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
	        key="priorityReport"
	        name="priorityReport"
	        control={control}
	        render={({ field, fieldState }) => (
	        <SelectionField
	          
	          label="PriorityReport"
	          options={priorityReportOptions}
	          optionKey="value"
	          optionLabel="label"
	          placeholder="Masukkan priorityreport"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_uc6YEFZ2EfG2IPAwKxqHFA" key="OnSubmit Event" type="submit" variant="primary">OnSubmit Event</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormAddPriorityReport
