
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailAttendee from '../components/DetailAttendee'
import getDataBinding from '../services/getDataBinding'

const DetailAttendeePage = props => {
  const { id_account } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailAttendee: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Attendee Page")
  }, []);


const [dataBinding, setDataBinding] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailAttendee: true}))
				const { data: dataBinding } = await getDataBinding({ id_account })
				setDataBinding(dataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, detailAttendee: false}))
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
<Layouts.DetailContainerLayout
	title={"Detail Attendee"}
	singularName={"Attendee"}
	items={{...dataBinding}}
	isLoading={isLoading.detailAttendee}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailAttendee {...{ data : { ...dataBinding }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailAttendeePage

