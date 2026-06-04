
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailReviewAnonymous from '../components/DetailReviewAnonymous'
import getDetailReviewAnonymous from '../services/getDetailReviewAnonymous'

const DetailReviewAnonymousPage = props => {
  const { reviewId } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailReviewAnonymous: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail ReviewAnonymous Page")
  }, []);


const [detailReviewAnonymous, setDetailReviewAnonymous] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailReviewAnonymous: true}))
				const { data: detailReviewAnonymous } = await getDetailReviewAnonymous({ reviewId, reviewId })
				setDetailReviewAnonymous(detailReviewAnonymous.data)
			} finally {
				setIsLoading(prev => ({...prev, detailReviewAnonymous: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/reviewanonymous
			  	`}>
			  		<Button id="_t_7O4V8uEfGropGdd4B6sg" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail ReviewAnonymous"}
	singularName={"ReviewAnonymous"}
	items={{...detailReviewAnonymous}}
	isLoading={isLoading.detailReviewAnonymous}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailReviewAnonymous {...{ data : { ...detailReviewAnonymous }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailReviewAnonymousPage

