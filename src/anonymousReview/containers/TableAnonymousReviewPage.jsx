
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import AnonymousReviewTable from "../components/AnonymousReviewTable";
import getListReview from '../services/getListReview'

const TableAnonymousReviewPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableAnonymousReview: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table AnonymousReview Page")
  }, []);


const [listReview, setListReview] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableAnonymousReview: true}))
				const { data: listReview } = await getListReview()
				setListReview(listReview.data)
			} finally {
				setIsLoading(prev => ({...prev, tableAnonymousReview: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/anonymousreview/add
			  	`}>
			  		<Button id="_o9cN4Fw4EfG_oZ2RSrBgqg" className="p-2" variant="primary">
			  		  Add Anonymous Review
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table AnonymousReview"}
	singularName={"AnonymousReview"}
	items={[listReview]}
	isLoading={isLoading.tableAnonymousReview}
>
	<AnonymousReviewTable
		listReview={listReview}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableAnonymousReviewPage

