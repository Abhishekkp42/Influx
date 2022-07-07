const express = require("express");

const Cart = require("../models/cart.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const cart = await Cart.find()
	.populate("orderId")
	.lean()
	.exec()

    return res.send(cart);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async(req,res)=>{
    try{
        const cart = await Cart.find();

        return res.send(cart);
    }catch(err){
        return res.status(500).send({message: err.message})
    }
    })


module.exports = router;
