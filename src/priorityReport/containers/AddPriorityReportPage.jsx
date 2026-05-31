
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormAddPriorityReport from '../components/ModifiedFormAddPriorityReport'
import getAddedDataBinding from '../services/getAddedDataBinding'

const AddPriorityReportPage = props => {
  const [isLoading, setIsLoading] = useState({
	addPriorityReport: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add PriorityReport Page")
  }, []);


const [addedDataBinding, setAddedDataBinding] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addPriorityReport: true}))
      const { data: addedDataBindingResponse } = await getAddedDataBinding({  })

	  setAddedDataBinding(addedDataBindingResponse.data)
	  setIsLoading(prev => ({...prev, addPriorityReport: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"PriorityReport"}
		isLoading={isLoading.addPriorityReport}
	>
		{addedDataBinding ? 
		(<>
		 <ModifiedFormAddPriorityReport
			{...{ 
				addedDataBinding
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddPriorityReportPage

