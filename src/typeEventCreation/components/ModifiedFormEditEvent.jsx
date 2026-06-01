
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
import updateTypeEventCreation from '../services/updateTypeEventCreation'
import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";
const eventType = [
	{ eventType: "PUBLIC", PUBLIC: "PUBLIC" },
	{ eventType: "PRIVATE", PUBLIC: "PRIVATE" }
];

const ModifiedFormEditEvent = ({
	detailTypeEventCreation
}) => {
	const {
		control,
		handleSubmit,
	} = useForm({ defaultValues: detailTypeEventCreation })




	const navigate = useNavigate()

	const update = (data) => {
		const cleanData = cleanFormData(data)
		updateTypeEventCreation({
			...cleanData,
		})
			.then(({ data: { data } }) => {
				navigate(`/TypeEventCreation`)
				notifySuccess(`Update TypeEventCreation berhasil!`);
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
								defaultValue={detailTypeEventCreation.startDate}
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
								defaultValue={detailTypeEventCreation.endDate}
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
								defaultValue={detailTypeEventCreation.capacity}
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
								defaultValue={detailTypeEventCreation.name}
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
								defaultValue={detailTypeEventCreation.location}
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
						render={({ field, fieldState }) => (
							<SelectionField

								label="Event Type"
								options={eventType}
								optionKey="eventType"
								optionLabel="PUBLIC"
								placeholder="Masukkan event type"
								fieldState={fieldState}
								defaultValue={detailTypeEventCreation.eventType}
								{...field}
								isRequired={false}
							/>
						)}
					/>
				]}

				itemsEvents={[
					<Button id="_z_bk4F1aEfGZdpGuJqXIFA" key="Update" type="submit" variant="primary">Update</Button>
				]}
			/>

		</div>
	)
}

export default ModifiedFormEditEvent
