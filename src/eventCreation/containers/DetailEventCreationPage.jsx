
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailTableEventCreation from '../components/DetailTableEventCreation'
import getDataBinding from '../services/getDataBinding'

const DetailEventCreationPage = props => {
  const { eventId } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailTableEventCreation: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail EventCreation Page")
  }, []);


const [dataBinding, setDataBinding] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailTableEventCreation: true}))
				const { data: dataBinding } = await getDataBinding({ eventId })
				setDataBinding(dataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, detailTableEventCreation: false}))
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
	title={"Detail TableEventCreation"}
	singularName={"TableEventCreation"}
	items={{...dataBinding}}
	isLoading={isLoading.detailTableEventCreation}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailTableEventCreation {...{ data : { ...dataBinding }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailEventCreationPage

