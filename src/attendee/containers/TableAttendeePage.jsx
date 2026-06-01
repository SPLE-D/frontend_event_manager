
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import AttendeeTable from "../components/AttendeeTable";
import getListAttendee from '../services/getListAttendee'

const TableAttendeePage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableAttendee: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Attendee Page")
  }, []);


const [listAttendee, setListAttendee] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableAttendee: true}))
				const { data: listAttendee } = await getListAttendee()
				setListAttendee(listAttendee.data)
			} finally {
				setIsLoading(prev => ({...prev, tableAttendee: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/attendee/add
			  	`}>
			  		<Button id="_SXsCkFz0EfGAHPx_4k6vAQ" className="p-2" variant="primary">
			  		  Add Attendee
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Attendee"}
	singularName={"Attendee"}
	items={[listAttendee]}
	isLoading={isLoading.tableAttendee}
>
	<AttendeeTable
		listAttendee={listAttendee}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableAttendeePage

