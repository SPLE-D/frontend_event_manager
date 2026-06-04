
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const DetailReviewAnonymous = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusReviewAnonymous, setShowModalKonfirmasiHapusReviewAnonymous] = React.useState(false); 
  
  
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
        ,        {
                  id: "anonymous",
                  condition: "",
                  label: "Anonymous",
                  featureName: "anonymous",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_uACjo18uEfGropGdd4B6sg"
            variant="secondary"
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusReviewAnonymous}
           title={"Konfirmasi Hapus ReviewAnonymous"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusReviewAnonymous(false)}>Batal</Button></Link>
        </Modal>
        
      ]}
    />
  );
};

export default DetailReviewAnonymous;
