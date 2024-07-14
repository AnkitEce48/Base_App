import product from "../models/product.js";

export const showAllScarves = async(req,res, next)=>{
    try{
        const scarves = await product.find({type:"Scarf"})
        
        return res.status(200).json({status:200,message:'All Scarves',data:scarves})
    }
    catch(error){
        return res.status(500).json({message:"Internal Server Error!"}) 
    }
}
export const showAllAccessories = async(req,res, next)=>{
    try{
        const accessories = await product.find({type:"Accessory"})
        console.log(accessories)
        
        return res.status(200).json({status:200,message:'All Accessories',data:accessories})
    }
    catch(error){
        return res.status(500).json({message:"Internal Server Error!"})
    }
}

export const showProduct= async(req,res,next)=>{
    try{
        console.log(req.body)
        const particularProduct= await product.find({_id:req.body.id})
        console.log(particularProduct)
        if(!particularProduct){
            return res.status(404).json({message:"Product Not Found"})
        }
        res.status(200).json({message:'particularProduct', data:particularProduct})
    }
    catch(error){
        res.status(500).json({status:500,message:'Internal Server Error'})
    }
}