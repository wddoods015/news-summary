//import article from '../models/articleModel.js';
import dotenv from 'dotenv';

dotenv.config();


export const getArticleByKeyword = async (req) => {
		
	const client_id = process.env.NAVER_CLIENT_ID;
	const client_secret = process.env.NAVER_CLIENT_SECRET;
		
	try {
		
      console.log("INPUT PARAMETER :: ", req.params.keyword);
	  console.log("client_id :: ", client_id);
	  console.log("client_secret :: ", client_secret);

	  const response = await fetch('https://openapi.naver.com/v1/search/news.json?display=100&query=' + encodeURI(req.params.keyword),
	  {  
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
      });
	  const jsonData = await response.json();
	
	  jsonData.items.forEach(item => {
		  const pubDate = new Date(item.pubDate);
		  const year = pubDate.getFullYear();
		  const month = String(pubDate.getMonth() + 1).padStart(2, '0');
		  const day = String(pubDate.getDate()).padStart(2, '0');
		  const hours = String(pubDate.getHours()).padStart(2, '0');
		  const minutes = String(pubDate.getMinutes()).padStart(2, '0');

		  item.pubDate = `${year}.${month}.${day}. ${hours}:${minutes}`;
		});
		
	  return jsonData;

	} catch (error) {
		console.log(error);
		throw new Error('Article not found');
	}
};

export const getArticleHeadLine = async (req) => {
		
	const client_id = process.env.NAVER_CLIENT_ID;
	const client_secret = process.env.NAVER_CLIENT_SECRET;
		
	try {
	
	  const date = new Date();
	  const options = { month: 'long', day: 'numeric' };
	  const formattedDate = date.toLocaleDateString('ko-KR', options);

	
//	  const headline_keyword = `\"헤드라인\" -헤드라인제주`;
	  const headline_keyword = `\"헤드라인\"`;
	  console.log(headline_keyword);

	  const response = await fetch('https://openapi.naver.com/v1/search/news.json?sort=sim&display=100&query=' + encodeURI(headline_keyword),
	  {  
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
      });
	  const jsonData = await response.json();
	
	  let articleOrderArraybyTime = jsonData;
	
		const today = new Date();
		const todayStr = today.toISOString().split('T')[0]; // "2024-10-23"

		// 오늘 날짜만 필터링
		let todayArticles = articleOrderArraybyTime.items.filter(item => {
		  const pubDateStr = new Date(item.pubDate).toISOString().split('T')[0];
		  return pubDateStr === todayStr
		});
		
		todayArticles.forEach(item => {
		  const pubDate = new Date(item.pubDate);
		  const year = pubDate.getFullYear();
		  const month = String(pubDate.getMonth() + 1).padStart(2, '0');
		  const day = String(pubDate.getDate()).padStart(2, '0');
		  const hours = String(pubDate.getHours()).padStart(2, '0');
		  const minutes = String(pubDate.getMinutes()).padStart(2, '0');

		  item.pubDate = `${year}.${month}.${day}. ${hours}:${minutes}`;
		});
	
	  return todayArticles;

	} catch (error) {
		console.log(error);
		throw new Error('Article not found');
	}
};

export const getArticleByCategory = async (req) => {
		
	const client_id = process.env.NAVER_CLIENT_ID;
	const client_secret = process.env.NAVER_CLIENT_SECRET;
		
	try {
		
		console.log("INPUT PARAMETER :: ", req.params.keyword);
		  
		// 검색어가 많아지면 정확한 결과를 얻기가 힘듦, 카테고리에 대해서 다양한 결과를 얻으려면 비슷한 종류의 검색어로 다 회 요청 처리가 필요함.
		const categoryList = [
			{'정치': ['선거', '정치적', '정부', '대선', '국회']},
			{'경제': ['주식', '금리', '실업률', '경제 성장', '인플레이션', '기업']},
			{'사회': ['복지', '교육', '고령화']},
			{'생활문화': ['트렌드', '여행', '음식']},
			{'IT과학': ['인공지능', '사이버 보안', '우주 탐사', '클라우드', '자율주행차', '로봇']},
			{'세계': ['국제', '분쟁', '재해', '난민', '기후', '테러']}			
		];
		
		const getKeywordsAsString = (category) => {
			const categoryItem = categoryList.find(item => item[category]);
			if (categoryItem) {
				return categoryItem[category].join(' ');
			}
			return '';
		};

		const mergedKeywords = getKeywordsAsString(req.params.keyword);

		console.log("mergedKeywords :: ", mergedKeywords);

		const response = await fetch('https://openapi.naver.com/v1/search/news.json?display=100&query=' + encodeURI(mergedKeywords),
		{  
		headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
		});
		const jsonData = await response.json();
	
		jsonData.items.forEach(item => {
		  const pubDate = new Date(item.pubDate);
		  const year = pubDate.getFullYear();
		  const month = String(pubDate.getMonth() + 1).padStart(2, '0');
		  const day = String(pubDate.getDate()).padStart(2, '0');
		  const hours = String(pubDate.getHours()).padStart(2, '0');
		  const minutes = String(pubDate.getMinutes()).padStart(2, '0');

		  item.pubDate = `${year}.${month}.${day}. ${hours}:${minutes}`;
		});

		return jsonData;

	} catch (error) {
		console.log(error);
		throw new Error('Article not found');
	}
};

