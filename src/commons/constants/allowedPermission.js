export const ALLOWED_PERMISSIONS = [
  { value: "CreateAttendeeManagement", label: "CreateAttendeeManagement" },
  { value: "UpdateAttendeeManagement", label: "UpdateAttendeeManagement" },
  { value: "DeleteAttendeeManagement", label: "DeleteAttendeeManagement" },
  { value: "CreateCheckIn", label: "CreateCheckIn" },
  { value: "UpdateCheckIn", label: "UpdateCheckIn" },
  { value: "DeleteCheckIn", label: "DeleteCheckIn" },
  { value: "CreateEventCreation", label: "CreateEventCreation" },
  { value: "UpdateEventCreation", label: "UpdateEventCreation" },
  { value: "DeleteEventCreation", label: "DeleteEventCreation" },
  { value: "CreateNotification", label: "CreateNotification" },
  { value: "UpdateNotification", label: "UpdateNotification" },
  { value: "DeleteNotification", label: "DeleteNotification" },
  { value: "CreateReport", label: "CreateReport" },
  { value: "UpdateReport", label: "UpdateReport" },
  { value: "DeleteReport", label: "DeleteReport" },
  { value: "CreateReview", label: "CreateReview" },
  { value: "UpdateReview", label: "UpdateReview" },
  { value: "DeleteReview", label: "DeleteReview" },
];

export const findAllowedPermission = (defaultValues) => {
  const defaultVal = ALLOWED_PERMISSIONS.filter((allowed) =>
    defaultValues.includes(allowed.value),
  );

  return defaultVal;
};
