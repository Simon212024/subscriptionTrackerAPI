import { Router } from "express";
import authorise from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>{
    res.send({title:'Get all subscriptions'})

});

subscriptionRouter.get('/:id',(req,res)=>{
    res.send({title:'Get a subscription details'})

});

subscriptionRouter.post('/',authorise,createSubscription);
//subscriptionRouter.post('/',createSubscription);


subscriptionRouter.put('/:id',(req,res)=>{
    res.send({title:' Update subscription details'})
});

subscriptionRouter.delete('/:id',(req,res)=>{
    res.send({title:'Delete a subscription'})
});

subscriptionRouter.get('/user/:id',authorise,getUserSubscriptions);

subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send({title:'Cancel a subscription'})

});

subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
    res.send({title:'Get upcoming renewals'})
});

export default subscriptionRouter;