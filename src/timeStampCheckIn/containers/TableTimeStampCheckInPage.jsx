
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import TimeStampCheckInTable from "../components/TimeStampCheckInTable";
import gettimestampcheckin from '../services/gettimestampcheckin'

const TableTimeStampCheckInPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableTimeStampCheckIn: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table TimeStampCheckIn Page")
  }, []);


const [timestampcheckin, settimestampcheckin] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableTimeStampCheckIn: true}))
				const { data: timestampcheckin } = await gettimestampcheckin()
				settimestampcheckin(timestampcheckin.data)
			} finally {
				setIsLoading(prev => ({...prev, tableTimeStampCheckIn: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/timestampcheckin/add
			  	`}>
			  		<Button id="_V0hYmF1yEfGDTcMRWoUIdw" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table TimeStampCheckIn"}
	singularName={"TimeStampCheckIn"}
	items={[timestampcheckin]}
	isLoading={isLoading.tableTimeStampCheckIn}
>
	<TimeStampCheckInTable
		timestampcheckin={timestampcheckin}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableTimeStampCheckInPage

