
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import NotificationCard from "../components/NotificationCard";
import getListNotification from '../services/getListNotification'

const ListNotificationPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	listNotification: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("List Notification Page")
  }, []);


const [listNotification, setListNotification] = useState()

useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listNotification: true}))
				const { data: listNotification } = await getListNotification()
				setListNotification(listNotification.data)
			} finally {
				setIsLoading(prev => ({...prev, listNotification: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"Notification"}
	singularName={"Notification"}
	items={[listNotification]}
	isLoading={isLoading.listNotification}
>
	<NotificationCard
		listNotification={listNotification}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ListNotificationPage

