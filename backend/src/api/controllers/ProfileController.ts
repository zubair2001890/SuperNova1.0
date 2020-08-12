import { Request, Response } from 'express'
import { UserAccount } from '../models/UserAccount'
import { getProfileByID } from '../mongoQueries'
import * as jwt_decode from 'jwt-decode'

class ProfileController {
  constructor() {}

  public updateProfile = async (req: Request, res: Response) => {
    const userId = jwt_decode(
      req.header('Authorization').replace('Bearer ', '')
    ).sub

    UserAccount.findOne({ id: userId }, async (err, user) => {
      if (err) {
        console.log(err)
        return
      }

      let update = Object.assign({}, req.body)

      if (!user) {
        update.id = userId
        const newProfile = new UserAccount(update)
        await newProfile.save()

        res.send(update)
      } else {
        update = Object.assign(user, update)
        UserAccount.findOneAndUpdate({ id: userId }, update, (err, result) => {
          if (err) {
            console.log(err)
            res.send({})
          } else {
            res.send(update)
          }
        })
      }
    })
  }

  public getProfile = async (req: Request, res: Response) => {
    const user = await UserAccount.findOne({ id: req.params.profile_sub })
      .lean()
      .exec()
    res.json(user || {})
  }
}

export default ProfileController
