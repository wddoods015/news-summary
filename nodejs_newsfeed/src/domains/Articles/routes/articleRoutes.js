import express from 'express';
import { getArticles, getArticlesHeadline,getArticlesCategory } from '../controllers/articleController.js';

const router = express.Router();

router.get('/category/:keyword', getArticlesCategory);
router.get('/:keyword', getArticles);
router.get('/', getArticlesHeadline);



export default router;
