import ProfileController from '../controllers/ProfileController';
import * as Express from 'express';
import { Express as IExpress } from 'express';

const profileController = new ProfileController();

export default (publicApi: Express.Router, privateApi: Express.Router) => {
    privateApi.route('/updateaccount').post(profileController.updateProfile);
    privateApi.route('/upload').post(profileController.upload);
    privateApi.route('/getallusers').get(profileController.getAllUsers);
    publicApi.route('/profile/:profile_sub').get(profileController.getProfile);
    publicApi.route('/profile/getprofilebyemail/:email').get(profileController.getProfileByEmail);
    }