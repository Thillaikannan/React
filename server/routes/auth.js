import express from 'express';
import auth from '../middleware/auth.js';

import {login,signup} from "../controllers/auth.js";
import { getAllUsers } from '../controllers/allUsers.js';


const router = express.Router();

router.post('/signup',signup);
router.post('/login', login);

router.get('/users',getAllUsers);


export default router;