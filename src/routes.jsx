import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import checkInRoutes from "@/checkIn/routes";
import eventCreationRoutes from "@/eventCreation/routes";
import notificationRoutes from "@/notification/routes";
import reviewRoutes from "@/review/routes";
import anonymousReviewRoutes from "@/anonymousReview/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...checkInRoutes, 
	...eventCreationRoutes, 
	...notificationRoutes, 
	...reviewRoutes, 
	...anonymousReviewRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
