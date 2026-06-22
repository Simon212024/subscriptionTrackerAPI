import { Router } from "express";
import authorise from "../middlewares/auth.middleware.js";
import { getUser, getUsers } from "../controllers/users.controller.js";

const userRouter = Router();

userRouter.get('/',getUsers);

userRouter.get('/:id',authorise,getUser);

userRouter.post('/',(req,res)=>{
    res.send({title: 'CREATE a new user'})
});

userRouter.put('/:id',(req,res)=>{
    res.send({title: 'UPDATE user details'})
});

userRouter.delete('/:id',(req,res)=>{
    res.send({title: 'DELETE user'})
});

export default userRouter;