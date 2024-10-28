//import article from '../models/articleModel.js';
import dotenv from 'dotenv';
import { exec } from 'child_process';

dotenv.config();

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

// 마이페이지 조회
export const getTrendByQueryString = async (req) => {
	
	try {
		let stdout = await execCommand('python3 src/python/realTimeTrends.py');      
        let returnValue = JSON.parse(stdout.replace(/'/g, '"'));
        return returnValue;
		
	} catch (error) {
		console.log(error);
		throw new Error('Python error');
	}
};