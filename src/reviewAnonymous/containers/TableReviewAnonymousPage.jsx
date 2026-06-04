
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ReviewAnonymousTable from "../components/ReviewAnonymousTable";
import getreviewanonymous from '../services/getreviewanonymous'

const TableReviewAnonymousPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableReviewAnonymous: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table ReviewAnonymous Page")
  }, []);


const [reviewanonymous, setreviewanonymous] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableReviewAnonymous: true}))
				const { data: reviewanonymous } = await getreviewanonymous()
				setreviewanonymous(reviewanonymous.data)
			} finally {
				setIsLoading(prev => ({...prev, tableReviewAnonymous: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/reviewanonymous/add
			  	`}>
			  		<Button id="_t_nF018uEfGropGdd4B6sg" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table ReviewAnonymous"}
	singularName={"ReviewAnonymous"}
	items={[reviewanonymous]}
	isLoading={isLoading.tableReviewAnonymous}
>
	<ReviewAnonymousTable
		reviewanonymous={reviewanonymous}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableReviewAnonymousPage

