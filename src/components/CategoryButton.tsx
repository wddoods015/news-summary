import React from 'react';

interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 h-10 min-w-[50px] flex items-center justify-center rounded-full transition-colors duration-200 text-sm font-medium whitespace-nowrap overflow-hidden flex-shrink-0
        ${
          isSelected
            ? 'bg-black text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
    >
      {category}
    </button>
  );
};

export default CategoryButton;