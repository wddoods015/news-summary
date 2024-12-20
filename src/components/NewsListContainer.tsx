// src/components/NewsListContainer.tsx
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  fetchNewsByDate,
  addVisibleNews,
  addLoadCount,
} from "../redux/slice/NewsSlice";
import { store } from "../redux/store";
import NewsList from "./NewsList";

export default function NewsListContainer() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, visibleItems } = useSelector(
    (state: RootState) => state.news
  );

  const loadNewItems = () => {
    const currentLoadCount = store.getState().news.loadCount; // 최신 loadCount 상태 가져오기
    const items = store.getState().news.items;
    const newItems = items.slice(
      currentLoadCount * 10,
      (currentLoadCount + 1) * 10
    );
    if (newItems.length > 0) {
      dispatch(addLoadCount());
      dispatch(addVisibleNews(newItems));
    }
  };

  useEffect(() => {
    dispatch(fetchNewsByDate());
  }, [dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadNewItems();
          }
        });
      },
      { threshold: 1.0 }
    );

    // 감지할 대상 설정
    const scrollEnd = document.getElementById("scrollEnd");
    if (scrollEnd) observer.observe(scrollEnd);

    // 한번에 한번만 동작하게
    return () => {
      if (scrollEnd) observer.unobserve(scrollEnd);
    };
  }, [dispatch, visibleItems]);

  if (loading) return <div className="h-[1000px]">Loading...</div>;
  if (error) return <div className="h-[1000px]">Error: {error}</div>;

  return (
    <div>
      <NewsList items={visibleItems} />
      <div id="scrollEnd">Contents End</div>
    </div>
  );
}
