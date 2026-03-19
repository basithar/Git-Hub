import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { UserController } from '../controllers/userController';

const router = Router();
const userController = new UserController();

// Registration route
router.post('/register', 
  body('username').isString().notEmpty(),
  body('password').isString().isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await userController.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// Login route
router.post('/login', 
  body('username').isString().notEmpty(),
  body('password').isString().notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const token = await userController.login(req.body);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
);

export default router;