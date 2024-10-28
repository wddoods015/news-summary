<h1>A news feed service using the Naver API and Gemini API</h1>

- Created by doy00, wddoods015, hycho1
> https://news-feed-in-the-whale-sidebar.vercel.app

<h2>Feature</h2>

- Using Naver Search API to Retrieve News Data.
- Summarize the news article content into 3 lines using the LLM Gemini API.
- Save through news bookmarks.

<h2>Technology</h2>

<h4>Server Side</h4>

- Python: 3.12.3
- nodejs: 18.19.1
- express: 4.21.1

<h4>Client Side</h4>

- react: 18
- react-redux: 9.1.2
- @reduxjs/toolkit: 2.3.0
- axios: 1.7.7
- nextjs: 14.2.15
- tailwindcss: 3.4.1
- typescript: 5


<h2>Needed but not included in the repository</h2>

- '.env' file for NodeJS (The KEY name must be retained)

- Naver API  NAVER_CLIENT_ID & NAVER_CLIENT_SECRET
> https://developers.naver.com/main/

- GEMINI_API_KEY

> https://aistudio.google.com/app/apikey?hl=ko

* SSL certificate is required for HTTPS communication

- node_module
 > npm install
