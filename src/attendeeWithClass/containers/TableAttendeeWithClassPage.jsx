
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import AttendeeWithClassTable from "../components/AttendeeWithClassTable";
import getListAttendeeWithClass from '../services/getListAttendeeWithClass'

const TableAttendeeWithClassPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableAttendeeWithClass: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table AttendeeWithClass Page")
  }, []);


const [listAttendeeWithClass, setListAttendeeWithClass] = useState()

useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableAttendeeWithClass: true}))
				const { data: listAttendeeWithClass } = await getListAttendeeWithClass()
				setListAttendeeWithClass(listAttendeeWithClass.data)
			} finally {
				setIsLoading(prev => ({...prev, tableAttendeeWithClass: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table AttendeeWithClass"}
	singularName={"AttendeeWithClass"}
	items={[listAttendeeWithClass]}
	isLoading={isLoading.tableAttendeeWithClass}
>
	<AttendeeWithClassTable
		listAttendeeWithClass={listAttendeeWithClass}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableAttendeeWithClassPage

