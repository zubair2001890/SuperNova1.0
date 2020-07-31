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
        const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountPledged,
            currency: 'gbp',
            payment_method_types: ['card'],
        });
        addAmountPledged(projectID, amountPledged, "Joe Bloggs"); // 
        res.send({client_secret: paymentIntent.client_secret});
    }
}

export default PaymentController