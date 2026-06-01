
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailAttendeeManagement from '../components/DetailAttendeeManagement'
import getDetailAttendeeManagement from '../services/getDetailAttendeeManagement'

const DetailAttendeeManagementPage = props => {
  const { id_attendeemanagement } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailAttendeeManagement: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail AttendeeManagement Page")
  }, []);


const [detailAttendeeManagement, setDetailAttendeeManagement] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailAttendeeManagement: true}))
				const { data: detailAttendeeManagement } = await getDetailAttendeeManagement({  })
				setDetailAttendeeManagement(detailAttendeeManagement.data)
			} finally {
				setIsLoading(prev => ({...prev, detailAttendeeManagement: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/attendeemanagement
			  	`}>
			  		<Button id="_UWwmG12yEfGIzuKUdlAhJw" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail AttendeeManagement"}
	singularName={"AttendeeManagement"}
	items={{...detailAttendeeManagement}}
	isLoading={isLoading.detailAttendeeManagement}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailAttendeeManagement {...{ data : { ...detailAttendeeManagement }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailAttendeeManagementPage

