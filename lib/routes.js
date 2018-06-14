import { checkJWT, checkAgainstSwagger } from './middleware/express';
import accountRouter from './api/account';

export default function (app) {
  // Routes
  app.use('/api/account', checkJWT, checkAgainstSwagger, accountRouter);

  // 404 sinkhole
  app.route('/*')
    .all((req, res) => {
      res.sendStatus(404);
    });
}
