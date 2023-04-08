import { Router } from 'express';

import { getPhotos } from '../../controllers/photos';

const router = Router();

router.get('', getPhotos);

export default router;
