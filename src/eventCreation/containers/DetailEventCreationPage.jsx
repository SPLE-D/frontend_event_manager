
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailEventCreation from '../components/DetailEventCreation'
import getDetailEventCreation from '../services/getDetailEventCreation'

const DetailEventCreationPage = props => {
  const { id_eventcreation } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailEventCreation: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail EventCreation Page")
  }, []);


const [detailEventCreation, setDetailEventCreation] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailEventCreation: true}))
				const { data: detailEventCreation } = await getDetailEventCreation({  })
				setDetailEventCreation(detailEventCreation.data)
			} finally {
				setIsLoading(prev => ({...prev, detailEventCreation: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/eventcreation
			  	`}>
			  		<Button id="_VnwHW13HEfGIzuKUdlAhJw" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail EventCreation"}
	singularName={"EventCreation"}
	items={{...detailEventCreation}}
	isLoading={isLoading.detailEventCreation}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailEventCreation {...{ data : { ...detailEventCreation }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailEventCreationPage

