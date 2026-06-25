import Subscription from "../models/subscription.model.js"

export const createSubscription = async(req,res,next)=>{
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user.id
        })
        res.status(201).json({
            success: true,
            data: subscription
        })
        
    } catch (error) {
        next(error)
        
    }

}

export const getUserSubscriptions = async(req,res,next)=>{
    
    try {
        if(req.user._id != req.params.id){
            const error = new Error('You are not the owner of this account');
            error.statusCode = 401;
            throw error;

        }
        const subscriptions = await Subscription.find({user: req.params._id});
        res.status(200).json({
            success: true,
            data: subscriptions
        });
        
    } catch (error) {
        next(error)
    }
}

export const getSubscription = async(req,res,next)=>{
    try {
        const subscription = await Subscription.findById(req.params.id).
        populate('user');

        if(!subscription){
            const error = new Error('Unauthorized access')
            error.statusCode= 404
            throw error;
        }
        res.status(200).json({
            success: true,
            data: subscription
        })


    } catch (error) {
        next(error)
        
    }
}

export const deleteSubscription = async(req,res,next)=>{
    try {
        const subscription = await Subscription.findById(req.params.id)

        if(!subscription){
            const error = new Error('Subscription not found');
            error.statusCode = 404;
            throw error;

        }
        if(subscription.user.toString() !==req.user._id.toString()){
            const error = new Error('Unauthorized access');
            error.statusCode = 403;
            throw error;
        }

        await Subscription.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "Subscription deleted successfully"
            
        })
        
    } catch (error) {
        next(error)
        
    }
}

export const updateSubscription = async(req,res,next)=>{
    try {
        const subscription = await Subscription.findById(req.params.id);
        if(!subscription){
            const error = new Error('Subscription not found')
            error.statusCode = 404;
            throw error;
        }

        if(subscription.user.toString() !== req.params._id.toString()){
            const error = new Error('Unauthorized Access');
            error.statusCode = 403;
            throw error;
        }

        const updatedSubscription =
            await Subscription.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );

        res.status(200).json({
            success: true,
            message: updatedSubscription
        })
        
    } catch (error) {
        next(error)
        
    }
}

export const cancelSubscription = async(req,res,next)=>{
    try {
        const subscription = await Subscription.findById(req.params.id);

        if(!subcription){
            const error = new Error('Subscription not found');
            error.statusCode = 404;
            throw error;
        }

        if(subscription.user.toString() !== req.params._id.toString()){
            const error = new Error('Unauthorized access')
            error.statusCode = 403;
            throw error;
        }

        sunscription.status= 'Cancelled';
        await subscription.save()

        res.status(200).json({
            success:true,
            data: subscription
        })
        
    } catch (error) {
        next(error)
        
    }
}

export const getUpcomingRenewals = async (req, res, next) => {
    try {

        const today = new Date();

        const nextSevenDays = new Date();

        nextSevenDays.setDate(
            today.getDate() + 7
        );

        const subscriptions =
            await Subscription.find({
                renewalDate: {
                    $gte: today,
                    $lte: nextSevenDays
                },
                status: 'Active'
            }).populate('user');

        res.status(200).json({
            success: true,
            count: subscriptions.length,
            data: subscriptions
        });

    } catch (error) {
        next(error);
    }
};