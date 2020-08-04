import { Request, Response } from 'express';
import {addAmountPledged} from '../mongoQueries'

class PaymentController {
    constructor() {
    }
    public payment = async (req: Request, res: Response) => {
        // Set your secret key. Remember to switch to your live secret key in production!
        // See your keys here: https://dashboard.stripe.com/account/apikeys
        let amountPledged = req.body.amount;
        let projectID = req.body.projectID;
        let backerID = req.body.backerID;
        let optionKey = req.body.optionKey;
<<<<<<< HEAD
        const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
=======
        const stripe = require('stripe')(process.env.STRIPE_KEY);
>>>>>>> 6832fe0bfbc1bad3df70441423bf8e0e4ddc4aa7
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountPledged,
            currency: 'gbp',
            payment_method_types: ['card'],
        });
        addAmountPledged(projectID, amountPledged, backerID, optionKey);
        res.send({client_secret: paymentIntent.client_secret});
    }
}

export default PaymentController