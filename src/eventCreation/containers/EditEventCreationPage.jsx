
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditEventCreation from '../components/FormEditEventCreation'
import getEventCreationData from '../services/getEventCreationData'

const EditEventCreationPage = props => {
  const { id_eventcreation } = useParams()
  const [isLoading, setIsLoading] = useState({
	editEventCreation: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit EventCreation Page")
  }, []);


const [eventCreationData, setEventCreationData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editEventCreation: true}))
      const { data: eventCreationDataResponse } = await getEventCreationData({  })

	  setEventCreationData(eventCreationDataResponse.data)
	  setIsLoading(prev => ({...prev, editEventCreation: false}))
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
		singularName={"EventCreation"}
		isLoading={isLoading.editEventCreation}
	>
		{eventCreationData ? 
		(<>
		 <FormEditEventCreation
			{...{ 
				eventCreationData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditEventCreationPage

