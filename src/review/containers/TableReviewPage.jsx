
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ReviewTable from "../components/ReviewTable";
import getListReview from '../services/getListReview'

const TableReviewPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableReview: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Review Page")
  }, []);


const [listReview, setListReview] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableReview: true}))
				const { data: listReview } = await getListReview()
				setListReview(listReview.data)
			} finally {
				setIsLoading(prev => ({...prev, tableReview: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/review/add
			  	`}>
			  		<Button id="_t4vo8F8uEfGropGdd4B6sg" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Review"}
	singularName={"Review"}
	items={[listReview]}
	isLoading={isLoading.tableReview}
>
	<ReviewTable
		listReview={listReview}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableReviewPage

