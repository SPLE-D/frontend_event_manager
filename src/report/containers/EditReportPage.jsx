
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditReport from '../components/FormEditReport'
import getReportData from '../services/getReportData'

const EditReportPage = props => {
  const { id_report } = useParams()
  const [isLoading, setIsLoading] = useState({
	editReport: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Report Page")
  }, []);


const [reportData, setReportData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editReport: true}))
      const { data: reportDataResponse } = await getReportData({  })

	  setReportData(reportDataResponse.data)
	  setIsLoading(prev => ({...prev, editReport: false}))
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
		isLoading={isLoading.editReport}
	>
		{reportData ? 
		(<>
		 <FormEditReport
			{...{ 
				reportData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditReportPage

