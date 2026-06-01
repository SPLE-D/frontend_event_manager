
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormAddClassAttendeeManagement from '../components/ModifiedFormAddClassAttendeeManagement'

const AddClassAttendeeManagementPage = props => {
  const [isLoading, setIsLoading] = useState({
	addClassAttendeeManagement: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add ClassAttendeeManagement Page")
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
		singularName={"ClassAttendeeManagement"}
		
	>
		<ModifiedFormAddClassAttendeeManagement
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddClassAttendeeManagementPage

