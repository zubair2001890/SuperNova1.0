import { Request, Response } from 'express';
import {addAmountPledged} from '../mongoQueries'
import * as jwt_decode from 'jwt-decode';

class PaymentController {
    constructor() {
    }
    public payment = async (req: Request, res: Response) => {
        console.log(req.body);
        //const backerId = jwt_decode(req.header('Authorization').replace('Bearer ', '')).sub;
        // Set your secret key. Remember to switch to your live secret key in production!
        // See your keys here: https://dashboard.stripe.com/account/apikeys
        let amountPledged = req.body.amount;
<<<<<<< HEAD
        /*let projectID = req.body.projectID;
        let backerID = req.body.backerID;
        let optionKey = req.body.optionKey;
        */
        const stripe = require('stripe')(process.env.STRIPE_KEY);
=======
        let projectID = req.body.projectID;
        const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
>>>>>>> 1bfb89267de5775c870ab2aacac07d1fa6b9c9cd
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountPledged,
            currency: 'gbp',
            payment_method_types: ['card'],
        });
<<<<<<< HEAD
        //addAmountPledged(projectID, amountPledged, backerID, optionKey);
=======
        addAmountPledged(projectID, amountPledged, "Joe Bloggs"); // 
>>>>>>> 1bfb89267de5775c870ab2aacac07d1fa6b9c9cd
        res.send({client_secret: paymentIntent.client_secret});
        
    }
}

export default PaymentController