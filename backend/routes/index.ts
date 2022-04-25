import { NextFunction, Request, Response,Router } from 'express'
const router:Router = Router();

/* GET home page. */
router.get('/', function(_req:Request, res:Response, _next:NextFunction):void {
  res.render('index', { title: 'Express' });
});

export { router };