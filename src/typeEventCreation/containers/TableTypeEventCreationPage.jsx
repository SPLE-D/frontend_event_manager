
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import TypeEventCreationTable from "../components/TypeEventCreationTable";
import getListTypeEventCreation from '../services/getListTypeEventCreation'

const TableTypeEventCreationPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableTypeEventCreation: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table TypeEventCreation Page")
  }, []);


const [listTypeEventCreation, setListTypeEventCreation] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableTypeEventCreation: true}))
				const { data: listTypeEventCreation } = await getListTypeEventCreation()
				setListTypeEventCreation(listTypeEventCreation.data)
			} finally {
				setIsLoading(prev => ({...prev, tableTypeEventCreation: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/TypeEventCreation/add
			  	`}>
			  		<Button id="_lGFZwF1UEfG1jsIIA6EoYA" className="p-2" variant="primary">
			  		  Add TypeEventCreation
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table TypeEventCreation"}
	singularName={"TypeEventCreation"}
	items={[listTypeEventCreation]}
	isLoading={isLoading.tableTypeEventCreation}
>
	<TypeEventCreationTable
		listTypeEventCreation={listTypeEventCreation}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableTypeEventCreationPage

