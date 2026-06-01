
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditAttendeeManagement from '../components/FormEditAttendeeManagement'
import getAttendeeManagementData from '../services/getAttendeeManagementData'

const EditAttendeeManagementPage = props => {
  const { id_attendeemanagement } = useParams()
  const [isLoading, setIsLoading] = useState({
	editAttendeeManagement: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit AttendeeManagement Page")
  }, []);


const [attendeeManagementData, setAttendeeManagementData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editAttendeeManagement: true}))
      const { data: attendeeManagementDataResponse } = await getAttendeeManagementData({  })

	  setAttendeeManagementData(attendeeManagementDataResponse.data)
	  setIsLoading(prev => ({...prev, editAttendeeManagement: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"AttendeeManagement"}
		isLoading={isLoading.editAttendeeManagement}
	>
		{attendeeManagementData ? 
		(<>
		 <FormEditAttendeeManagement
			{...{ 
				attendeeManagementData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditAttendeeManagementPage

