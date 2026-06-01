
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditCheckIn from '../components/FormEditCheckIn'
import getCheckInData from '../services/getCheckInData'

const EditCheckInPage = props => {
  const { id_checkin } = useParams()
  const [isLoading, setIsLoading] = useState({
	editCheckIn: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit CheckIn Page")
  }, []);


const [checkInData, setCheckInData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editCheckIn: true}))
      const { data: checkInDataResponse } = await getCheckInData({  })

	  setCheckInData(checkInDataResponse.data)
	  setIsLoading(prev => ({...prev, editCheckIn: false}))
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
		singularName={"CheckIn"}
		isLoading={isLoading.editCheckIn}
	>
		{checkInData ? 
		(<>
		 <FormEditCheckIn
			{...{ 
				checkInData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditCheckInPage

