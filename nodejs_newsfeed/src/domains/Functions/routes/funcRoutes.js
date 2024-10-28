import express from 'express';
import { getSummary } from '../controllers/funcController.js';

const router = express.Router();

router.post('/', getSummary);


export default router;
