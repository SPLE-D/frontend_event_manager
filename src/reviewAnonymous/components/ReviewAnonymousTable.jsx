
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
import getDetailReviewAnonymous from '../services/getDetailReviewAnonymous'
import deleteReviewAnonymous from '../services/deleteReviewAnonymous'
import * as Layouts from "@/commons/layouts";	
const ReviewAnonymousTable = ({ 
    reviewanonymous}) => {
  const { checkPermission } = useAuth();
  const [selectedKonfirmasiHapusReview, setSelectedKonfirmasiHapusReview] = React.useState(null);
  const navigate = useNavigate();
  const detail = async (reviewAnonymousItem) => {
    isMobile() && navigate(`/reviewanonymous/${reviewAnonymousItem.reviewId}`
    );
  };
  const [showModalKonfirmasiHapusReview, setShowModalKonfirmasiHapusReview] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [detailReviewAnonymous, setDetailReviewAnonymous] = React.useState()
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
  
  
  
  
  
  
  
  
  const konfirmasi = (data) => {
    const cleanData = cleanFormData(data)
    deleteReviewAnonymous({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/reviewanonymous`)
  	notifySuccess(`Delete ReviewAnonymous berhasil!`);
  	setShowModalKonfirmasiHapusReview(false)
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
  if( showModalKonfirmasiHapusReview && selectedKonfirmasiHapusReview){
  	const fetchData = async () => {
  		try {
  			setIsLoading(prev => ({...prev, konfirmasiHapusReview: true}))
  			const { data: detailReviewAnonymous } = await getDetailReviewAnonymous({ 
  reviewId :  selectedKonfirmasiHapusReview?.reviewId
  })
  			setDetailReviewAnonymous(detailReviewAnonymous.data)
  				reset(detailReviewAnonymous.data)
  		} finally {
  			setIsLoading(prev => ({...prev, konfirmasiHapusReview: false}))
  		}
  	}
  	fetchData();
  }
  }, [showModalKonfirmasiHapusReview,selectedKonfirmasiHapusReview]);
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[reviewanonymous]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "reviewid",
            condition: "",
            label: "Reviewid",
            featureName: "reviewId",
            editable: false
          }
  ,        {
            id: "eventid",
            condition: "",
            label: "Eventid",
            featureName: "eventId",
            editable: false
          }
  ,        {
            id: "rating",
            condition: "",
            label: "Rating",
            featureName: "rating",
            editable: false
          }
  ,        {
            id: "comment",
            condition: "",
            label: "Comment",
            featureName: "comment",
            editable: false
          }
  ,        {
            id: "anonymous",
            condition: "",
            label: "Anonymous",
            featureName: "anonymous",
            editable: false
          }
  ]}
        itemsEvents={(reviewAnonymousItem) => [
          <Link to={`/reviewanonymous/${reviewAnonymousItem.reviewId}`}>
            <Button
              id="_t_g_MF8uEfGropGdd4B6sg"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to=''>
    <Button
      id="_reviewAnonymousTableDeleteEvent"
      size="sm"
      variant=
                  "secondary"
      onClick={() => {
        setSelectedKonfirmasiHapusReview(reviewAnonymousItem);
        setShowModalKonfirmasiHapusReview(true);
      }}
    >
      Delete
    </Button>
  </Link>
  ,
          <Link to={`/reviewanonymous/${reviewAnonymousItem.reviewId}/edit`}>
    <Button
      id="_t_tMcV8uEfGropGdd4B6sg"
      size="sm"
      variant=
          "primary"
    >
      Edit
    </Button>
  </Link>
        ]}
  	/>
  		<Modal
  		isShow={showModalKonfirmasiHapusReview}
  		title={"Konfirmasi Hapus Review"}
  		>
  		{ 
  		    isLoading.konfirmasiHapusReview  ? (
  		    <div className="flex justify-center items-center h-full">
  		      <Spinner />
  		    </div>
  		  ) : (
  		 	 <>
  			  {detailReviewAnonymous && (
  				 <div className="grid grid-cols-1  gap-6">
  				  <Layouts.FormModalLayout
  					  onSubmit={handleSubmit(konfirmasi)}
  				
  				    vas={[
  					  ]}
  				
  					  formFields={[
  					  
  				
  					  ]}
  				
  					  itemsEvents={[
  					    <Button id="_reviewAnonymousTableDeleteSubmit" key="Konfirmasi" type="submit" variant="primary">Konfirmasi</Button>
  				,
  					  <Link className={`w-full`}  to=''><Button id="batal" className={`w-full`} variant="tertiary" onClick={() => setShowModalKonfirmasiHapusReview(false)}>Batal</Button></Link>
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

export default ReviewAnonymousTable;
