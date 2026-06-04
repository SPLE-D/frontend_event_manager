
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormAddReport from '../components/FormAddReport'
import getEventListData from '../services/getEventListData'

const AddReportPage = props => {
  const [isLoading, setIsLoading] = useState({
	addReport: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add Report Page")
  }, []);


const [eventListData, setEventListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addReport: true}))
      const { data: eventListDataResponse } = await getEventListData({  })

	  setEventListData(eventListDataResponse.data)
	  setIsLoading(prev => ({...prev, addReport: false}))
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
		singularName={"Report"}
		isLoading={isLoading.addReport}
	>
		{eventListData ? 
		(<>
		 <FormAddReport
			{...{ 
				eventListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddReportPage

