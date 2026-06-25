import { Router } from "express";
import authorise from "../middlewares/auth.middleware.js";
import { cancelSubscription, createSubscription, deleteSubscription, getSubscription,
     getUpcomingRenewals,
     getUserSubscriptions, updateSubscription
     } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>{
    res.send({title:'Get all subscriptions'})

});

subscriptionRouter.get('/:id',authorise,getSubscription);

subscriptionRouter.post('/',authorise,createSubscription);
//subscriptionRouter.post('/',createSubscription);


subscriptionRouter.put('/:id',authorise,updateSubscription);

subscriptionRouter.delete('/:id',deleteSubscription);

subscriptionRouter.get('/user/:id',authorise,getUserSubscriptions);

subscriptionRouter.put('/:id/cancel',authorise,cancelSubscription);

subscriptionRouter.get('/upcoming-renewals',getUpcomingRenewals);

export default subscriptionRouter;