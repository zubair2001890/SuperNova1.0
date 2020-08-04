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
        const stripe = require('stripe')(process.env.STRIPE_KEY);
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