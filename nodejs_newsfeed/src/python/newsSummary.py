import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qs
import sys 

# 네이버 링크를 파라미터로 받는 함수
def crawl_naver_link(naver_url):
    # URL 파싱
    parsed_url = urlparse(naver_url)
    query_params = parse_qs(parsed_url.query)

    # 네이버 기사 본문 크롤링
    response = requests.get(naver_url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        content = soup.select_one('div#newsct_article')
        if content:
            print(content.get_text(strip=True))
        else:
            print("페이지를 불러오는데 실패했습니다.")
    else:
        print("페이지를 불러오는데 실패했습니다.")

print('sys.argv[1]',sys.argv[1])


print(crawl_naver_link(sys.argv[1]));