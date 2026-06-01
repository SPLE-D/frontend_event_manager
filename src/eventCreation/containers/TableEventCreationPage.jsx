
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import EventCreationTable from "../components/EventCreationTable";
import getListEventCreation from '../services/getListEventCreation'

const TableEventCreationPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableEventCreation: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table EventCreation Page")
  }, []);


const [listEventCreation, setListEventCreation] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableEventCreation: true}))
				const { data: listEventCreation } = await getListEventCreation()
				setListEventCreation(listEventCreation.data)
			} finally {
				setIsLoading(prev => ({...prev, tableEventCreation: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/eventcreation/add
			  	`}>
			  		<Button id="_VjONUF1yEfGDTcMRWoUIdw" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table EventCreation"}
	singularName={"EventCreation"}
	items={[listEventCreation]}
	isLoading={isLoading.tableEventCreation}
>
	<EventCreationTable
		listEventCreation={listEventCreation}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableEventCreationPage

