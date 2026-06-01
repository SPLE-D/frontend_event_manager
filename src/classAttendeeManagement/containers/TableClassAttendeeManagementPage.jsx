
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ClassAttendeeManagementTable from "../components/ClassAttendeeManagementTable";
import getclassattendeemanagement from '../services/getclassattendeemanagement'

const TableClassAttendeeManagementPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableClassAttendeeManagement: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table ClassAttendeeManagement Page")
  }, []);


const [classattendeemanagement, setclassattendeemanagement] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableClassAttendeeManagement: true}))
				const { data: classattendeemanagement } = await getclassattendeemanagement()
				setclassattendeemanagement(classattendeemanagement.data)
			} finally {
				setIsLoading(prev => ({...prev, tableClassAttendeeManagement: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/classattendeemanagement/add
			  	`}>
			  		<Button id="_WMLqCV3HEfGIzuKUdlAhJw" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table ClassAttendeeManagement"}
	singularName={"ClassAttendeeManagement"}
	items={[classattendeemanagement]}
	isLoading={isLoading.tableClassAttendeeManagement}
>
	<ClassAttendeeManagementTable
		classattendeemanagement={classattendeemanagement}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableClassAttendeeManagementPage

