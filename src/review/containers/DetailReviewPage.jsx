
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailReview from '../components/DetailReview'
import getDetailReview from '../services/getDetailReview'

const DetailReviewPage = props => {
  const { id_review } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailReview: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Review Page")
  }, []);


const [detailReview, setDetailReview] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailReview: true}))
				const { data: detailReview } = await getDetailReview({  })
				setDetailReview(detailReview.data)
			} finally {
				setIsLoading(prev => ({...prev, detailReview: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/review
			  	`}>
			  		<Button id="_WEIhW13HEfGIzuKUdlAhJw" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Review"}
	singularName={"Review"}
	items={{...detailReview}}
	isLoading={isLoading.detailReview}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailReview {...{ data : { ...detailReview }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailReviewPage

