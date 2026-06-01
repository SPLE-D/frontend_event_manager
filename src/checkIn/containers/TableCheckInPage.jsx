
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import CheckInTable from "../components/CheckInTable";
import getListCheckIn from '../services/getListCheckIn'

const TableCheckInPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableCheckIn: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table CheckIn Page")
  }, []);


const [listCheckIn, setListCheckIn] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCheckIn: true}))
				const { data: listCheckIn } = await getListCheckIn()
				setListCheckIn(listCheckIn.data)
			} finally {
				setIsLoading(prev => ({...prev, tableCheckIn: false}))
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
			  		<Button id="_VdbHUF1yEfGDTcMRWoUIdw" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table CheckIn"}
	singularName={"CheckIn"}
	items={[listCheckIn]}
	isLoading={isLoading.tableCheckIn}
>
	<CheckInTable
		listCheckIn={listCheckIn}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableCheckInPage

