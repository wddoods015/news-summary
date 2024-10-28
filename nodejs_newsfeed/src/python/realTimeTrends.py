from pytrends.request import TrendReq

# pytrends 객체 생성
pytrends = TrendReq(hl='ko', tz=540)

trending_searches_df = pytrends.trending_searches(pn="south_korea")

# 결과 출력
trending_searches = trending_searches_df[0].tolist()  # DataFrame을 리스트로 변환

print(trending_searches);