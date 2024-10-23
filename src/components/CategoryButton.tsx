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
      className={`px-4 py-2 rounded-full transition-colors duration-200 text-sm font-medium
        ${
          isSelected
            ? 'bg-black-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
    >
      {category}
    </button>
  );
};

export default CategoryButton;