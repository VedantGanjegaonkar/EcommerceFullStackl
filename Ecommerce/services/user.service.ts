import {Cart, User,Role} from "../models/index"
import { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userValidationSchema from "../yup/user.yup"

import {NotFoundError, ValidationError, UnauthorizedError } from '../utils/errors';
import { ICart } from "../models/cart.model";
import { IUser } from "../models/user.model";
import yup from "yup"

interface CreateUserParams {
    username: string;
    email: string;
    password: string;
    role: Schema.Types.ObjectId;
}

export class UserService {
   
    public async findUserByEmail(email: string) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new NotFoundError('Email not found');
        }
        return user;
    }
    
    public async validatePassword(password: string, hashedPassword: string) {
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);
        if (!isPasswordValid) {
            throw new UnauthorizedError('Invalid password');
        }
        return isPasswordValid;
    }
    
    public  generateAuthToken(userId: string, role: Schema.Types.ObjectId): string {
        return jwt.sign({ userId, role }, 'secret', { expiresIn: '10h' });
    }

    public async createUser(params: CreateUserParams) {

        
            const { username, email, password, role } = params;

            const roleDoc = await Role.findOne({ _id: role });
        if (!roleDoc) {
            throw new NotFoundError('Role not found');
        }
    
            // Check if the email is already registered
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                throw new ValidationError('Email is already registered');
            }

           const val= await userValidationSchema.validate(params, { abortEarly: false });
            console.log("this is val ",val);
            
    
    
            const hashedPassword = await bcrypt.hash(password, 10);
    
            // Create a new user
            const newUser = new User({ username, email, password:hashedPassword, role });
            await newUser.save();
            return newUser;
            
        

    }

    public async createCart(id:Schema.Types.ObjectId):Promise<ICart>{

        const newCart = new Cart({user:id})
       
        if(!newCart){
            throw new NotFoundError('cart not created');
        }
        await newCart.save()

        return newCart

    }

    public async getUserId(authHeader:string|undefined):Promise<string>{

        if (!authHeader) {
            throw new NotFoundError("header not found")
           
        }

        const user =   jwt.verify(authHeader, 'secret') as { userId: string; role: string; iat: number; exp: number; };
        if (!user) {
            throw new NotFoundError("user not found (FORBIDEN)")
        }

        const userID = user.userId
        return userID

    }

    
public async getUserById(userID:string):Promise<IUser> {

    const user = await User.findById(userID)

    if(!user){
        throw new NotFoundError("user not found")
    }
    return user

}

}