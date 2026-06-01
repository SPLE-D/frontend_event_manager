
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ReportTable from "../components/ReportTable";
import getListReport from '../services/getListReport'

const TableReportPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableReport: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Report Page")
  }, []);


const [listReport, setListReport] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableReport: true}))
				const { data: listReport } = await getListReport()
				setListReport(listReport.data)
			} finally {
				setIsLoading(prev => ({...prev, tableReport: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/report/add
			  	`}>
			  		<Button id="_V88UPV3HEfGIzuKUdlAhJw" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Report"}
	singularName={"Report"}
	items={[listReport]}
	isLoading={isLoading.tableReport}
>
	<ReportTable
		listReport={listReport}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableReportPage

