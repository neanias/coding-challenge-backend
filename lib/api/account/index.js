import express from 'express';

import { login, create, verify } from './controller';

const router = express.Router();

router.post('/login', login);
router.post('/create', create);
router.post('/verify', verify);

export default router;
