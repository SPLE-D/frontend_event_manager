
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailNotification from '../components/DetailNotification'
import getDetailNotification from '../services/getDetailNotification'

const DetailNotificationPage = props => {
  const { id_notification } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailNotification: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Notification Page")
  }, []);


const [detailNotification, setDetailNotification] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailNotification: true}))
				const { data: detailNotification } = await getDetailNotification({  })
				setDetailNotification(detailNotification.data)
			} finally {
				setIsLoading(prev => ({...prev, detailNotification: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/notification
			  	`}>
			  		<Button id="_VqZMS11yEfGDTcMRWoUIdw" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Notification"}
	singularName={"Notification"}
	items={{...detailNotification}}
	isLoading={isLoading.detailNotification}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailNotification {...{ data : { ...detailNotification }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailNotificationPage

