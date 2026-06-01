
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormAddCheckIn from '../components/FormAddCheckIn'
import getAttendeeListData from '../services/getAttendeeListData'

const AddCheckInPage = props => {
  const [isLoading, setIsLoading] = useState({
	addCheckIn: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add CheckIn Page")
  }, []);


const [attendeeListData, setAttendeeListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addCheckIn: true}))
      const { data: attendeeListDataResponse } = await getAttendeeListData({  })

	  setAttendeeListData(attendeeListDataResponse.data)
	  setIsLoading(prev => ({...prev, addCheckIn: false}))
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
		isLoading={isLoading.addCheckIn}
	>
		{attendeeListData ? 
		(<>
		 <FormAddCheckIn
			{...{ 
				attendeeListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddCheckInPage

