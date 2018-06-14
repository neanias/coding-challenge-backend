import express from 'express';

import { getSpec } from './controller';

const router = express.Router();

router.get('/', getSpec);

export default router;
