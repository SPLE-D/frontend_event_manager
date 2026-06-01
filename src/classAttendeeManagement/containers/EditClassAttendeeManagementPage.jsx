
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormEditClassAttendeeManagement from '../components/ModifiedFormEditClassAttendeeManagement'
import getClassAttendeeManagementData from '../services/getClassAttendeeManagementData'

const EditClassAttendeeManagementPage = props => {
  const [isLoading, setIsLoading] = useState({
	editClassAttendeeManagement: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit ClassAttendeeManagement Page")
  }, []);


const [classAttendeeManagementData, setClassAttendeeManagementData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editClassAttendeeManagement: true}))
      const { data: classAttendeeManagementDataResponse } = await getClassAttendeeManagementData({  })

	  setClassAttendeeManagementData(classAttendeeManagementDataResponse.data)
	  setIsLoading(prev => ({...prev, editClassAttendeeManagement: false}))
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
		singularName={"ClassAttendeeManagement"}
		isLoading={isLoading.editClassAttendeeManagement}
	>
		{classAttendeeManagementData ? 
		(<>
		 <ModifiedFormEditClassAttendeeManagement
			{...{ 
				classAttendeeManagementData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditClassAttendeeManagementPage

