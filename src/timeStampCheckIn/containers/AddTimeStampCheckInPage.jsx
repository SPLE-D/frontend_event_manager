
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormAddTimeStampCheckIn from '../components/ModifiedFormAddTimeStampCheckIn'
import getAttendeeListData from '../services/getAttendeeListData'

const AddTimeStampCheckInPage = props => {
  const [isLoading, setIsLoading] = useState({
	addTimeStampCheckIn: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add TimeStampCheckIn Page")
  }, []);

  const [attendeeListData, setAttendeeListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addTimeStampCheckIn: true}))
      const { data: attendeeListDataResponse } = await getAttendeeListData({  })

	  setAttendeeListData(attendeeListDataResponse.data)
	  setIsLoading(prev => ({...prev, addTimeStampCheckIn: false}))
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
		singularName={"TimeStampCheckIn"}
		isLoading={isLoading.addTimeStampCheckIn}
	>
		{attendeeListData ? 
		(<>
		 <ModifiedFormAddTimeStampCheckIn
			{...{ 
				attendeeListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddTimeStampCheckInPage

