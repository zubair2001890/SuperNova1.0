import { Request, Response } from 'express';
import {UserAccount} from '../models/UserAccount';
import {getProfileByID} from '../mongoQueries'
import * as jwt_decode from 'jwt-decode';
import AWS from 'aws-sdk';
import uuid from 'uuid/v1';

class ProfileController {
    constructor() {
    }

    public updateProfile = async (req: Request, res: Response) => {
        const userId = jwt_decode(req.header('Authorization').replace('Bearer ', '')).sub;

        UserAccount.findOne({id: userId}, async (err, user)=> {
            if (err) {
                console.log(err);
                return;
            }

            let update = Object.assign({}, req.body)

            if (!user) {
                update.id = userId;
                const newProfile = new UserAccount(update);
                await newProfile.save();

                res.send(update);
            } else {
                update = Object.assign(user, update);
                UserAccount.findOneAndUpdate({id: userId}, update, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.send({});
                    } else {
                        res.send(update);
                    }
                })
            }

        })

    }

    public getProfile = async (req: Request, res: Response) => {
        const profile = await getProfileByID(req.params.profile_sub);
        res.send(profile);
    }

    public upload = async (req: Request, res: Response) => {
        const s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY
        });
        const key = '${req.body.id}/${uuid()}.' + req.body.extension;
        s3.getSignedUrl(
            'putObject',
            {
              Bucket: 'supernova', // The supernova bucket has been created already.
              ContentType: req.body.contentType,
              Key: key
            },
            (err, url) => res.send({ key, url })
          );
        }
    }

export default ProfileController