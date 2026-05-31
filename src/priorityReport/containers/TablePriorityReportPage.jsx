
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import PriorityReportTable from "../components/PriorityReportTable";
import getListPriorityReport from '../services/getListPriorityReport'

const TablePriorityReportPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tablePriorityReport: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table PriorityReport Page")
  }, []);


const [listPriorityReport, setListPriorityReport] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tablePriorityReport: true}))
				const { data: listPriorityReport } = await getListPriorityReport()
				setListPriorityReport(listPriorityReport.data)
			} finally {
				setIsLoading(prev => ({...prev, tablePriorityReport: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/priorityreport/add
			  	`}>
			  		<Button id="_pl_8gFUCEfGWdYor1mwsjg" className="p-2" variant="primary">
			  		  Add PriorityReport
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table PriorityReport"}
	singularName={"PriorityReport"}
	items={[listPriorityReport]}
	isLoading={isLoading.tablePriorityReport}
>
	<PriorityReportTable
		listPriorityReport={listPriorityReport}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TablePriorityReportPage

