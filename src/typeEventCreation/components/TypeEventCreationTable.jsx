
import React from 'react';
import { Link } from "react-router";
import { useNavigate, useSearchParams } from "react-router"
import { useAuth } from '@/commons/auth';
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Form,
  InputField,
  SelectionField,
  MultiSelectionField,
  VisualizationAttr,
  Spinner,
  Modal,
} from "@/commons/components";
import { isMobile } from '@/commons/utils/responsive';
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import getDetailTypeEventCreation from '../services/getDetailTypeEventCreation'
import deleteTypeEventCreation from '../services/deleteTypeEventCreation'
import * as Layouts from "@/commons/layouts";	
const TypeEventCreationTable = ({ 
    listTypeEventCreation}) => {
  const { checkPermission } = useAuth();
  const [selectedDeleteEventCreation, setSelectedDeleteEventCreation] = React.useState(null);
  const navigate = useNavigate();
  const detail = async (typeEventCreationItem) => {
    isMobile() && navigate(`/TypeEventCreation/${typeEventCreationItem.eventId}`
    );
  };
  const [showModalDeleteEventCreation, setShowModalDeleteEventCreation] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [detailTypeEventCreation, setDetailTypeEventCreation] = React.useState()
  const formatCurrency = (amount) => {
  	return new Intl.NumberFormat("id-ID", {
  	style: "currency",
  	currency: "IDR",
  	}).format(amount);
  };
  const { 
    control, 
    handleSubmit,
    reset
  } = useForm()
  
  
  
  
  
  
  
  
  const remove = (data) => {
    const cleanData = cleanFormData(data)
    deleteTypeEventCreation({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/TypeEventCreation`)
  	notifySuccess(`Delete TypeEventCreation berhasil!`);
  	setShowModalDeleteEventCreation(false)
  	setTimeout(() => {
        window.location.reload();
      }, 500);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  React.useEffect(() => {
  if( showModalDeleteEventCreation && selectedDeleteEventCreation){
  	const fetchData = async () => {
  		try {
  			setIsLoading(prev => ({...prev, deleteEventCreation: true}))
  			const { data: detailTypeEventCreation } = await getDetailTypeEventCreation({ 
  eventId :  selectedDeleteEventCreation?.eventId
  })
  			setDetailTypeEventCreation(detailTypeEventCreation.data)
  				reset(detailTypeEventCreation.data)
  		} finally {
  			setIsLoading(prev => ({...prev, deleteEventCreation: false}))
  		}
  	}
  	fetchData();
  }
  }, [showModalDeleteEventCreation,selectedDeleteEventCreation]);
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listTypeEventCreation]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "eventId",
            condition: "",
            label: "eventId",
            featureName: "eventId",
            editable: false
          }
  ,        {
            id: "startDate",
            condition: "",
            label: "startDate",
            featureName: "startDate",
            editable: false
          }
  ,        {
            id: "endDate",
            condition: "",
            label: "endDate",
            featureName: "endDate",
            editable: false
          }
  ,        {
            id: "capacity",
            condition: "",
            label: "capacity",
            featureName: "capacity",
            editable: false
          }
  ,        {
            id: "name",
            condition: "",
            label: "name",
            featureName: "name",
            editable: false
          }
  ,        {
            id: "location",
            condition: "",
            label: "location",
            featureName: "location",
            editable: false
          }
  ,        {
            id: "eventType",
            condition: "",
            label: "eventType",
            featureName: "eventType",
            editable: false
          }
  ]}
        itemsEvents={(typeEventCreationItem) => [
          <Link to={`/TypeEventCreation/${typeEventCreationItem.eventId}`}>
            <Button
              id="_YihtAF0cEfGlIqyqqwXUBA"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/TypeEventCreation/${typeEventCreationItem.eventId}/edit`}>
    <Button
      id="_89LmMF1eEfG6NcC2Whr9Cg"
      size="sm"
      variant=
          "primary"
    >
      Edit
    </Button>
  </Link>
  ,
          <Link to=''>
    <Button
      id="_HNSVUF1lEfGmYLPV3LQ--Q"
      size="sm"
      variant=
                  "secondary"
      onClick={() => {
        setSelectedDeleteEventCreation(typeEventCreationItem);
        setShowModalDeleteEventCreation(true);
      }}
    >
      Delete
    </Button>
  </Link>
        ]}
  	/>
  		<Modal
  		isShow={showModalDeleteEventCreation}
  		title={"Delete EventCreation"}
  		>
  		{ 
  		    isLoading.deleteEventCreation  ? (
  		    <div className="flex justify-center items-center h-full">
  		      <Spinner />
  		    </div>
  		  ) : (
  		 	 <>
  			  {detailTypeEventCreation && (
  				 <div className="grid grid-cols-1  gap-6">
  				  <Layouts.FormModalLayout
  					  onSubmit={handleSubmit(remove)}
  				
  				    vas={[
  					  ]}
  				
  					  formFields={[
  					  
  				
  					  ]}
  				
  					  itemsEvents={[
  					    <Button id="_yzT5kF1mEfGmYLPV3LQ--Q" key="Remove" type="submit" variant="primary">Remove</Button>
  				,
  					  <Link className={`w-full`}  to=''><Button id="batal" className={`w-full`} variant="tertiary" onClick={() => setShowModalDeleteEventCreation(false)}>Batal</Button></Link>
  				    ]}
  				  />
  		    	</div>
  				)}
  			 </>
  		  )
  		}
  		
  		
  		</Modal>,
  </>
  )
};

export default TypeEventCreationTable;
