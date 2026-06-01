
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailClassAttendeeManagement from '../components/DetailClassAttendeeManagement'
import getDetailClassAttendeeManagement from '../services/getDetailClassAttendeeManagement'

const DetailClassAttendeeManagementPage = props => {
  const { id_attendeemanagement } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailClassAttendeeManagement: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail ClassAttendeeManagement Page")
  }, []);


const [detailClassAttendeeManagement, setDetailClassAttendeeManagement] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailClassAttendeeManagement: true}))
				const { data: detailClassAttendeeManagement } = await getDetailClassAttendeeManagement({ id_attendeemanagement })
				setDetailClassAttendeeManagement(detailClassAttendeeManagement.data)
			} finally {
				setIsLoading(prev => ({...prev, detailClassAttendeeManagement: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/classattendeemanagement
			  	`}>
			  		<Button id="_WMS-wV3HEfGIzuKUdlAhJw" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail ClassAttendeeManagement"}
	singularName={"ClassAttendeeManagement"}
	items={{...detailClassAttendeeManagement}}
	isLoading={isLoading.detailClassAttendeeManagement}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailClassAttendeeManagement {...{ data : { ...detailClassAttendeeManagement }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailClassAttendeeManagementPage

