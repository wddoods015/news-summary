'use client'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchTrends } from '@/redux/slice/TrendSlice';

const SearchModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { trends, isLoading, error, isModalOpen } = useSelector(
    (state: RootState) => state.trends
  );
  console.log(trends)

  useEffect(() => {
    dispatch(fetchTrends());
    
  }, []);

  // if (!isModalOpen) return null;

  return (
    <div>
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-500 mb-2">실시간 트렌드</h3>
          {isLoading ? (
            <div className="text-center py-4">로딩중...</div>
          ) : error ? (
            <div className="text-center text-red-500 py-4">{error}</div>
          ) : (
            <ul className="space-y-2">
              {trends.map((trend, index) => (
                <li 
                  key={index}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <span className="text-sm text-gray-700">{trend}</span>
                </li>
              ))}
            </ul>
          )
          }
        </div>
    </div>
  );
};

export default SearchModal;