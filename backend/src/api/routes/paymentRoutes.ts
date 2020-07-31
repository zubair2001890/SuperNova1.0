import PaymentController from '../controllers/PaymentController';
import * as Express from 'express';
import { Express as IExpress } from 'express';

export default (publicApi: Express.Router, privateApi: Express.Router) => {
    const paymentController = new PaymentController();
<<<<<<< HEAD
    publicApi.route('/payment').post(paymentController.payment);
=======
    privateApi.route('/payment').post(paymentController.payment);
>>>>>>> e0ff23a36d49cd1b62e9c5eaf71176fdc3b0cc64
}