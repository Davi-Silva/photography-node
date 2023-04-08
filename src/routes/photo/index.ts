import { Router } from 'express';

import { getPhoto } from '../../controllers/photo';

const router = Router();

router.get('', getPhoto);

export default router;
