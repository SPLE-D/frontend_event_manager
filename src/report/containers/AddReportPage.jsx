
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormAddReport from '../components/FormAddReport'
import getListEventCreation from "@/eventCreation/services/getListEventCreation";

const AddReportPage = props => {
  const [isLoading, setIsLoading] = useState({
	addReport: false,

  });
  const { setTitle } = useContext(HeaderContext);
  const [eventOptions, setEventOptions] = useState([]);

  useEffect(() => {
	const fetchEvents = async () => {
		const { data } = await getListEventCreation();
		setEventOptions(data.data);
	};

	fetchEvents();
	}, []);

  useEffect(() => {
    setTitle("Add Report Page")
  }, []);

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
		
	>
		<FormAddReport
			{...props}
			eventOptions={eventOptions}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddReportPage

