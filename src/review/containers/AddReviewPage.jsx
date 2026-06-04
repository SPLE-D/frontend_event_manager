
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormAddReview from '../components/FormAddReview'
import getEventListData from '../services/getEventListData'
import getAttendeListData from '../services/getAttendeListData'

const AddReviewPage = props => {
  const [isLoading, setIsLoading] = useState({
	addReview: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add Review Page")
  }, []);


const [eventListData, setEventListData] = useState()
  const [attendeListData, setAttendeListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addReview: true}))
      const { data: eventListDataResponse } = await getEventListData({  })
      const { data: attendeListDataResponse } = await getAttendeListData({  })

	  setEventListData(eventListDataResponse.data)
	  setAttendeListData(attendeListDataResponse.data)
	  setIsLoading(prev => ({...prev, addReview: false}))
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
		singularName={"Review"}
		isLoading={isLoading.addReview}
	>
		{eventListData && attendeListData ? 
		(<>
		 <FormAddReview
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
export default AddReviewPage

