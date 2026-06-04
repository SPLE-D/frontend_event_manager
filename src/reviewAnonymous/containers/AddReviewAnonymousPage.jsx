
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormAddReviewAnonymous from '../components/ModifiedFormAddReviewAnonymous'
import getEventListData from '../services/getEventListData'
import getAttendeListData from '../services/getAttendeListData'

const AddReviewAnonymousPage = props => {
  const [isLoading, setIsLoading] = useState({
	addReviewAnonymous: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add ReviewAnonymous Page")
  }, []);


const [eventListData, setEventListData] = useState()
  const [attendeListData, setAttendeListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addReviewAnonymous: true}))
      const { data: eventListDataResponse } = await getEventListData({  })
      const { data: attendeListDataResponse } = await getAttendeListData({  })

	  setEventListData(eventListDataResponse.data)
	  setAttendeListData(attendeListDataResponse.data)
	  setIsLoading(prev => ({...prev, addReviewAnonymous: false}))
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
		singularName={"ReviewAnonymous"}
		isLoading={isLoading.addReviewAnonymous}
	>
		{eventListData && attendeListData ? 
		(<>
		 <ModifiedFormAddReviewAnonymous
			{...{ 
				eventListData
, 				attendeListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddReviewAnonymousPage

