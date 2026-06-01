
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditReview from '../components/FormEditReview'
import getReviewData from '../services/getReviewData'

const EditReviewPage = props => {
  const { id_review } = useParams()
  const [isLoading, setIsLoading] = useState({
	editReview: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Review Page")
  }, []);


const [reviewData, setReviewData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editReview: true}))
      const { data: reviewDataResponse } = await getReviewData({  })

	  setReviewData(reviewDataResponse.data)
	  setIsLoading(prev => ({...prev, editReview: false}))
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
		isLoading={isLoading.editReview}
	>
		{reviewData ? 
		(<>
		 <FormEditReview
			{...{ 
				reviewData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditReviewPage

