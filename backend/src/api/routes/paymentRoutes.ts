import PaymentController from '../controllers/PaymentController';
import * as Express from 'express';
import { Express as IExpress } from 'express';

export default (publicApi: Express.Router, privateApi: Express.Router) => {
    const paymentController = new PaymentController();
    privateApi.route('/payment').post(paymentController.payment);
}