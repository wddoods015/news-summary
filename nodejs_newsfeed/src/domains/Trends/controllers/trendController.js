import { getTrendByQueryString } from '../services/trendServices.js';
import response from '../../../class/response.js';
import HttpStatus from '../../../constants/HttpStatus.js';


export const getTrends = async (req,res) => {
	try {
		console.log(`${req.method} ${req.originalUrl}, Called getTrends`);
        const Trends = await getTrendByQueryString(req);
		console.log(Trends);
        res.status(HttpStatus.OK.code)
            .send(new response(HttpStatus.OK.code, HttpStatus.OK.status, 'Completed: getTrends Are Found', Trends ));
			
	} catch (error){
        res.status(HttpStatus.NOT_FOUND.code)
            .send(new response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'Error: Trends Not Found', error ));
	}
};