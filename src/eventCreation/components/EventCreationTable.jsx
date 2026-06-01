
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
import getDetailEventCreation from '../services/getDetailEventCreation'
import deleteEventCreation from '../services/deleteEventCreation'
import * as Layouts from "@/commons/layouts";	
const EventCreationTable = ({ 
    listEventCreation}) => {
  const { checkPermission } = useAuth();
  const [selectedDeleteEventCreation, setSelectedDeleteEventCreation] = React.useState(null);
  const navigate = useNavigate();
  const detail = async (eventCreationItem) => {
    isMobile() && navigate(`/eventcreation/${eventCreationItem.eventId}`
    );
  };
  const [showModalDeleteEventCreation, setShowModalDeleteEventCreation] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [detailEventCreation, setDetailEventCreation] = React.useState()
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
    deleteEventCreation({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/eventcreation`)
  	notifySuccess(`Delete EventCreation berhasil!`);
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
  			const { data: detailEventCreation } = await getDetailEventCreation({ 
  eventId :  selectedDeleteEventCreation?.eventId
  })
  			setDetailEventCreation(detailEventCreation.data)
  				reset(detailEventCreation.data)
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
  	  items={[listEventCreation]}
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
  ]}
        itemsEvents={(eventCreationItem) => [
          <Link to={`/eventcreation/${eventCreationItem.eventId}`}>
            <Button
              id="_O1YAsFOkEfGdleAigTRmcg"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/eventcreation/${eventCreationItem.eventId}/edit`}>
    <Button
      id="_C3UrMF0kEfGopNoBf7UyRw"
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
      id="_eG1-QF0pEfGopNoBf7UyRw"
      size="sm"
      variant=
                  "secondary"
      onClick={() => {
        setSelectedDeleteEventCreation(eventCreationItem);
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
  			  {detailEventCreation && (
  				 <div className="grid grid-cols-1  gap-6">
  				  <Layouts.FormModalLayout
  					  onSubmit={handleSubmit(remove)}
  				
  				    vas={[
  					  ]}
  				
  					  formFields={[
  					  
  				
  					  ]}
  				
  					  itemsEvents={[
  					    <Button id="_NsaWsF0qEfGopNoBf7UyRw" key="Remove" type="submit" variant="primary">Remove</Button>
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

export default EventCreationTable;
