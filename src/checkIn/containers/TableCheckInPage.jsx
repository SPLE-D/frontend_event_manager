
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import CheckinTable from "../components/CheckinTable";
import getListCheckIn from '../services/getListCheckIn'

const TableCheckInPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableCheckin: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table CheckIn Page")
  }, []);


const [listCheckIn, setListCheckIn] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCheckin: true}))
				const { data: listCheckIn } = await getListCheckIn()
				setListCheckIn(listCheckIn.data)
			} finally {
				setIsLoading(prev => ({...prev, tableCheckin: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/checkin/add
			  	`}>
			  		<Button id="_thTaME4MEfGk1LLXzSRiFA" className="p-2" variant="primary">
			  		  Add CheckIn
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Checkin"}
	singularName={"Checkin"}
	items={[listCheckIn]}
	isLoading={isLoading.tableCheckin}
>
	<CheckinTable
		listCheckIn={listCheckIn}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableCheckInPage

