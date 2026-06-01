
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import deleteReview from '../services/deleteReview'
import * as Layouts from "@/commons/layouts";
const ReviewTable = ({ listReview,
		 
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  const [selectedKonfirmasiHapusReview, setSelectedKonfirmasiHapusReview] = React.useState(null);
  const navigate = useNavigate();
  const detail = async (reviewItem) => {
    isMobile() && navigate(`/review/${reviewItem.id_review}`
    );
  };
  const [showModalKonfirmasiHapusReview, setShowModalKonfirmasiHapusReview] = React.useState(false);
  
  const konfirmasi = async (selectedKonfirmasiHapusReview) => {
      await deleteReview({
        id_review: selectedKonfirmasiHapusReview.id_review,
      });
  		navigate('/review');
    }
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listReview]}
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
            id: "attendeeid",
            condition: "",
            label: "Attendeeid",
            featureName: "attendeeId",
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
  ]}
        itemsEvents={(reviewItem) => [
          <Link to={`/review/${reviewItem.id_review}`}>
            <Button
              id="_Vwvr2V1yEfGDTcMRWoUIdw"
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
      id="_Vwvr3V1yEfGDTcMRWoUIdw"
      size="sm"
      variant=
                  "secondary"
      onClick={() => {
        setSelectedKonfirmasiHapusReview(reviewItem);
        setShowModalKonfirmasiHapusReview(true);
      }}
    >
      Delete
    </Button>
  </Link>
  ,
          <Link to={`/review/${reviewItem.id_review}/edit`}>
    <Button
      id="_Vwvr-V1yEfGDTcMRWoUIdw"
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
  		
  				<Link to=''><Button id="batal" className={`w-full`} variant="tertiary" onClick={() => setShowModalKonfirmasiHapusReview(false)}>Batal</Button></Link>
  		
  		<Button
  		  id="_Vwvr4l1yEfGDTcMRWoUIdw"
  		  variant="primary"
  		  onClick={() => konfirmasi(selectedKonfirmasiHapusReview)}
  		>
  		  Konfirmasi
  		</Button>
  		</Modal>,
  </>
  )
};

export default ReviewTable;
