
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormEditEvent from '../components/ModifiedFormEditEvent'
import getDetailTypeEventCreation from '../services/getDetailTypeEventCreation'

const EditEventCreationPage = props => {
  const { eventId } = useParams()
  const [isLoading, setIsLoading] = useState({
	editEvent: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit EventCreation Page")
  }, []);


const [detailTypeEventCreation, setDetailTypeEventCreation] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editEvent: true}))
      const { data: detailTypeEventCreationResponse } = await getDetailTypeEventCreation({ eventId  })

	  setDetailTypeEventCreation(detailTypeEventCreationResponse.data)
	  setIsLoading(prev => ({...prev, editEvent: false}))
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
		singularName={"Event"}
		isLoading={isLoading.editEvent}
	>
		{detailTypeEventCreation ? 
		(<>
		 <ModifiedFormEditEvent
			{...{ 
				detailTypeEventCreation
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditEventCreationPage

