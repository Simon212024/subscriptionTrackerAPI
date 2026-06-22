import cron from "node-cron";
import Subscription from "../models/subscription.model.js";
import { sendEmail } from "../utils/sendEmail.utils.js";

cron.schedule("09* * * * *", async () => {
  try {
    console.log("Running subscription reminder job...");

    const subscriptions = await Subscription.find({
      status:"Active"
    })
    
      .populate("user");
    
    

    for (const subscription of subscriptions) {
      const today = new Date();

      const daysLeft = Math.ceil(
        (subscription.renewalDate - today) /
        (1000 * 60 * 60 * 24)
      );

      console.log(
        `${subscription.name}: ${daysLeft} days remaining`
      );
      if(daysLeft<0){
      continue;
    }

      
      if (daysLeft ==3) {
        await sendEmail(
          subscription.user.email,
          "Subscription Renewal Reminder",
          `
Hello ${subscription.user.name},

This is a friendly reminder that your subscription "${subscription.name}" will renew soon.

Subscription Details:
----------------------------------
Subscription Name: ${subscription.name}
Category: ${subscription.category}
Amount: $${subscription.price}
Payment Method: ${subscription.paymentMethod}
Renewal Date: ${subscription.renewalDate.toDateString()}
Status: ${subscription.status}
----------------------------------

Please ensure your payment method is ready to avoid service interruption.

Thank you for using Subscription Tracker.

Best Regards,
Subscription Tracker Team
          `
        );

        console.log(
          `Reminder sent to ${subscription.user.email}`
        );
      }
    }
  } catch (error) {
    console.error("Cron Job Error:", error);
  }
});