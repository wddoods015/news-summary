##A news feed service using the Naver API and Gemini API
- Created by doy00, wddoods015, hycho1
- Link: news-feed-in-the-whale-sidebar.vercel.app

##Feature
1. Using Naver Search API to Retrieve News Data.
2. Summarize the news article content into 3 lines using the LLM Gemini API.
3. Save through news bookmarks.

##Technology
 - Server Side
Python: 3.12.3
nodejs: 18.19.1
express: 4.21.1

 - Client Side
react: 18
react-redux: 9.1.2
@reduxjs/toolkit: 2.3.0
axios: 1.7.7
nextjs: 14.2.15
tailwindcss: 3.4.1
typescript: 5


##Needed but not included in the repository
- '.env' file for NodeJS (The KEY name must be retained)
 > Naver API  NAVER_CLIENT_ID & NAVER_CLIENT_SECRET
Link: https://developers.naver.com/main/
 > GEMINI_API_KEY
Link: https://aistudio.google.com/app/apikey?hl=ko

* SSL certificate is required for HTTPS communication

- node_module
 > npm install