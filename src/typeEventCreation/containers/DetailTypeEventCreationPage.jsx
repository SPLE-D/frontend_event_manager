
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailTableTypeEventCreation from '../components/DetailTableTypeEventCreation'
import getDetailTypeEventCreation from '../services/getDetailTypeEventCreation'

const DetailTypeEventCreationPage = props => {
  const { eventId } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailTableTypeEventCreation: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail TypeEventCreation Page")
  }, []);


const [detailTypeEventCreation, setDetailTypeEventCreation] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailTableTypeEventCreation: true}))
				const { data: detailTypeEventCreation } = await getDetailTypeEventCreation({ eventId })
				setDetailTypeEventCreation(detailTypeEventCreation.data)
			} finally {
				setIsLoading(prev => ({...prev, detailTableTypeEventCreation: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail TableTypeEventCreation"}
	singularName={"TableTypeEventCreation"}
	items={{...detailTypeEventCreation}}
	isLoading={isLoading.detailTableTypeEventCreation}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailTableTypeEventCreation {...{ data : { ...detailTypeEventCreation }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailTypeEventCreationPage

