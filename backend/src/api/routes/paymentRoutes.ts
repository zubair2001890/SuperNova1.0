import PaymentController from '../controllers/PaymentController';
import * as Express from 'express';
import { Express as IExpress } from 'express';

export default (publicApi: Express.Router, privateApi: Express.Router) => {
    const paymentController = new PaymentController();
<<<<<<< HEAD
    privateApi.route('/payment').post(paymentController.payment);
=======
    publicApi.route('/payment').post(paymentController.payment);
>>>>>>> 86164e3b8c9125e188061fb0af886930bfd0c43e
}