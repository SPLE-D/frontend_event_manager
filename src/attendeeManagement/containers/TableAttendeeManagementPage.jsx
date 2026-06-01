
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import AttendeeManagementTable from "../components/AttendeeManagementTable";
import getListAttendeeManagement from '../services/getListAttendeeManagement'

const TableAttendeeManagementPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableAttendeeManagement: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table AttendeeManagement Page")
  }, []);


const [listAttendeeManagement, setListAttendeeManagement] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableAttendeeManagement: true}))
				const { data: listAttendeeManagement } = await getListAttendeeManagement()
				setListAttendeeManagement(listAttendeeManagement.data)
			} finally {
				setIsLoading(prev => ({...prev, tableAttendeeManagement: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/attendeemanagement/add
			  	`}>
			  		<Button id="_UWwmIF2yEfGIzuKUdlAhJw" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table AttendeeManagement"}
	singularName={"AttendeeManagement"}
	items={[listAttendeeManagement]}
	isLoading={isLoading.tableAttendeeManagement}
>
	<AttendeeManagementTable
		listAttendeeManagement={listAttendeeManagement}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableAttendeeManagementPage

