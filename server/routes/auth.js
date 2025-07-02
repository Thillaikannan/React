import express from 'express';
import auth from '../middleware/auth.js';

import {login,signup} from "../controllers/auth.js";

const router = express.Router();

router.post('/signup',signup);
router.post('/login', login);


export default router;