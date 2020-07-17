import { Request, Response } from 'express';
import {getFeaturedProject} from '../mongoQueries'

class UserInteractionsController {
    constructor() {
    }
  
    public featured = async (req: Request, res: Response) => {
      const featuredProject = await getFeaturedProject();
      res.send(featuredProject);
    }

    public featured = 
  }
  
export default UserInteractionsController;