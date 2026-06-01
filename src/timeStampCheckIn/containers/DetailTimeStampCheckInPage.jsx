
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailTimeStampCheckIn from '../components/DetailTimeStampCheckIn'
import getDetailTimeStampCheckIn from '../services/getDetailTimeStampCheckIn'

const DetailTimeStampCheckInPage = props => {
  const { id_checkin } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailTimeStampCheckIn: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail TimeStampCheckIn Page")
  }, []);


const [detailTimeStampCheckIn, setDetailTimeStampCheckIn] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailTimeStampCheckIn: true}))
				const { data: detailTimeStampCheckIn } = await getDetailTimeStampCheckIn({ checkInId: id_checkin })
				setDetailTimeStampCheckIn(detailTimeStampCheckIn.data)
			} finally {
				setIsLoading(prev => ({...prev, detailTimeStampCheckIn: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/timestampcheckin
			  	`}>
			  		<Button id="_V0j00V1yEfGDTcMRWoUIdw" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail TimeStampCheckIn"}
	singularName={"TimeStampCheckIn"}
	items={{...detailTimeStampCheckIn}}
	isLoading={isLoading.detailTimeStampCheckIn}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailTimeStampCheckIn {...{ data : { ...detailTimeStampCheckIn }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailTimeStampCheckInPage

