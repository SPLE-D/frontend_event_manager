
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormEditReviewAnonymous from '../components/ModifiedFormEditReviewAnonymous'
import getReviewAnonymousData from '../services/getReviewAnonymousData'

const EditReviewAnonymousPage = props => {
  const { reviewId } = useParams()
  const [isLoading, setIsLoading] = useState({
	editReviewAnonymous: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit ReviewAnonymous Page")
  }, []);


const [reviewAnonymousData, setReviewAnonymousData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editReviewAnonymous: true}))
      const { data: reviewAnonymousDataResponse } = await getReviewAnonymousData({ reviewId  })

	  setReviewAnonymousData(reviewAnonymousDataResponse.data)
	  setIsLoading(prev => ({...prev, editReviewAnonymous: false}))
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
		isLoading={isLoading.editReviewAnonymous}
	>
		{reviewAnonymousData ? 
		(<>
		 <ModifiedFormEditReviewAnonymous
			{...{ 
				reviewAnonymousData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditReviewAnonymousPage

