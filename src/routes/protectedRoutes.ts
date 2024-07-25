import express, { Request, Response } from 'express';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/profile', authenticateToken, (req: Request, res: Response) => {
    if (!req.user) {
        return res.sendStatus(401);
    }
    res.json({
        id: req.user.id,
        username: req.user.username,
        name: req.user.name,
        address: req.user.address,
        email: req.user.email
    });
});

export default router;
