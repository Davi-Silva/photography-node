import { Application } from 'express';

import photos from './photos';
import photo from './photo';

export default (app: Application) => {
  app.use('/photos', photos);
  app.use('/photo', photo);
};
