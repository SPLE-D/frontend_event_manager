
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
import saveTimeStampCheckIn from '../services/saveTimeStampCheckIn'
import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormAddTimeStampCheckIn = ({
	attendeeListData
}) => {
  const {
    control,
    handleSubmit,
  } = useForm()




  const navigate = useNavigate()

  const submit = (data) => {
    const cleanData = cleanFormData(data)
    saveTimeStampCheckIn({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/timestampcheckin`)
        notifySuccess(`Save TimeStampCheckIn berhasil!`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  }


  return (
    <div>
      <Layouts.FormComponentLayout
        title="Add TimeStampCheckIn"
        onSubmit={handleSubmit(submit)}

        vas={[
        ]}

        formFields={[



          <Controller
            key="attended"
            name="attended"
            control={control}
            render={({ field, fieldState }) => (
              <SelectionField
                label="Attended"
                options={[
                  { value: "true", label: "Ya" },
                  { value: "false", label: "Tidak" }
                ]}
                optionKey="value"
                optionLabel="label"
                placeholder="Pilih status kehadiran"
                fieldState={fieldState}
                {...field}
                onChange={(e) => {
                  field.onChange(e.target.value === "true");
                }}
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
                label="Email Attendee"
                options={attendeeListData}
                optionKey="attendeeId"
                optionLabel="email"
                placeholder="Masukkan email attendee"
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />

          ,

          <Controller
            key="timestamp"
            name="timestamp"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                type="datetime-local"
                label="Timestamp"
                placeholder="Masukkan timestamp"
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />

          ,

        ]}

        itemsEvents={[
          <Button id="_V0nfMl1yEfGDTcMRWoUIdw" key="Submit" type="submit" variant="primary">Submit</Button>
        ]}
      />

    </div>
  )
}

export default ModifiedFormAddTimeStampCheckIn
