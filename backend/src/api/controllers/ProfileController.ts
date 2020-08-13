import { Request, Response } from "express";
import { UserAccount } from "../models/UserAccount";
import * as jwt_decode from "jwt-decode";
import { S3 } from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import { getProfileByID } from "../mongoQueries";

class ProfileController {
  public updateProfile = async (req: Request, res: Response) => {
    const userId = jwt_decode(
      req.header("Authorization").replace("Bearer ", "")
    ).sub;

    UserAccount.findOne({ id: userId }, async (err, user) => {
      if (err) {
        console.log(err);
        return;
      }

      let update = Object.assign({}, req.body);

      if (!user) {
        update.id = userId;
        const newProfile = new UserAccount(update);
        await newProfile.save();

        res.send(update);
      } else {
        update = Object.assign(user, update);
        UserAccount.findOneAndUpdate({ id: userId }, update, (err, result) => {
          if (err) {
            console.log(err);
            res.send({});
          } else {
            res.send(update);
          }
        });
      }
    });
  };

  public getAllUsers = async (req: Request, res: Response) => {
    const userId = jwt_decode(
      req.header("Authorization").replace("Bearer ", "")
    ).sub;
    let userProfile = null;
    try
    {
      userProfile = await getProfileByID(userId);
      if (userProfile.isAdmin) {
        res.json(UserAccount.find({}));
      }
    }
    catch (err)
    {
      console.log(err);
    }
  }

  public getProfile = async (req: Request, res: Response) => {
    const user = await UserAccount.findOne({ id: req.params.profile_sub })
      .lean()
      .exec();
    res.json(user || {});
  };

  public upload = async (req: Request, res: Response) => {
    const userId = jwt_decode(
      req.header("Authorization").replace("Bearer ", "")
    ).sub;
    const s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    });
    const key = `${userId}/${uuidv4()}.` + req.body.extension;
    s3.getSignedUrl(
      "putObject",
      {
        Bucket: process.env.AWS_BUCKET_NAME,
        ContentType: req.body.contentType,
        Key: key,
      },
      (err, url) => res.send({ key, url })
    );
  };
}

export default ProfileController;
