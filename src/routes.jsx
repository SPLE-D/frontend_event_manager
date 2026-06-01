import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import attendeeRoutes from "@/attendee/routes";
import checkInRoutes from "@/checkIn/routes";
import eventCreationRoutes from "@/eventCreation/routes";
import notificationRoutes from "@/notification/routes";
import reportRoutes from "@/report/routes";
import reviewRoutes from "@/review/routes";
import typeEventCreationRoutes from "@/typeEventCreation/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...attendeeRoutes, 
	...checkInRoutes, 
	...eventCreationRoutes, 
	...notificationRoutes, 
	...reportRoutes, 
	...reviewRoutes, 
	...typeEventCreationRoutes, 
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
