
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormEditTimeStampCheckIn from '../components/ModifiedFormEditTimeStampCheckIn'
import getTimeStampCheckInData from '../services/getTimeStampCheckInData'
import getAttendeeListData from '../services/getAttendeeListData'

const EditTimeStampCheckInPage = props => {
  const { id_checkin } = useParams()
  const [isLoading, setIsLoading] = useState({
	editTimeStampCheckIn: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit TimeStampCheckIn Page")
  }, []);


const [timeStampCheckInData, setTimeStampCheckInData] = useState()
const [attendeeListData, setAttendeeListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editTimeStampCheckIn: true}))
      const { data: timeStampCheckInDataResponse } = await getTimeStampCheckInData({ checkInId: id_checkin })
      const { data: attendeeListDataResponse } = await getAttendeeListData({  })

	  setTimeStampCheckInData(timeStampCheckInDataResponse.data)
	  setAttendeeListData(attendeeListDataResponse.data)
	  setIsLoading(prev => ({...prev, editTimeStampCheckIn: false}))
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
		isLoading={isLoading.editTimeStampCheckIn}
	>
		{timeStampCheckInData && attendeeListData ? 
		(<>
		 <ModifiedFormEditTimeStampCheckIn
			{...{ 
				timeStampCheckInData,
				attendeeListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditTimeStampCheckInPage

