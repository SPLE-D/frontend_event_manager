
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailReport from '../components/DetailReport'
import getDetailReport from '../services/getDetailReport'

const DetailReportPage = props => {
  const { id_report } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailReport: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Report Page")
  }, []);


const [detailReport, setDetailReport] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailReport: true}))
				const { data: detailReport } = await getDetailReport({  })
				setDetailReport(detailReport.data)
			} finally {
				setIsLoading(prev => ({...prev, detailReport: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/report
			  	`}>
			  		<Button id="_V88UOF3HEfGIzuKUdlAhJw" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Report"}
	singularName={"Report"}
	items={{...detailReport}}
	isLoading={isLoading.detailReport}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailReport {...{ data : { ...detailReport }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailReportPage

