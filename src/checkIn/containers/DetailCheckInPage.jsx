
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailCheckIn from '../components/DetailCheckIn'
import getDetailCheckIn from '../services/getDetailCheckIn'

const DetailCheckInPage = props => {
  const { id_checkin } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailCheckIn: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail CheckIn Page")
  }, []);


const [detailCheckIn, setDetailCheckIn] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailCheckIn: true}))
				const { data: detailCheckIn } = await getDetailCheckIn({ checkInId: id_checkin })
				setDetailCheckIn(detailCheckIn.data)
			} finally {
				setIsLoading(prev => ({...prev, detailCheckIn: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/checkin
			  	`}>
			  		<Button id="_VdbHS11yEfGDTcMRWoUIdw" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail CheckIn"}
	singularName={"CheckIn"}
	items={{...detailCheckIn}}
	isLoading={isLoading.detailCheckIn}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailCheckIn {...{ data : { ...detailCheckIn }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailCheckInPage

