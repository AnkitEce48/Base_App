import cart from "../models/cart.js"
 
export const placeCart= async(req, res, next)=>{
    console.log(req.body)
    const placeCart = new cart(
        {
            name:req.body.name,
            price:req.body.price,
            image:req.body.image,
            type:req.body.type,
            id:req.body.id
        }
    )
    console.log(placeCart)
    await placeCart.save();
}
export const showCart= async(req, res)=>{
    // console.log(req.body)
    const fetchCart= await cart.find({id:req.body.id})
    // console.log(fetchCart)
    res.json({status:200,title:"Cart",data:fetchCart})  
}
export const deleteItem = async(req,res)=>{
    console.log(req.params)
    await cart.findByIdAndDelete(req.params.id);
 
    const fetchCart= await cart.find({id:req.params.uId})
    res.json({status:200,title:"Cart",data:fetchCart})  
}