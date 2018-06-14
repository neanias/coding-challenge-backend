import { checkJWT, checkAgainstSwagger } from './middleware/express';
import accountRouter from './api/account';
import swaggerRouter from './api/swagger';

export default function (app) {
  // Routes
  app.use('/api/account', checkJWT, checkAgainstSwagger, accountRouter);
  app.use('/api/swagger', swaggerRouter);

  // 404 sinkhole
  app.route('/*')
    .all((req, res) => {
      res.sendStatus(404);
    });
}
