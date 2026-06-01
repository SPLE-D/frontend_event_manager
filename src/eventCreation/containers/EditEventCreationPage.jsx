
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditEvent from '../components/FormEditEvent'
import getDetailEventCreation from '../services/getDetailEventCreation'

const EditEventCreationPage = props => {
  const { eventId } = useParams()
  const [isLoading, setIsLoading] = useState({
	editEvent: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit EventCreation Page")
  }, []);


const [detailEventCreation, setDetailEventCreation] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editEvent: true}))
      const { data: detailEventCreationResponse } = await getDetailEventCreation({ eventId  })

	  setDetailEventCreation(detailEventCreationResponse.data)
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
		{detailEventCreation ? 
		(<>
		 <FormEditEvent
			{...{ 
				detailEventCreation
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditEventCreationPage

