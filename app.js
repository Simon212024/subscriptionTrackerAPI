import "./cron/subscriptionReminder.cron.js";
import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import authRouter from "./routers/auth.router.js";
import subscriptionRouter from "./routers/subscription.router.js";
import userRouter from "./routers/user.router.js";
import connectToDb from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleWare from "./middlewares/arcjet.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(arcjetMiddleWare);

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/subscriptions', subscriptionRouter);
app.use(errorMiddleware);

app.get('/',(req,res)=>{
    res.send( 'Welcome to our API')

});
await connectToDb();

app.listen(PORT,async()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})

export default app;