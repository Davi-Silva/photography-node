import cors from 'cors';
import { Application, json, urlencoded } from 'express';
import morgan from 'morgan';

import corsOptions from '../config/middlewares/cors';
import { NODE_ENV } from '../constrants/envs';

export default (app: Application): void => {
  app.use(cors(corsOptions));

  app.use(json({ limit: '5mb' }));

  app.use(
    urlencoded({
      extended: false,
    }),
  );

  if (NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
};
