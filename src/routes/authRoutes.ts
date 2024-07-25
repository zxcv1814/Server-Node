import { Router } from 'express';
import { register, login, getUserInfo } from '../controllers/authController';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user/:id', getUserInfo);

export default router;
