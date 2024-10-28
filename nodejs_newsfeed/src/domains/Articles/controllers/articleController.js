import { getArticleByKeyword, getArticleHeadLine, getArticleByCategory } from '../services/articleServices.js';
import response from '../../../class/response.js';
import HttpStatus from '../../../constants/HttpStatus.js';


export const getArticles = async (req,res) => {
	try {
		console.log(`${req.method} ${req.originalUrl}, Called getArticles`);
        const Articles = await getArticleByKeyword(req);

        res.status(HttpStatus.OK.code)
            .send(new response(HttpStatus.OK.code, HttpStatus.OK.status, 'Completed: getArticles Are Found', Articles ));
			
	} catch (error){
        res.status(HttpStatus.NOT_FOUND.code)
            .send(new response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'Error: User Not Found', error ));			
	}
};


export const getArticlesHeadline = async (req,res) => {
	try {
		console.log(`${req.method} ${req.originalUrl}, Called getArticles`);
        const Articles = await getArticleHeadLine(req);

        res.status(HttpStatus.OK.code)
            .send(new response(HttpStatus.OK.code, HttpStatus.OK.status, 'Completed: getArticles Are Found', Articles ));
			
	} catch (error){
        res.status(HttpStatus.NOT_FOUND.code)
            .send(new response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'Error: User Not Found', error ));			
	}
};


export const getArticlesCategory = async (req,res) => {
	try {
		console.log(`${req.method} ${req.originalUrl}, Called getArticles`);
        const Articles = await getArticleByCategory(req);

        res.status(HttpStatus.OK.code)
            .send(new response(HttpStatus.OK.code, HttpStatus.OK.status, 'Completed: getArticles Are Found', Articles ));
			
	} catch (error){
        res.status(HttpStatus.NOT_FOUND.code)
            .send(new response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'Error: User Not Found', error ));			
	}
};