import { errorHandler } from "../middleware/errorHandler";
import { CartService } from "../services/cart.service"
import { Request, Response,NextFunction } from 'express';

import { UserService } from '../services/user.service';

export class CartController{

    private cartService:CartService
    private userService:UserService

    constructor(){
        this.cartService=new CartService()
        this.userService = new UserService()

        this.addProduct=this.addProduct.bind(this)
        this.deleteProduct=this.deleteProduct.bind(this)
        this.clearCart=this.clearCart.bind(this)
        this.getCart=this.getCart.bind(this)
       
    }

    public async getCart(req:Request,res:Response,next:NextFunction){
        try {
            const authHeader = req.headers['authorization'];
            const userID= await this.userService.getUserId(authHeader)

            const userCart=await this.cartService.getCartDetails(userID)

            res.status(200).json(userCart)

        } catch (err:any) {
             errorHandler(err,req,res,next)
        }
    }
    

    public async addProduct(req:Request,res:Response,next:NextFunction){

        try {
            const authHeader = req.headers['authorization'];
            const {productId,qnt} = req.body
            console.log("this is req.body:",req.body);
    
            const userID= await this.userService.getUserId(authHeader)
            const newCart = await this.cartService.addProductToCart(userID,productId,qnt)

            res.status(200).json({message:"Product added to cart success", cart:newCart })
            
        } catch (err:any) {
            errorHandler(err,req,res,next)
        }

    }
    public async deleteProduct(req:Request,res:Response,next:NextFunction){

        try {

            const {userID,productID} = req.body

            const newCart = await this.cartService.deleteProductFromCart(userID,productID)

            res.status(200).json({message:"Product deleted from cart success", cart:newCart })
            
        } catch (err:any) {
            errorHandler(err,req,res,next)
        }

    }
    public async clearCart(req:Request,res:Response,next:NextFunction){

        try {

            const {userID} = req.body
    
            
            const newCart = await this.cartService.deleteAllitemsFromCart(userID)

            res.status(200).json({message:"Cart cleared", cart:newCart })
            
        } catch (err:any) {
            errorHandler(err,req,res,next)
        }

    }

    
}