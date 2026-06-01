
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteReview from '../services/deleteReview'
import * as Layouts from "@/commons/layouts";

const DetailReview = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusReview, setShowModalKonfirmasiHapusReview] = React.useState(false); 
  
    const konfirmasi = async () => {
      await deleteReview({
        id_review: data.id_review,
      });
      navigate('/review');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "reviewid",
                  condition: "",
                  label: "Reviewid",
                  featureName: "reviewId",
                }
        ,        {
                  id: "eventid",
                  condition: "",
                  label: "Eventid",
                  featureName: "eventId",
                }
        ,        {
                  id: "attendeeid",
                  condition: "",
                  label: "Attendeeid",
                  featureName: "attendeeId",
                }
        ,        {
                  id: "rating",
                  condition: "",
                  label: "Rating",
                  featureName: "rating",
                }
        ,        {
                  id: "comment",
                  condition: "",
                  label: "Comment",
                  featureName: "comment",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_WEIhTV3HEfGIzuKUdlAhJw"
            variant="secondary"
            onClick={() => setShowModalKonfirmasiHapusReview(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusReview}
           title={"Konfirmasi Hapus Review"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusReview(false)}>Batal</Button></Link>
          <Button
            id="_WEIhUl3HEfGIzuKUdlAhJw"
            variant="secondary"
            onClick={() => konfirmasi()}
          >
            Konfirmasi
          </Button>
        </Modal>
        
      ]}
    />
  );
};

export default DetailReview;
