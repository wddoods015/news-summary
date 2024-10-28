//import article from '../models/articleModel.js';
import dotenv from 'dotenv';
import { exec } from 'child_process';
import gemini_run from '../../../LLM/gemini_run.js';


function execCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error); // 에러 발생 시 reject 호출
                return;
            }
            resolve(stdout); // 성공 시 stdout 반환
        });
    });
}

dotenv.config();


export const getArticleSummary = async (req) => {
		
	const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
			
	try {
		
		console.log("INPUT PARAMETER :: ", req.body.link);
		console.log("GEMINI_API_KEY :: ", GEMINI_API_KEY);
		
		const crawlingUrl = '\"'+ req.body.link + '\"'
		const articleContext = await execCommand(`python3 src/python/newsSummary.py ${crawlingUrl}`);      

		const request_prompt = '\n 기사 내용이고 본문만 이용해서 요약본만 작성해봐 3줄 요약해';
		const result = await gemini_run(articleContext + request_prompt);
		
		console.log('기사 원문 ::: ', articleContext);
		console.log('기사 요약 ::: ', result);
		
		return result;

	} catch (error) {
		console.log(error);
		throw new Error('Article not found');
	}
};