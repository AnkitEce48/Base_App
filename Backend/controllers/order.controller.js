import order from '../models/order.js';
import cart from '../models/cart.js';
export const createOrder = async(req,res,next)=>{

    console.log(req.body)
    const{ uId, name, address, pin, paymentmode, state}=req.body.order
    const totalPrice=req.body.totalPrice
            const OrderOfUser = new order({
                uId,
                cart:req.body.cart,
                name,
                address,
                pin,
                state,
                paymentmode,
                totalPrice,
                status:"Placed"
            })
            await OrderOfUser.save();
            await cart.deleteMany({id:uId})
            res.json({status:200,title:"Order placed successfully",price:OrderOfUser.totalPrice})
    }
    
export const orderHistory=async(req,res,next)=>{
    
    try{
        const orderContainer= await order.find({uId:req.params.userId})
        if(!orderContainer){
            return res.status(404).json({message:'Order Not found'})
        }
        return res.status(200).json({status:200,message:'Order',data:orderContainer})
        
    }
    catch(error){
        return res.status(500).json({status:500,message:'Internal Server Error'})
    }
}
export const cancelOrder=async(req,res,next)=>{
    try {
        const id = req.body.orderId;
        const particularOrder = await order.find({_id:req.body.orderId})
        console.log(particularOrder)
        const updatedOrder = await order.findByIdAndUpdate(id, { status: 'Cancelled' }, { new: true });
        const orderContainer= await order.find({uId:req.body.uId})
        if(!orderContainer){
            return res.status(404).json({message:'Order Not found'})
        }
            return res.status(200).json({status:200,message:'Order',data:orderContainer})
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      }
}