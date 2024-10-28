import { getArticleSummary } from '../services/funcServices.js';
import response from '../../../class/response.js';
import HttpStatus from '../../../constants/HttpStatus.js';


export const getSummary = async (req,res) => {
	try {
		console.log(`${req.method} ${req.originalUrl}, Called getArticles`);
        const summary = await getArticleSummary(req);

        res.status(HttpStatus.OK.code)
            .send(new response(HttpStatus.OK.code, HttpStatus.OK.status, 'Completed: getArticles Are Found', summary ));
			
	} catch (error){
        res.status(HttpStatus.NOT_FOUND.code)
            .send(new response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'Error: User Not Found', error ));			
	}
};

